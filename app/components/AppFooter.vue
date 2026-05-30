<script setup lang="ts">
const config = useRuntimeConfig()
const links = useNavLinks()
const { address, phone, email } = useContacts()
const contacts = [
  { icon: 'heroicons:map-pin', text: address },
  { icon: 'heroicons:phone', text: phone },
  { icon: 'heroicons:envelope', text: email },
]

const socials = [
  { icon: 'mdi:instagram', href: '#' },
  { icon: 'mdi:facebook', href: '#' },
  { icon: 'mdi:youtube', href: '#' },
  { icon: 'mdi:tiktok', href: '#' },
]
</script>

<template>
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <NuxtLink to="/" class="footer-logo">{{ config.public.siteName }}</NuxtLink>
        <p>{{ config.public.tagline }}</p>
      </div>

      <div class="footer-col">
        <h4>Link rapidi</h4>
        <ul>
          <li v-for="link in links" :key="link.to">
            <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Contatti</h4>
        <ul>
          <li v-for="contact in contacts" :key="contact.text">
            <Icon :name="contact.icon" />
            <span>{{ contact.text }}</span>
          </li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Seguici</h4>
        <ul class="footer-socials">
          <li v-for="social in socials" :key="social.icon">
            <a :href="social.href" target="_blank" rel="noopener">
              <Icon :name="social.icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} {{ config.public.siteName }}. Tutti i diritti riservati.</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--color-gray-900);
  border-top: 1px solid var(--color-border);
}

.footer-grid {
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--space-6);
  padding-block: var(--space-16);
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-12);
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: var(--space-8);
  }
}

/* brand */
.footer-logo {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  letter-spacing: var(--tracking-wide);
  color: var(--color-white);
  text-transform: uppercase;
  display: inline-block;
  margin-bottom: var(--space-4);
}

.footer-logo:hover {
  color: var(--color-accent);
}

.footer-brand p {
  font-size: var(--text-sm);
  color: var(--color-gray-400);
  line-height: var(--leading-loose);
  max-width: 240px;
}

/* colonne */
.footer-col h4 {
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wider);
  color: var(--color-white);
  margin-bottom: var(--space-6);
}

.footer-col ul {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer-col ul li {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.footer-col a,
.footer-col span {
  font-size: var(--text-sm);
  color: var(--color-gray-400);
  transition: color var(--transition-fast);
}

.footer-col a:hover {
  color: var(--color-accent);
}

/* social */
.footer-socials {
  flex-direction: row !important;
  gap: var(--space-4) !important;
}

.footer-socials a {
  font-size: var(--text-xl);
  color: var(--color-gray-400);
  transition: color var(--transition-fast);
}

.footer-socials a:hover {
  color: var(--color-accent);
}

/* bottom */
.footer-bottom {
  border-top: 1px solid var(--color-border);
  padding-block: var(--space-6);
  padding-inline: var(--space-6);
  max-width: var(--container-max);
  margin-inline: auto;
}

.footer-bottom p {
  font-size: var(--text-xs);
  color: var(--color-gray-400);
  letter-spacing: var(--tracking-wide);
}
</style>
