<template>
  <div class="signup">
    <div class="h-100">
      <Header></Header>
      <div class="row mt-lg-5">
        <div class="col-md-12 mt-lg-5">
          <div class="container signup-panel p-lg-3">
            <p class="demo-form-title text-gray text-center"><strong>Sign into Comflo Admin</strong></p>
            <form class="">
              <p v-if="mainerror.length > 0" class="text-danger text-center">{{mainerror}}</p>
              <loading :active.sync="visible" :can-cancel="true"></loading>
              <div class="form-group">
                <input type="email" class="form-control" v-model="email" placeholder="Email Address">
              </div>
              <div class="form-group">
                <input type="password" class="form-control" v-model="password" placeholder="Password">
              </div>
              <button type="button" @click="loginAdmin" :disabled="!emptyText || disable" class="btn btn-primary width-100 mb-lg-3">Submit</button>
              <div class="col-md-12 text-center">
                Don’t have a Comflo Account yet?
                <router-link :to="{ name: 'Admin-Register'}" class=' text-info'>
                  <a class="login-font">
                    Signup
                  </a>
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api/admin'
import Header from '@/components/Header'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'Index',
  components: {
    Header
  },
  data: function () {
    return {
      email: '',
      password: '',
      disable: false,
      mainerror: '',
      visible: false
    }
  },
  mounted () {
    this.mainerror = this.error
  },
  computed: {
    ...mapGetters('admin', ['error']),
    emptyText () {
      return this.email.length > 0 && this.password.length > 0
    }
  },
  methods: {
    ...mapActions('admin', ['clearError', 'addAdmin']),
    resetDetails () {
      this.email = ''
      this.password = ''
      this.disable = false
    },
    async loginAdmin () {
      let loader = this.$loading.show()
      this.disable = true
      let admin = {
        email: this.email,
        password: this.password
      }
      let response = await api.adminlogin(admin)
      loader.hide()
      // console.log(response)
      // console.log(response.data.status)
      if (response.data.status === 'success') {
        admin = response.data.data
        delete admin['password']
        // console.log(admin)
        this.addAdmin(admin)
        api.settoken(admin.token)
        this.clearError()
        this.$router.push('/admin')
        this.disable = false
      } else {
        this.mainerror = 'Wrong Username/Password'
        this.resetDetails()
        return false
      }
    }
  }
}
</script>
