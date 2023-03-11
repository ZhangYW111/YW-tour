import request from '@/api/request'

export function hotSuggestsAPI() {
  return request({
    url: '/home/hotSuggests',
    method: 'get'
  })
}
export function getCategoriesAPI() {
  return request({
    url: '/home/categories',
    method: 'get'
  })
}
export function getSelectListAPI(currentPage) {
  return request({
    url: '/home/houselist',
    method: 'get',
    params: {
      page: currentPage
    }
  })
}
