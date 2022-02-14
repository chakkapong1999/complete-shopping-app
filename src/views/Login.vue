<template>
  <div class="container">
    <b-row class="vh-100" align-v="center" align-h="center">
      <div class="card w-25">
        <b-form @submit.prevent="login">
          <h2 class="font-weight-bold">Login</h2>
          <div class="mb-3">
            <b-form-input
              type="text"
              class="form-control"
              placeholder="Username"
              v-model="formLogin.username"
              required
            />
          </div>
          <div class="mb-3">
            <b-form-input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="formLogin.password"
              required
            />
          </div>
          <div class="mb-3"></div>
          <b-row>
            <b-button type="submit" variant="success" class="mb-3"
              >Login</b-button
            >
            <b-button class="mb-3"> Cotinue Shopping </b-button>
            <b-button variant="primary"> Create Account </b-button>
          </b-row>
        </b-form>
      </div>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      formLogin: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('user', ['setIsAuth', 'setUser']),
    login () {
      this.$api
        .login({
          username: this.formLogin.username,
          password: this.formLogin.password
        })
        .then((response) => {
          if (response.data.success) {
            this.setIsAuth(true)
            this.setUser(response.data)
            this.$router.push({ name: 'Home' })
          }
        })
    }
  }
}
</script>
