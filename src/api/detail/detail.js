import request from '../request'

export function getDetailInfo(houseId) {
  return request({
    url: '/detail/infos',
    method: 'get',
    params: {
      houseId
    }
  })
}