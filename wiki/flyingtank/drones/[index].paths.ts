import drones from './drones.json'

import { createMarkdownRenderer } from 'vitepress'
const renderer = await createMarkdownRenderer('')

const resolveDescription = (drone: (typeof drones)[0], upgrade: 1 | 2 | 3 = 1) => {
  if (upgrade < 1 || upgrade > 3) throw new Error('Invalid upgrade level')
  const values = drone[`upgrade_${upgrade}_values`]
  if (typeof values === 'undefined') throw new Error('Invalid upgrade cost or values')
  const splitValues = String(values).split('|')
  let newDescription = drone.description
  for (let i = 1; i <= splitValues.length; i++)
    newDescription = newDescription.replace(`{{\$${i}}}`, splitValues[i - 1])
  return renderer.render(newDescription).replace(new RegExp('\n$', 'gmi'), '')
}

export default {
  paths() {
    const content = [
      '# Drones',
      '',
      '| Name | Description |',
      '| ---- | ----------- |',
      ...drones.map((drone) => {
        return `| [${drone.name}](/flyingtank/drones/${drone.name.toLowerCase().replace(/ /g, '-')}) | ${resolveDescription(drone, 1)} |`
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
