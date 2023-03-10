import request from '@/api/request'

export function hotSuggestsAPI() {
  return request({
    url: '/home/hotSuggests',
    method: 'get'
  })
}