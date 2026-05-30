<script setup lang="ts">
const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost'
  to?: string
}>()

const classes = computed(() => ['btn', `btn--${props.variant ?? 'primary'}`])
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="classes">
    <slot />
  </NuxtLink>
  <button v-else :class="classes">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  display: inline-block;
  cursor: pointer;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  text-align: center;
  padding: var(--space-4) var(--space-8);
  border: none;
  transition:
    background-color var(--transition-fast),
    color var(--transition-fast);
}

.btn--primary {
  background-color: var(--color-accent);
  color: var(--color-black);
}

.btn--primary:hover {
  background-color: var(--color-white);
}

.btn--secondary {
  background-color: transparent;
  color: var(--color-white);
  border: 1px solid var(--color-gray-700);
}

.btn--secondary:hover {
  border-color: var(--color-white);
}

.btn--ghost {
  background-color: transparent;
  color: var(--color-black);
  border: 2px solid var(--color-black);
}

.btn--ghost:hover {
  background-color: var(--color-black);
  color: var(--color-accent);
}
</style>
