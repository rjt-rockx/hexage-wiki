import forts from './forts.json'

export default {
  paths() {
    const playerForts = forts.filter((fort) => fort.category === 'customizable')
    const enemyForts = forts.filter((fort) => fort.category === 'enemy')
    return [
      {
        params: {
          fort: 'index'
        },
        content: [
          '# Forts',
          '',
          '| Name | Description | Unlocked at |',
          '| ---- | ----------- | ----------- |',
          playerForts
            .map(
              (fort) =>
                `| [${fort.name}](/redcon/forts/${fort.name.toLowerCase().replace(/ /g, '-')}) | ${fort.description} | ${fort.progress}% |`
            )
            .join('\n')
        ].join('\n')
      },
      ...playerForts.map((fort, index) => {
        const prev = playerForts.at(index - 1)!
        const next = playerForts.at(index + 1 === playerForts.length ? 0 : index + 1)!
        const enemy = enemyForts.find((enemy) => enemy.progress === fort.progress)!
        const content = [
          '---',
          'prev:',
          `  text: ${prev.name}`,
          `  link: /redcon/forts/${prev.name.toLowerCase().replace(/ /g, '-')}`,
          'next:',
          `  text: ${next.name}`,
          `  link: /redcon/forts/${next.name.toLowerCase().replace(/ /g, '-')}`,
          '---',
          '',
          `# ${fort.name}`,
          '',
          '## Description',
          '',
          `${fort.description}`,
          '',
          '## About',
          '',
          `Unlocked at war progress ${fort.progress}% by defeating [${enemy.name}](/redcon/locations/enemy/${enemy.name.toLowerCase().replace(/ /g, '-')}).`,
          ''
        ]
        return {
          params: {
            fort: fort.name.toLowerCase().replace(/ /g, '-')
          },
          content: content.join('\n')
        }
      })
    ]
  }
}
