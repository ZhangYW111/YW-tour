<template>
  <div class="home">
    <!-- 顶部 -->
    <NavBar />
    <!-- banner -->
    <div>
      <img class="banner" src="@/assets/img/home/banner.webp" alt="">
    </div>
    <!-- 主要区域 -->
    <MainComponent :hotSuggestsData="hotSuggests" :categoriesData="categories"/>
    <div v-if="topBar">搜索框</div>
    <!-- 精选 -->
    <SelectList :selectListData="selectList" />
  </div>
</template>

<script setup>
  import NavBar from './components/NavBar.vue'
  import MainComponent from './components/MainComponent.vue'
  import SelectList from './components/SelectList.vue'
  import { hotSuggestsAPI, getCategoriesAPI, getSelectListAPI } from '@/api/home/home'
  import { ref } from "vue"

  // 热门推荐数据请求
  const hotSuggests = ref()
  hotSuggestsAPI().then(res => {
    hotSuggests.value = res.data.data
  })
  // 分类栏数据请求
  const categories = ref()
  getCategoriesAPI().then(res => {
    categories.value = res.data.data
  })
  // 精选列表数据请求
  const selectList = ref([])
  let currentPage = 1 // 分页
  const getSelectList = (currentPage) => {
    getSelectListAPI(currentPage).then(res => {
      selectList.value.push(...res.data.data) // 将数组push进另一个会造成数组嵌套, 用...取出
    })
  }
  getSelectList(currentPage)
  // 监听window滚动到底部
  window.addEventListener("scroll", () => {
    const clientHeight = document.documentElement.clientHeight
    const scrollTop = Math.ceil(document.documentElement.scrollTop)
    const scrollHeight = document.documentElement.scrollHeight
    // 到底部加载更多
    if(clientHeight + scrollTop >= scrollHeight) {
      currentPage++
      getSelectList(currentPage)
    }
  })
  // 吸顶搜索栏
  const topBar = ref(false)
  window.addEventListener("scroll", () => {
    const scrollTop = Math.ceil(document.documentElement.scrollTop)
    if(scrollTop > 100) {
      topBar.value = true
    }
    if(scrollTop <100) {
      topBar.value = false
    }
  })
</script>

<style lang="less" scoped>
  .home {
    padding-bottom: 51px;
  }
  .banner {
    width: 100%;
  }

</style>