<script setup>
import GameLinks from '$components/GameLinks.vue';
import media from "./media.json"
</script>

# ROBOTEK

<iframe class="w-full aspect-video rounded-lg my-4"
  src="https://www.youtube.com/embed/RCjyw68e0T4?controls=1&amp;autohide=1&amp;rel=0&amp;hd=1&amp;vq=hd720"
  frameborder="0" allowfullscreen="" />

<GameLinks showText name="ROBOTEK" googlePlayURL='https://play.google.com/store/apps/details?id=net.hexage.robotek.hd'
  appStoreURL='https://itunes.apple.com/us/app/robotek/id437602797' />

## Description

**THE HUMANITY HAD FALLEN**

In the great robot uprising machines took the planet over.

Empire of Machine is the new world order.

**WELCOME HUMAN**

It's time to take your world back.

One node at a time.

**FEATURES**

- Unique blend of strategy, action and RPG.
- More than 200 levels spread all around the world.
- Rewarding skill system with more than 30 levels.
- 9 upgradable slot symbols to fit your own style of play.
- 4 special abilities including the devastating Nuke.
- Play thrilling hotseat duels with your friends!
- Online hall of fame - Your scores can only grow.
- **Free Online Multiplayer.**
- Facebook leaderboards - compete with your friends!
- Signature soundtrack by Kubatko

## Media

<figure v-for="item in media" class="my-2">
  <picture v-if="item.type === 'image'">
    <img class="w-full rounded-lg" :src="item.url" :alt="`Flying Tank - ${item.title}`">
  </picture>
  <video v-if="item.type === 'video'" class="w-full rounded-lg" :src="item.url" autoplay loop controlslist="nodownload nofullscreen noremoteplayback" disablepictureinpicture disableremoteplayback muted playsinline></video>
  <figcaption class="w-full text-muted text-sm py-2">{{ item.title }}</figcaption>
</figure>
