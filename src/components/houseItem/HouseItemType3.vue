<template>
  <div class="house-item-type">
    <img class="image" :src="itemData.image.url" alt="">
    <div class="content">
      <img class="icon" src="@/assets/img/home/location.png" alt="">
      <span>{{ itemData.location }}</span>
      <div class="text">{{ itemData.houseName }}</div>
      <div>{{ itemData.summaryText }}</div>
      <div class="box">
        <span class="finalPrice">¥{{ itemData.finalPrice }}</span>
        <span class="productPrice">¥{{ itemData.productPrice }}</span>
        <span class="priceTipBadge">{{ itemData.priceTipBadge?.text }}</span>
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
    font-size: 12px;
    font-weight: 500;
    color: #666;
    border-radius: 10px;
    .image {
      width: 100%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    .content {
      padding: 8px 10px;
      .icon {
        width: 12px;
        height: 12px;
      }
      .text {
        overflow: hidden;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        font-size: 14px;
        color: #333;
        margin: 5px 0;
      }
      .box {
        margin: 8px 0;
        .finalPrice {
          font-size: 14px;
          color: #ff9645;
        }
        .productPrice {
          color: #999;
          text-decoration: line-through;
          margin: 0 5px;
        }
        .priceTipBadge {
          display: inline-block;
          border-radius: 10px;
          color: #fff;
          background-image: linear-gradient(270deg, #f66, #ff9f9f);
          padding: 0 6px;
        }
      }
    }
  }
</style>