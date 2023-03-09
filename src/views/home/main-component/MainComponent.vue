<template>
  <div class="main-component">
    <!-- 位置 -->
    <div class="place">
      <div class="city" @click="clickCity">{{ cityStore.currentCity.cityName }}</div>
      <div class="my">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from "vue-router"
  import useCityStore from "@/stores/modules/city";
  const cityStore = useCityStore()

  const router = useRouter()
  
  const clickCity = () => {
    router.push("/city")
  }
</script>

<style lang="less" scoped>
  .place {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 45px;
    font-size: 15px;
    font-weight: lighter;
    color: #333;

    .my {
      display: flex;
      align-items: center;
      font-size: 12px;

      .text {
        margin-right: 8px;
        color: #666;
      }

      img {
        width: 18px;
        height: 18px;
      }
    }
  }
</style>