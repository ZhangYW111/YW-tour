<template>
  <div class="topBar">
   <div class="left">
      <div>
        <div class="start">
      <span class="text">住</span>
      <span class="date">{{ startDateStr }}</span>
    </div>
    <div class="end">
      <span class="text">离</span>
      <span class="date">{{ endDateStr }}</span>
    </div>
      </div>
   </div>
   <div class="right">
      <span>关键字/位置/民宿</span>
      <van-icon name="search" size="25" color="#333"/>
   </div>
  </div>
</template>

<script setup>
  import useMainStore from '@/stores/modules/main';
  import { storeToRefs } from 'pinia';
  import { fomatMonthDate } from '@/utils/format_date'
  import { computed } from 'vue';
  // 拿到时间
  const mainStore = useMainStore()
  const { startDate, endDate } = storeToRefs(mainStore)
  // 格式化时间
  const startDateStr = computed(()=>fomatMonthDate(startDate.value, "MM.DD"))
  const endDateStr = computed(()=>fomatMonthDate(endDate.value, "MM.DD"))

</script>

<style lang="less" scoped>
  .topBar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 45px;
    padding: 16px 16px 10px;
    background-color: #fff;
    font-weight: 500;
    z-index: 9;
    .left {
      display: flex;
      align-items: center;
      background-color: #f2f4f6;
      padding-left: 10px;
      width: 56px;
      height: 45px;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      .start, .end {
        display: flex;
        justify-content: left;
        align-items: center;
      }
      .text {
        font-size: 12px;
        color: #999;
      }
      .date {
        font-size: 12px;
        color: #333;
        margin: 0 10px 0 3px;
      }
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #999;
      padding: 0 5px;
      background-color: #f2f4f6;
      border-left: 2px solid #fff;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
</style>