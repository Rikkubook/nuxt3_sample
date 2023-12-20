// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';


export default defineNuxtConfig({
  ssr: false,
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
