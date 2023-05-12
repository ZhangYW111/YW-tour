<template>
  <div class="section">
    <div class="header">{{ title }}</div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="footer">{{ more }}</div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: '默认标题'
    },
    more: {
      type: String,
      default: '更多内容'
    }
  })
</script>

<style lang="less" scoped>

</style>