<script setup>
import GameLinks from '$components/GameLinks.vue';
import media from "./media.json"
</script>

# EVAC

<iframe class="w-full aspect-video rounded-lg my-4"
  src="https://www.youtube.com/embed/cEg74pDVek8?controls=1&amp;autohide=1&amp;rel=0&amp;hd=1&amp;vq=hd720"
  frameborder="0" allowfullscreen="" />

<GameLinks showText name="EVAC" googlePlayURL='https://play.google.com/store/apps/details?id=net.hexage.evac.hd' appStoreURL='https://apps.apple.com/us/app/evac/id399378943' />

## Description

**The only way out is the way through!**

Run for your life through colorful neon mazes, chased by countless and ever-vigilant security forces.

Be creative - play stealthily to avoid encounters, prepare traps for your enemies or just rush as fast as you can right in front of their eyes. Figure out how to beat the system and destroy your captors in 32 action-packed levels. Steal from your dark adversary and leave his world in ruins!

Break out and take revenge!

**Features**

- Unique mix of genres with arcade, action, stealth and puzzle gameplay elements.
- 32 meticulously designed levels, each with a different twist.
- Creative gameplay - think of your own ways how to beat the game.
- Online leaderboards - Your highscore can only grow bigger every time you play.
- Signature soundtrack by Kubatko

## Media

<figure v-for="item in media" class="my-2">
  <picture v-if="item.type === 'image'">
    <img class="w-full rounded-lg" :src="item.url" :alt="`Flying Tank - ${item.title}`">
  </picture>
  <video v-if="item.type === 'video'" class="w-full rounded-lg" :src="item.url" autoplay loop controlslist="nodownload nofullscreen noremoteplayback" disablepictureinpicture disableremoteplayback muted playsinline></video>
  <figcaption class="w-full text-muted text-sm py-2">{{ item.title }}</figcaption>
</figure>
