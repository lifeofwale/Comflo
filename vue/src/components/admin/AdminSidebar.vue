<template>
  <aside class="col-sm-1 position-fixed aside aside-m px-0">
    <ul class="nav flex-column aside-m__ul">
      <li class="nav-item aside-m__item">
        <router-link :to="{ name: 'Admin-Users'}" :class="{ active: adminusers }"  class="nav-link aside-m__a text-center">
          <i class="fas fa-boxes"></i>
          <span class="d-block mt-1">Users</span>
        </router-link>
        <!-- <a href="#" :class="{ active: userhome }"  class="nav-link aside-m__a text-center">
        </a> -->
      </li>
      <div class="dropdown-divider mx-5"></div>

      <li class="nav-item aside-m__item">
        <router-link :to="{ name: 'Admin-Companies'}" :class="{ active: admincompanies }"  class="nav-link aside-m__a text-center">
          <i class="fas fa-shopping-basket"></i>
          <span class="d-block mt-1"> Comapnies</span>
        </router-link>
      </li>
      <div class="dropdown-divider mx-5"></div>

      <li class="nav-item aside-m__item">
        <router-link :to="{ name: 'Admin-Transactions'}" :class="{ active: admintransactions }"  class="nav-link aside-m__a text-center">
          <i class="fas fa-window-restore"></i>
          <span class="d-block mt-1">Transactions</span>
        </router-link>
      </li>
      <div class="dropdown-divider mx-5"></div>
      <!-- <li class="nav-item aside-m__item">
        <router-link :to="{ name: 'User-Support'}" :class="{ active: usersupport }"  class="nav-link aside-m__a text-center">
          <i class="fas fa-headset"></i>
          <span class="d-block mt-1">Support</span>
        </router-link>
      </li>
      <div class="dropdown-divider mx-5"></div> -->

    </ul>
  </aside>
</template>
<script>
export default {
  name: 'Admin-Sidebar',
  data: function () {
    return {
    }
  },
  computed: {
    adminusers () {
      return this.$route.path === '/admin' || this.$route.path === '/admin/'
    },
    admincompanies () {
      return this.$route.path === '/admin/companies' || this.$route.path === '/admin/companies/' || this.$route.path.includes('/admin/companies')
    },
    admintransactions () {
      return this.$route.path === '/admin/transactions' || this.$route.path === '/admin/transactions/' || this.$route.path.includes('/admin/transactions')
    },
    adminsupport () {
      return this.$route.path === '/admin/support' || this.$route.path === '/admin/support/' || this.$route.path.includes('/admin/support')
    }
  }
}
</script>
