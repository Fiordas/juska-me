const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Kanit:700'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [
    {
      src: '~/assets/css/main.scss',
      lang: 'scss'
    },
    {
      src: '~/assets/css/transition.css',
      lang: 'css'
    },
    {
      src: 'swiper/dist/css/swiper.css',
      lang: 'css'
    }
  ],

  pageTransition: 'fade',

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/aos.js', mode: 'client' }, { src: '~/plugins/vue-awesome-swiper.js', mode: 'client' }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/fontawesome-free-brands',
            icons: ['faGithub', 'faLinkedin']
          }
        ]
      }
    ],
    'vue-scrollto/nuxt'
  ],

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
    /*
     ** You can extend webpack config here
     */
  },
  generate: {
    routes: ['/projects/secure-sneakers', '/projects/squad-lietuva']
  }
}
