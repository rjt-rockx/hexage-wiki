import tankData from './tanks.json'
import weaponData from '../weapons/weapons.json'
import upgradeData from '../upgrades/upgrades.json'
import bombData from '../bombs/bombs.json'
import specialData from '../specials/specials.json'
import { describe } from 'node:test'

const replaceMentions = (text: string) => {
  let newText = text
  const mentionList: Record<string, string[]> = {
    weapons: weaponData.map((weapon) => weapon.name),
    upgrades: upgradeData.map((upgrade) => upgrade.name),
    bombs: bombData.map((bomb) => bomb.name),
    specials: specialData.map((special) => special.name)
  }
  for (const key of Object.keys(mentionList)) {
    for (const value of mentionList[key]) {
      newText = newText.replace(
        new RegExp(value, 'gm'),
        `[${value}](/flyingtank/${key}/${value.toLowerCase().replace(/ /g, '-')})`
      )
    }
  }
  return newText
}

const tanks = tankData.map((tank) => {
  return {
    ...tank,
    tank_description: replaceMentions(tank.tank_description),
    unique_power: replaceMentions(tank.unique_power)
  }
})

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
            (tank) =>
              `| [${tank.name}](/flyingtank/tanks/${tank.name.toLowerCase().replace(/ /g, '-')}) | ${tank.unique_power} | ${tank.obtain_method === 'Mastery' ? `Mastery ([${tank.obtain_mission}](/flyingtank/missions/${tank.obtain_mission.toLowerCase().replace(/ /g, '-')}))` : tank.obtain_method} |`
          )
        ].join('\n')
      },
      ...tanks.map((tank, index) => {
        const prev = tanks.at(index - 1)!
        const next = tanks.at(index + 1 === tanks.length ? 0 : index + 1)!
        let obtainedBy = 'This tank is available in the base game, and can be unlocked by progression.'
        if (tank.obtain_method === 'Premium') {
          obtainedBy = 'This tank requires the Deluxe edition purchase on Android/iOS, or the base game on Steam.'
        } else if (tank.obtain_method === 'Mastery') {
          obtainedBy = `This tank requires 100% mastery of the [${tank.obtain_mission}](/flyingtank/missions/${tank.obtain_mission.toLowerCase().replace(/ /g, '-')}) mission.`
        }
        const frontMatter = {
          title: tank.name,
          description: tank.tank_description,
          prev: {
            text: prev.name,
            link: `/flyingtank/tanks/${prev.name.toLowerCase().replace(/ /g, '-')}`
          },
          next: {
            text: next.name,
            link: `/flyingtank/tanks/${next.name.toLowerCase().replace(/ /g, '-')}`
          },
          head: [
            ['meta', { property: 'og:description', content: tank.tank_description }],
            ['meta', { property: 'og:image', content: tank.image }],
            ['meta', { name: 'twitter:title', content: tank.name }],
            ['meta', { name: 'twitter:description', content: tank.tank_description }],
            ['meta', { name: 'twitter:image', content: tank.image }]
          ]
        }
        return {
          params: {
            tank: tank.name.toLowerCase().replace(/ /g, '-')
          },
          content: [
            '---',
            JSON.stringify(frontMatter, null, 2),
            '---',
            `# ${tank.name}`,
            `![${tank.name}](${tank.image})`,
            '## Description',
            tank.tank_description,
            '## Unique Power',
            tank.unique_power,
            '## Stats',
            `**Armor:** ${tank.armor}\n`,
            `**Speed:** ${tank.speed}\n`,
            '## Obtaining',
            obtainedBy
          ].join('\n')
        }
      })
    ]
  }
}
