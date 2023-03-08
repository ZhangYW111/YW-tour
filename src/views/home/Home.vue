<template>
  <div class="home">
    <!-- 顶部 -->
    <NavBar />
    <!-- banner -->
    <img class="banner" src="@/assets/img/home/banner.webp" alt="">
    <!-- 位置 -->
    <div class="place">
      <div class="city">广州</div>
      <div class="my">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
  import NavBar from './nav-bar/NavBar.vue'
</script>

<style lang="less" scoped>
  .banner {
    width: 100%;
  }
  .place {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 45px;
    font-size: 15px;
    font-weight: lighter;
    // background-color: pink;

    .my {
      display: flex;
      align-items: center;
      font-size: 12px;

      .text {
        margin-right: 8px;
      }

      img {
        width: 18px;
        height: 18px;
      }
    }
  }
</style>