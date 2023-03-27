import axios from 'axios'

var value = 'en'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNyZWRJZCI6NCwidXNlcklkIjoiZWRlZDZiNjktODUxOS00MzYwLTk1NTgtZjBiZjIzM2VhOGE1IiwiZW1haWwiOiJqdWxpdXNzaHJlc3RoYTI5KzNAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkWlNYZEZKQ0hGaGYyNGpRWGg4L25sdXUvTkpTdGRONGtzcjJMWUVSLmpLNmwvT1lpbE92QXkiLCJjcmVhdGVkQXQiOiIyMDIzLTAzLTAxVDAzOjUwOjQwLjQ3MFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTAzLTAxVDA2OjQzOjA2LjI5MVoiLCJ1c2VyIjp7InVzZXJJZCI6ImVkZWQ2YjY5LTg1MTktNDM2MC05NTU4LWYwYmYyMzNlYThhNSIsImZpcnN0TmFtZSI6Ikp1bGVzaCIsIm1pZGRsZU5hbWUiOiJsIiwibGFzdE5hbWUiOiJTaHJlc3RoYSIsInBob25lIjoiOTg2MDE0NDgyNyIsImNvdW50cnlDb2RlIjo5NzcsInVzZXJTdGF0dXMiOiJBQ1RJVkUifX0sImlhdCI6MTY3OTc1MjE2NywiZXhwIjoxNjc5NzU1NzY3fQ.Teh5w483ophUrprTpOIXLKq9BPjujGXUucW8UpzLNQk',
    'Access-Controll-Allow-Origin': '',
    accept: 'application/json',

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
