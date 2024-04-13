<script setup>
import GameLinks from '$components/GameLinks.vue';
import media from "./media.json"
</script>

# Radiant

<iframe class="w-full aspect-video rounded-lg my-4"
  src="https://www.youtube.com/embed/njfWuInxuWQ?controls=1&amp;autohide=1&amp;rel=0&amp;hd=1&amp;vq=hd720"
  frameborder="0" allowfullscreen="" />

<GameLinks showText name="Radiant" googlePlayURL='https://play.google.com/store/apps/details?id=net.hexage.radiant.hd' appStoreURL='https://itunes.apple.com/us/app/radiant/id335989815' />

## Description

**Relive the classics revamped.**

Take your stand against the alien horde in a pure arcade/action space shooter.

Cut through hundreds of creeps to face giant monsters in unique bossfights. Collect special weapons and power-ups, upgrade your ship and save your homeworld!

Write your name into the on-line leaderboard.

## Media

<figure v-for="item in media" class="my-2">
  <picture v-if="item.type === 'image'">
    <img class="w-full rounded-lg" :src="item.url" :alt="`Flying Tank - ${item.title}`">
  </picture>
  <video v-if="item.type === 'video'" class="w-full rounded-lg" :src="item.url" autoplay loop controlslist="nodownload nofullscreen noremoteplayback" disablepictureinpicture disableremoteplayback muted playsinline></video>
  <figcaption class="w-full text-muted text-sm py-2">{{ item.title }}</figcaption>
</figure>
