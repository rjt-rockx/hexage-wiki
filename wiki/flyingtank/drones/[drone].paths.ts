import drones from './drones.json'
import { resolveAllDescriptions } from '../../../utils/resolveDescription'

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
