import upgradeData from './upgrades.json'
import weaponData from '../weapons/weapons.json'
import bombData from '../bombs/bombs.json'
import specialData from '../specials/specials.json'
import { resolveDescription } from '../../../utils/resolveDescription'

const replaceMentions = (text: string) => {
  let newText = text
  const mentionList: Record<string, string[]> = {
    weapons: weaponData.map((weapon) => weapon.name),
    bombs: bombData.map((bomb) => bomb.name),
    upgrades: upgradeData.map((upgrade) => upgrade.name),
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

const upgrades = upgradeData.map((upgrade) => {
  return {
    ...upgrade,
    description: replaceMentions(upgrade.description)
  }
})

export default {
  paths() {
    const content = [
      '# Upgrades',
      '',
      '| Name | Description |',
      '| ---- | ----------- |',
      ...upgrades.map((upgrade) => {
        return `| [${upgrade.name}](/flyingtank/upgrades/${upgrade.name.toLowerCase().replace(/ /g, '-')}) | ${resolveDescription(upgrade, 1)} |`
      })
    ].join('\n')
    return [
      {
        params: {
          index: 'index'
        },
        content
      }
    ]
  }
}
