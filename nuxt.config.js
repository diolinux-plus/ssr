module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'diolinux',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Diolinux plus' },
      { name:'robots', content:'noindex' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Create middleware i18n
  */
  router: {
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js'],

  /*
  ** Generate folders
  */
  generate: {
    minify: {
      removeOptionalTags: false,
      collapseWhitespace: true,
      removeComments: true,
    },
    routes: ['/', '/about', '/en', '/en/about']
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
