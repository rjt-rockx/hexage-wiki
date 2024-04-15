import forts from './forts.json'

export default {
  paths() {
    return [
      {
        params: {
          location: 'index'
        },
        content: [
          '# Locations',
          '',
          '## Enemy Locations',
          '| Name | War Progress |',
          '| ---- | ------------ |',
          forts
            .filter((fort) => fort.category === 'enemy')
            .map(
              (fort) =>
                `| [${fort.name}](/redcon/locations/enemy/${fort.name.toLowerCase().replace(/ /g, '-')}) | ${fort.progress}% |`
            )
            .join('\n'),
          '',
          '## Player Locations',
          '',
          '| Name | War Progress |',
          '| ---- | ------------ |',
          forts
            .filter((fort) => fort.category === 'premade')
            .map(
              (fort) =>
                `| [${fort.name}](/redcon/locations/player/${fort.name.toLowerCase().replace(/ /g, '-')}) | ${fort.progress}% |`
            )
            .join('\n')
        ].join('\n')
      }
    ]
  }
}
