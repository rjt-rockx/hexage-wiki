import utilities from './utilities.json'

export default {
  paths() {
    const content = [
      '# Utilities',
      '',
      '| Name |',
      '| ---- |',
      ...utilities.map((utility) => {
        return `| [${utility.name}](/redcon/utilities/${utility.name.toLowerCase().replace(/ /g, '-')}) |`
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
