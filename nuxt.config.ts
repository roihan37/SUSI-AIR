export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxt/image',
    '@netlify/nuxt'
  ],

  css: ['~/assets/css/main.css'],

  ui: {
    colorMode: false
  }
})