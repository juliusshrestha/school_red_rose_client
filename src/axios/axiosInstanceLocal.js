import axios from 'axios'


const axiosInstanceLocal = axios.create({
	baseURL: 'http://localhost:3000/',
})

export default axiosInstanceLocal
