export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'pt', name: 'Português', file: 'pt.js' },
      { code: 'en', name: 'English', file: 'en.js' },
      { code: 'fr', name: 'Français', file: 'fr.js' }
    ],
    lazy: true, 
    langDir: 'lang/', 
    defaultLocale: 'pt', 
    fallbackLocale: 'pt',
  },
  css: [
    '@/assets/css/tailwind.css',
    '@fortawesome/fontawesome-free/css/all.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  components: true,
  compatibilityDate: '2025-02-21',
})
