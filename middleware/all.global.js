export default defineNuxtRouteMiddleware((to) => {
  console.log('allMiddleware') // default 會是 undefined (有改就會有)
})