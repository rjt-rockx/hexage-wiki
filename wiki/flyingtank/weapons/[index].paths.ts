import weapons from './weapons.json'

import { createMarkdownRenderer } from 'vitepress'
const renderer = await createMarkdownRenderer('')

const resolveDescription = (weapon: (typeof weapons)[0], upgrade: 1 | 2 | 3 = 1) => {
  if (upgrade < 1 || upgrade > 3) throw new Error('Invalid upgrade level')
  const values = weapon[`upgrade_${upgrade}_values`]
  if (!values) throw new Error('Invalid upgrade cost or values')
  const splitValues = String(values).split('|')
  let newDescription = weapon.description
  for (let i = 1; i <= splitValues.length; i++)
    newDescription = newDescription.replace(`{{\$${i}}}`, splitValues[i - 1])
  return renderer.render(newDescription).replace(new RegExp('\n$', 'gmi'), '')
}

export default {
  paths() {
    const content = [
      '# Weapons',
      '',
      '| Name | Description |',
      '| ---- | ----------- |',
      ...weapons.map((weapon) => {
        return `| [${weapon.name}](/flyingtank/weapons/${weapon.name.toLowerCase().replace(/ /g, '-')}) | ${resolveDescription(weapon, 1)} |`
      })
    ].join('\n')
    return [
      {
        params: {
          index: 'index'
        },
        content
      }
    ]
  }
}
