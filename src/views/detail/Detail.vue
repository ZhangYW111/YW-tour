<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="返回"
      left-arrow
      @click-left="clickBack"
    />
    <!-- 轮播,因为数据是请求到的,v-if确保mainPart不为undefined -->
    <Swipe :swipeData="mainPart.topModule.housePicture.housePics" v-if="mainPart" />
    <!-- 同上，加？也可以 -->
    <Infos :DetailInfo="mainPart?.topModule"/>
    <ContentModule />
  </div>
</template>

<script setup>
  import Swipe from './components/Swipe.vue'
  import Infos from './components/Infos.vue'
  import ContentModule from './components/ContentModule.vue'
  import { ref, computed } from "vue";
  import { useRouter, useRoute } from "vue-router";
  import { getDetailInfo } from "@/api/detail/detail";
  const router = useRouter();
  const route = useRoute();

  // 返回
  const clickBack = () => {
    router.back();
  };

  // 获取详情数据
  const detailData = ref({});
  const mainPart = computed(() => detailData.value.mainPart);
  getDetailInfo(route.query.houseId).then((res) => {
    console.log(res.data.data);
    detailData.value = res.data.data;
  });
</script>

<style lang="less" scoped>
  :deep(.van-nav-bar__text) {
    color: var(--primary-color);
  }
  :deep(.van-nav-bar__left i) {
    color: var(--primary-color);
  }
  :deep(.van-nav-bar__title) {
    font-weight: 400;
  }
  :deep(.van-nav-bar__title) {
    color: var(--primary-color);
  }
</style>