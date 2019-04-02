<template>
  <!-- <div id="sidebar">
    <div id="nav-mobile" class="width-100 mt-5">
      <ul class="widget-tab mt-5">
        <li>
          <router-link :to="{ name: 'User-Home'}">
            <a title="Home">
              <i class="fa fa-home" title="Home"></i>
              <p class="hidden-sm-down" title="Home">Home</p>
            </a>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'User-Marketplace'}">
          <a title="Marketplace">
            <i class="fa fa-handshake-o" title="Marketplace"></i>
            <p class="hidden-sm-down" title="Marketplace">Marketplace</p>
          </a>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'User-Deals'}">
          <a title="My Transactions">
            <i class="fa fa-shopping-cart" title="My Transactions"></i>
            <p class="hidden-sm-down" title="My Transactions">My Transactions</p>
          </a>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'User-Contracts'}">
          <a title="My Contracts">
            <i class="fa fa-pencil-square-o" title="My Contracts"></i>
            <p class="hidden-sm-down" title="My Contracts">My Contracts</p>
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
          <router-link :to="{ name: 'User-Home'}">
            <a class="nav-link">
              <p :class="{ active: userhome }" class="hidden-sm-down"><i class="fa fa-home"></i><span>Home</span></p>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'User-Marketplace'}">
            <a class="nav-link">
              <p :class="{ active: usermarketplace }" class="hidden-sm-down"><i class="fa fa-shopping-cart"></i><span>Marketplace</span></p>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'User-Deals'}">
            <a class="nav-link">
              <p :class="{ active: usertransactions }" class="hidden-sm-down"><i class="fa fa-handshake-o"></i><span>Transactions</span></p>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'User-Contracts'}">
            <a class="nav-link">
              <p :class="{ active: usercontracts }" class="hidden-sm-down"><i class="fa fa-pencil-square-o"></i><span>Contracts</span></p>
            </a>
          </router-link>
        </li>
      </ul>
      <ul class="nav nav-pills">
        <li class="nav-item ">
          <router-link to="#">
            <a class="nav-link">
              <p :class="{ active: usersupport }" class="hidden-sm-down"><i class="fa fa-phone"></i><span>Support</span></p>
            </a>
          </router-link>
        </li>
      </ul>
    </nav>
  </div> -->
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
      <div class="dropdown-divider mx-5"></div>
      <li class="nav-item aside-m__item">
        <router-link to="#" :class="{ active: usersupport }"  class="nav-link aside-m__a text-center">
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
export default {
  name: 'User-Sidebar',
  data: function () {
    return {
    }
  },
  computed: {
    usermarketplace () {
      return this.$route.path === '/user/marketplace' || this.$route.path === '/user/marketplace/' || this.$route.path.includes('/user/marketplace')
    },
    userhome () {
      return this.$route.path === '/user/' || this.$route.path === '/user'
    },
    usertransactions () {
      return this.$route.path === '/user/transactions' || this.$route.path === '/user/transactions/' || this.$route.path.includes('/user/transactions')
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
