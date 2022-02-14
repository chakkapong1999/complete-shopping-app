<template>
  <div class="card w-100 h-100 border-dark mb-3">
    <img :src="item.image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ item.name }}</h5>
      <p class="card-text">฿{{ item.price }}</p>
      <b-button variant="success" @click="handleAddItem(item)">ADD ITEM</b-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ItemList',
  props: ['item'],
  methods: {
    ...mapActions('product', ['addItem']),
    handleAddItem (product) {
      this.addItem({
        product,
        amount: 1
      })
    }
  }
}
</script>

<style>
img {
  border-radius: 8px;
  padding: 5px;
  width: 50%;
  height: 75%;
}
</style>
