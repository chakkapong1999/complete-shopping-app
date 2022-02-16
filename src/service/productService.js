import ApiService from './api'

const client = new ApiService({
  baseUrl: process.env.VUE_APP_API_URL
})

export const getProductsForPaging = (current, limit) => client.get(`/products/page?current=${current}&limit=${limit}`)
export const getProducts = () => client.get('/products')
export const addProduct = (payload) => client.post('/products', payload)
export const updateProdcut = (payload) => client.put('/products', payload)
export const deleteProduct = (payload) => client.post('/products/delete', payload)

export const confirmCart = (payload) => client.post('/inventory/confirm', payload)
export const checkInstock = (id) => client.get(`/inventory/${id}`)
export const addInventory = (payload) => client.post('/inventory/update', payload)

export const productAPI = {
  getProducts,
  getProductsForPaging,
  addProduct,
  updateProdcut,
  confirmCart,
  deleteProduct,
  checkInstock,
  addInventory
}
