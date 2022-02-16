<template>
  <div>
    <b-modal id="edit" title="EDIT PRODUCT">
      <b-form>
        <b-form-group class="mb-2" label="Name :">
          <b-form-input
            id="name"
            type="text"
            class="form-control"
            placeholder="Enter Name"
            v-model="data.name"
          />
        </b-form-group>
        <b-form-group class="mb-2" label="Price :">
          <b-form-input
            id="price"
            type="number"
            class="form-control"
            placeholder="Enter Price"
            v-model="data.price"
          />
        </b-form-group>
        <b-form-group class="mb-2" label="Image URL :">
          <b-form-input
            id="image"
            type="text"
            class="form-control"
            placeholder="Enter Image"
            v-model="data.image"
          />
        </b-form-group>
      </b-form>
      <template #modal-footer>
        <b-button variant="success" size="xl" @click="onSubmit">
          Submit
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'ModalEdit',
  props: {
    data: Object
  },
  methods: {
    onSubmit () {
      this.$emit('editProduct')
      this.$emit('closeModal', 'edit')
    }
  }
}
</script>
