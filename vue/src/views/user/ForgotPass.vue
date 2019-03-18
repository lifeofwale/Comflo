<template>
  <div class="signup">
    <div class="h-100">
      <Header></Header>
      <div class="row mt-lg-5">
        <div class="col-md-12 mt-lg-5">
          <div class="container signup-panel p-lg-3">
            <template v-if="formpart == 0">
                <p class="demo-form-title text-gray text-center"><strong>Recover Your Password</strong></p>
                <form class="">
                    <p v-if="mainerror.length > 0" class="text-danger text-center">{{mainerror}}</p>
                    <loading :active.sync="visible" :can-cancel="true"></loading>
                    <div class="form-group">
                        <input type="email" class="form-control" v-model="email" placeholder="Email Address">
                    </div>
                    <button type="button" @click="sendToken" :disabled="!emptyEmailText || disable" class="btn btn-primary width-100 mb-lg-3">Submit</button>
                    <div class="col-md-12 text-center">
                        <router-link :to="{ name: 'User-Login'}" class=' text-info'>
                        <a class="login-font">
                            Back to Login
                        </a>
                        </router-link>
                    </div>
                </form>
            </template>
            <template v-else-if="formpart == 1">
                <p class="demo-form-title text-gray text-center"><strong>Input token sent to your email</strong></p>
                <p class="text-center">check your email spam if it's not in your inbox</p>
                <form class="">
                    <p v-if="mainerror.length > 0" class="text-danger text-center">{{mainerror}}</p>
                    <loading :active.sync="visible" :can-cancel="true"></loading>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="token" placeholder="Token">
                    </div>
                    <div>
                        <button type="button" @click="checkToken" :disabled="!emptyTokenText || disable" class="btn btn-primary width-100 mb-lg-3">Submit</button>
                    </div>
                    <div>
                        <button type="button" @click="sendToken" :disabled="!emptyEmailText || disable" class="btn btn-primary width-100 mb-lg-3">Resend</button>
                    </div>
                    <div class="col-md-12 text-center">
                        <router-link :to="{ name: 'User-Login'}" class=' text-info'>
                        <a class="login-font">
                            Back to Login
                        </a>
                        </router-link>
                    </div>
                </form>
            </template>
            <template v-else>
                <p class="demo-form-title text-gray text-center"><strong>Create a new password</strong></p>
                <form class="">
                    <p v-if="mainerror.length > 0" class="text-danger text-center">{{mainerror}}</p>
                    <loading :active.sync="visible" :can-cancel="true"></loading>
                    <div class="form-group">
                        <input type="password" class="form-control" v-model="password" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" v-model="password2" placeholder="Confirm Password">
                    </div>
                    <button type="button" @click="changePass" :disabled="!emptyPasswordsText || disable" class="btn btn-primary width-100 mb-lg-3">Change Password</button>
                    <div class="col-md-12 text-center">
                        <router-link :to="{ name: 'User-Login'}" class='text-info'>
                        <a class="login-font">
                            Back to Login
                        </a>
                        </router-link>
                    </div>
                </form>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
      password2: '',
      formpart: 0,
      token: '',
      disable: false,
      mainerror: '',
      visible: false
    }
  },
  computed: {
    ...mapGetters('user', ['error']),
    emptyEmailText () {
      return this.email.length > 0
    },
    emptyTokenText () {
      return this.token.length > 0
    },
    emptyPasswordsText () {
      return this.password.length > 0 && this.password2.length > 0
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
    async sendToken () {
      let loader = this.$loading.show()
      this.disable = true
      let details = {
        email: this.email
      }
      let response = await api.userSendToken(details)
      loader.hide()
      // console.log(response)
      // console.log(response.data.status)
      if (response.data.status === 'success') {
        this.formpart = 1
        this.disable = false
      } else {
        this.mainerror = response.data.data
        this.resetDetails()
        return false
      }
    },
    async checkToken () {
      this.formpart = 2
      // let loader = this.$loading.show()
      // this.disable = true
      // let details = {
      //   email: this.email,
      // }
      // let response = await api.userCheckToken(details)
      // loader.hide()
      // // console.log(response)
      // // console.log(response.data.status)
      // if (response.data.status === 'success') {
      //   this.disable = false
      // } else {
      //   this.mainerror = response.data.data
      //   this.resetDetails()
      //   return false
      // }
    },
    async changePass () {
      if (this.password !== this.password2) {
        this.mainerror = 'Passwords do not match'
        return false
      }
      let loader = this.$loading.show()
      this.disable = true
      let details = {
        email: this.email,
        token: this.token,
        password: this.password
      }
      let response = await api.userChangePass(details)
      loader.hide()
      // console.log(response)
      // console.log(response.data.status)
      if (response.data.status === 'success') {
        let user = response.data.data
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
        this.disable = false
      } else {
        this.mainerror = response.data.data
        this.resetDetails()
        return false
      }
    }
  }
}
</script>
