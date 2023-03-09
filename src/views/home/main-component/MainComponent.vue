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
  </div>
</template>

<script setup>
  import { useRouter } from "vue-router"
  import useCityStore from "@/stores/modules/city";
  import { fomatMonthDate, getDiffDays } from "@/utils/format_date";
import { ref } from "vue";
  const cityStore = useCityStore()

  const router = useRouter()
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
</style>