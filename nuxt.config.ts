export default defineNuxtConfig({
  ssr: false,

  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxt/image'
  ],

  css: ['~/assets/css/main.css'],

  ui: {
    colorMode: false
  }
})