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
            .map((fort) => `| [${fort.name}](/redcon/locations/enemy/${fort.slug}) | ${fort.progress}% |`)
            .join('\n'),
          ''
        ].join('\n')
      },
      ...enemyForts.map((fort, index) => {
        const prev = enemyForts.at(index - 1)!
        const next = enemyForts.at(index + 1 === enemyForts.length ? 0 : index + 1)!
        const hasPremade = premadeForts.find((premade) => premade.progress === fort.progress)
        const hasCustomizable = customizableForts.find((customizable) => customizable.progress === fort.progress)

        type MetaTags = [string, Record<string, string>]

        const metaTags: MetaTags[] = []

        if (fort.name) {
          metaTags.push(['meta', { property: 'og:title', content: fort.name }])
          metaTags.push(['meta', { name: 'twitter:title', content: fort.name }])
        }

        if (fort.description) {
          metaTags.push(['meta', { property: 'og:description', content: fort.description }])
          metaTags.push(['meta', { name: 'twitter:description', content: fort.description }])
        }

        if (fort.imageUrl) {
          metaTags.push(['meta', { name: 'twitter:card', content: 'summary_large_image' }])
          metaTags.push(['meta', { property: 'og:image', content: fort.imageUrl }])
          metaTags.push(['meta', { name: 'twitter:image', content: fort.imageUrl }])
        }

        const frontMatter = {
          prev: {
            text: prev.name,
            link: `/redcon/locations/enemy/${prev.slug}`
          },
          next: {
            text: next.name,
            link: `/redcon/locations/enemy/${next.slug}`
          },
          head: metaTags
        }

        const content = [
          '---',
          JSON.stringify(frontMatter, null, 2),
          '---',
          '',
          `# ${fort.name}`,
          '',
          ...(fort.imageUrl ? [`![${fort.name}](${fort.imageUrl})`, ''] : []),
          '## About',
          '',
          `Appears at war progress ${fort.progress}%`,
          ''
        ]
        if (hasPremade)
          content.push(`Can only be fought with [${hasPremade.name}](/redcon/locations/player/${hasPremade.slug}).`, '')
        if (hasCustomizable)
          content.push(`Unlocks [${hasCustomizable.name}](/redcon/forts/${hasCustomizable.slug}) after defeating.`, '')
        return {
          params: {
            location: fort.slug
          },
          content: content.join('\n')
        }
      })
    ]
  }
}
