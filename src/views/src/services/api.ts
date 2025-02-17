import axios from 'axios'

const api = axios.create({
	baseURL: process.env.VITE_API_URL || 'http://localhost:3000/api'
})

// Interceptor para agregar el token a las solicitudes
api.interceptors.request.use(config => {
	const token = localStorage.getItem('token')
	if (token) {
		if (!config.headers) {
			config.headers = {};
		}
		config.headers.Authorization = `Bearer ${token}`
	}
	return config
})

export default api
