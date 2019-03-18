<template>
  <div id="sidebar">
    <div id="nav-mobile" class="width-100 mt-5">
      <ul class="widget-tab mt-5">
        <li>
          <router-link :to="{ name: 'Admin-Home'}">
            <a title="Home">
              <i class="fa fa-home" title="Home"></i>
              <p class="hidden-sm-down" title="Home">Home</p>
            </a>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Admin-Partners'}">
          <a title="Partners">
            <i class="fa fa-user-plus" title="Partners"></i>
            <p class="hidden-sm-down" title="Partners">Partners</p>
          </a>
          </router-link>
        </li>
        <!-- <li>
          <router-link to="/admin/partners">
          <a title="Users">
            <i class="fa fa-users" title="Users"></i>
            <p class="hidden-sm-down" title="Users">Users</p>
          </a>
          </router-link>
        </li> -->
        <li>
          <router-link :to="{ name: 'Admin-Companies'}">
          <a title="Companies">
            <i class="fa fa-building-o" title="Companies"></i>
            <p class="hidden-sm-down" title="Companies">Companies</p>
          </a>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Admin-Deals'}">
          <a title="Transactions">
            <i class="fa fa-handshake-o" title="Transactions"></i>
            <p class="hidden-sm-down" title="Transactions">Transactions</p>
          </a>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Admin-Contracts'}">
          <a title="Contracts">
            <i class="fa fa-pencil-square-o" title="Contracts"></i>
            <p class="hidden-sm-down" title="Contracts">Contracts</p>
          </a>
          </router-link>
        </li>
        <li>
          <router-link to="#">
            <a title="Support">
              <i class="fa fa-phone" title="Support"></i>
              <p class="hidden-sm-down" title="Support">Support</p>
            </a>
          </router-link>
        </li>
      </ul>
    </div>
    <nav id="nav-desktop" class="venice-bg col-sm-2 col-md-1 d-sm-block sidebar">
      <ul class="nav nav-pills flex-column">
        <li class="nav-item">
          <router-link :to="{ name: 'Admin-Home'}">
            <a class="nav-link active">
              <p :class="{ active: adminhome }" class="hidden-sm-down"><i class="fa fa-home"></i><span>Home</span></p>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Admin-Partners'}">
            <a class="nav-link">
              <p :class="{ active: adminpartners }" class="hidden-sm-down"><i class="fa fa-user-plus"></i><span>Partners</span></p>
            </a>
          </router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link to="/admin/users">
            <a class="nav-link">
              <p class="hidden-sm-down"><i class="fa fa-users"></i><span>Users</span></p>
            </a>
          </router-link>
        </li> -->
        <li class="nav-item">
          <router-link :to="{ name: 'Admin-Companies'}">
            <a class="nav-link">
              <p :class="{ active: admincompanies }" class="hidden-sm-down"><i class="fa fa-building-o"></i><span>Companies</span></p>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Admin-Deals'}">
            <a class="nav-link">
              <p :class="{ active: admintransactions }" class="hidden-sm-down"><i class="fa fa-handshake-o"></i><span>Transactions</span></p>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Admin-Contracts'}">
            <a class="nav-link">
              <p :class="{ active: admincontracts }" class="hidden-sm-down"><i class="fa fa-pencil-square-o"></i><span>Contracts</span></p>
            </a>
          </router-link>
        </li>
      </ul>
      <ul class="nav nav-pills">
        <li class="nav-item ">
          <router-link to="#">
            <a class="nav-link">
              <p :class="{ active: adminsupport }" class="hidden-sm-down"><i class="fa fa-phone"></i><span>Support</span></p>
            </a>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Admin-Sidebar',
  data: function () {
    return {
    }
  },
  computed: {
    adminpartners () {
      return this.$route.path === '/admin/partners' || this.$route.path === '/admin/partners/' || this.$route.path.includes('/admin/partners')
    },
    adminhome () {
      return this.$route.path === '/admin/' || this.$route.path === '/admin'
    },
    admincompanies () {
      return this.$route.path === '/admin/companies' || this.$route.path === '/admin/companies/' || this.$route.path.includes('/admin/companies')
    },
    admintransactions () {
      return this.$route.path === '/admin/deals' || this.$route.path === '/admin/deals/' || this.$route.path.includes('/admin/deals')
    },
    admincontracts () {
      return this.$route.path === '/admin/contracts' || this.$route.path === '/admin/contracts/' || this.$route.path.includes('/admin/contracts')
    },
    adminsupport () {
      return this.$route.path === '/admin/support' || this.$route.path === '/admin/support/' || this.$route.path.includes('/admin/support')
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
