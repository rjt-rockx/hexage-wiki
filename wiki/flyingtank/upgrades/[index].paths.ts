import upgrades from './upgrades.json'

import { createMarkdownRenderer } from 'vitepress'
const renderer = await createMarkdownRenderer('')

const resolveDescription = (upgrade: (typeof upgrades)[0], tier: 1 | 2 | 3 = 1) => {
  if (tier < 1 || tier > 3) throw new Error('Invalid tier level')
  const values = upgrade[`upgrade_${tier}_values`]
  if (typeof values === 'undefined') throw new Error('Invalid tier cost or values')
  const splitValues = String(values).split('|')
  let newDescription = upgrade.description
  for (let i = 1; i <= splitValues.length; i++)
    newDescription = newDescription.replace(`{{\$${i}}}`, splitValues[i - 1])
  return renderer.render(newDescription).replace(new RegExp('\n$', 'gmi'), '')
}

export default {
  paths() {
    const content = [
      '# Upgrades',
      '',
      '| Name | Description |',
      '| ---- | ----------- |',
      ...upgrades.map((upgrade) => {
        return `| [${upgrade.name}](/flyingtank/upgrades/${upgrade.name.toLowerCase().replace(/ /g, '-')}) | ${resolveDescription(upgrade, 1)} |`
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
