<script setup lang="ts">
const values = [
  { icon: 'heroicons:bolt', title: 'Intensità', description: 'Ogni allenamento è pensato per spingerti oltre i tuoi limiti.' },
  { icon: 'heroicons:users', title: 'Comunità', description: 'Non sei solo. Qui trovi persone che condividono la tua stessa mentalità.' },
  { icon: 'heroicons:shield-check', title: 'Qualità', description: 'Attrezzatura professionale e trainer certificati per risultati reali.' },
  { icon: 'heroicons:arrow-trending-up', title: 'Progressione', description: 'Monitoriamo ogni tuo miglioramento. Niente è lasciato al caso.' },
]
</script>

<template>
  <section class="about-values">
    <div class="values-inner">
      <div class="values-header">
        <span>I nostri valori</span>
        <h2>Cosa ci <em>guida</em></h2>
      </div>
      <ul class="values-grid">
        <li v-for="value in values" :key="value.title" class="value-card">
          <Icon :name="value.icon" class="value-icon" />
          <h3>{{ value.title }}</h3>
          <p>{{ value.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.about-values {
  background-color: var(--color-gray-900);
  padding-block: var(--space-24);
}

.values-inner {
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--space-6);
}

.values-header {
  margin-bottom: var(--space-16);
}

.values-header > span {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-4);
}

.values-header h2 {
  font-size: var(--text-4xl);
  color: var(--color-white);
  line-height: var(--leading-tight);
  text-wrap: balance;
}

.values-header h2 em {
  font-style: normal;
  color: var(--color-accent);
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .values-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .values-grid { grid-template-columns: repeat(4, 1fr); }
}

.value-card {
  background-color: var(--color-gray-800);
  border: 1px solid var(--color-border);
  padding: var(--space-8);
}

.value-icon {
  font-size: var(--text-3xl);
  color: var(--color-accent);
  margin-bottom: var(--space-4);
}

.value-card h3 {
  font-size: var(--text-xl);
  color: var(--color-white);
  margin-bottom: var(--space-3);
}

.value-card p {
  font-size: var(--text-sm);
  color: var(--color-gray-400);
  line-height: var(--leading-loose);
}
</style>
