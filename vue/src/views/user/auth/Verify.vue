<template>
  <section class="container-fluid px-0 hero h-100vh">

    <div class="container mt-8">
      <div class="text-center">
        <img src="/static/img/comflo__logo.png" class="mb-4" alt="comflo__logo">
        <h2 class="cmedium-text mb-5">Enter the token sent to your mail</h2>
      </div>
      <div class="cwelcome card">
        <p v-if="mainerror.length > 0" class="text-danger text-center">{{mainerror}}</p>
        <div class="card-body cwelcome__body text-center">
          <!-- <img src="/static/img/mail__icon.svg" class="cwelcome__icon" alt="mail icon">
          <h6 class="cwelcome__name">Hi, {{user.fname}} {{user.lname}} </h6>
          <p class="cwelcome__p"></p>
          <p class="cwelcome__deets text-left">Thank you for registering to trade on Comflo. Just a few more steps
            before you can view
            our exciting offers in the Marketplace and start trading.Kindly follow the link sent to your
            email address to complete your registration.
          </p> -->
          <form>
            <input type="text" class="form-control cinput form__valid" v-model="token" id="inputOTP" placeholder="09187321" required>

            <button type="button" @click="activateUser" class="btn btn-block button__primary mt-3">Submit</button>
            <!-- <button type="button" @click="sendToken" :disabled="!emptyEmailText || disable" class="btn btn-block button__grey mt-3">Resend</button> -->

            <!-- <div class="text-center  mt-4">
              <router-link :to="{ name: 'User-Login'}" class="clr_a-m">Back to Sign In </router-link>
            </div> -->
          </form>
        </div>
      </div>
      <p class="text-center mt-5">Didn’t get any email? <span><a href="#" @click="resendToken" class="clr_a-m">Resend mail</a></span></p>
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
  dashboard: true,
  title () {
    return `Verify Email | Comflo Inc`
  },
  data: function () {
    return {
      token: '',
      disable: false,
      mainerror: '',
      visible: false
    }
  },
  computed: {
    ...mapGetters('user', ['user', 'error']),
    emptyText () {
      return this.token.length > 0
    }
  },
  methods: {
    ...mapActions('user', ['clearError', 'addUser']),
    resetDetails () {
      this.token = ''
      this.disable = false
    },
    async activateUser () {
      const loader = this.$loading.show()
      this.disable = true
      const details = {
        rec_token: this.token
      }
      let response = await api.userverify(details)
      loader.hide()
      console.log(response)
      // console.log(response.data.status)
      if (response.data.status === 'success') {
        this.$toast.success('Activation Successful!', '', this.notificationSystem.options.success)
        this.$router.push('/welcome')
      } else {
        this.$toast.error(response.data.message, '', this.notificationSystem.options.error)
      }
      this.disable = false
    },
    async resendToken () {
      const loader = this.$loading.show()
      this.disable = true
      let response = await api.userresend()
      loader.hide()
      console.log(response)
      // console.log(response.data.status)
      if (response.data.status === 'success') {
        this.$toast.success('Token has been sent', '', this.notificationSystem.options.success)
      } else {
        this.$toast.error(response.data.message, '', this.notificationSystem.options.error)
      }
      this.disable = false
    }
  }
}
</script>
