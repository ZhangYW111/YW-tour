import {defineStore} from 'pinia'

const useCityStore = defineStore("city", {
  state:() => {
    return {
      currentCity:{cityName:"广州"}
    }
  }
})

export default useCityStore