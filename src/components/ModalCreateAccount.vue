<template>
  <div>
    <b-modal id="create-acc" title="EDIT PRODUCT">
      <b-form>
        <b-form-group class="mb-3">
          <b-form-input
            id="username"
            type="text"
            class="form-control"
            placeholder="Username"
            v-model="register.username"
          />
        </b-form-group>
        <b-form-group class="mb-3">
          <b-form-input
            id="password"
            type="password"
            class="form-control"
            placeholder="Password"
            v-model="register.password"
          />
        </b-form-group>
        <b-form-group class="mb-3">
          <b-form-input
            id="confirm_password"
            type="password"
            class="form-control"
            placeholder="Confirm Password"
            v-model="register.confirmPassword"
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
  name: 'ModalCreateAccount',
  data () {
    return {
      register: {
        username: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.register)
      if (this.register.password === this.register.confirmPassword) {
        this.$api
          .createUser({
            username: this.register.username,
            password: this.register.password
          })
          .then((response) => {
            if (response.data.success) {
              this.$alert('Register success.', '', 'success')
              this.$emit('closeModal', 'create-acc')
            } else {
              this.$alert(response.data.message, '', 'warning')
            }
          })
          .catch((e) => console.log(e))
      } else {
        this.$alert('Please check your password.', '', 'warning')
      }
    }
  }
}
</script>
