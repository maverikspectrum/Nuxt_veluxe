export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'pt', name: 'Português', file: 'pt.js' },
      { code: 'es', name: 'Español', file: 'es.js' },
      { code: 'en', name: 'English', file: 'en.js' },
      { code: 'fr', name: 'Français', file: 'fr.js' },
      { code: 'de', name: 'Deutsch', file: 'de.js' },
      { code: 'it', name: 'Italiano', file: 'it.js' },
      { code: 'zh-CN', name: '中国人', file: 'zh-CN.js' }
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
  	
  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    }
  },
  
  components: true,
  compatibilityDate: '2025-02-21',
})
