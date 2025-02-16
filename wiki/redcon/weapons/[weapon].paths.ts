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

export const fixDescription = (description: string) => renderer.render(description).replace(/\n$/gim, '')

export default {
  paths() {
    return weapons.map((weapon, index) => {
      const len = weapons.length
      const prev = weapons[(index - 1 + len) % len]
      const next = weapons[(index + 1) % len]
      const descriptions = fixDescription(weapon.description)
      const tiers = weapon.tier_name.split('\n').map((t) => t.trim())
      const fire_types = weapon.fire_types.split('\n').map((t) => t.trim())
      const stats: Stats = {
        hitpoints: String(weapon.hitpoints),
        power: String(weapon.power),
        ammunition: String(weapon.ammunition),
        damage: String(weapon.damage),
        fire_type_1_ammunition: String(weapon.fire_type_1_ammunition),
        fire_type_2_ammunition: String(weapon.fire_type_2_ammunition),
        fire_type_3_ammunition: String(weapon.fire_type_3_ammunition)
      }
      const tiers_fireTypes = { tiers, fire_types }
      const upgrade_details = {
        purchase_limit: weapon.limit,
        upgrade_1_cost: weapon.upgrade_1_cost,
        upgrade_2_cost: weapon.upgrade_2_cost,
        upgrade_3_cost: weapon.upgrade_3_cost
      }
      const newStats = fixStats(stats, tiers.length)
      return {
        params: {
          weapon: weapon.name.toLowerCase().replace(/ /g, '-'),
          value: weapon,
          descriptions,
          stats: newStats,
          tiers_fireTypes,
          upgrade_details,
          is_premium: weapon.is_premium
        },
        content: [
          '---',
          `title: ${weapon.name}`,
          'prev:',
          `  text: ${prev.name}`,
          `  link: /redcon/weapons/${prev.name.toLowerCase().replace(/ /g, '-')}`,
          'next:',
          `  text: ${next.name}`,
          `  link: /redcon/weapons/${next.name.toLowerCase().replace(/ /g, '-')}`,
          '---'
        ].join('\n')
      }
    })
  }
}
