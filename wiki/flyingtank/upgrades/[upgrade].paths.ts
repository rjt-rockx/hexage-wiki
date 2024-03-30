import upgradeData from './upgrades.json'
import weaponData from '../weapons/weapons.json'
import bombData from '../bombs/bombs.json'
import specialData from '../specials/specials.json'

const replaceMentions = (text: string) => {
  let newText = text
  const mentionList: Record<string, string[]> = {
    weapons: weaponData.map((weapon) => weapon.name),
    bombs: bombData.map((bomb) => bomb.name),
    upgrades: upgradeData.map((upgrade) => upgrade.name),
    specials: specialData.map((special) => special.name)
  }
  for (const key of Object.keys(mentionList)) {
    for (const value of mentionList[key]) {
      newText = newText.replace(
        new RegExp(value, 'gm'),
        `[${value}](/flyingtank/${key}/${value.toLowerCase().replace(/ /g, '-')})`
      )
    }
  }
  return newText
}

const upgrades = upgradeData.map((upgrade) => {
  return {
    ...upgrade,
    description: replaceMentions(upgrade.description)
  }
})

import { createMarkdownRenderer } from 'vitepress'
const renderer = await createMarkdownRenderer('', { breaks: true })

const resolveDescription = (upgrade: (typeof upgrades)[0], tier: 1 | 2 | 3 = 1) => {
  if (tier < 1 || tier > 3) throw new Error('Invalid tier level')
  const values = upgrade[`upgrade_${tier}_values`]
  if (typeof values === 'undefined') throw new Error('Invalid tier cost or values')
  const splitValues = String(values).split('|')
  let newDescription = upgrade.description
  for (let i = 1; i <= splitValues.length; i++)
    newDescription = newDescription.replace(`{{\$${i}}}`, splitValues[i - 1])
  return renderer.render(newDescription)
}

const resolveAllDescriptions = (upgrade: (typeof upgrades)[0]) => {
  let descriptions: string[] = []
  for (let i = 1; i <= 3; i++) {
    try {
      let description = resolveDescription(upgrade, i as 1 | 2 | 3)
      descriptions.push(description)
    } catch {
      continue
    }
  }
  return descriptions
}

export default {
  paths() {
    return [
      ...upgrades.map((upgrade, index) => {
        const prev = upgrades.at(index - 1)!
        const next = upgrades.at(index + 1 === upgrades.length ? 0 : index + 1)!
        return {
          params: {
            upgrade: upgrade.name.toLowerCase().replace(/ /g, '-'),
            value: upgrade,
            descriptions: resolveAllDescriptions(upgrade)
          },
          content: [
            '---',
            'title: ' + upgrade.name,
            'prev:',
            `  text: ${prev.name}`,
            `  link: /flyingtank/upgrades/${prev.name.toLowerCase().replace(/ /g, '-')}`,
            'next:',
            `  text: ${next.name}`,
            `  link: /flyingtank/upgrades/${next.name.toLowerCase().replace(/ /g, '-')}`,
            '---'
          ].join('\n')
        }
      })
    ]
  }
}
