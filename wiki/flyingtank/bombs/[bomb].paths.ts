import bombs from './bombs.json'
import { resolveAllDescriptions } from '../../../utils/resolveDescription'

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
