<template>
  <div class="container">
    <div class="p-3 mx-auto">
      <div class="grid">
        <div v-for="data in items" :key="data.productId">
          <ItemList :item="data" />
        </div>
      </div>
      <div class="mt-3">
        <b-pagination
          align="center"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          @change="onPageChange"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import ItemList from '@/components/ItemList.vue'
export default {
  name: 'Home',
  components: {
    ItemList
  },
  data () {
    return {
      items: [],
      perPage: 8,
      currentPage: 1,
      rows: 0
    }
  },
  methods: {
    getProducts () {
      this.$api
        .getProductsForPaging(this.currentPage, this.perPage)
        .then((response) => {
          this.items = response.data.result
          this.rows = response.data.totalRow
        }).catch(e => {
          console.log(e.response.data)
        })
    },
    onPageChange (page) {
      this.currentPage = page
      this.getProducts()
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: stretch;
  align-items: stretch;
  column-gap: 20px;
  row-gap: 20px;
}
</style>
