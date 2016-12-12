import axios from 'axios'
import { apiUrl } from 'config'

export const api = axios.create({ baseURL: apiUrl })

export const request = (config) => {
  return api.request(config)
}

export const setToken = (token) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const unsetToken = () => {
  delete api.defaults.headers.common['Authorization']
}

export const upload = (url, file, onUploadProgress) => {
  const data = new FormData()
  data.append('data', file, file.name)
  return request({ method: 'post', url, data, onUploadProgress })
}

;['delete', 'get', 'head'].forEach((method) => {
  module.exports[method] = (url, config) => request({ ...config, method, url })
})

;['post', 'put', 'patch'].forEach((method) => {
  module.exports[method] = (url, data, config) => request({ ...config, method, url, data })
})

export default module.exports
