import axios from 'axios'
import router, { useRouter } from 'next/router'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

axiosInstance.interceptors.response.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = token
    }

    return config
  },
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token')
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
