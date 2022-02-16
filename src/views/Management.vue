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
                    @click="showModal('edit', item)"
                  >
                    <b-icon-pencil-fill />
                  </button>
                  <button type="button" class="btn btn-danger">
                    <b-icon-trash />
                  </button>
                  <button type="button" class="btn btn-secondary">
                    <b-icon-plus />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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
      editProduct: {},
      fields: [],
      items: [],
      perPage: 8,
      currentPage: 1,
      rows: 0
    }
  },
  methods: {
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
    showModal (name, data) {
      this.editProduct = data
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
