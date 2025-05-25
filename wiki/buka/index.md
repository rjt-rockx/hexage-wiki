<script setup>
import media from "./media.json"
</script>

# BUKA

<iframe class="w-full aspect-video rounded-lg my-4"
  src="https://www.youtube.com/embed/iXWHmfCIJaw?controls=1&amp;autohide=1&amp;rel=0&amp;hd=1&amp;vq=hd720"
  frameborder="0" allowfullscreen="" />

## Description

**BUKA makes worlds go boom!**

**BUKA** is a cute game of skill.

Facing the impossible odds of countless baddies, BUKA has set on a quest to find **The Happy Place**.

Protect her with **powerful explosions** and **shockwaves** you can create with single touch. Use shockwaves to push objects closer or away.

**Destroy everything** in your path and **navigate** through the rest - until you reach The Happy Place!

## Development

_Buka_ was Hexage's first game and the origin of their signature neon visual style. The distinctive glowing aesthetic that became a defining characteristic of all Hexage games actually started here as a practical design solution - the neon effects were initially used as visual warnings around enemies to help players identify threats. The look proved so striking that it became Hexage's trademark visual style across all their future games.

## Media

<figure v-for="item in media" class="my-2">
  <picture v-if="item.type === 'image'">
    <img class="w-full rounded-lg" :src="item.url" :alt="`Flying Tank - ${item.title}`">
  </picture>
  <video v-if="item.type === 'video'" class="w-full rounded-lg" :src="item.url" autoplay loop controlslist="nodownload nofullscreen noremoteplayback" disablepictureinpicture disableremoteplayback muted playsinline></video>
  <figcaption class="w-full text-muted text-sm py-2">{{ item.title }}</figcaption>
</figure>
