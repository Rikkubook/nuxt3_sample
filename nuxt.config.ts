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
  devServer: {
    port: 3100,
  },
  devtools: { enabled: true },
  plugins: [
    "~/plugins/hello.js",
    "~/plugins/localStorage.js",
  ],
  alias: {
    '@images': resolve(__dirname, './assets/images'),
    '@scss': resolve(__dirname, './assets/scss'),
  },
  css: [ '@/assets/scss/all.scss'],
  modules: ['@pinia/nuxt'],
  imports: {
    "dirs": ['stores']
  }
})
