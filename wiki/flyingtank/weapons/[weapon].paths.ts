import weapons from './weapons.json'
import { resolveAllDescriptions } from '../../../utils/resolveDescription'

export default {
  paths() {
    return [
      ...weapons.map((weapon, index) => {
        const prev = weapons.at(index - 1)!
        const next = weapons.at(index + 1 === weapons.length ? 0 : index + 1)!
        return {
          params: {
            weapon: weapon.name.toLowerCase().replace(/ /g, '-'),
            value: weapon,
            descriptions: resolveAllDescriptions(weapon)
          },
          content: [
            '---',
            'title: ' + weapon.name,
            'prev:',
            `  text: ${prev.name}`,
            `  link: /flyingtank/weapons/${prev.name.toLowerCase().replace(/ /g, '-')}`,
            'next:',
            `  text: ${next.name}`,
            `  link: /flyingtank/weapons/${next.name.toLowerCase().replace(/ /g, '-')}`,
            '---'
          ].join('\n')
        }
      })
    ]
  }
}
