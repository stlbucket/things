export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'things',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://github.com/nuxt-community/apollo-module
    '@nuxtjs/apollo',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config, { isDev, isClient }) {
      config.node = {
        fs: 'empty',
        dgram: 'empty',
        dns: 'empty',
        tls: 'empty',
        // 'pg-native': 'empty',
        net: 'empty'
      }
    }
  },

  apollo: {
    clientConfigs: {
        default: {
          httpEndpoint: process.env.GRAPHQL_ENDPOINT || 'http://localhost:3000/graphql',
          httpLinkOptions: {
                credentials: 'same-origin'
            },
            // tokenName: 'UJSSESSID'
        }
    },
    // authenticationType: 'Bearer'
  },

  serverMiddleware: ['~/api/postgraphile']
}
