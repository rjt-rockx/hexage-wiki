import drones from './drones.json'
import { resolveDescription } from '../../../utils/resolveDescription'

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
