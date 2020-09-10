import request from '@/utils/request'
const api_name = '/vod/video'
export default {
  getPlayAuth(id) {
    return request({
      url: `/eduvod/video/getPlayAuth/${id}`,
      method: 'get'
    })
  }
}