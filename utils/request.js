import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import cookie from 'js-cookie'

// create an axios instance
const service = axios.create({
  baseURL: 'http://localhost:9001', // url = nginx访问地址
  timeout: 5000 // request timeout
})

service.interceptors.request.use(
  config => {
      //debugger
      if (cookie.get('token')) {
        config.headers['token'] = cookie.get('token');
      }
        return config
      },
      err => {
      return Promise.reject(err);
})

export default service
