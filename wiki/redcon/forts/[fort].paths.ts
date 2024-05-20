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
            .map((fort) => `| [${fort.name}](/redcon/forts/${fort.slug}) | ${fort.description} | ${fort.progress}% |`)
            .join('\n')
        ].join('\n')
      },
      ...playerForts.map((fort, index) => {
        const prev = playerForts.at(index - 1)!
        const next = playerForts.at(index + 1 === playerForts.length ? 0 : index + 1)!
        const enemy = enemyForts.find((enemy) => enemy.progress === fort.progress)!

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
            link: `/redcon/forts/${prev.slug}`
          },
          next: {
            text: next.name,
            link: `/redcon/forts/${next.slug}`
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
          '## Description',
          '',
          `${fort.description}`,
          '',
          '## About',
          '',
          `Unlocked at war progress ${fort.progress}% by defeating [${enemy.name}](/redcon/locations/enemy/${enemy.slug}).`,
          ''
        ]
        return {
          params: {
            fort: fort.slug
          },
          content: content.join('\n')
        }
      })
    ]
  }
}
