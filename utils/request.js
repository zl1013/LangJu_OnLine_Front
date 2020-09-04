import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: 'http://localhost:9001', // url = nginx访问地址
  timeout: 5000 // request timeout
})

export default service
