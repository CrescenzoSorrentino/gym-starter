<script setup lang="ts"></script>

<template>
  <div class="layout">
    <AppNavbar />
    <slot />
    <AppFooter />
  </div>
</template>

<style scoped>
.layout {
  padding-top: var(--space-16);
}
</style>
