import drones from './drones.json'

import { createMarkdownRenderer } from 'vitepress'
const renderer = await createMarkdownRenderer('', { breaks: true })

const resolveDescription = (drone: (typeof drones)[0], upgrade: 1 | 2 | 3 = 1) => {
  if (upgrade < 1 || upgrade > 3) throw new Error('Invalid upgrade level')
  const values = drone[`upgrade_${upgrade}_values`]
  if (typeof values === 'undefined') throw new Error('Invalid upgrade cost or values')
  const splitValues = String(values).split('|')
  let newDescription = drone.description
  for (let i = 1; i <= splitValues.length; i++)
    newDescription = newDescription.replace(`{{\$${i}}}`, splitValues[i - 1])
  return renderer.render(newDescription)
}

const resolveAllDescriptions = (drone: (typeof drones)[0]) => {
  let descriptions: string[] = []
  for (let i = 1; i <= 3; i++) {
    try {
      let description = resolveDescription(drone, i as 1 | 2 | 3)
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
      ...drones.map((drone, index) => {
        const prev = drones.at(index - 1)!
        const next = drones.at(index + 1 === drones.length ? 0 : index + 1)!
        return {
          params: {
            drone: drone.name.toLowerCase().replace(/ /g, '-'),
            value: drone,
            descriptions: resolveAllDescriptions(drone)
          },
          content: [
            '---',
            'title: ' + drone.name,
            'prev:',
            `  text: ${prev.name}`,
            `  link: /flyingtank/drones/${prev.name.toLowerCase().replace(/ /g, '-')}`,
            'next:',
            `  text: ${next.name}`,
            `  link: /flyingtank/drones/${next.name.toLowerCase().replace(/ /g, '-')}`,
            '---'
          ].join('\n')
        }
      })
    ]
  }
}
