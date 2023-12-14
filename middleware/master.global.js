export default defineNuxtRouteMiddleware((to) => {
  if (to.meta.layout !== 'master') return
  console.log('masterMiddleware') // default 會是 undefined (有改就會有)

})