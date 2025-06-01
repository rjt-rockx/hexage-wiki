import utilities from './utilities.json'
import { createMarkdownRenderer } from 'vitepress'
const renderer = await createMarkdownRenderer('', { breaks: true })

type Stats = {
  hitpoints: string
  power: string
  ammunition: string
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
    return utilities.map((utility, index) => {
      const len = utilities.length
      const prev = utilities[(index - 1 + len) % len]
      const next = utilities[(index + 1) % len]
      const descriptions = fixDescription(utility.description)
      const tiers = utility.tier_name.split('\n').map((t) => t.trim())
      const stats: Stats = {
        hitpoints: String(utility.hitpoints),
        power: String(utility.power),
        ammunition: String(utility.ammunition)
      }
      const upgrade_details = {
        purchase_limit: utility.purchase_limit,
        purchase_cost: utility.purchase_cost,
        upgrade_1_cost: utility.upgrade_1_cost,
        upgrade_2_cost: utility.upgrade_2_cost
      }
      const newStats = fixStats(stats, tiers.length)
      return {
        params: {
          utility: utility.name.toLowerCase().replace(/ /g, '-'),
          value: utility,
          descriptions,
          stats: newStats,
          tiers,
          upgrade_details,
          is_premium: utility.is_premium
        },
        content: [
          '---',
          `title: ${utility.name}`,
          'prev:',
          `  text: ${prev.name}`,
          `  link: /redcon/utilities/${prev.name.toLowerCase().replace(/ /g, '-')}`,
          'next:',
          `  text: ${next.name}`,
          `  link: /redcon/utilities/${next.name.toLowerCase().replace(/ /g, '-')}`,
          '---'
        ].join('\n')
      }
    })
  }
}
