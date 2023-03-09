import request from '@/api/request'

export function getCityAllAPI() {
  return request({
    url: '/city/all',
    method: 'get'
  })
}