<template>
  <div>
    <b-navbar type="dark" variant="dark" class="px-3">
      <b-navbar-brand :to="{ name: 'Home' }">Shopping</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'Cart' }">
          <b-icon-cart></b-icon-cart> ({{ countItem }})</b-nav-item
        >
      </b-navbar-nav>
      <b-dropdown
        id="dropdown-1"
        variant="outline"
        no-caret
      >
        <template #button-content>
          <b-icon-gear variant="light" />
        </template>
        <b-dropdown-item
          :disabled="checkUser === 'admin' ? false : true"
          :to="{ name: 'Management' }"
          >Management</b-dropdown-item
        >
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
    ...mapGetters('product', ['countItem']),
    ...mapGetters('user', ['checkUser'])
  }
}
</script>
