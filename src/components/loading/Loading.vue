<template>
  <div class="loading" v-if="mianStore.isLoading" @click="isLoading">
    <div>
      <img src="@/assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>
  import useMainStore from '@/stores/modules/main';

  const mianStore = useMainStore()
  const isLoading = () => {
    mianStore.isLoading = false
  }
</script>

<style lang="less" scoped>
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0,0,0,.3);
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 104px;
      height: 104px;
      background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;
    }
    img {
      width: 70px;
      height: 70px;
      margin-bottom: 10px;
    }
  }
</style>