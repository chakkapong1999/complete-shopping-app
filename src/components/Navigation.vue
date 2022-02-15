<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand disabled>Shopping</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'Home' }">Home</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'Cart' }">
          <b-icon-cart></b-icon-cart> ({{ countItem }})</b-nav-item
        >
      </b-navbar-nav>
      <b-dropdown
        id="dropdown-1"
        class="ml-auto"
        variant="outline"
        :right="true"
        no-caret
      >
        <template #button-content>
          <b-icon-gear variant="light" />
        </template>
        <b-dropdown-item>Management</b-dropdown-item>
        <b-dropdown-item href="/"><b-icon-power /> Logout</b-dropdown-item>
      </b-dropdown>
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
