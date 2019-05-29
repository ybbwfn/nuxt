import pkg from './package'
const apiConfig = require('./config/apiConfig')
export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'vue-ydui/dist/ydui.rem.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/ydui', ssr: false },
    { src: '@/plugins/ydui.flexible', ssr: false },
    { src: '@/plugins/axios' },
    { src: '@/plugins/common'},

  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    proxy: true,
    prefix: '/api', // baseURL
    credentials: true,
  },
  proxy: {
    '/api': {
      target: 'http://zyhq.yihaoss.top', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', //将 /api 替换掉
      },
    },
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    extractCSS: { allChunks: true },
  },
  router: {
    base: '/ceshi/'
  }
}
