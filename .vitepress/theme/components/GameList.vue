<script setup lang="ts">
import { withBase } from 'vitepress'
import GameLinks from './GameLinks.vue'

interface Game {
  name: string
  genre: string
  path: string
  bannerURL: string
  googlePlayURL?: string
  appStoreURL?: string
  steamURL?: string
  releaseYear?: number
}

const games: Game[] = [
  {
    name: 'Flying Tank',
    genre: "Shoot 'em up",
    path: 'flyingtank',
    bannerURL: '/banners/flyingtank.png',
    releaseYear: 2024,
    googlePlayURL: 'https://play.google.com/store/apps/details?id=net.hexage.flt',
    appStoreURL: 'https://apps.apple.com/us/app/flying-tank/id6474070216',
    steamURL: 'https://store.steampowered.com/app/2298950/Flying_Tank/'
  },
  {
    name: 'Ritual: Sorcerer Angel',
    genre: "Hack n' slash",
    path: 'ritual',
    bannerURL: '/banners/ritual.png',
    releaseYear: 2019,
    googlePlayURL: 'https://play.google.com/store/apps/details?id=net.hexage.ritual',
    appStoreURL: 'https://itunes.apple.com/us/app/ritual-sorcerer-angel/id1457554380',
    steamURL: 'https://store.steampowered.com/app/1063960/Ritual_Sorcerer_Angel/'
  },
  {
    name: 'Redcon',
    genre: 'Real-time strategy',
    path: 'redcon',
    bannerURL: '/banners/redcon.png',
    releaseYear: 2016,
    googlePlayURL: 'https://play.google.com/store/apps/details?id=net.hexage.redcon',
    appStoreURL: 'https://itunes.apple.com/us/app/redcon/id1091375305',
    steamURL: 'https://store.steampowered.com/app/449710/REDCON/'
  },
  {
    name: 'Reaper: Tale of a Pale Swordsman',
    genre: 'Action RPG',
    path: 'reaper',
    bannerURL: '/banners/reaper.png',
    releaseYear: 2013,
    googlePlayURL: 'https://play.google.com/store/apps/details?id=net.hexage.reaper',
    appStoreURL: 'https://itunes.apple.com/us/app/reaper-tale-pale-swordsman/id698299228'
  },
  {
    name: 'Radiant Defense',
    genre: 'Tower defense',
    path: 'radiantdefense',
    bannerURL: '/banners/radiantdefense.png',
    releaseYear: 2011,
    googlePlayURL: 'https://play.google.com/store/apps/details?id=net.hexage.defense',
    appStoreURL: 'https://itunes.apple.com/us/app/radiant-defense/id512203663'
  },
  {
    name: 'Robotek',
    genre: 'Turn-based strategy',
    path: 'robotek',
    bannerURL: '/banners/robotek.png',
    releaseYear: 2011,
    googlePlayURL: 'https://play.google.com/store/apps/details?id=net.hexage.robotek.hd',
    appStoreURL: 'https://itunes.apple.com/us/app/robotek/id437602797'
  },
  {
    name: 'Radiant',
    genre: "Shoot 'em up",
    path: 'radiant',
    bannerURL: '/banners/radiant.png',
    releaseYear: 2009,
    googlePlayURL: 'https://play.google.com/store/apps/details?id=net.hexage.radiant.hd',
    appStoreURL: 'https://itunes.apple.com/us/app/radiant/id335989815'
  },
  {
    name: 'Evac',
    genre: 'Maze',
    path: 'evac',
    bannerURL: '/banners/evac.png',
    releaseYear: 2010,
    googlePlayURL: 'https://play.google.com/store/apps/details?id=net.hexage.evac.hd',
    appStoreURL: 'https://apps.apple.com/us/app/evac/id399378943'
  },
  {
    name: 'Everlands',
    genre: 'Turn-based strategy',
    path: 'everlands',
    bannerURL: '/banners/everlands.png',
    releaseYear: 2010
  },
  {
    name: 'Totemo',
    genre: 'Puzzle',
    path: 'totemo',
    bannerURL: '/banners/totemo.png',
    releaseYear: 2009
  },
  {
    name: 'Buka',
    genre: "Shoot 'em up",
    path: 'buka',
    bannerURL: '/banners/buka.png',
    releaseYear: 2009
  }
].sort((a, b) => (b.releaseYear || 0) - (a.releaseYear || 0))
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto p-6 items-center">
    <div v-for="game in games" class="w-full flex flex-col gap-2">
      <a :href="`/${game.path}/`" class="w-full">
        <img
          :src="withBase(game.bannerURL)"
          :alt="game.name"
          class="w-full rounded-lg border border-solid border-divider/25" />
      </a>
      <div class="flex flex-row items-center justify-between gap-4">
        <div class="flex flex-col items-start gap-0">
          <p>
            <span class="text-primary">{{ game.name }}</span>
            {{ ' ' }}
            <span v-if="game.releaseYear" class="text-muted">({{ game.releaseYear }})</span>
          </p>
          <p>
            <span class="text-muted text-sm">{{ game.genre }}</span>
          </p>
        </div>
        <GameLinks
          name="game.name"
          :googlePlayURL="game.googlePlayURL"
          :appStoreURL="game.appStoreURL"
          :steamURL="game.steamURL" />
      </div>
    </div>
  </div>
</template>
