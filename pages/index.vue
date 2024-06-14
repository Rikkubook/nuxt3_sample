<template>
  <h1>首頁</h1>

  <p class="bg-slate-300">{{ count }}</p>
  <Base />
  <BaseBtn>A</BaseBtn>
  <UButton
      class=""
      to="https://app.omceanbooking.com/wo5pilates/home"
      target="_blank"
      external
      >預約課程
    </UButton>
  <!-- <NuxtImg
      src="/wo5/index/pc_01.jpg"
      class="hidden w-full md:block"
      alt="WO5"
      width="1920"
      height="900"
      :placeholder="[1920, 900]"
      preload
    /> -->
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

// console.log("article", article);
// console.log("person", person);
</script>
