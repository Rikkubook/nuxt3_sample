<template>
  <div>
    <h3>新聞頁</h3>
    <p>news get id from group: {{ $route.params.group }}</p>
    <p>{{ group }}</p>
    <br>
    <p>news get id from template: {{ $route.params.id }}</p>
    <p>{{ id }}</p>
  </div>
</template>

<script setup>
const route = useRoute();
const group = route.params.group;
const id = route.params.id
</script>

<style lang="scss" scoped>

</style>