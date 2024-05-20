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
            .map((fort) => `| [${fort.name}](/redcon/locations/player/${fort.slug}) | ${fort.progress}% |`)
            .join('\n')
        ].join('\n')
      },
      ...playerLocations.map((fort, index) => {
        const prev = playerLocations.at(index - 1)!
        const next = playerLocations.at(index + 1 === playerLocations.length ? 0 : index + 1)!
        const enemyFort = enemyForts.find((enemy) => enemy.progress === fort.progress)!

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
            link: `/redcon/locations/player/${prev.slug}`
          },
          next: {
            text: next.name,
            link: `/redcon/locations/player/${next.slug}`
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
          `Appears at war progress ${fort.progress}% against [${enemyFort.name}](/redcon/locations/enemy/${enemyFort.slug}).`,
          ''
        ]

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
