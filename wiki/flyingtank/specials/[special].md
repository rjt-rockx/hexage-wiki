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

<div v-html="$params.descriptions[currentUpgrade.value - 1]"></div>

Cost: <strong>{{ currentCost }}</strong> Biomass

<div class="flex flex-row items-center gap-4">

  <template v-for="index in params.descriptions.length">
    <button
      class="px-4 py-1 rounded-md transition-colors text-primary"
      :class="[currentUpgrade.value === index ? 'bg-brand-3 hover:bg-brand-2 active:bg-brand-1': 'bg-default-3 hover:bg-default-2 active:bg-default-1']"
      @click="currentUpgrade.value = index">
      Tier {{ index }}
    </button>
  </template>
</div>
