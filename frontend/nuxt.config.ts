// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    public: {
      SOCKETIO_URL: process.env.SOCKETIO_URL,
      API_URL: process.env.API_URL,
      WEB_SOCKET_COMMUNICATION_URL:
        process.env.WEB_SOCKET_COMMUNICATION_URL
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-particles',
    'nuxt-mapbox',
    '@pinia/nuxt',
    '@tresjs/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Roboto: true
        }
      }
    ]
  ],
  // @ts-ignore
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
  },
  // @ts-ignore
  mapbox: {
    accessToken:
      'pk.eyJ1IjoieHBpZXJyZSIsImEiOiJjbG05anh5NW8wa3pkM3BvNTd6NTZ1Z2czIn0.8BcNWxnR7ru-MIyy6Y8-Tg'
  },
  components: [
    {
      path: '~/components/ui',
      extensions: ['.vue'],
      prefix: 'Ui'
    }
  ]
})
