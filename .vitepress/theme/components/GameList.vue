<script setup>
import { withBase } from 'vitepress'
const games = [
  {
    name: 'Flying Tank',
    path: 'flyingtank',
    bannerURL: '/banners/flyingtank.png'
  },
  {
    name: 'Redcon',
    path: 'redcon',
    bannerURL: '/banners/redcon.png'
  },
  {
    name: 'Reaper: Tale of a pale swordsman',
    path: 'reaper',
    bannerURL: '/banners/reaper.png'
  }
]
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <a v-for="game in games" :href="`./${game.path}/`" class="w-full">
      <img :src="withBase(game.bannerURL)" :alt="game.name" class="w-full rounded-md" />
    </a>
  </div>
</template>
