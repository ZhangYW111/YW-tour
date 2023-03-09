<template>
  <div class="home">
    <!-- 顶部 -->
    <NavBar />
    <!-- banner -->
    <div>
      <img class="banner" src="@/assets/img/home/banner.webp" alt="">
    </div>
    <!-- 主要区域 -->
    <MainComponent />
  </div>
</template>

<script setup>
  import NavBar from './nav-bar/NavBar.vue'
  import MainComponent from './main-component/MainComponent.vue'
</script>

<style lang="less" scoped>
  .banner {
    width: 100%;
  }

</style>