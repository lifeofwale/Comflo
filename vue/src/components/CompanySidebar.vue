<template>
  <div id="sidebar">
    <div id="nav-mobile" class="width-100 mt-5">
      <ul class="widget-tab mt-5">
        <li>
          <router-link to="/company/">
            <a title="Home">
              <i class="fa fa-home" title="Home"></i>
              <p class="hidden-sm-down" title="Home">Home</p>
            </a>
          </router-link>
        </li>
        <!-- <li>
          <router-link to="/user/deals">
          <a title="Sold Transactions">
            <i class="fa fa-handshake-o" title="Sold Transactions"></i>
            <p class="hidden-sm-down" title="Sold Transactions">Sold Transactions</p>
          </a>
          </router-link>
        </li>
        <li>
          <router-link to="/user/bought-deals">
          <a title="Bought Transactions">
            <i class="fa fa-shopping-cart" title="Bought Transactions"></i>
            <p class="hidden-sm-down" title="Bought Transactions">Bought Transactions</p>
          </a>
          </router-link>
        </li> -->
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
          <router-link to="/user/">
            <a class="nav-link active">
              <p :class="{ active: companyhome }" class="hidden-sm-down"><i class="fa fa-home"></i><span>Home</span></p>
            </a>
          </router-link>
        </li>
        <!-- <li v-tooltip.right="'Sold Transactions'" class="nav-item">
          <router-link to="/user/deals">
            <a class="nav-link">
              <p class="hidden-sm-down"><i class="fa fa-handshake-o"></i><span>Sold Transactions</span></p>
            </a>
          </router-link>
        </li>
        <li v-tooltip.right="'Bought Transactions'" class="nav-item">
          <router-link to="/user/bought-deals">
            <a class="nav-link">
              <p class="hidden-sm-down"><i class="fa fa-shopping-cart"></i><span>Bought Transactions</span></p>
            </a>
          </router-link>
        </li> -->
      </ul>
      <ul class="nav nav-pills">
        <li class="nav-item ">
          <router-link to="#">
            <a class="nav-link">
              <p :class="{ active: companysupport }" class="hidden-sm-down"><i class="fa fa-phone"></i><span>Support</span></p>
            </a>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Company-Sidebar',
  data: function () {
    return {
    }
  },
  computed: {
    companyhome () {
      return this.$route.path === '/company/'
    },
    companysupport () {
      return this.$route.path === '/company/support'
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
