import weapons from './weapons.json'
import { resolveDescription } from '../../../utils/resolveDescription'

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
