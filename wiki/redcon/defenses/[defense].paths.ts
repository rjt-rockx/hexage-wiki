import defenses from './defenses.json'

export default {
  paths() {
    return [
      {
        params: {
          defense: 'index'
        },
        content: [
          '# Defenses',
          '',
          '| Name | Cost | Purchase Limit |',
          '| ---- | ---- | -------------- |',
          defenses
            .map((defense) => [
              `| [${defense.name}](/redcon/defenses/${defense.name.toLowerCase().replace(/ /g, '-')}) | ${defense.cost} | ${defense.purchase_limit} |`
            ])
            .join('\n')
        ].join('\n')
      },
      ...defenses.map((defense, index) => {
        const prev = defenses.at(index - 1)!
        const next = defenses.at(index + 1 === defenses.length ? 0 : index + 1)!
        type MetaTags = [string, Record<string, string>]

        const metaTags: MetaTags[] = []

        if (defense.name) {
          metaTags.push(['meta', { property: 'og:title', content: defense.name }])
          metaTags.push(['meta', { name: 'twitter:title', content: defense.name }])
        }

        if (defense.description) {
          metaTags.push(['meta', { property: 'og:description', content: defense.description }])
          metaTags.push(['meta', { name: 'twitter:description', content: defense.description }])
        }

        if (defense.imageUrl) {
          metaTags.push(['meta', { name: 'twitter:card', content: 'summary_large_image' }])
          metaTags.push(['meta', { property: 'og:image', content: defense.imageUrl }])
          metaTags.push(['meta', { name: 'twitter:image', content: defense.imageUrl }])
        }

        const frontMatter = {
          prev: {
            text: prev.name,
            link: `/redcon/defenses/${prev.name.toLowerCase().replace(/ /g, '-')}`
          },
          next: {
            text: next.name,
            link: `/redcon/defenses/${next.name.toLowerCase().replace(/ /g, '-')}`
          },
          head: metaTags
        }
        return {
          params: {
            defense: defense.name.toLowerCase().replace(/ /g, '-')
          },
          content: [
            '---',
            JSON.stringify(frontMatter, null, 2),
            '---',
            '',
            `# ${defense.name}`,
            '',
            ...(defense.imageUrl ? [`![${defense.name}](${defense.imageUrl})`, ''] : []),
            '',
            '## Description',
            defense.description.split('\n').join('<br>'),
            '',
            defense.premium ? 'Unlocked by premium.' : 'Available for free.',
            '',
            '## Stats',
            '| Power | Ammunition | Cost | Purchase Limit |',
            '| ----- | ---------- | ---- | -------------- |',
            `| ${defense.power} | ${defense.ammunition} | ${defense.cost} | ${defense.purchase_limit} |`,
            '',
            '## In action',
            '',
            ...(defense.inActionImageUrl ? [`![${defense.name}](${defense.inActionImageUrl})`, ''] : []),
            '',
            ...(defense.inAction2ImageUrl ? [`![${defense.name}](${defense.inAction2ImageUrl})`, ''] : []),
            ''
          ].join('\n')
        }
      })
    ]
  }
}
