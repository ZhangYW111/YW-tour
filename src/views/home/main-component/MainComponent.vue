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
    <!-- 日期 -->
    <div class="data">
      <div class="entry-data">
        <span>入住</span>
        <div @click="showCalendar=true">{{ startDate }}</div>
      </div>
      <div class="duration">共{{ stayCount }}晚</div>
      <div class="leave-data">
        <span>离店</span>
        <div @click="showCalendar=true">{{ endDate }}</div>
      </div>
      <!-- 日历组件 -->
      <van-calendar v-model:show="showCalendar" type="range" @confirm="onConfirm"  color="#ff9854"/>
    </div>
    <!-- 价格/人数/关键字 -->
    <div class="selectOption">
      <div class="price">价格不限</div>
      <div class="num">人数不限</div>
    </div>
    <div class="keywords">关键字/位置/民宿</div>
    <!-- 热门建议 -->
    <div class="hot-suggests">
      <span v-for="item in hotSuggestsData">{{ item.tagText.text }}</span>
    </div>
    <div class="search" @click="searchClick">开始搜索</div>
  </div>
</template>

<script setup>
  import { useRouter } from "vue-router"
  import useCityStore from "@/stores/modules/city";
  import { fomatMonthDate, getDiffDays } from "@/utils/format_date";
  import { ref } from "vue";
  const cityStore = useCityStore()
  const router = useRouter()
  defineProps({
    hotSuggestsData:{
      type: Array,
      default:() => []
    }
  })
  
  // 点击城市选择
  const clickCity = () => {
    router.push("/city")
  }
  // 日期处理
  const nowDate = new Date()
  const newDate = new Date()
  newDate.setDate(nowDate.getDate()+1)
  const startDate = ref(fomatMonthDate(nowDate))
  const endDate = ref(fomatMonthDate(newDate))

  const showCalendar = ref(false)
  const stayCount = ref(getDiffDays(nowDate,newDate))
  const onConfirm = (values) => {
    startDate.value = fomatMonthDate(values[0])
    endDate.value = fomatMonthDate(values[1])
    stayCount.value = getDiffDays(values[0],values[1])
    showCalendar.value = false
  };

  //点击搜索
  const searchClick = () =>{
    router.push('/search')
  }

</script>

<style lang="less" scoped>
  .main-component {
    font-size: 12px;
    color: #999;
    font-weight: 500;
  }
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
  .data {
    display: flex;
    justify-content: space-between;
    padding: 0 40px;


    .entry-data {
      text-align: center;
      div {
        font-size: 15px;
        color: #333;
        margin-top: 5px;
      }
    }
    .duration {
      line-height: 44px;
    }
    .leave-data {
      text-align: center;
      div {
        margin-top: 5px;
        font-size: 15px;
        color: #333;
      }
    }
  }
  .selectOption {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    font-size: 14px;
    padding: 0 40px;
    border-bottom: 1px solid #f4f3f3;
    border-top: 1px solid #f4f3f3;
  }
  .keywords {
    font-size: 14px;
    line-height: 44px;
    height: 44px;
    padding: 0px 20px;
    border-bottom: 1px solid #f4f3f3;
  }
  .hot-suggests {
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0px;
    padding: 0px 20px;
    span {
      color: #3f4954;
      margin: 3px;
      padding: 4px 8px;
      background-color: #f1f3f5;
      border-radius: 14px;
    }
  }
  .search {
    height: 38px;
    font-size: 18px;
    color:#fff;
    border-radius: 20px;
    text-align: center;
    line-height: 38px;
    margin: 0 20px;
    background-image: var(--theme-linear-gradient);
  }
</style>