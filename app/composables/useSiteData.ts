export const useNavLinks = () => [
  { label: 'Chi siamo', to: '/chi-siamo' },
  { label: 'Contatti', to: '/contatti' },
]

export const useContacts = () => {
  const config = useRuntimeConfig()
  return {
    address: config.public.address,
    phone:   config.public.phone,
    email:   config.public.email,
  }
}
