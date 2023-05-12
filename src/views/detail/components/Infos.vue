<template>
  <div class="infos">
    <div class="title">{{ DetailInfo?.houseName }}</div>
    <div class="tags">
      <span 
        class="tag-item" 
        v-for="item in DetailInfo?.houseTags"
        :style="{color:item.tagText?.color, backgroundColor:item.tagText?.background?.color}">
        {{ item.tagText?.text }}
      </span>
    </div>
    <div class="biref">
      <div class="biref-left">
        <span>{{ DetailInfo?.commentBrief.overall }}</span>
        <span style="margin: 0 3px;">{{ DetailInfo?.commentBrief.scoreTitle }}</span>
        <span>"{{ DetailInfo?.commentBrief.commentBrief }}"</span>
      </div>
      <div class="biref-right">
        <span>{{ DetailInfo?.commentBrief.totalCountStr }}条评论 ></span>
      </div>
    </div>
    <div class="position">
      <span class="position-left">{{ DetailInfo?.nearByPosition.address }}</span>
      <span class="position-right">地图·周边 ></span>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    DetailInfo: {
      type: Object,
      default: () => {}
    }
  })
</script>

<style lang="less" scoped>
  .infos {
    padding: 16px;

    .title {
      font-size: 20px;
      color: #333;
      margin-bottom: 6px;
    }

    .tag-item {
      display: inline-block;
      font-size: 12px;
      margin: 0 2px;
      padding: 2px 3px;
    }

    .biref, .position {
      display: flex;
      justify-content: space-between;
      padding: 8px 12px;
      margin: 12px 0;
      background-color: #f5f7fa;
      border-radius: 5px;

      .biref-left {
        font-size: 12px;
        color: #666;
      }
      .biref-left span:first-child {
        font-size: 18px;
        color: #333;
      }
      .biref-right, .position-right {
        font-size: 12px;
        color: #ff9645;
        font-weight: 400;
      }
      .position-left {
        font-size: 14px;
        color: #333;
      }
    }
  }
</style>