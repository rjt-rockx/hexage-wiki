<script setup>
import GameLinks from '$components/GameLinks.vue';
import media from "./media.json"
</script>

# Reaper: Tale of a Pale Swordsman

<iframe class="w-full aspect-video rounded-lg my-4"
  src="https://www.youtube.com/embed/eBOuCtG3yno?controls=1&amp;autohide=1&amp;rel=0&amp;hd=1&amp;vq=hd720"
  frameborder="0" allowfullscreen="" />

<GameLinks showText name="Reaper" googlePlayURL='https://play.google.com/store/apps/details?id=net.hexage.reaper'
  appStoreURL='https://itunes.apple.com/us/app/reaper-tale-pale-swordsman/id698299228' />

## Description

**Become the Black Swordsman!**

Enter the world ripe with magic and monsters!

Become the Black Swordsman and slay thousands of enemies in an epic action RPG!

**FEATURES**

- Take countless quests and uncover the secrets of Wilderness
- Level up your character with skills of your choice
- Hundreds of swords, armor and accessories to equip
- Play all sides and make your own decisions
- Online leaderboards and achievements
- Signature soundtrack by Kubatko

## Media

<figure v-for="item in media" class="my-2">
  <picture v-if="item.type === 'image'">
    <img class="w-full rounded-lg" :src="item.url" :alt="`Flying Tank - ${item.title}`">
  </picture>
  <video v-if="item.type === 'video'" class="w-full rounded-lg" :src="item.url" autoplay loop controlslist="nodownload nofullscreen noremoteplayback" disablepictureinpicture disableremoteplayback muted playsinline></video>
  <figcaption class="w-full text-muted text-sm py-2">{{ item.title }}</figcaption>
</figure>
