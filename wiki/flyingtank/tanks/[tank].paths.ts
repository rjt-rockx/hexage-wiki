import tanks from './tanks.json'

export default {
    paths() {
        return [
            {
                params: {
                    tank: 'index'
                },
                content: [
                    '# Tanks',
                    '',
                    '| Name | Unique Power | Obtained by |',
                    '| ---- | ------------ | ----------- |',
                    ...tanks.map(
                        (tank) => `| [${tank.tank_name}](/flyingtank/tanks/${tank.tank_name.toLowerCase().replace(/ /g, '-')}) | ${tank.unique_power} | ${tank.obtain_method === "Mastery" ? `Mastery ([${tank.obtain_mission}](/flyingtank/missions/${tank.obtain_mission.toLowerCase().replace(/ /g, "-")}))` : tank.obtain_method} |`
                    )
                ].join('\n')
            },
            ...tanks.map((tank) => {
                let obtainedBy = "This tank is available in the base game, and can be unlocked by progression.";
                if (tank.obtain_method === "Premium") {
                    obtainedBy = "This tank requires the Deluxe edition purchase on Android/iOS, or the base game on Steam."
                }
                else if (tank.obtain_method === "Mastery") {
                    obtainedBy = `This tank requires 100% mastery of the [${tank.obtain_mission}](/flyingtank/missions/${tank.obtain_mission.toLowerCase().replace(/ /g, "-")}) mission.`
                }
                return {
                    params: {
                        tank: tank.tank_name.toLowerCase().replace(/ /g, '-')
                    },
                    content: [
                        `# ${tank.tank_name}`,
                        '## Description',
                        tank.tank_description,
                        '## Unique Power',
                        tank.unique_power,
                        '## Stats',
                        `**Armor:** ${tank.armor}\n`,
                        `**Speed:** ${tank.speed}\n`,
                        '## Obtaining',
                        obtainedBy,
                    ].join('\n')
                }
            })
        ]
    }
}
