import axios from 'axios'

// 백엔드 기본 URL
const API_BASE = 'http://localhost:8081/api/users'

/**
 * 회원가입
 * @param {Object} data { loginId, userName, password, email }
 */
export const createUser = (data) => axios.post(API_BASE, data)

/**
 * 로그인
 * @param {Object} credentials { loginId, password }
 */
export const loginUser = (credentials) => axios.post(`${API_BASE}/login`, credentials)