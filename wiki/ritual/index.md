<script setup>
import GameLinks from '$components/GameLinks.vue';
import media from "./media.json"
</script>

# Ritual: Sorcerer Angel

<iframe class="w-full aspect-video rounded-lg my-4"
  src="https://www.youtube.com/embed/7-Mm6PDdbis?controls=1&amp;autohide=1&amp;rel=0&amp;hd=1&amp;vq=hd720"
  frameborder="0" allowfullscreen="" />

<GameLinks showText name="Ritual" googlePlayURL='https://play.google.com/store/apps/details?id=net.hexage.ritual'
  appStoreURL='https://itunes.apple.com/us/app/ritual-sorcerer-angel/id1457554380'
  steamURL='https://store.steampowered.com/app/1063960/Ritual_Sorcerer_Angel/' />

## Description

**Cut through crowds in endless dance with dagger!**

Chop Slash Freeze Smash Burn! Use **dagger and magic** to kill monsters with creative combos!

Equip your sorcerer with powerful combinations of Spells and Skills and blaze through hordes of monsters in a unique **spell-casting action RPG**. Leave magic mayhem in your wake!

- Play the beginning for free
- Discover hundreds of magic Skills and Spells
- Slay thousands of Monsters, Shadows, Demons and Cultists
- New Game Plus, repeatable levels and trillions of possible builds for endless replayability

## Media

<figure v-for="item in media" class="my-2">
  <picture v-if="item.type === 'image'">
    <img class="w-full rounded-lg" :src="item.url" :alt="`Flying Tank - ${item.title}`">
  </picture>
  <video v-if="item.type === 'video'" class="w-full rounded-lg" :src="item.url" autoplay loop controlslist="nodownload nofullscreen noremoteplayback" disablepictureinpicture disableremoteplayback muted playsinline></video>
  <figcaption class="w-full text-muted text-sm py-2">{{ item.title }}</figcaption>
</figure>
