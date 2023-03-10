<template>
  <div class="home">
    <!-- 顶部 -->
    <NavBar />
    <!-- banner -->
    <div>
      <img class="banner" src="@/assets/img/home/banner.webp" alt="">
    </div>
    <!-- 主要区域 -->
    <MainComponent :hotSuggestsData="hotSuggests"/>
  </div>
</template>

<script setup>
  import NavBar from './nav-bar/NavBar.vue'
  import MainComponent from './main-component/MainComponent.vue'
  import { hotSuggestsAPI } from '@/api/home/home'
  import { ref } from "vue"

  // 热门推荐数据请求
  const hotSuggests = ref()
  hotSuggestsAPI().then(res => {
    console.log(res);
    hotSuggests.value = res.data.data
  })

</script>

<style lang="less" scoped>
  .banner {
    width: 100%;
  }

</style>