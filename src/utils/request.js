import axios from 'axios'

const service = axios.create({
  baseURL: '', // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 0) {

    } else {
      return response
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service