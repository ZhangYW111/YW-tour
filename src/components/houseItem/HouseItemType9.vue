<template>
  <div class="house-item-type">
    <img :src="itemData.image.url" alt="">
    <div class="content">
      <div class="summary">{{ itemData.summaryText }}</div>
      <div class="text">{{ itemData.houseName }}</div>
      <div class="bottom">
        <van-rate :model-value="Number(itemData.commentScore)" allow-half size="12" color="#fff" gutter="2"/>
        <span>¥{{ itemData.finalPrice }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    itemData:{
      type: Object,
      default: () => {}
    }
  })
</script>

<style lang="less" scoped>
  .house-item-type {
    position: relative;
    width: 170px;
    height: 226px;
    border-radius: 8px;

    img {
      width: 100%;
      border-radius: 8px;
    }

    .content {
      position: absolute;
      bottom: 0;
      padding: 10px;
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      .summary {
        font-size: 12px;
      }
      .text {
        overflow: hidden;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        margin: 5px 0;
      }
      .bottom {
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>