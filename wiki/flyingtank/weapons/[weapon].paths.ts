import weapons from './weapons.json'

import { createMarkdownRenderer } from 'vitepress'
const renderer = await createMarkdownRenderer('', { breaks: true })

const resolveDescription = (weapon: (typeof weapons)[0], upgrade: 1 | 2 | 3 = 1) => {
  if (upgrade < 1 || upgrade > 3) throw new Error('Invalid upgrade level')
  const values = weapon[`upgrade_${upgrade}_values`]
  if (typeof values === 'undefined') throw new Error('Invalid upgrade cost or values')
  const splitValues = String(values).split('|')
  let newDescription = weapon.description
  for (let i = 1; i <= splitValues.length; i++)
    newDescription = newDescription.replace(`{{\$${i}}}`, splitValues[i - 1])
  return renderer.render(newDescription)
}

const resolveAllDescriptions = (weapon: (typeof weapons)[0]) => {
  let descriptions: string[] = []
  for (let i = 1; i <= 3; i++) {
    try {
      let description = resolveDescription(weapon, i as 1 | 2 | 3)
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
      ...weapons.map((weapon, index) => {
        const prev = weapons.at(index - 1)!
        const next = weapons.at(index + 1 === weapons.length ? 0 : index + 1)!
        return {
          params: {
            weapon: weapon.name.toLowerCase().replace(/ /g, '-'),
            value: weapon,
            descriptions: resolveAllDescriptions(weapon)
          },
          content: [
            '---',
            'title: ' + weapon.name,
            'prev:',
            `  text: ${prev.name}`,
            `  link: /flyingtank/weapons/${prev.name.toLowerCase().replace(/ /g, '-')}`,
            'next:',
            `  text: ${next.name}`,
            `  link: /flyingtank/weapons/${next.name.toLowerCase().replace(/ /g, '-')}`,
            '---'
          ].join('\n')
        }
      })
    ]
  }
}
