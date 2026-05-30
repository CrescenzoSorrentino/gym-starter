export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const root = document.documentElement

  // Colori
  root.style.setProperty('--color-accent',     config.public.colorAccent)
  root.style.setProperty('--color-accent-alt', config.public.colorAccentAlt)
  root.style.setProperty('--color-black',      config.public.colorBlack)
  root.style.setProperty('--color-white',      config.public.colorWhite)

})
