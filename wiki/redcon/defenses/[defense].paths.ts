import { info } from 'console'
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
        return {
          params: {
            defense: defense.name.toLowerCase().replace(/ /g, '-')
          },
          content: [
            '---',
            'title: ' + defense.name,
            'prev:',
            `  text: ${prev.name}`,
            `  link: /redcon/defenses/${prev.name.toLowerCase().replace(/ /g, '-')}`,
            'next:',
            `  text: ${next.name}`,
            `  link: /redcon/defenses/${next.name.toLowerCase().replace(/ /g, '-')}`,
            '---',
            '',
            `# ${defense.name}`,
            '',
            ...(defense.imageUrl ? [`![${defense.name}](${defense.imageUrl})`, ''] : []),
            '',
            ...(defense.inActionImageUrl ? [`![${defense.name}](${defense.inActionImageUrl})`, ''] : []),
            '',
            '## Stats',
            '| Name | Power | Ammunition | Cost | Purchase Limit |',
            '| ---- | ----- | ---------- | ---- | -------------- |',
            `| ${defense.name} | ${defense.power} | ${defense.ammunition} | ${defense.cost} | ${defense.purchase_limit} |`,
            '',
            `${defense.premium ? 'Unlocked by premium.' : 'Available for free.'}`
          ].join('\n')
        }
      })
    ]
  }
}
