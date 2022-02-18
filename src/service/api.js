import axios from 'axios'
import store from '../store'

export default class ApiService {
  constructor ({ baseUrl = process.env.VUE_APP_API_URL }) {
    const instance = axios.create({
      baseURL: baseUrl
    })

    instance.interceptors.request.use(this.handleRequest)
    this.client = instance
  }

  handleRequest (config) {
    const token = store.state.user.user.token
    const username = store.state.user.user.username
    if (token) {
      config.headers.Authorization = token
    }
    if (username) {
      config.headers.User = username
    }
    return config
  }

  async get (path) {
    return await this.client.get(path)
  }

  async post (path, payload) {
    return await this.client.post(path, payload)
  }

  async put (path, payload) {
    return await this.client.put(path, payload)
  }

  async delete (path, payload) {
    return await this.client.delete(path, payload)
  }
}
