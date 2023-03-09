<template>
  <div class="city">
    <van-search
      v-model="searchValue"
      show-action
      placeholder="城市/区域/位置"
      @search="onSearch"
      @cancel="onCancel"
    />
    <van-tabs v-model:active="tabActive" color="#ff9854">
      <van-tab 
        v-for="(value, key, index) in cityList" 
        :key="index" 
        :name="key"
        :title="value.title"> 
        <!-- 城市展示 -->
        <div class="content">
          <div v-for="(cityVal,cityKey,cityIndex) in cityList" :key="cityIndex">
            <CityGroup v-show="tabActive === cityKey"  :groupData="cityVal"></CityGroup> 
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>



<script setup>
  import { useRouter } from "vue-router";
  import { ref } from "vue";
  import { getCityAllAPI } from '@/api/city/city'
  import CityGroup from './components/CityGroup.vue'

  const router = useRouter();

  // 搜索
  const searchValue = ref();
  const onSearch = (val) => {
    console.log(val);
  };
  const onCancel = () => {
    router.back();
  };
  
  // tab
  const tabActive = ref()
 
  // 城市列表
  const cityList = ref({})
  getCityAllAPI().then(res => {
    cityList.value = res.data.data;
  })
</script>



<style lang="less" scoped>
  .city {
    :deep(.van-field__left-icon) {
      color: var(--primary-color);
    }
    :deep(.van-search__action) {
      color: #666;
      font-weight: normal;
    }
    :deep(.van-field__control) {
      color: #666;
      font-weight: 400;
    }
    .content {
      height: calc(100vh - 98px);
      overflow-y: auto;
    }
    :deep(.van-tabs__wrap) {
      position: relative;
      z-index: 99;
    }
  }
</style>