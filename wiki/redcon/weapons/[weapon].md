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
  <select class="px-4 py-1 rounded-md transition-colors"
          :class="currentStats.value === index ? $style.brand : $style.alt"
          @change="onTierChange">
    <option v-for="(tier, index) in $params.tiers_fireTypes.tiers" :key="index" :value="index + 1">
      {{ tier }}
    </option>
  </select>
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
        <tr>
          <td class="border border-gray-300 p-2">Ammunition</td>
          <td class="border border-gray-300 p-2">{{ $params.stats.ammunition[tierIndex] }}</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2">Damage</td>
          <td class="border border-gray-300 p-2">{{ $params.stats.damage[tierIndex] }}</td>
        </tr>
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
          <td class="border border-gray-300 p-2" v-html="$params.upgrade_details.upgrade_1_cost"></td>
        </tr>
        <template v-for="index in $params.tiers_fireTypes.tiers.length - 1" :key="index">
          <tr>
            <td class="border border-gray-300 p-2">Upgrade {{ index }} Cost</td>
            <td class="border border-gray-300 p-2" v-html="$params.upgrade_details[`upgrade_${index + 1}_cost`]"></td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</div>

<div class="[&>p>strong]:text-accent" v-html="$params.descriptions"></div>

<div v-if="$params.tiers_fireTypes.fire_types.length > 0">
  <h2>Fire Types</h2>
  <table class="min-w-full border-collapse border border-gray-200">
    <thead>
      <tr>
        <th class="border border-gray-300 p-2">Fire Type Name</th>
        <th class="border border-gray-300 p-2">Ammunition</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(fireType, index) in $params.tiers_fireTypes.fire_types" :key="index">
        <td class="border border-gray-300 p-2">{{ fireType }}</td>
        <td class="border border-gray-300 p-2">{{ $params.stats[`fire_type_${index + 1}_ammunition`][tierIndex] }}</td>
      </tr>
    </tbody>
  </table>
</div>

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

  select {  
      width: 800px;
      height: 40px;
      font-size: 16px;
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
