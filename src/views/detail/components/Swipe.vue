<template>
  <div class="home">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swipeData" :key="item.orderIndex">
        <img :src="item.url" alt="">
      </van-swipe-item>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
  const props = defineProps({
    swipeData: {
      type: Array,
      default: () => []
    }
  })

</script>

<style lang="less" scoped>
  .home {
    .my-swipe {
      img {
        width: 100%;
      }
      .custom-indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        font-size: 12px;
        color: #fff;
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }
</style>