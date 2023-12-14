<template>
  <div>
    <p>{{ route.params.slug }}</p>
    <p>{{ error.statusCode }}</p>
    <p>這是錯誤頁面</p>
    <button @click="handleError">Clear errors</button>
  </div>
  <!-- <NuxtPage /> -->
</template>

<script setup>
const route = useRoute();
const event = useRequestEvent();
setResponseStatus(event, 404);

const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>
