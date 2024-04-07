import specials from './specials.json'
import { resolveDescription } from '../../../utils/resolveDescription'

export default {
  paths() {
    const content = [
      '# Specials',
      '',
      '| Name | Description |',
      '| ---- | ----------- |',
      ...specials.map((special) => {
        return `| [${special.name}](/flyingtank/specials/${special.name.toLowerCase().replace(/ /g, '-')}) | ${resolveDescription(special, 1)} |`
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
