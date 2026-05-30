<script setup lang="ts">
useSeoMeta({
  title: `Chi siamo — ${useRuntimeConfig().public.siteName}`,
  description: 'Scopri la nostra storia, il nostro team e i valori che ci guidano ogni giorno.',
})
</script>

<template>
  <main>
    <PageHero
      tag="Chi siamo"
      title="Non è solo una"
      accent="palestra"
      subtitle="È un posto dove le persone serie vengono a fare cose serie."
    />
    <ChiSiamoStoria />
    <ChiSiamoValori />
    <ChiSiamoTeam />
  </main>
</template>
