import weapons from './weapons.json'

export default {
  paths() {
    const content = [
      '# Weapons',
      '',
      '| Name |',
      '| ---- |',
      ...weapons.map((weapon) => {
        return `| [${weapon.name}](/redcon/weapons/${weapon.name.toLowerCase().replace(/ /g, '-')}) |`
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
