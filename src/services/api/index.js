import axios from 'axios'
import { apiUrl } from 'config'

const facade = {}

const api = axios.create({ baseURL: apiUrl })

facade.request = (config) => api.request(config)

facade.setToken = (token) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

facade.unsetToken = () => {
  delete api.defaults.headers.common['Authorization']
}

facade.upload = (url, file, onUploadProgress) => {
  const data = new FormData()
  data.append('data', file, file.name)
  return facade.request({ method: 'post', url, data, onUploadProgress })
}

;['delete', 'get', 'head'].forEach((method) => {
  facade[method] = (url, config) => facade.request({ ...config, method, url })
})

;['post', 'put', 'patch'].forEach((method) => {
  facade[method] = (url, data, config) => facade.request({ ...config, method, url, data })
})

export default facade
