<script setup lang="ts">
const c = useRuntimeConfig().public
const team = [
  { name: c.member1Name, role: c.member1Role, image: c.member1Image },
  { name: c.member2Name, role: c.member2Role, image: c.member2Image },
  { name: c.member3Name, role: c.member3Role, image: c.member3Image },
]
</script>

<template>
  <section class="about-team">
    <div class="team-inner">
      <div class="team-header">
        <span>Il team</span>
        <h2>Le persone <em>dietro</em> tutto</h2>
      </div>
      <ul class="team-grid">
        <li v-for="member in team" :key="member.name" class="team-card">
          <div class="team-photo">
            <img :src="member.image" :alt="member.name" />
          </div>
          <h3>{{ member.name }}</h3>
          <p>{{ member.role }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.about-team {
  background-color: var(--color-black);
  padding-block: var(--space-24);
  border-top: 1px solid var(--color-border);
}

.team-inner {
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--space-6);
}

.team-header {
  margin-bottom: var(--space-16);
}

.team-header > span {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-4);
}

.team-header h2 {
  font-size: var(--text-4xl);
  color: var(--color-white);
  line-height: var(--leading-tight);
  text-wrap: balance;
}

.team-header h2 em {
  font-style: normal;
  color: var(--color-accent);
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
}

@media (min-width: 640px) {
  .team-grid { grid-template-columns: repeat(3, 1fr); }
}

.team-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.team-photo img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: top;
}

@media (min-width: 768px) {
  .team-photo img {
    filter: grayscale(100%);
    transition: filter var(--transition-normal);
  }

  .team-photo img:hover {
    filter: grayscale(0%);
  }
}

.team-card h3 {
  font-size: var(--text-xl);
  color: var(--color-white);
}

.team-card p {
  font-size: var(--text-sm);
  color: var(--color-accent);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}
</style>
