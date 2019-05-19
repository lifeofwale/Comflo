<template>
  <section class="container-fluid">
    <div class="row sticky-top">
      <aside class="col-sm-1 aside px-0">
        <div class="aside__controller">
          <a href="#" id="controller"><img src="/static/img/controller.svg" alt="controller"></a>
        </div>
      </aside>
      <main class="col-sm-11  content px-0">
        <div class="content__header">
          <header class="navbar content__header">
            <a href="#"><img src="/static/img/comflo__logo.png" alt="comflo__logo"></a>
            <ul class="nav align-items-center">
              <li class="nav-item px-3">
                <div class="dropdown">
                  <a v-click-outside="hideNotif" @click="isNotifDropdownOpen = !isNotifDropdownOpen" class="content__notify" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="true">
                    <span class="mr-3"><img src="/static/img/alarm.svg" alt="alarm__icon"></span><span>16</span>
                  </a>

                  <ul v-if="isNotifDropdownOpen" class="dropdown-menu content__dropdown show" aria-labelledby="dropdownMenuLink">
                    <li>
                      <h6>Notifications</h6>
                      <label class="label label-danger">New</label>
                    </li>
                    <li>
                      <div class="media content__media">
                        <img class="content__img" src="/static/img/avatar.jpg" alt="Generic placeholder image">
                        <div class="media-body">
                          <h5 class="content__name">Wale Adewale</h5>
                          <p class="content__msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                          <span class="content__time">30 minutes ago</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

              </li>
              <li class="nav-item px-3">
                <div class="dropdown">
                  <a v-click-outside="hideProfile" @click="isProfileDropdownOpen = !isProfileDropdownOpen" class="content__launch" href="#" role="button" id="dropdownMenuLink-2" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="true">
                    <template v-if="admin.image"><img :src="admin.image" class="content__img" alt="User-Profile-Image"></template>
                    <template v-else><img src="/static/img/avatar.jpg" class="content__img" alt="User-Profile-Image"></template>
                    <span class="mr-2">{{admin.fname}} {{admin.lname}}</span>
                    <img src="/static/img/spaceship.svg" alt="spaceship">
                  </a>

                  <ul v-if="isProfileDropdownOpen" class="dropdown-menu content__dropdown show" aria-labelledby="dropdownMenuLink-2">
                    <li class="nav-item content__li">
                      <router-link :to="{ name: 'Admin-Profile'}" class="nav-link content__a">
                        <i class="fas fa-cog mr-3"></i> Settings
                      </router-link>
                    </li>
                    <li class="nav-item content__li">
                      <a href="#" @click="signout" class="nav-link content__a">
                        <i class="fas fa-sign-out-alt mr-3"></i> Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </header>
        </div>
      </main>
    </div>

    <div class="row">
      <admin-sidebar></admin-sidebar>
      <router-view/>
    </div>
  </section>
</template>
<script>
import BackFooter from '@/components/MinFooter'
import AdminSidebar from '@/components/admin/AdminSidebar'
import {mapGetters, mapActions} from 'vuex'
import vClickOutside from 'v-click-outside'
export default {
  name: 'Layout',
  components: {
    BackFooter,
    AdminSidebar
  },
  data: function () {
    return {
      isProfileDropdownOpen: false,
      isNotifDropdownOpen: false
    }
  },
  // mounted () {
  //   this.countdown()
  // },
  computed: {
    ...mapGetters('admin', ['admin'])
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  methods: {
    ...mapActions('admin', ['adminlogout']),
    ...mapActions('company', ['companylogout']),
    hideProfile () {
      this.isProfileDropdownOpen = false
      // console.log('Clicked outside. Event: ', event)
    },
    hideNotif () {
      this.isNotifDropdownOpen = false
      // console.log('Clicked outside. Event: ', event)
    },
    signout () {
      this.adminlogout()
      this.companylogout()
      this.$router.push('/')
    }
  }
}
</script>
<style >
  /* @import '../../static/css/dashboard.css'; */
  @import 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-multiselect/0.9.13/css/bootstrap-multiselect.css';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css';
  /* @import 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css'; */
  /* @import 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css'; */
</style>
