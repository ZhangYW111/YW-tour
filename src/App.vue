<template>
  <h2>
    <router-view />
    <TabBar />
    <Loading />
  </h2>
</template>

<script setup>
  import TabBar from '@/components/tabbar/TabBar.vue'
  import Loading from './components/loading/Loading.vue';
</script>

<style lang="less" scoped>

</style>