<template>
  <div class="tab-bar" v-if="!route.meta.hideTabBar">
    <div class="tab-bar-item" 
      v-for="(item, index) in tabbatData" 
      :key="index"
      @click="currentClick(index, item)"
      >
      <img :src="currentIndex === index ? getAssetURL(item.imageActive) : getAssetURL(item.image)" alt="">
      <span :class="{ active:currentIndex === index }">{{ item.text }}</span>
    </div>
  </div>
</template>

<script setup>
  import tabbatData from "@/assets/data/tabbar"
  import { ref } from 'vue'
  import { useRoute, useRouter } from "vue-router";

  const router = useRouter()
  const route = useRoute()

  const getAssetURL = image => {
    return new URL(`../../assets/img/${image}`, import.meta.url).href
  }
  const currentIndex = ref(0)
  const currentClick = (index, item) => {
    currentIndex.value = index
    router.push(item.path)
  }
</script>

<style lang="less" scoped>
  .tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    text-align: center;
    border-top: 1px solid #edecec;
    background-color: #fff;

    .tab-bar-item {
      flex: 1;
      font-size: 12px;
      
      span {
        display: block;
        margin-top: 3px;
      }

      img {
        width: 35px;
      }

      .active {
        color: var(--primary-color);
      }
    }
  }
</style>