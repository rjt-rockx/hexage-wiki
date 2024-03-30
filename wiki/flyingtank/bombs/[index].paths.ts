import bombs from './bombs.json'

import { createMarkdownRenderer } from 'vitepress'
const renderer = await createMarkdownRenderer('')

const resolveDescription = (bomb: (typeof bombs)[0], upgrade: 1 | 2 | 3 = 1) => {
  if (upgrade < 1 || upgrade > 3) throw new Error('Invalid upgrade level')
  const values = bomb[`upgrade_${upgrade}_values`]
  if (typeof values === 'undefined') throw new Error('Invalid upgrade cost or values')
  const splitValues = String(values).split('|')
  let newDescription = bomb.description
  for (let i = 1; i <= splitValues.length; i++)
    newDescription = newDescription.replace(`{{\$${i}}}`, splitValues[i - 1])
  return renderer.render(newDescription).replace(new RegExp('\n$', 'gmi'), '')
}

export default {
  paths() {
    const content = [
      '# Bombs',
      '',
      '| Name | Description |',
      '| ---- | ----------- |',
      ...bombs.map((bomb) => {
        return `| [${bomb.name}](/flyingtank/bombs/${bomb.name.toLowerCase().replace(/ /g, '-')}) | ${resolveDescription(bomb, 1)} |`
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
