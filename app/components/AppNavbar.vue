<script setup lang="ts">
const isOpen = ref(false);

const links = useNavLinks();

watch(isOpen, (value) => {
  document.body.style.overflow = value ? "hidden" : "";
});
</script>

<template>
  <header>
    <nav>
      <NuxtLink to="/">{{ useRuntimeConfig().public.siteName }}</NuxtLink>
      <ul class="nav-links">
        <li v-for="link in links" :key="link.to">
          <NuxtLink :to="link.to"> {{ link.label }} </NuxtLink>
        </li>
      </ul>

      <button
        class="menu-toggle"
        @click="isOpen = !isOpen"
        :class="{ 'is-open': isOpen }"
      >
        <Icon v-if="!isOpen" name="heroicons:bars-3" size="28" />
        <Icon v-else name="heroicons:x-mark" size="28" />
      </button>
    </nav>
  </header>

  <Teleport to="body">
    <div v-if="isOpen" class="mobile-menu">
      <ul>
        <li v-for="link in links" :key="link.to">
          <NuxtLink :to="link.to" @click="isOpen = false">
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </Teleport>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--color-gray-900);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-4) var(--space-6);
  max-width: var(--container-max);
  margin-inline: auto;
}

/* logo */
nav > a {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  letter-spacing: var(--tracking-wide);
  color: var(--color-white);
  text-transform: uppercase;
  transition: color var(--transition-fast);
}

nav > a:hover {
  color: var(--color-accent);
}

/* nav desktop */
.nav-links {
  display: none;
}

.nav-links a {
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-gray-200);
  transition: color var(--transition-fast);
}

.nav-links a:hover {
  color: var(--color-accent);
}

/* burger button */
.menu-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-white);
  padding: var(--space-2);
  transition: color var(--transition-fast);
}

.menu-toggle:hover {
  color: var(--color-accent);
}

@media (min-width: 768px) {
  .menu-toggle {
    display: none;
  }

  .nav-links {
    display: flex;
    gap: var(--space-8);
  }
}
</style>
