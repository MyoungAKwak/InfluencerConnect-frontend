import axios from 'axios'

// 프록시 key와 동일하게 '/api' 사용
const api = axios.create({
  baseURL: '/api'
})

export const getBoards = () => api.get('/board')
export const getBoard = (id) => api.get(`/board/${id}`)
export const createBoard = (data) => api.post('/board', data)
export const updateBoard = (id, data) => api.put(`/board/${id}`, data)
export const deleteBoards = (ids) => api.delete('/board/multiple', { data: ids })
