import specials from './specials.json'

import { createMarkdownRenderer } from 'vitepress'
const renderer = await createMarkdownRenderer('')

const resolveDescription = (special: (typeof specials)[0], upgrade: 1 | 2 | 3 = 1) => {
  if (upgrade < 1 || upgrade > 3) throw new Error('Invalid upgrade level')
  const values = special[`upgrade_${upgrade}_values`]
  if (!values) throw new Error('Invalid upgrade cost or values')
  const splitValues = String(values).split('|')
  let newDescription = special.description
  for (let i = 1; i <= splitValues.length; i++)
    newDescription = newDescription.replace(`{{\$${i}}}`, splitValues[i - 1])
  return renderer.render(newDescription).replace(new RegExp('\n$', 'gmi'), '')
}

export default {
  paths() {
    const content = [
      '# All Specials',
      '',
      '| Name | Description |',
      '| ---- | ----------- |',
      ...specials.map((special) => {
        return `| [${special.name}](/flyingtank/specials/${special.name.toLowerCase().replace(/ /g, '-')}) | ${resolveDescription(special, 1)} |`
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
