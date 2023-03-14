<template>
  <div class="select-list">
    <h2 class="title">热门精选</h2>
    <div class="box">
      <div class="list" v-for="item in selectListData" :key="item.houseId">
        <!-- 两种展示模式,通过每一项的discoveryContentType来判断 -->
        <HouseItemType9 
          v-if="item.discoveryContentType === 9" 
          :itemData="item.data" 
          @click="clickItem(item.data.houseId)" 
        />
        <HouseItemType3 
          v-else-if="item.discoveryContentType === 3" 
          :itemData="item.data" 
          @click="clickItem(item.data.houseId)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import HouseItemType9 from "@/components/houseItem/HouseItemType9.vue"
  import HouseItemType3 from "@/components/houseItem/HouseItemType3.vue"
  import { useRouter } from "vue-router";
  const router = useRouter()

  defineProps({
    selectListData: {
      type: Array,
      default: () => []
    }
  })
  const clickItem = (houseId) => {
    router.push({
      path: '/detail',
      query: {
        houseId
      }
    })
  }

</script>

<style lang="less" scoped>
  .select-list {
    .title {
      font-size: 21px;
      margin: 15px 20px 0;
    }
    .box {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 12px;
    }
    .list {
      margin-top: 15px;
    }
  }
</style>