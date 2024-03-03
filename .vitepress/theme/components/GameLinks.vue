<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  googlePlayURL: {
    type: String,
    required: false
  },
  appStoreURL: {
    type: String,
    required: false
  },
  steamURL: {
    type: String,
    required: false
  },
  showText: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template>
  <div class="linkContainer" :class="[props.showText && 'withText']">
    <a
      v-if="props.appStoreURL"
      :title="props.name + ' on App Store'"
      :href="props.appStoreURL"
      target="_blank"
      rel="noopener noreferrer">
      <div class="i-simple-icons:apple icon"></div>
      <span v-if="props.showText">App Store</span>
    </a>

    <a
      v-if="props.googlePlayURL"
      :title="props.name + ' on Google Play Store'"
      :href="props.googlePlayURL"
      target="_blank"
      rel="noopener noreferrer">
      <div class="i-simple-icons:googleplay icon"></div>
      <span v-if="props.showText">Google Play</span>
    </a>

    <a
      v-if="props.steamURL"
      :title="props.name + ' on Steam'"
      :href="props.steamURL"
      target="_blank"
      rel="noopener noreferrer">
      <div class="i-simple-icons:steam icon"></div>
      <span v-if="props.showText">Steam</span>
    </a>
  </div>
</template>

<style scoped>
.linkContainer {
  @apply flex flex-row items-center gap-4 my-4 flex-wrap;
}
.linkContainer.withText {
  @apply gap-6;
}
.linkContainer a {
  @apply flex flex-row items-center gap-2 text-muted decoration-none;
}
.linkContainer a:hover {
  @apply text-primary;
}
.linkContainer a .icon {
  @apply w-6 h-6;
}
.linkContainer.withText a .icon {
  @apply w-4 h-4;
}
</style>
