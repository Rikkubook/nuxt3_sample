<template>
  <div>
    <LayoutHeader />
    <slot />
    <LayoutFooter />
    <LayoutScrollTop />
    <LayoutMultimedia />
  </div>
</template>

<script setup>
/**
 * 因為 在errorPage時 LoadingBar會壞掉所以不可以引入同一個layout
 * @link [https://github.com/nuxt/nuxt/issues/25840]
 */
</script>
