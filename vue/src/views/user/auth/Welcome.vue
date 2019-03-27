<template>
  <section class="container-fluid px-0 hero h-100vh clr__greybg">

    <div class="container mt-8">
      <div class="text-center">
        <img src="/static/img/comflo__logo.png" class="mb-4" alt="comflo__logo">
        <h2 class="cmedium-text mb-5">Welcome to Comflo</h2>
      </div>
      <div class="cwelcome card">
        <div class="card-body cwelcome__body text-center">
          <img src="/static/img/mail__icon.svg" class="cwelcome__icon" alt="mail icon">
          <h6 class="cwelcome__name">Hi, {{user.fname}} {{user.lname}} </h6>
          <p class="cwelcome__p"></p>
          <p class="cwelcome__deets text-left">Thank you for registering to trade on Comflo. Just a few more steps
            before you can view
            our exciting offers in the Marketplace and start trading.Kindly follow the link sent to your
            email address to complete your registration.
          </p>

        </div>
      </div>
      <p class="text-center mt-5">Didn’t get any email? <span><a href="#" class="clr_a-m">Resend mail</a></span></p>
      <p class="text-center mt-5 p-copyright">© {{new Date().getFullYear()}} Comflo. All rights reserved.</p>
    </div>
  </section>
</template>
<script>
import api from '@/api/user'
import Header from '@/components/auth/AuthHeader'
import Footer from '@/components/auth/AuthFooter'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'User-Welcome',
  components: {
    Header,
    Footer
  },
  title () {
    return `Welcome to comflo | Comflo Inc`
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
    ...mapGetters('user', ['user', 'error']),
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
