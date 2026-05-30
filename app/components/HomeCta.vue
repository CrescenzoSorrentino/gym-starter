<script setup lang="ts">
const c = useRuntimeConfig().public
</script>

<template>
  <section class="cta">
    <div class="cta-content">
      <h2>{{ c.ctaTitle }}</h2>
      <BaseButton variant="ghost" to="/contatti">{{ c.ctaButton }}</BaseButton>
    </div>
  </section>
</template>

<style scoped>
.cta {
  background-color: var(--color-accent);
  padding-block: var(--space-24);
}

.cta-content {
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--space-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.cta-content h2 {
  font-size: var(--text-6xl);
  line-height: var(--leading-tight);
  color: var(--color-black);
  margin-bottom: var(--space-4);
}


@media (min-width: 768px) {
  .cta-content h2 {
    font-size: clamp(4rem, 10vw, 9rem);
  }
}
</style>
