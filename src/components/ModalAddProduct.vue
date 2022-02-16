<template>
  <div>
    <b-modal id="addProduct" title="ADD PRODUCT">
      <b-form>
        <b-form-group class="mb-2" label="Name :">
          <b-form-input
            id="name"
            type="text"
            class="form-control text-uppercase"
            placeholder="NAME"
            v-model="addProduct.name"
          />
        </b-form-group>
        <b-form-group class="mb-2" label="Price :">
          <b-form-input
            id="price"
            type="number"
            class="form-control"
            placeholder="PRICE"
            v-model="addProduct.price"
          />
        </b-form-group>
        <b-form-group class="mb-2" label="Image URL :">
          <b-form-input
            id="image"
            type="text"
            class="form-control"
            placeholder="IMAGE"
            v-model="addProduct.image"
          />
        </b-form-group>
      </b-form>
      <template #modal-footer>
        <b-button variant="success" size="xl" @click="handleOnsubmit">
          Submit
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'ModalAddProduct',
  data () {
    return {
      addProduct: {
        name: '',
        price: null,
        image: ''
      }
    }
  },
  methods: {
    handleOnsubmit () {
      this.$api
        .addProduct({
          name: this.addProduct.name.toUpperCase(),
          price: this.addProduct.price,
          image: this.addProduct.image
        })
        .then((response) => {
          if (response.data.success) {
            this.$alert(response.data.message, '', 'success')
          } else {
            this.$alert(response.data.message, '', 'warning')
          }
        })
      this.$emit('closeModal', 'addProduct')
      this.clearInput()
    },
    clearInput () {
      this.addProduct.name = ''
      this.addProduct.price = null
      this.addProduct.image = ''
    }
  }
}
</script>
