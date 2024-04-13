<script setup>
import GameLinks from '$components/GameLinks.vue';
import media from "./media.json"
</script>

# Radiant Defense

<iframe class="w-full aspect-video rounded-lg my-4"
  src="https://www.youtube.com/embed/bh8LuuHZz4Y?controls=1&amp;autohide=1&amp;rel=0&amp;hd=1&amp;vq=hd720"
  frameborder="0" allowfullscreen="" />

<GameLinks showText name="Radiant Defense" googlePlayURL='https://play.google.com/store/apps/details?id=net.hexage.defense'
  appStoreURL='https://itunes.apple.com/us/app/radiant-defense/id512203663' />

## Description

**MILLIONS OF ALIENS WILL DIE**

Radiant Defense is a tower defense game set in a vibrant universe invaded by countless alien hordes.

Build your space fortress any way you wish, set up wide variety of weapons and traps and let the invasions begin!

**FEATURES**

- Tower Defense set in the Radiant Universe
- Build your own path for incoming waves of enemies!
- More than 300 waves of aliens across 10 unique locations
- 9 upgradable weapons to kill the aliens with style
- 3 super-weapons of mass destruction for even more fun
- Online hall of fame - your scores can only grow
- Signature soundtrack by kubatko

## Media

<figure v-for="item in media" class="my-2">
  <picture v-if="item.type === 'image'">
    <img class="w-full rounded-lg" :src="item.url" :alt="`Flying Tank - ${item.title}`">
  </picture>
  <video v-if="item.type === 'video'" class="w-full rounded-lg" :src="item.url" autoplay loop controlslist="nodownload nofullscreen noremoteplayback" disablepictureinpicture disableremoteplayback muted playsinline></video>
  <figcaption class="w-full text-muted text-sm py-2">{{ item.title }}</figcaption>
</figure>
