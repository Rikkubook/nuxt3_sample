import { useNotification } from "@kyvg/vue3-notification";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (msg) => `Hello ${msg}!`
    }
  }
})
