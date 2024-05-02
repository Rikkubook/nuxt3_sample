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

const api = import.meta.env;

const { data: article } = await useAsyncData("article", () =>
  $fetch(api.API_ARTICLE_LIST),
);

const { data: person } = await useFetch("https://randomuser.me/api/");

console.log("article", article);
console.log("person", person);
</script>
