<template>
  <section class="container-fluid px-0 hero h-100vh">
    <div class="container mt-8">
      <div class="text-center">
        <img src="/static/img/comflo__logo.png" class="mb-4" alt="comflo__logo">
      </div>
      <div class="cwelcome card">
        <div class="card-body cwelcome__body text-center">
          <img src="/static/img/verified.svg" class="cwelcome__icon" alt="mail icon">
          <h6 class="cwelcome__name">Congratulations! Registration is successful.</h6>
          <p class="cwelcome__p"></p>

          <p class="cwelcome__deets text-center mt-1 font-weight-light mt-4">Please note that some features are
            unavailable until KYC(know your clent) is completed.
          </p>
          <div class="mt-5">
            <router-link :to="{ name: 'User-Kyc'}" class='btn__green'>
              Proceed to KYC
            </router-link>
          </div>
        </div>
      </div>

      <p class="text-center mt-5 p-copyright">© 2019 Comflo. All rights reserved.</p>
    </div>
  </section>
</template>
<script>
import Header from '@/components/auth/AuthHeader'
import Footer from '@/components/auth/AuthFooter'
export default {
  name: 'User-Welcome',
  components: {
    Header,
    Footer
  },
  dashboard: true,
  title () {
    return `Verification Successful | Comflo Inc`
  },
  data: function () {
    return {
    }
  }
}
</script>
