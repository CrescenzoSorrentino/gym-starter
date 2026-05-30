<script setup lang="ts">
const { address, phone, email } = useContacts()
const c = useRuntimeConfig().public

const hours = [
  { day: 'Lunedì — Venerdì', time: c.hoursWeekday },
  { day: 'Sabato',            time: c.hoursSaturday },
  { day: 'Domenica',          time: c.hoursSunday },
]
</script>

<template>
  <section class="contact-main">
    <div class="contact-grid">

      <div class="contact-info">
        <div class="info-block">
          <h3>Dove siamo</h3>
          <p><Icon name="heroicons:map-pin" />{{ address }}</p>
        </div>

        <div class="info-block">
          <h3>Orari</h3>
          <ul>
            <li v-for="h in hours" :key="h.day">
              <span class="day">{{ h.day }}</span>
              <span class="time">{{ h.time }}</span>
            </li>
          </ul>
        </div>

        <div class="info-block">
          <h3>Contatti diretti</h3>
          <p><Icon name="heroicons:phone" />{{ phone }}</p>
          <p><Icon name="heroicons:envelope" />{{ email }}</p>
        </div>
      </div>

      <form class="contact-form">
        <h3>Scrivici</h3>

        <div class="form-group">
          <label for="name">Nome</label>
          <input id="name" type="text" placeholder="Il tuo nome" />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" placeholder="La tua email" />
        </div>

        <div class="form-group">
          <label for="message">Messaggio</label>
          <textarea id="message" rows="5" placeholder="Come possiamo aiutarti?"></textarea>
        </div>

        <BaseButton>Invia messaggio</BaseButton>
      </form>

    </div>
  </section>
</template>

<style scoped>
.contact-main {
  background-color: var(--color-black);
  padding-block: var(--space-24);
}

.contact-grid {
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--space-6);
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-16);
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-12);
  }
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
}

.info-block h3 {
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-4);
}

.info-block p {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--color-gray-200);
  margin-bottom: var(--space-2);
}

.info-block ul {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.info-block li {
  display: flex;
  justify-content: space-between;
  font-size: var(--text-sm);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: var(--space-3);
}

.day { color: var(--color-gray-400); }
.time { color: var(--color-white); font-weight: var(--font-weight-medium); }

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.contact-form h3 {
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-accent);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.form-group label {
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-gray-400);
}

.form-group input,
.form-group textarea {
  background-color: var(--color-gray-800);
  border: 1px solid var(--color-border);
  color: var(--color-white);
  padding: var(--space-4);
  font-size: var(--text-sm);
  outline: none;
  resize: none;
  transition: border-color var(--transition-fast);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--color-gray-400);
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--color-accent);
}
</style>
