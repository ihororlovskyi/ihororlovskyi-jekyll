let sitesCicle = [
  { key: 'bbq-agency' },
  { key: 'codereamer' },
  { key: 'coriolan-ui' },
  { key: 'nebo' },
  { key: 'newsman' },
  { key: 'mcriviera' },
  { key: 'skoryk' },
  { key: 'vatmanman' },
  { key: 'rooooster' },
  { key: 'ihororlovskyi' }
]

module.exports = {
  head: {
    titleTemplate: '%s | Ihor Orlovskyi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/ihororlovskyi-vuejs.appspot.com/o/og-ihororlovskyi.jpg?alt=media&token=05c9dc4d-3897-4fb2-99c7-e658ba0b2629' }
    ],
    link: [
      { rel: 'shortcut icon', href: '/assets/img/favicons/favicon-32.png' },
      { rel: 'apple-touch-icon', href: '/assets/img/favicons/favicon-144.png' }
    ]
  },
  loading: {
    color: '#666',
    height: '4px'
  },
  plugins: [
    '~plugins/google-analytics.js',
    '~plugins/yandex-metrika.js'
  ],
  build: {
    vendor: ['axios']
  },
  generate: {
    routeParams: {
      '/site/:key': sitesCicle
    }
  }
}
