import axios from 'axios'

// 프록시 key와 동일하게 '/api' 사용
const api = axios.create({
  baseURL: '/api',
})

export const getCampaigns = () => api.get('/campaign')
export const getCampaign = (id) => api.get(`/campaign/${id}`)
export const createCampaign = (formData) =>
  api.post('/campaign', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
export const updateCampaign = (id, formData) =>
  api.put(`/campaign/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
export const deleteCampaign = (id) => api.delete(`/campaign/${id}`)
