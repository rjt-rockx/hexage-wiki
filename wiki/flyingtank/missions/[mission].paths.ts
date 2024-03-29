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
      ...missions.map((mission) => ({
        params: {
          mission: mission.name.toLowerCase().replace(/ /g, '-') // last-harvest
        },
        content: [
          `# ${mission.name}`,
          mission.description,
          '',
          `**Reward:** ${mission.reward_type === 'Biomass' ? `+${mission.reward} Biomass` : `[${mission.reward}](/flyingtank/tanks/${String(mission.reward).toLowerCase().replace(/ /g, '-')})`}`
        ].join('\n')
      }))
    ]
  }
}
