<template>
  <div id="layout">
    <link rel="stylesheet" href="/static/css/dashboard.css">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top nav-admin-top">
      <router-link to="/partner/">
      <a class="navbar-brand">
        <img src="/static/images/comflologo/colorlogotrans.png" alt="comflo">
      </a>
      </router-link>
      <button class="navbar-toggler d-lg-none" @click="collapse" type="button" data-toggle="collapse" data-target="#nav-admin-top" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse" :class="collapsed"  id="nav-admin-top">
        <ul  @mouseover="isDropdownOpen = true" @mouseleave="isDropdownOpen = false" class="navbar-nav ml-auto">
          <li class="nav-item active">
            <img height="50px" width="50px" src="https://via.placeholder.com/50x50" class="rounded-circle mr-3">
          </li>
          <li class="nav-item">
            <div class="dropdown" :class="{show: isDropdownOpen}">
              <a class="dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="isDropdownOpen">
                {{partner.name}}
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" :class="{show: isDropdownOpen}">
                <router-link to="#">
                  <a class="dropdown-item"><i class="fa fa-user"></i> Profile</a>
                </router-link>
                <a @click="signout" class="dropdown-item text-black"><i class="fa fa-sign-out"></i> Logout</a>

              </div>
            </div>
          </li>

        </ul>
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <partner-sidebar></partner-sidebar>
          <router-view/>
      </div>
    </div>
    <back-footer></back-footer>
  </div>
</template>
<script>
import BackFooter from '@/components/MinFooter'
import PartnerSidebar from '@/components/PartnerSidebar'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'Layout',
  components: {
    BackFooter,
    PartnerSidebar
  },
  data: function () {
    return {
      isDropdownOpen: false,
      is_collapse: true,
      collapsed: 'collapse'
    }
  },
  computed: {
    ...mapGetters('partner', ['partner'])
  },
  methods: {
    ...mapActions('partner', ['partnerlogout', 'addPartnerError']),
    signout () {
      this.partnerlogout()
      this.$router.push('/partner/login')
    },
    collapse () {
      if (this.is_collapse) {
        this.collapsed = ''
        this.is_collapse = false
      } else {
        this.collapsed = 'collapse'
        this.is_collapse = true
      }
    }
  }
}
</script>
<style >
  /* @import '../../static/css/dashboard.css'; */
  @import 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-multiselect/0.9.13/css/bootstrap-multiselect.css';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css';
  @import 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css';
</style>
