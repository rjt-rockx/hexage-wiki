<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  margin-left: auto;
  margin-right: auto;
  max-width: calc(var(--vp-layout-max-width) - 64px);
}
</style>
