<script setup lang="ts">
const c = useRuntimeConfig().public
const aboutImage = c.aboutImage
</script>

<template>
  <section class="about-story">
    <div class="story-grid">
      <div class="story-text">
        <span>La nostra storia</span>
        <h2>Nati dalla <em>strada</em></h2>
        <p>{{ c.storyText1 }}</p>
        <p>{{ c.storyText2 }}</p>
      </div>
      <div class="story-image">
        <img :src="aboutImage" alt="La nostra palestra" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-story {
  background-color: var(--color-black);
  padding-block: var(--space-24);
}

.story-grid {
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--space-6);
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-12);
  align-items: center;
}

@media (min-width: 768px) {
  .story-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.story-text > span {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-4);
}

.story-text h2 {
  font-size: var(--text-4xl);
  color: var(--color-white);
  line-height: var(--leading-tight);
  margin-bottom: var(--space-6);
  text-wrap: balance;
}

.story-text h2 em {
  font-style: normal;
  color: var(--color-accent);
}

.story-text p {
  font-size: var(--text-base);
  color: var(--color-gray-400);
  line-height: var(--leading-loose);
  margin-bottom: var(--space-4);
}

.story-image img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  object-position: center;
}
</style>
