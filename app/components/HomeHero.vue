<script setup lang="ts">
const c = useRuntimeConfig().public
</script>

<template>
  <section class="hero" :style="{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.3)), url(${c.heroImage})` }">
    <div class="hero-content">
      <span>{{ c.heroEyebrow }}</span>
      <h1>{{ c.heroTitle }} <em>{{ c.heroTitleAccent }}</em></h1>
      <p>{{ c.heroSubtitle }}</p>
      <div class="hero-cta">
        <BaseButton>{{ c.heroCta1 }}</BaseButton>
        <BaseButton variant="secondary">{{ c.heroCta2 }}</BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 65vh;
  display: flex;
  align-items: center;
  background-color: var(--color-gray-900);
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

@media (min-height: 700px) {
  .hero {
    min-height: 75vh;
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--space-6);
  padding-block: var(--space-16);
}

/* tag line */
.hero-content > span {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-4);
}

/* titolo */
.hero-content h1 {
  font-size: var(--text-5xl);
  line-height: var(--leading-tight);
  color: var(--color-white);
  margin-bottom: var(--space-6);
}

.hero-content h1 em {
  font-style: normal;
  color: var(--color-accent);
}

/* sottotitolo */
.hero-content p {
  font-size: var(--text-lg);
  color: var(--color-gray-400);
  max-width: 480px;
  margin-bottom: var(--space-8);
  line-height: var(--leading-loose);
}

/* CTA */
.hero-cta {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
}

@media (min-width: 768px) {
  .hero-content h1 {
    font-size: var(--text-6xl);
  }
}
</style>
