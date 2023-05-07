import axios from 'axios'
import url from '@/config/url'

export default {
  login(params: any) {
    return axios({
      url: url.login,
      method: 'get',
      params
    })
  },
  getUserInfo(params: any) {
    return axios({
      url: url.getUserInfo,
      method: 'get',
      params
    })
  }
}
