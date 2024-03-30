import missions from './missions.json'

export default {
  paths() {
    return [
      {
        params: {
          mission: 'index'
        },
        content: [
          '# Missions',
          '',
          '| Name | Description | Reward |',
          '| ---- | ----------- | ------ |',
          ...missions.map(
            (mission) =>
              `| [${mission.name}](/flyingtank/missions/${mission.name.toLowerCase().replace(/ /g, '-')}) | ${mission.description} | ${mission.reward_type === 'Biomass' ? `${mission.reward} Biomass` : `[${mission.reward}](/flyingtank/tanks/${String(mission.reward).toLowerCase().replace(/ /g, '-')})`} |`
          )
        ].join('\n')
      },
      ...missions.map((mission, index) => {
        const prev = missions.at(index - 1)!
        const next = missions.at(index + 1 === missions.length ? 0 : index + 1)!
        return {
          params: {
            mission: mission.name.toLowerCase().replace(/ /g, '-') // last-harvest
          },
          content: [
            '---',
            'title: ' + mission.name,
            'prev:',
            `  text: ${prev.name}`,
            `  link: /flyingtank/missions/${prev.name.toLowerCase().replace(/ /g, '-')}`,
            'next:',
            `  text: ${next.name}`,
            `  link: /flyingtank/missions/${next.name.toLowerCase().replace(/ /g, '-')}`,
            '---',
            `# ${mission.name}`,
            mission.description,
            '',
            `Mission number: **${index + 1}** of **${missions.length}**`,
            '',
            `**Reward:** ${mission.reward_type === 'Biomass' ? `+${mission.reward} Biomass` : `[${mission.reward}](/flyingtank/tanks/${String(mission.reward).toLowerCase().replace(/ /g, '-')})`}`
          ].join('\n')
        }
      })
    ]
  }
}
