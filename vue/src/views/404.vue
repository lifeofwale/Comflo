<template>
  <div class="signup">
    <div class="h-100">
      <Header></Header>
      <div class="row mt-lg-5">
        <div class="col-md-12 mt-lg-5">
          <div class="container signup-panel p-lg-3 text-center mt-5">
              <h1 class="mb-4">Oops!</h1>
              <h4 class="mb-4">The page you are looking for was not found</h4>
              <a class="btn btn-round venice-bg " @click="gotoHome" >
                  Go To Home
              </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/auth/AuthHeader'
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
  methods: {
    userAuth () {
      return this.$store.state.user.is_auth
    },
    adminAuth () {
      return this.$store.state.admin.is_auth
    },
    companyAuth () {
      return this.$store.state.company.is_auth
    },
    partnerAuth () {
      return this.$store.state.partner.is_auth
    },
    async gotoHome () {
      // console.log(this.userAuth())
      if (this.userAuth()) {
        this.$router.push('/user')
      } else if (this.adminAuth()) {
        this.$router.push('/admin')
      } else if (this.partnerAuth()) {
        this.$router.push('/partner')
      } else if (this.companyAuth()) {
        this.$router.push('/company')
      } else {
        this.$router.push('/user')
      }
    }
  }
}
</script>
<style scoped>
h1{
  font-size: 8rem;
}
</style>
