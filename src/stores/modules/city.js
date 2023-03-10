import {defineStore} from 'pinia'

const useCityStore = defineStore("city", {
  state:() => {
    return {
      currentCity:{cityName:"上海"}
    }
  }
})

export default useCityStore