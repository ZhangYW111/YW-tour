import axios from 'axios'
import useMainStore from '@/stores/modules/main';
const mainStore = useMainStore()

const instance = axios.create({
  baseURL: 'http://codercba.com:1888/api',
  // timeout: 5000,
  // headers: {}
});

instance.interceptors.request.use((config) => {
  mainStore.isLoading = true
  return config
}, error => {
  return Promise.reject(error);
})

instance.interceptors.response.use((response) => {
  mainStore.isLoading = false
  return response
})

export default instance