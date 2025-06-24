<!-- @content -->

<script setup lang="ts">
import { reactive, computed } from "vue";
import { useData } from "vitepress";
const { params: $params } = useData();

const currentStats = reactive({ value: 1 });
const tierIndex = computed(() => Number(currentStats.value) - 1);

const onTierChange = (e: Event) => {
  const target = e.target as HTMLSelectElement;
  currentStats.value = Number(target.value);
}
</script>

# {{ $params.value.name }}

<br>

<div class="flex flex-row items-center gap-4">
  <div :class="$style.selectContainer">
    <select class="px-4 py-1 rounded-md transition-colors"
            :class="currentStats.value === index ? $style.brand : $style.alt"
            @change="onTierChange">
      <option v-for="(tier, index) in $params.tiers" :key="index" :value="index + 1">
        {{ tier }}
      </option>
    </select>
    <div :class="$style.dropdownIcon">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
  </div>
</div>

<div class="table-container flex">
  <div class="table-wrapper">
    <table class="min-w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th class="border border-gray-300 p-2" colspan="2">Stats</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 p-2">Hitpoints</td>
          <td class="border border-gray-300 p-2">{{ $params.stats.hitpoints[tierIndex] }}</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2">Power</td>
          <td class="border border-gray-300 p-2">{{ $params.stats.power[tierIndex] }}</td>
        </tr>
        <template v-if="$params.stats.ammunition?.[tierIndex]">
        <tr>
            <td class="border border-gray-300 p-2">Ammunition</td>
            <td class="border border-gray-300 p-2">{{ $params.stats.ammunition[tierIndex] }}</td>
        </tr>
        </template>
      </tbody>
    </table>
  </div>

  <div class="table-wrapper">
    <table class="min-w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th class="border border-gray-300 p-2" colspan="2">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 p-2">Purchase Limit</td>
          <td class="border border-gray-300 p-2" v-html="$params.upgrade_details.purchase_limit"></td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2">Purchase Cost</td>
          <td class="border border-gray-300 p-2" v-html="$params.upgrade_details.purchase_cost"></td>
        </tr>
        <template v-for="index in $params.tiers.length - 1" :key="index">
          <tr>
            <td class="border border-gray-300 p-2">Upgrade {{ index }} Cost</td>
            <td class="border border-gray-300 p-2" v-html="$params.upgrade_details[`upgrade_${index}_cost`]"></td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</div>

<div class="[&>p>strong]:text-accent" v-html="$params.descriptions[tierIndex]"></div>

<br>

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

  .selectContainer {
    position: relative;
    width: 800px;
  }

  select {  
      width: 100%;
      height: 40px;
      font-size: 16px;
      appearance: none;
      color: var(--vp-c-text-1);
      padding-right: 3rem;
  }

  .dropdownIcon {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    width: 1.5em;
    height: 1.5em;
  }

  .dropdown option {
    @apply py-3 px-4;
    margin: 0;
    background-color: bg-button-brand-bg;
    color: text-button-brand-text;
  }
</style>

<style scoped>
.table-container {
  display: flex;
  gap: 10px;
}
.table-wrapper {
  flex: 1;
}
</style>
