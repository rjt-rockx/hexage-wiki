import forts from './forts.json'

export default {
  paths() {
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
          forts
            .map((fort) => `| [${fort.name}](/redcon/forts/${fort.slug}) | ${fort.description} | ${fort.progress}% |`)
            .join('\n')
        ].join('\n')
      },
      ...forts.map((fort, index) => {
        const prev = forts.at(index - 1)!
        const next = forts.at(index + 1 === forts.length ? 0 : index + 1)!
        const enemy = forts.find((enemy) => enemy.progress === fort.progress)!

        type MetaTags = [string, Record<string, string>]

        const metaTags: MetaTags[] = []

        if (fort.name) {
          metaTags.push(['meta', { property: 'og:title', content: fort.name }])
          metaTags.push(['meta', { name: 'twitter:title', content: fort.name }])
        }

        const combinedDescription = `${fort.description}\n${fort.premium ? 'Unlocked by premium' : 'Available for free'} at war progress ${fort.progress}% by defeating enemy ${enemy.name}.`

        if (fort.description) {
          metaTags.push(['meta', { property: 'og:description', content: combinedDescription }])
          metaTags.push(['meta', { name: 'twitter:description', content: combinedDescription }])
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
          '## About',
          '',
          `${fort.description}`,
          '',
          `${fort.premium ? 'Unlocked by premium' : 'Available for free'} at war progress ${fort.progress}% by defeating enemy [${enemy.name}](/redcon/locations/enemy/${enemy.slug}).`,
          '',
          '## Layouts',
          '',
          ...fort.layouts
            .map((layout) => {
              return [
                `### ${layout.layout}`,
                '',
                `![${layout.layout}](${layout.imageUrl})`,
                '',
                layout.premium ? 'Unlocked by premium.' : 'Available for free.',
                '',
                '#### Stats',
                '',
                '| Hitpoints | Power | Ammunition | Soldiers |',
                '| --------- | ----- | ---------- | -------- |',
                `| ${layout.hitpoints} | +${layout.power} | +${layout.ammunition} | ${layout.soldiers} |`,
                '',
                '#### Slots',
                '',
                '| Weapon Slots | Utility Slots | Multi Slots | Defense Slots |',
                '| ------------ | ------------- | ---------- | ------------- |',
                `| ${layout.weapon_slots} | ${layout.utility_slots} | ${layout.multi_slots} | ${layout.defense_slots} |`,
                ''
              ]
            })
            .flat()
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
