<template>
  <!-- <div class="signup">
    <div class="h-100">
      <div class="row mt-lg-3">
        <div class="col-md-12 mt-lg-2">
          <div class="container signup-panel p-lg-3">
            <p class="demo-form-title text-gray text-center"><strong>Sign into Comflo</strong></p>
            <form class="">
              <p v-if="mainerror.length > 0" class="text-danger text-center">{{mainerror}}</p>
              <loading :active.sync="visible" :can-cancel="true"></loading>
              <div class="form-group">
                <input type="email" class="form-control"  placeholder="Email Address">
              </div>
              <div class="form-group">
                <input type="password" class="form-control"  placeholder="Password">
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
  </div> -->
  <section class="container-fluid px-0 hero h-100vh">
    <Header></Header>
    <div class="container h-75" style="position:relative;">
      <div class="w-75" style="margin:auto;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);">
          <div class="row jumb">
            <div class="col-sm-6 offset-sm-3">
              <h1 class="cbig-text text-center my-5">Sign In to Comflo</h1>
              <p v-if="mainerror.length > 0" class="text-danger text-center">{{mainerror}}</p>
              <div class="csignin">
                  <form action="">
                    <div class="form-group mb-5">
                      <label for="inputEmail">Email Address <sup>*</sup></label>
                      <input type="text" v-model="email" class="form-control cinput form__valid" id="inputEmail" placeholder="Nachi@gmail.com" required>
                    </div>
                    <div class="form-group mb-5">
                      <label for="inputFirstName">Password <sup>*</sup></label>
                      <input type="password" v-model="password" class="form-control cinput form__valid" id="inputFirstName" placeholder="Password" required>
                    </div>
                    <button type="button" @click="loginUser" :disabled="!emptyText || disable" class="btn btn-block button__primary mt-3">Sign In</button>
                    <div class="text-center  mt-4">
                      <router-link :to="{ name: 'User-ForgotPass'}" class='clr_a'>
                        Forgot Password?
                      </router-link>
                    </div>
                  </form>
              </div>
            </div>
          </div>
      </div>
    </div>
    <Footer></Footer>
  </section>
</template>
<script>
import api from '@/api/user'
import Footer from '@/components/NewFooter'
import Header from '@/components/Header'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'User-Login',
  components: {
    Header,
    Footer
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
      console.log(response)
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
      }
      this.disable = false
    }
  }
}
</script>
