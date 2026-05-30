export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/icon'],

  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap' },
      ],
    },
  },

  runtimeConfig: {
    public: {
      // Brand
      siteName: 'GymStarter',
      tagline:  'Forgia il tuo corpo. Ogni giorno, senza scuse.',

      // Colori
      colorAccent:    '#e8ff00',
      colorAccentAlt: '#ff3c3c',
      colorBlack:     '#0a0a0a',
      colorWhite:     '#f5f5f5',

      // Tipografia
      fontDisplay: "'Impact', 'Bebas Neue', sans-serif",
      fontBody:    "'Inter', 'Helvetica Neue', Arial, sans-serif",

      // Immagini
      heroImage:            '/images/hero.jpg',
      ctaImage:             '/images/cta.jpg',
      aboutImage:           '/images/about.jpg',
      servicePersonalImage: '/images/service-personal.jpg',
      serviceGroupImage:    '/images/service-group.jpg',
      serviceWeightsImage:  '/images/service-weights.jpg',
      serviceNutritionImage:'/images/service-nutrition.jpg',

      // Contatti
      address: 'Via Roma 1, 20100 Milano',
      phone:   '+39 02 1234567',
      email:   'info@gymstarter.it',

      // Hero
      heroEyebrow:    'Niente scuse',
      heroTitle:      'Forgia il tuo',
      heroTitleAccent:'corpo',
      heroSubtitle:   'Allenati con i migliori. Raggiungi risultati reali.',
      heroCta1:       'Inizia ora',
      heroCta2:       'Scopri di più',

      // CTA
      ctaTitle:       'Niente scuse',
      ctaButton:      'Unisciti a noi',

      // Orari
      hoursWeekday:   '06:00 — 23:00',
      hoursSaturday:  '08:00 — 21:00',
      hoursSunday:    '09:00 — 18:00',

      // Storia
      storyYear:  '2016',
      storyText1: 'Fondati nel 2016 da un gruppo di appassionati stanchi delle palestre patinate, abbiamo creato uno spazio dove conta solo una cosa: lavorare duro.',
      storyText2: 'Niente fronzoli, niente specchi inutili. Solo attrezzatura seria, trainer certificati e una comunità che si spinge a vicenda ogni giorno.',

      // Stats
      stat1Value: '500+', stat1Label: 'Membri attivi',
      stat2Value: '12',   stat2Label: 'Trainer certificati',
      stat3Value: '8',    stat3Label: 'Anni di esperienza',
      stat4Value: '95%',  stat4Label: 'Clienti soddisfatti',

      // Team
      member1Name: 'Marco Ricci',   member1Role: 'Head Coach & Fondatore',  member1Image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=400&fit=crop&crop=faces',
      member2Name: 'Sara Colombo',  member2Role: 'Nutrition Coach',          member2Image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&h=400&fit=crop&crop=faces',
      member3Name: 'Luca Ferrari',  member3Role: 'Personal Trainer',         member3Image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop&crop=faces',
    },
  },
})
