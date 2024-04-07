import specials from './specials.json'
import { resolveAllDescriptions } from '../../../utils/resolveDescription'

export default {
  paths() {
    return [
      ...specials.map((special, index) => {
        const prev = specials.at(index - 1)!
        const next = specials.at(index + 1 === specials.length ? 0 : index + 1)!
        return {
          params: {
            special: special.name.toLowerCase().replace(/ /g, '-'),
            value: special,
            descriptions: resolveAllDescriptions(special)
          },
          content: [
            '---',
            'title: ' + special.name,
            'prev:',
            `  text: ${prev.name}`,
            `  link: /flyingtank/specials/${prev.name.toLowerCase().replace(/ /g, '-')}`,
            'next:',
            `  text: ${next.name}`,
            `  link: /flyingtank/specials/${next.name.toLowerCase().replace(/ /g, '-')}`,
            '---'
          ].join('\n')
        }
      })
    ]
  }
}
