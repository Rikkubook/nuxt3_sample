<template>
  <div>
    <BaseLoading v-show="isLoading" />
    <BaseHeader />
    <slot />
    <BaseFooter />
  </div>
</template>

<script setup>
  const nuxtApp = useNuxtApp();
  const isLoading = ref(false);

  nuxtApp.hook("page:start", () => {
    isLoading.value = true; 
  });
  nuxtApp.hook("page:finish", () => {
    setTimeout(() => {
      isLoading.value = false;
    }, 200);
  });
</script>

