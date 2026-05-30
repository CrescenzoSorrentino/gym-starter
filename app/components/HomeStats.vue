<script setup lang="ts">
const config = useRuntimeConfig()
const stats = [
  { value: config.public.stat1Value, label: config.public.stat1Label },
  { value: config.public.stat2Value, label: config.public.stat2Label },
  { value: config.public.stat3Value, label: config.public.stat3Label },
  { value: config.public.stat4Value, label: config.public.stat4Label },
]
</script>

<template>
  <section class="stats">
    <ul class="stats-grid">
      <li v-for="stat in stats" :key="stat.label" class="stat-item">
        <span class="stat-value">{{ stat.value }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.stats {
  background-color: var(--color-black);
  padding-block: var(--space-16);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.stats-grid {
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--space-6);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: var(--space-12);
  column-gap: var(--space-12);
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.stat-value {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  line-height: 1;
  color: var(--color-accent);
  letter-spacing: var(--tracking-tight);
}

.stat-label {
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-gray-400);
}

@media (min-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-12);
  }

  .stat-value {
    font-size: var(--text-6xl);
  }
}
</style>
