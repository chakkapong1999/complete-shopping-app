<template>
  <div class="container mt-5">
    <b-row align-v="center" align-h="center">
      <div class="card w-75 mt-3 border-dark">
        <h1 class="my-2">รายการสินค้า</h1>
        <div
          class="card-body border mb-1"
          v-for="item in cart"
          :key="item.productId"
        >
          <b-row>
            <b-col>
              <img :src="item.product.image" />
            </b-col>
            <b-col>
              <p class="card-title">{{ item.product.name }}</p>
            </b-col>
            <b-col>
              <p class="card-text">
                ฿{{ item.product.price }} X {{ item.amount }}
              </p>
            </b-col>
            <b-col
              ><b-button-group>
                <b-button variant="warning" @click="handleRemoveItem(item)"
                  >-</b-button
                >
                <b-button variant="success" @click="handleAddItem(item)"
                  >+</b-button
                >
              </b-button-group>
            </b-col>
          </b-row>
        </div>
        <div class="mb-3"></div>
        <div class="container" align="right">
          <button class="btn btn-success" @click="handleSubmit">
            ชำระเงิน : ฿{{ calculateTotalPrice }}
          </button>
        </div>
        <div class="mb-3"></div>
      </div>
      <div class="mb-5"></div>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'Cart',
  computed: {
    ...mapState({
      cart: (state) => state.product.cart
    }),
    ...mapGetters('product', ['calculateTotalPrice'])
  },
  methods: {
    ...mapActions('product', ['addItem', 'removeItem', 'resetCart']),
    handleAddItem (product) {
      this.addItem(product)
    },
    handleRemoveItem (product) {
      this.removeItem({
        product,
        amount: 1
      })
    },
    handleSubmit () {
      const confirm = []
      this.cart.forEach((element) => {
        confirm.push({
          id: element.product.productId,
          amount: element.amount
        })
      })
      this.$api
        .confirmCart(confirm)
        .then((response) => {
          if (response.data.success) {
            alert(response.data.message)
            this.resetCart()
            this.$router.push({ name: 'Home' })
          } else {
            alert(
              `${response.data.message} \nรหัสสินค้า ${response.data.productId}`
            )
          }
        })
        .catch((e) => {
          console.log(e.response.data)
        })
    }
  }
}
</script>
