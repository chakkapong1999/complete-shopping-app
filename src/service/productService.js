import ApiService from './api'

const client = new ApiService({
  baseUrl: process.env.VUE_APP_API_URL
})

export const getProducts = () => client.get('/products')
export const getProductsForPaging = (current, limit) => client.get(`/products/page?current=${current}&limit=${limit}`)
export const addProduct = (payload) => client.post('/products', payload)
export const updateProdcut = (payload) => client.put('/products', payload)
export const confirmCart = (payload) => client.post('/inventory/confirm', payload)
export const deleteProduct = (payload) => client.delete('/products', payload)

export const productAPI = {
  getProducts,
  getProductsForPaging,
  addProduct,
  updateProdcut,
  confirmCart,
  deleteProduct
}
