import axios from 'axios'
import { apiUrl } from 'config'

const facade = {}

const api = axios.create({ baseURL: apiUrl })

// istanbul ignore next
api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response)
)

facade.request = (config) => api.request(config)

facade.setToken = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`
}

facade.unsetToken = () => {
  delete api.defaults.headers.common.Authorization
}

;['delete', 'get', 'head'].forEach((method) => {
  facade[method] = (url, config) => facade.request({ ...config, method, url })
})

;['post', 'put', 'patch'].forEach((method) => {
  facade[method] = (url, data, config) => facade.request({ ...config, method, url, data })
})

export default facade
