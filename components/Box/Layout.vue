<template>
  <div class="boxLayout">
    <slot />
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.boxLayout{
  border: 1px solid #000;
  background-color: gray;
  width: 50%;
}
</style>