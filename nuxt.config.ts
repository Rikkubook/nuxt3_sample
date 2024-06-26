// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';


export default defineNuxtConfig({
  app:{
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
    }
  },
  css: [ '@/assets/css/main.css'],
  colorMode: {
    preference: "light",
  },
  alias: {
    '@images': resolve(__dirname, './assets/images'),
    '@scss': resolve(__dirname, './assets/scss'),
  },
  devServer: {
    port: 3100,
  },
  vite: {
    define: {
      "process.env": process.env,
    },
    envPrefix: 'API_'
  },
  devtools: { enabled: true },
  plugins: [
    "~/plugins/hello.js",
    "~/plugins/localStorage.js",
  ],
  modules: ['@pinia/nuxt', "@nuxt/image", "@nuxt/ui"],
  imports: {
    "dirs": ['stores']
  },
  image: {
    // domains: ["static.tpx.tw"],
    // alias: {
    //   wo5: "https://static.tpx.tw/sff/wo5/static/img/",
    // },
  },
})