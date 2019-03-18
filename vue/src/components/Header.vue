<template>
  <div class="row">
    <nav class="navbar navbar-expand-md">
      <div class="col-md-6">
        <a class="navbar-brand" @click="gotoHome"><img src="/static/images/comflologo/comflo-logo.png" width="50%"  alt="comflo"></a>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  </div>
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
