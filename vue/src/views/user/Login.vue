<template>
  <div class="signup">
    <div class="h-100">
      <Header></Header>
      <div class="row mt-lg-3">
        <div class="col-md-12 mt-lg-2">
          <div class="container signup-panel p-lg-3">
            <p class="demo-form-title text-gray text-center"><strong>Sign into Comflo</strong></p>
            <form class="">
              <p v-if="mainerror.length > 0" class="text-danger text-center">{{mainerror}}</p>
              <loading :active.sync="visible" :can-cancel="true"></loading>
              <div class="form-group">
                <input type="email" class="form-control" v-model="email" placeholder="Email Address">
              </div>
              <div class="form-group">
                <input type="password" class="form-control" v-model="password" placeholder="Password">
              </div>
              <button type="button" @click="loginUser" :disabled="!emptyText || disable" class="btn btn-primary width-100 mb-lg-3">Submit</button>
              <div class="col-md-12 text-center">
                Don’t have a Comflo Account yet?
                <router-link :to="{ name: 'User-Register'}" class=' text-info'>
                  <a class="login-font">
                    Signup
                  </a>
                </router-link>
              </div>
              <div class="col-md-12 text-center">
                <router-link :to="{ name: 'User-ForgotPass'}" class=' text-info'>
                  <a class="login-font">
                    Forgot Password
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
import bus from '@/bus'
import api from '@/api/user'
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
  computed: {
    ...mapGetters('user', ['error']),
    emptyText () {
      return this.email.length > 0 && this.password.length > 0
    }
  },
  mounted () {
    this.mainerror = this.error
    bus.$on('events', 'data_processed', data => {
      console.log('data processed')
      console.log(data)
    })
  },
  methods: {
    ...mapActions('user', ['clearError', 'addUser']),
    ...mapActions('admin', ['addAdmin']),
    resetDetails () {
      this.email = ''
      this.password = ''
      this.disable = false
    },
    async loginUser () {
      let loader = this.$loading.show()
      this.disable = true
      let user = {
        email: this.email,
        password: this.password
      }
      let response = await api.userlogin(user)
      loader.hide()
      // console.log(response)
      // console.log(response.data.status)
      if (response.data.status === 'success') {
        user = response.data.data
        delete user['password']
        // console.log(user)
        if (user.user_type === 3) {
          this.addAdmin(user)
          api.settoken(user.token)
          this.clearError()
          this.$router.push('/admin')
        } else {
          this.addUser(user)
          api.settoken(user.token)
          this.clearError()
          this.$router.push('/user')
        }
      } else {
        this.mainerror = 'Wrong Username/Password'
        // this.resetDetails()
        // return false
      }
      this.disable = false
    }
  }
}
</script>
