<template>
  <aside class="col-sm-1 position-fixed aside aside-m px-0">
    <ul class="nav flex-column aside-m__ul">
      <li class="nav-item aside-m__item">
        <router-link :to="{ name: 'User-Home'}" :class="{ active: userhome }"  class="nav-link aside-m__a text-center">
          <i class="fas fa-boxes"></i>
          <span class="d-block mt-1">Home</span>
        </router-link>
        <!-- <a href="#" :class="{ active: userhome }"  class="nav-link aside-m__a text-center">
        </a> -->
      </li>
      <div class="dropdown-divider mx-5"></div>

      <li class="nav-item aside-m__item">
        <router-link :to="{ name: 'User-Marketplace'}" :class="{ active: usermarketplace }"  class="nav-link aside-m__a text-center">
          <i class="fas fa-shopping-basket"></i>
          <span class="d-block mt-1"> Marketplace</span>
        </router-link>
        <!-- <a href="#" class="nav-link aside-m__a text-center">
          <i class="fas fa-shopping-basket"></i>
          <span class="d-block mt-1"> Marketplace</span>

        </a> -->
      </li>
      <div class="dropdown-divider mx-5"></div>

      <li class="nav-item aside-m__item">
        <router-link :to="{ name: 'User-Transactions'}" :class="{ active: usertransactions }"  class="nav-link aside-m__a text-center">
          <i class="fas fa-window-restore"></i>
          <span class="d-block mt-1">Transactions</span>
        </router-link>
        <!-- <a href="#" class="nav-link aside-m__a text-center">
          <i class="fas fa-window-restore"></i>
          <span class="d-block mt-1">Transactions</span>
        </a> -->
      </li>
      <li v-if='user.company_type.toLowerCase() == "admin"' class="nav-item aside-m__item">
        <router-link :to="{ name: 'User-Company'}" :class="{ active: usercompany }"  class="nav-link aside-m__a text-center">
          <i class="fas fa-building"></i>
          <span class="d-block mt-1">Company</span>
        </router-link>
        <!-- <a href="#" class="nav-link aside-m__a text-center">
          <i class="fas fa-window-restore"></i>
          <span class="d-block mt-1">Transactions</span>
        </a> -->
      </li>
      <div class="dropdown-divider mx-5"></div>
      <li class="nav-item aside-m__item">
        <router-link :to="{ name: 'User-Support'}" :class="{ active: usersupport }"  class="nav-link aside-m__a text-center">
          <i class="fas fa-headset"></i>
          <span class="d-block mt-1">Support</span>
        </router-link>
        <!-- <a href="#" class="nav-link aside-m__a text-center">
        </a> -->
      </li>
      <div class="dropdown-divider mx-5"></div>

    </ul>
  </aside>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'User-Sidebar',
  data: function () {
    return {
    }
  },
  computed: {
    ...mapGetters('user', ['user']),
    usermarketplace () {
      return this.$route.path === '/user/marketplace' || this.$route.path === '/user/marketplace/' || this.$route.path.includes('/user/marketplace')
    },
    userhome () {
      return this.$route.path === '/user/' || this.$route.path === '/user'
    },
    usertransactions () {
      return this.$route.path === '/user/transactions' || this.$route.path === '/user/transactions/' || this.$route.path.includes('/user/transactions')
    },
    usercompany () {
      return this.$route.path === '/user/company' || this.$route.path === '/user/company/' || this.$route.path.includes('/user/company')
    },
    usercontracts () {
      return this.$route.path === '/user/contracts' || this.$route.path === '/user/contracts/' || this.$route.path.includes('/user/contracts')
    },
    usersupport () {
      return this.$route.path === '/user/support' || this.$route.path === '/user/support/' || this.$route.path.includes('/user/support')
    }
  }
}
</script>
<style lang="css">
  .vue-tooltip {
    background-color: #ffffff !important;
    color: #83C225 !important;
  }

  .tooltip-arrow {
    border-right-color: #83C225 !important;
  }
</style>
