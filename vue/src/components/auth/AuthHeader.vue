<template>
  <!-- <div class="row">
    <nav class="navbar navbar-expand-md">
      <div class="col-md-6">
        <a class="navbar-brand" @click="gotoHome"><img src="/static/images/comflologo/comflo-logo.png" width="50%"  alt="comflo"></a>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  </div> -->
  <header class="border px-4">
    <nav class="navbar cnav align-items-center">
      <a @click="gotoHome"><img src="/static/img/comflo__logo.jpg" alt="comflo logo"></a>
      <ul v-if="this.$route.path.includes('register')" class="nav cnav__ul align-items-center">
          <li class="nav-item cnav__li d-none d-md-block">
            <p class="nav-link">Already have an account?</p>
          </li>
        <li class="nav-item">
          <router-link :to="{ name: 'User-Login'}" class='btn__green'>
            Sign In
          </router-link>
        </li>
      </ul>
      <ul v-else class="nav cnav__ul align-items-center">
          <li class="nav-item cnav__li d-none d-md-block">
            <p class="nav-link">Don’t have a Comflo Account yet??</p>
          </li>
        <li class="nav-item">
          <router-link :to="{ name: 'User-Register'}" class='btn__green'>
            Sign Up
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
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
