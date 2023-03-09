<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="hot">
        <div  v-for="item in groupData.hotCities" :key="item.cityId">
          <div class="city-name" @click="cityClick(item)">{{ item.cityName }}</div>
        </div>
      </div>
      <div v-for="(item,index) in groupData.cities" :key="index">
        <van-index-anchor :index="item.group"/>
        <van-cell v-for="city in item.cities" :key="city.cityId" :title="city.cityName" @click="cityClick(city)"/>
      </div>
    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import useCityStore from '@/stores/modules/city'
import router from "@/router";


const props = defineProps({
    groupData: {
      type: Object,
      default: () => ({}),
    },
  });
  // 右侧列表
  const indexList = computed(()=>{
    const list = props.groupData.cities.map(el=>el.group)
    list.unshift("#")
    return list
  })
  //点击城市, 存到store,跳转回上个页面
  const cityStore = useCityStore()
  const cityClick = (city) => {
    cityStore.currentCity = city
    router.back()
  }
</script>

<style lang="less" scoped>
  .city-group {
    font-size: 12px;
    color: #323233;
    font-weight: 500;
    .hot {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      padding: 10px 20px 10px 10px;

      .city-name {
        width: 70px;
        height: 28px;
        text-align: center;
        line-height: 28px;
        background-color: #fff4ec;
        border-radius: 14px;
        margin: 6px;
      }
    }
  }
</style>