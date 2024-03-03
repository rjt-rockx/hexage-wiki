import specials from './specials.json'

import { createMarkdownRenderer } from 'vitepress'
const renderer = await createMarkdownRenderer('', { breaks: true })

const resolveDescription = (special: (typeof specials)[0], upgrade: 1 | 2 | 3 = 1) => {
  if (upgrade < 1 || upgrade > 3) throw new Error('Invalid upgrade level')
  const values = special[`upgrade_${upgrade}_values`]
  if (!values) throw new Error('Invalid upgrade cost or values')
  const splitValues = String(values).split('|')
  let newDescription = special.description
  for (let i = 1; i <= splitValues.length; i++)
    newDescription = newDescription.replace(`{{\$${i}}}`, splitValues[i - 1])
  return renderer.render(newDescription)
}

const resolveAllDescriptions = (special: (typeof specials)[0]) => {
  let descriptions: string[] = []
  for (let i = 1; i <= 3; i++) {
    try {
      let description = resolveDescription(special, i as 1 | 2 | 3)
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
      ...specials.map((special) => {
        return {
          params: {
            special: special.name.toLowerCase().replace(/ /g, '-'),
            value: special,
            descriptions: resolveAllDescriptions(special)
          },
          content: ['---', 'title: ' + special.name, '---'].join('\n')
        }
      })
    ]
  }
}
