<script setup>
import media from "./media.json"
</script>

# Everlands

<iframe class="w-full aspect-video rounded-lg my-4"
  src="https://www.youtube.com/embed/zCN2LEUlYgc?controls=1&amp;autohide=1&amp;rel=0&amp;hd=1&amp;vq=hd720"
  frameborder="0" allowfullscreen="" />

## Description

**Outsmart the Evil!**

A colorful world of **Everlands** has been invaded by dark and sinister forces. Animals of the land have to unite, combine the best of their abilities and together stand against the great threat casting shadow over their beloved homeland.

Each animal has its unique features, strengths and weaknesses. Create your own tactics combining dozens of abilities and defeat your foe.

Lead dozens of courageous animals through more than 20 carefully prepared levels and reveal the truth behind the source of mysterious evil in a unique turn-based game.

## Development

_Everlands_ exemplifies Hexage's approach to incorporating quirky humor that creates interesting tonal contrasts. The game features cute, colorful animals speaking like serious warriors from fantasy novels, creating what the developers describe as something "so strange that it's almost poetic." This deliberate contrast between the charming visual style and the grave, zealous dialogue of the animal characters reflects Hexage's design philosophy of starting with gameplay concepts and then building unexpected atmospheres around them.

## Media

<figure v-for="item in media" class="my-2">
  <picture v-if="item.type === 'image'">
    <img class="w-full rounded-lg" :src="item.url" :alt="`Flying Tank - ${item.title}`">
  </picture>
  <video v-if="item.type === 'video'" class="w-full rounded-lg" :src="item.url" autoplay loop controlslist="nodownload nofullscreen noremoteplayback" disablepictureinpicture disableremoteplayback muted playsinline></video>
  <figcaption class="w-full text-muted text-sm py-2">{{ item.title }}</figcaption>
</figure>
