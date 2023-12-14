<template>
  <h1>news</h1>
  <p>{{  data }}</p>
  <p>{{  data.age }}</p>
  <p>{{  data.postData.hello }}</p>
</template>

<script setup>
const { data } = await useFetch('/api/test', {
  method: 'POST',
  body: { hello:'world'}
});

</script>