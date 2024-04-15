import forts from '../forts.json'

export default {
  paths() {
    const enemyForts = forts.filter((fort) => fort.category === 'enemy')
    const customizableForts = forts.filter((fort) => fort.category === 'customizable')
    const premadeForts = forts.filter((fort) => fort.category === 'premade')
    return [
      {
        params: {
          location: 'index'
        },
        content: [
          '# Enemy Forts',
          '',
          '| Name | War Progress |',
          '| ---- | ------------ |',
          enemyForts
            .map(
              (fort) =>
                `| [${fort.name}](/redcon/locations/enemy/${fort.name.toLowerCase().replace(/ /g, '-')}) | ${fort.progress}% |`
            )
            .join('\n'),
          ''
        ].join('\n')
      },
      ...enemyForts.map((fort, index) => {
        const prev = enemyForts.at(index - 1)!
        const next = enemyForts.at(index + 1 === enemyForts.length ? 0 : index + 1)!
        const hasPremade = premadeForts.find((premade) => premade.progress === fort.progress)
        const hasCustomizable = customizableForts.find((customizable) => customizable.progress === fort.progress)
        const content = [
          '---',
          'prev:',
          `  text: ${prev.name}`,
          `  link: /redcon/locations/enemy/${prev.name.toLowerCase().replace(/ /g, '-')}`,
          'next:',
          `  text: ${next.name}`,
          `  link: /redcon/locations/enemy/${next.name.toLowerCase().replace(/ /g, '-')}`,
          '---',
          '',
          `# ${fort.name}`,
          '',
          '## About',
          '',
          `Appears at war progress ${fort.progress}%`,
          ''
        ]
        if (hasPremade)
          content.push(
            `Can only be fought with [${hasPremade.name}](/redcon/locations/player/${hasPremade.name.toLowerCase().replace(/ /g, '-')}).`,
            ''
          )
        if (hasCustomizable)
          content.push(
            `Unlocks [${hasCustomizable.name}](/redcon/forts/${hasCustomizable.name.toLowerCase().replace(/ /g, '-')}) after defeating.`,
            ''
          )
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
