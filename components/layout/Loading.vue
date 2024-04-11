<template>
  <div class="load-wrapper">
    <div class="load-wrapper-bg"></div>
    <div class="load-1">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>
</template>

<style scoped>

.load-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  text-align: center;
}
.load-wrapper-bg{
  position: absolute;
  width: 100vw;
  height: 100vh;

  background-color: rgba(70, 70, 70, 0.3);
}
@keyframes loadingA {
  0% { height: 15px; }
  50% {
    height: 35px;
  }
  100% {
    height: 15px;
  }
}
.load-1{
 position: absolute;
 z-index: 1;
}
.line {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: #4b9cdb;
  margin-right: 5px;
}
.load-1 .line:nth-last-child(1) {
  animation: loadingA 1.5s 1s infinite;
}
.load-1 .line:nth-last-child(2) {
  animation: loadingA 1.5s 0.5s infinite;
}
.load-1 .line:nth-last-child(3) {
  animation: loadingA 1.5s 0s infinite;
}
</style>