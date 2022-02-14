<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand disabled>Shopping</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'Home' }">Home</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'Cart' }">Cart ({{ countItem }})</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Navigation',
  computed: {
    ...mapGetters('product', ['countItem'])
  }
}
</script>
