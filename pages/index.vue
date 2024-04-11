<template>
  <h1>首頁</h1>
  <Box />
  <p>{{ count }}</p>
  <BaseBtn>A</BaseBtn>
  <button @click="store.add">notify</button>
</template>

<script setup>
// import { useHomeStore } from '@store/useHomeStore'
// import '@scss/all.scss';

const store = useHomeStore();
const { count } = storeToRefs(store);
</script>
