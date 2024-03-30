import bombs from './bombs.json'

import { createMarkdownRenderer } from 'vitepress'
const renderer = await createMarkdownRenderer('', { breaks: true })

const resolveDescription = (bomb: (typeof bombs)[0], upgrade: 1 | 2 | 3 = 1) => {
  if (upgrade < 1 || upgrade > 3) throw new Error('Invalid upgrade level')
  const values = bomb[`upgrade_${upgrade}_values`]
  if (typeof values === 'undefined') throw new Error('Invalid upgrade cost or values')
  const splitValues = String(values).split('|')
  let newDescription = bomb.description
  for (let i = 1; i <= splitValues.length; i++)
    newDescription = newDescription.replace(`{{\$${i}}}`, splitValues[i - 1])
  return renderer.render(newDescription)
}

const resolveAllDescriptions = (bomb: (typeof bombs)[0]) => {
  let descriptions: string[] = []
  for (let i = 1; i <= 3; i++) {
    try {
      let description = resolveDescription(bomb, i as 1 | 2 | 3)
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
      ...bombs.map((bomb, index) => {
        const prev = bombs.at(index - 1)!
        const next = bombs.at(index + 1 === bombs.length ? 0 : index + 1)!
        return {
          params: {
            bomb: bomb.name.toLowerCase().replace(/ /g, '-'),
            value: bomb,
            descriptions: resolveAllDescriptions(bomb)
          },
          content: [
            '---',
            'title: ' + bomb.name,
            'prev:',
            `  text: ${prev.name}`,
            `  link: /flyingtank/bombs/${prev.name.toLowerCase().replace(/ /g, '-')}`,
            'next:',
            `  text: ${next.name}`,
            `  link: /flyingtank/bombs/${next.name.toLowerCase().replace(/ /g, '-')}`,
            '---'
          ].join('\n')
        }
      })
    ]
  }
}
