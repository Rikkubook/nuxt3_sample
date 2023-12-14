import { defineStore } from "pinia";

export const useHomeStore = defineStore('home',()=>{
  let count = ref(0);
  const add = ()=> count.value ++;

  return {count, add}
})