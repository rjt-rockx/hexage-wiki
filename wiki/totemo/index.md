<script setup>
import media from "./media.json"
</script>

# Totemo

<iframe class="w-full aspect-video rounded-lg my-4"
  src="https://www.youtube.com/embed/_qv78f-zs9w?controls=1&amp;autohide=1&amp;rel=0&amp;hd=1&amp;vq=hd720"
  frameborder="0" allowfullscreen="" />

## Description

**Unloose the spirit. Break the spell.**

**TOTEMO** is a game designed to soothe your mind and train your brain.

Uncover the mystery hidden between the realms in a unique puzzle game. Travel to enchanted places of the past with your witch doctor guide and solve over 100 logic tasks.

Play at your own pace. Think hard and weight carefully your next move, or just stroke your moves intuitively and let the solution emerge in front of your eyes.

Play the survival mode for extra challenge, make your stand against the time and write your name into the on-line leaderboards.

## Media

<figure v-for="item in media" class="my-2">
  <picture v-if="item.type === 'image'">
    <img class="w-full rounded-lg" :src="item.url" :alt="`Flying Tank - ${item.title}`">
  </picture>
  <video v-if="item.type === 'video'" class="w-full rounded-lg" :src="item.url" autoplay loop controlslist="nodownload nofullscreen noremoteplayback" disablepictureinpicture disableremoteplayback muted playsinline></video>
  <figcaption class="w-full text-muted text-sm py-2">{{ item.title }}</figcaption>
</figure>
