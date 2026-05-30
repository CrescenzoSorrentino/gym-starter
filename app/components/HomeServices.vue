<script setup lang="ts">
const c = useRuntimeConfig().public
const services = [
  {
    icon: 'heroicons:bolt',
    image: c.servicePersonalImage,
    title: 'Personal Training',
    description: 'Allenamenti su misura con coach certificati. Raggiungi i tuoi obiettivi più velocemente.',
  },
  {
    icon: 'heroicons:user-group',
    image: c.serviceGroupImage,
    title: 'Corsi di Gruppo',
    description: 'HIIT, Boxe, Yoga e molto altro. Energia collettiva per spingere oltre i tuoi limiti.',
  },
  {
    icon: 'heroicons:fire',
    image: c.serviceWeightsImage,
    title: 'Sala Pesi',
    description: 'Attrezzatura professionale, spazio ampio, atmosfera seria. Solo per chi vuole davvero.',
  },
  {
    icon: 'heroicons:heart',
    image: c.serviceNutritionImage,
    title: 'Nutrizione',
    description: 'Piani alimentari personalizzati per massimizzare i risultati dentro e fuori dalla palestra.',
  },
]
</script>

<template>
  <section class="services">
    <div class="services-inner">
      <div class="services-header">
        <span>Cosa offriamo</span>
        <h2>Tutto ciò di cui <em>hai bisogno</em></h2>
      </div>

      <ul class="services-grid">
        <li
          v-for="(service, index) in services"
          :key="service.title"
          class="service-card"
          :style="{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.3)), url(${service.image})` }"
        >
          <span class="service-number">{{ String(index + 1).padStart(2, '0') }}</span>
          <div class="service-content">
            <Icon :name="service.icon" class="service-icon" />
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.services {
  background-color: var(--color-gray-900);
  padding-block: var(--space-24);
}

.services-inner {
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--space-6);
}

.services-header {
  margin-bottom: var(--space-16);
}

.services-header > span {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-4);
}

.services-header h2 {
  font-size: var(--text-4xl);
  color: var(--color-white);
  line-height: var(--leading-tight);
  text-wrap: balance;
}

.services-header h2 em {
  font-style: normal;
  color: var(--color-accent);
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

.service-card {
  position: relative;
  min-height: 360px;
  border: 1px solid var(--color-border);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: cover;
  background-position: center;
}


.service-number {
  position: absolute;
  top: var(--space-2);
  right: var(--space-4);
  font-family: var(--font-display);
  font-size: var(--text-6xl);
  color: rgba(255,255,255,0.15);
  line-height: 1;
  user-select: none;
  pointer-events: none;
}

.service-content {
  padding: var(--space-8);
}

.service-icon {
  font-size: var(--text-3xl);
  color: var(--color-accent);
  margin-bottom: var(--space-4);
}

.service-card h3 {
  font-size: var(--text-xl);
  color: var(--color-white);
  margin-bottom: var(--space-3);
  text-wrap: balance;
  max-width: 60%;
}

.service-card p {
  font-size: var(--text-sm);
  color: var(--color-gray-400);
  line-height: var(--leading-loose);
}

@media (min-width: 640px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .services-header h2 {
    font-size: var(--text-5xl);
  }
}
</style>
