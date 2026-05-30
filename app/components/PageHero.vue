<script setup lang="ts">
defineProps<{
  tag: string
  title: string
  accent: string
  subtitle: string
}>()
</script>

<template>
  <section class="page-hero">
    <div class="page-hero-content">
      <span>{{ tag }}</span>
      <h1>{{ title }} <em>{{ accent }}</em></h1>
      <p>{{ subtitle }}</p>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  background-color: var(--color-gray-900);
  padding-block: var(--space-24);
  border-bottom: 1px solid var(--color-border);
}

.page-hero-content {
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--space-6);
}

.page-hero-content > span {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-4);
}

.page-hero-content h1 {
  font-size: var(--text-5xl);
  line-height: var(--leading-tight);
  color: var(--color-white);
  margin-bottom: var(--space-6);
  text-wrap: balance;
}

.page-hero-content h1 em {
  font-style: normal;
  color: var(--color-accent);
}

.page-hero-content p {
  font-size: var(--text-lg);
  color: var(--color-gray-400);
  max-width: 480px;
  line-height: var(--leading-loose);
}

@media (min-width: 768px) {
  .page-hero-content h1 {
    font-size: var(--text-6xl);
  }
}
</style>
