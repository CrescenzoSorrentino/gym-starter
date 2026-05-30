<script setup lang="ts">
useSeoMeta({
  title: `Contatti — ${useRuntimeConfig().public.siteName}`,
  description: 'Vieni a trovarci. Orari, indirizzo e form di contatto.',
})
</script>

<template>
  <main>
    <PageHero
      tag="Contatti"
      title="Vieni a"
      accent="trovarci"
      subtitle="Siamo qui per rispondere a ogni domanda. Scrivici o passa direttamente."
    />
    <ContattiInfo />
    <ContattiMappa />
  </main>
</template>
