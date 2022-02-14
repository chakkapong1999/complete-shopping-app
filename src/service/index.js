import { productAPI } from './productService'
import { userAPI } from './userService'

export const api = {
  ...productAPI,
  ...userAPI
}
