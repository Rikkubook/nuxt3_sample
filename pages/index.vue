<template>
  <h1>首頁</h1>
  <Box />
  <p>{{  count }}</p>
 
  <button @click="store.add">notify</button>
</template>

<script setup>
// import { useHomeStore } from '@store/useHomeStore'
// import '@scss/all.scss';

const store = useHomeStore()
const { count } = storeToRefs(store)

</script>