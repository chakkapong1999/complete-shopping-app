import ApiService from './api'

const client = new ApiService({
  baseUrl: process.env.VUE_APP_API_URL
})

export const createUser = (payload) => client.post('/create-user', payload)
export const login = (payload) => client.post('/login', payload)

export const userAPI = {
  createUser,
  login
}
