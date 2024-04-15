import achievements from './achievements.json'

export default {
  paths() {
    return [
      {
        params: {
          achievement: 'index'
        },
        content: [
          '---',
          'title: Achievements',
          '---',
          '',
          '# Achievements',
          '',
          '| Name | Description | Credits | Experience | Perk Drop Chance |',
          '| ---- | ----------- | ------- | ---------- | ---------------- |',
          achievements
            .map((achievement) => [
              `| [${achievement.name}](/redcon/achievements/${achievement.name.toLowerCase().replace(/ /g, '-')}) | ${achievement.description} | +${achievement.credits} | +${achievement.experience} | +${achievement.perkDropChance}% |`
            ])
            .join('\n')
        ].join('\n')
      },
      ...achievements.map((achievement, index) => {
        const prev = achievements.at(index - 1)!
        const next = achievements.at(index + 1 === achievements.length ? 0 : index + 1)!
        return {
          params: {
            achievement: achievement.name.toLowerCase().replace(/ /g, '-')
          },
          content: [
            '---',
            'title: ' + achievement.name,
            'prev:',
            `  text: ${prev.name}`,
            `  link: /redcon/achievements/${prev.name.toLowerCase().replace(/ /g, '-')}`,
            'next:',
            `  text: ${next.name}`,
            `  link: /redcon/achievements/${next.name.toLowerCase().replace(/ /g, '-')}`,
            '---',
            '',
            `# ${achievement.name}`,
            '',
            '## Description',
            achievement.description,
            '',
            '## Rewards',
            '',
            '| Credits | Experience | Perk Drop Chance |',
            '| ------- | ---------- | ---------------- |',
            `| +${achievement.credits} | +${achievement.experience} | +${achievement.perkDropChance}% |`,
            ''
          ].join('\n')
        }
      })
    ]
  }
}
