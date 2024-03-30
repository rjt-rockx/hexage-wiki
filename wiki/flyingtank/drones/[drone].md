<!-- @content -->

<script setup lang="ts">
import { reactive, computed } from "vue";
import { useData } from "vitepress";
const { params } = useData();

let currentUpgrade = reactive({ value: 1 });
let currentCost = computed(() => {
  const key = `upgrade_${currentUpgrade.value}_cost`;
  return params.value.value[key];
});
</script>

# {{ $params.value.name }}

<div class="[&>p>strong]:text-accent" v-html="$params.descriptions[currentUpgrade.value - 1]"></div>

Cost: <strong>{{ currentCost }}</strong> Biomass

<div class="flex flex-row items-center gap-4">
  <template v-for="index in params.descriptions.length">
    <button
      class="px-4 py-1 rounded-md transition-colors text-primary"
      :class="currentUpgrade.value === index ? $style.brand : $style.alt"
      @click="currentUpgrade.value = index">
      Tier {{ index }}
    </button>
  </template>
</div>

<style module>
  .brand {
    @apply bg-button-brand-bg hover:bg-button-brand-hover-bg active:bg-button-brand-active-bg;
    @apply text-button-brand-text hover:text-button-brand-hover-text active:text-button-brand-active-text;
    @apply border-button-brand-border hover:border-button-brand-hover-border active:border-button-brand-active-border;
  }
  .alt {
    @apply bg-button-alt-bg hover:bg-button-alt-hover-bg active:bg-button-alt-active-bg;
    @apply text-button-alt-text hover:text-button-alt-hover-text active:text-button-alt-active-text;
    @apply border-button-alt-border hover:border-button-alt-hover-border active:border-button-alt-active-border;  
  }
</style>
