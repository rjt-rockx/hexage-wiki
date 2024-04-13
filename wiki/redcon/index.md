<script setup>
import GameLinks from '$components/GameLinks.vue';
import media from "./media.json"
</script>

# REDCON

<iframe class="w-full aspect-video rounded-lg my-4"
  src="https://www.youtube.com/embed/uA9VE_YEGRw?controls=1&amp;autohide=1&amp;rel=0&amp;hd=1&amp;vq=hd720"
  frameborder="0" allowfullscreen="" />

<GameLinks showText name="REDCON" googlePlayURL='https://play.google.com/store/apps/details?id=net.hexage.redcon'
  appStoreURL='https://itunes.apple.com/us/app/redcon/id1091375305'
  steamURL='https://store.steampowered.com/app/449710/REDCON/' />

## Description

**Welcome back, Strike Commander!**

Command your own battle fortress! Lead the Empire State offensive against Traitor General and his foul rebellion. Assemble the mightiest artillery force and bombard your foes into oblivion!

Set in the dystopian future in which the First World War never ended, humanity knows only war and bombardment.

You are a Strike Commander, tasked by Fuhrer of the Empire State to spearhead an artillery offensive against Traitor General Kranz. You might be the one to end all wars.

**Customize and manage your battle fortress.** Grow and upgrade your arsenal of weapons and utility facilities, then place them in different slots of your fortress layout.

**You are in command.** Target your guns and command your soldiers. Active Pause allows you to freeze time and issue multiple orders simultaneously. Put out fires, repair damaged weapons and unleash orchestrated assaults on your opponent.

**Get rewards for victory.** Gain new fortress layouts as you conquer the rogue state of Krux, earn medals and perks to aid you in battle.

## Media

<figure v-for="item in media" class="my-2">
  <picture v-if="item.type === 'image'">
    <img class="w-full rounded-lg" :src="item.url" :alt="`Flying Tank - ${item.title}`">
  </picture>
  <video v-if="item.type === 'video'" class="w-full rounded-lg" :src="item.url" autoplay loop controlslist="nodownload nofullscreen noremoteplayback" disablepictureinpicture disableremoteplayback muted playsinline></video>
  <figcaption class="w-full text-muted text-sm py-2">{{ item.title }}</figcaption>
</figure>
