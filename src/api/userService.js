import axios from 'axios'

// 프록시 key와 동일하게 '/api' 사용
const api = axios.create({
  baseURL: '/api',
})

export const getUser = (id) => api.get(`/user/${id}`)
export const createUser = (data) => api.post('/user', data)
export const updateUser = (id, data) => api.put(`/user/${id}`, data)
export const deleteUser = (id) => api.delete(`/user/${id}`)
