import axios from 'axios'

let token = ''
if (typeof window !== 'undefined') {
  // Perform localStorage action
  token = String(localStorage.getItem('token'))
}

var value = 'en'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    Authorization: `Bearer ${token}`,
    'Access-Controll-Allow-Origin': '',
    accept: 'application/json'
  }

  // baseURL: 'https://www.asha-holdings.com/api/'
})

// let axiosInstance

// if (value === 'en') {
//   axiosInstance = axios.create({
//     baseURL: 'http://localhost:3000/',
//     headers: {
//       Authorization: process.env.REACT_APP_API_KEY
//     }
//   })
// } else if (value === 'ja') {
//   axiosInstance = axios.create({
//     baseURL: 'http://localhost:3000/',
//     headers: {
//       Authorization: process.env.REACT_APP_API_KEY
//     }
//   })
// } else {
//   axiosInstance = axios.create({
//     baseURL: 'http://localhost:3000/',
//     headers: {
//       Authorization: process.env.REACT_APP_API_KEY
//     }
//   })
// }

// const axiosInstance = axios.create();
// axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
// axiosInstance.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axiosInstance.defaults.xsrfCookieName = "csrftoken";
// axiosInstance.defaults.withCredentials = true;
export default axiosInstance
