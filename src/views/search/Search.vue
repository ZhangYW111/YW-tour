<template>
  <div class="search">
    <div>
      {{ startDateStr }}
      {{ endDateStr }}
      <!-- {{ $route.query.currentCity }} -->
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue' 
  import useMainStore from "@/stores/modules/main"
  import { storeToRefs } from "pinia"
  import { fomatMonthDate } from "@/utils/format_date";

  // 引入store获取时间
  const mainStore = useMainStore()
  const { startDate, endDate } = storeToRefs(mainStore)
  const startDateStr = ref(fomatMonthDate(startDate.value))
  const endDateStr = ref(fomatMonthDate(endDate.value))
</script>

<style lang="less" scoped>

</style>