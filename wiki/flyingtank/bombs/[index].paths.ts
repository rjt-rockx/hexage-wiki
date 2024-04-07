import bombs from './bombs.json'
import { resolveDescription } from '../../../utils/resolveDescription'

export default {
  paths() {
    const content = [
      '# Bombs',
      '',
      '| Name | Description |',
      '| ---- | ----------- |',
      ...bombs.map((bomb) => {
        return `| [${bomb.name}](/flyingtank/bombs/${bomb.name.toLowerCase().replace(/ /g, '-')}) | ${resolveDescription(bomb, 1)} |`
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
