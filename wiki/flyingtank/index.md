<script setup>
import GameLinks from '$components/GameLinks.vue';
import media from "./media.json"
</script>

# Flying Tank

<ClientOnly>
  <iframe class="w-full aspect-video rounded-lg my-4"
    src="http://www.youtube.com/embed/xkf701ZpG50?controls=1&amp;autohide=1&amp;rel=0&amp;hd=1&amp;vq=hd720"
    frameborder="0" allowfullscreen="" />
</ClientOnly>

<GameLinks showText name="Flying Tank" googlePlayURL='https://play.google.com/store/apps/details?id=net.hexage.flt'
  appStoreURL='https://apps.apple.com/us/app/flying-tank/id6474070216'
  steamURL='https://store.steampowered.com/app/2298950/Flying_Tank/' />

## About

**THE END OF THE WORLD IS JUST THE BEGINNING**

Get into your Flying Tank and shoot 'em up like it's the good old days!

Kill strange bosses, drop bombs from above and build an arsenal of fun, powerful weapons. Reclaim the stolen Earth in a
rich action-packed side-scrolling shmup!

- Embark on 24 missions, populated with three distinct factions and unique adversaries.
- Encounter 6 main bosses and 18+ midi and mini boss fights.
- Customize your FLT with a variety of Weapons and Bombs, ranging from classic to insane.
- Use powerful Specials including Hyperfocus and Overdrive, attack and repair Drones, and 30+ other Upgrades.

## Screenshots

<figure v-for="item in media" class="my-2">
  <picture v-if="item.type === 'image'">
    <img class="w-full rounded-lg" :src="item.url" :alt="`Flying Tank - ${item.title}`">
  </picture>
  <video v-if="item.type === 'video'" class="w-full rounded-lg" :src="item.url" autoplay loop controlslist="nodownload nofullscreen noremoteplayback" disablepictureinpicture disableremoteplayback muted playsinline></video>
  <figcaption class="w-full text-muted text-sm py-2">{{ item.title }}</figcaption>
</figure>
