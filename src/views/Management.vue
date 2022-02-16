<template>
  <div>
    <div class="container mx-auto w-50">
      <div class="table-responsive">
        <div class="my-3">
          <h2>Product Management</h2>
        </div>
        <div class="mb-2" align="right">
          <button type="button" class="btn btn-success" align="right">
            ADD PRODUCT
          </button>
        </div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">IMAGE</th>
              <th scope="col">NAME</th>
              <th scope="col">PRICE</th>
              <th scope="col">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.productId">
              <td><img :src="item.image" /></td>
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-warning"
                    @click="
                      () => {
                        showModal('edit');
                        setEditProduct(item);
                      }
                    "
                  >
                    <b-icon-pencil-fill />
                  </button>
                  <button type="button" class="btn btn-danger">
                    <b-icon-trash />
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    @click="
                      () => {
                        showModal('addInventory');
                        setInstock(item.productId);
                      }
                    "
                  >
                    <b-icon-plus />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <b-modal id="addInventory" title="ADD INVENTORY">
      <b-form-group class="mb-2" :label="`Product ID : ${inventory.productId}`">
        <b-form-input
          id
          type="number"
          class="form-control"
          placeholder="Product ID"
          v-model="inStock.productId"
          disabled
        />
      </b-form-group>
      <b-form-group class="mb-2" :label="`In Stock : ${inventory.quantity}`">
        <b-form-input
          id
          type="number"
          class="form-control"
          placeholder="Quantity"
          v-model="inStock.quantity"
        />
      </b-form-group>

      <template #modal-footer>
        <b-button variant="success" size="xl" @click="handleAddInventory">
          Add
        </b-button>
      </template>
    </b-modal>

    <b-pagination
      align="center"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      @change="onPageChange"
    ></b-pagination>
    <ModalEdit
      :data="editProduct"
      @closeModal="closeModal"
      @editProduct="handleOnsubmitEdit()"
    />
  </div>
</template>

<script>
import ModalEdit from '@/components/ModalEditProduct.vue'
export default {
  name: 'Management',
  components: {
    ModalEdit
  },
  data () {
    return {
      inStock: {
        productId: 0,
        quantity: null
      },
      inventory: {},
      editProduct: {},
      fields: [],
      items: [],
      perPage: 8,
      currentPage: 1,
      rows: 0
    }
  },
  methods: {
    handleAddInventory () {
      console.log(this.inStock)
      this.$api
        .addInventory({
          id: this.inStock.productId,
          amount: this.inStock.quantity
        })
        .then((response) => {
          if (response.data.success) {
            alert(response.data.message)
          } else {
            alert(response.data.message)
          }
        })
      this.closeModal('addInventory')
      this.clearInStock()
    },
    clearInStock () {
      this.inStock.productId = 0
      this.inStock.quantity = null
    },
    setInstock (productId) {
      this.$api.checkInstock(productId).then((response) => {
        this.inventory = response.data
        this.inStock.productId = this.inventory.productId
      })
    },
    handleOnsubmitEdit () {
      this.$api.updateProdcut(this.editProduct).then((response) => {
        if (response.data.success) {
          alert(response.data.message)
        } else {
          alert(response.data.message)
        }
        this.getProducts()
      })
    },
    getProducts () {
      this.$api
        .getProductsForPaging(this.currentPage, this.perPage)
        .then((response) => {
          this.items = response.data.result
          this.rows = response.data.totalRow
        })
    },
    onPageChange (page) {
      this.currentPage = page
      this.getProducts()
    },
    setEditProduct (data) {
      this.editProduct = data
    },
    showModal (name) {
      this.$nextTick(() => {
        this.$bvModal.show(name)
      })
    },
    closeModal (name) {
      this.$bvModal.hide(name)
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
