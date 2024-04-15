import forts from '../forts.json'

export default {
  paths() {
    const enemyForts = forts.filter((fort) => fort.category === 'enemy')
    const playerLocations = forts.filter((fort) => fort.category === 'premade')
    return [
      {
        params: {
          location: 'index'
        },
        content: [
          '# Player Forts',
          '',
          '| Name | War Progress |',
          '| ---- | ------------ |',
          playerLocations
            .map(
              (fort) =>
                `| [${fort.name}](/redcon/locations/player/${fort.name.toLowerCase().replace(/ /g, '-')}) | ${fort.progress}% |`
            )
            .join('\n')
        ].join('\n')
      },
      ...playerLocations.map((fort, index) => {
        const prev = playerLocations.at(index - 1)!
        const next = playerLocations.at(index + 1 === playerLocations.length ? 0 : index + 1)!
        const enemyFort = enemyForts.find((enemy) => enemy.progress === fort.progress)!
        const content = [
          '---',
          'prev:',
          `  text: ${prev.name}`,
          `  link: /redcon/locations/player/${prev.name.toLowerCase().replace(/ /g, '-')}`,
          'next:',
          `  text: ${next.name}`,
          `  link: /redcon/locations/player/${next.name.toLowerCase().replace(/ /g, '-')}`,
          '---',
          '',
          `# ${fort.name}`,
          '',
          '## About',
          '',
          `Appears at war progress ${fort.progress}% against [${enemyFort.name}](/redcon/locations/enemy/${enemyFort.name.toLowerCase().replace(/ /g, '-')}).`,
          ''
        ]

        return {
          params: {
            location: fort.name.toLowerCase().replace(/ /g, '-')
          },
          content: content.join('\n')
        }
      })
    ]
  }
}
