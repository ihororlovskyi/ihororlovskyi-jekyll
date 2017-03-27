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
  { key: 'sentimony' },
  { key: 'promorepublic' },
  { key: 'promorepublic-blog' },
  { key: 'masteroforion' },
  { key: 'worldofwarplanes' },
  { key: 'worldofwarplanes-blog' },
  { key: 'tripme' },
  { key: 'motionups' },
  { key: 'qubiostudio' },
  { key: 'artkb' },
  { key: 'iondigi' },
  { key: 'irukanji' },
  { key: 'aquadeep' },
  { key: 'lookinglook' },
  { key: 'ihororlovskyi' }
]

module.exports = {
  head: {
    titleTemplate: '%s | Ihor Orlovskyi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:image', content: 'https://ihororlovskyi.com/assets/img/og-images/og-ihororlovskyi.jpg' }
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
    routes: {
      '/site/:key': sitesCicle
    }
  }
}
