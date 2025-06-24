import weapons from './weapons.json'
import { createMarkdownRenderer } from 'vitepress'

const renderer = await createMarkdownRenderer('', { breaks: true })

type Stats = {
  hitpoints: string
  power: string
  ammunition: string
  damage: string
  fire_type_1_ammunition: string
  fire_type_2_ammunition: string
  fire_type_3_ammunition: string
}

export const fixStats = (stats: Stats, tierLength: number) => {
  const newStats: { [key: string]: string[] } = {}

  for (const [key, value] of Object.entries(stats)) {
    const statArray = value.trim()
      ? value
          .split('|')
          .map((s) => s.trim())
          .filter(Boolean)
      : []
    newStats[key] = statArray.length === 1 ? Array(tierLength).fill(statArray[0]) : statArray
  }

  return newStats
}

export const fixDescription = (description: string, changing_desc: string, tierLength: number) => {
  const descriptions = description
    .split('\n\n')
    .map((part) => part.trim())
    .filter(Boolean)

  const splitValues = String(changing_desc)
    .split('|')
    .map((v) => v.trim())
    .filter(Boolean)

  const results: string[] = []

  for (let i = 0; i < tierLength; i++) {
    let base = descriptions[0]

    if (splitValues.length > 0 && splitValues[i] !== undefined) {
      base = base.replaceAll('{{$1}}', splitValues[i])
    }

    if (i + 1 < descriptions.length) {
      results.push(base.concat('\n').concat(descriptions[i + 1]))
    } else {
      results.push(base)
    }
  }

  return results.map((desc) => renderer.render(desc).replace(/\n$/gim, ''))
}

const createSlug = (name: string) => name.toLowerCase().replace(/ /g, '-')

export default {
  paths() {
    return weapons.map((weapon, index) => {
      const len = weapons.length
      const prev = weapons[(index - 1 + len) % len]
      const next = weapons[(index + 1) % len]

      const tiers = weapon.tier_name.split('\n').map((t) => t.trim())
      const fire_types = weapon.fire_types.trim() ? weapon.fire_types.split('\n').map((t) => t.trim()) : []

      const descriptions = fixDescription(weapon.description, weapon.changing_desc, tiers.length)

      const stats: Stats = {
        hitpoints: String(weapon.hitpoints),
        power: String(weapon.power),
        ammunition: String(weapon.ammunition),
        damage: String(weapon.damage),
        fire_type_1_ammunition: String(weapon.fire_type_1_ammunition),
        fire_type_2_ammunition: String(weapon.fire_type_2_ammunition),
        fire_type_3_ammunition: String(weapon.fire_type_3_ammunition)
      }

      return {
        params: {
          weapon: createSlug(weapon.name),
          value: weapon,
          descriptions,
          stats: fixStats(stats, tiers.length),
          tiers_fireTypes: { tiers, fire_types },
          upgrade_details: {
            purchase_limit: weapon.limit,
            upgrade_1_cost: weapon.upgrade_1_cost,
            upgrade_2_cost: weapon.upgrade_2_cost,
            upgrade_3_cost: weapon.upgrade_3_cost
          },
          is_premium: weapon.is_premium
        },
        content: [
          '---',
          `title: ${weapon.name}`,
          'prev:',
          `  text: ${prev.name}`,
          `  link: /redcon/weapons/${createSlug(prev.name)}`,
          'next:',
          `  text: ${next.name}`,
          `  link: /redcon/weapons/${createSlug(next.name)}`,
          '---'
        ].join('\n')
      }
    })
  }
}
