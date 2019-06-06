<template>
    <!-- <main class="col-sm-11 ml-sm-auto col-md-11 col-lg-10 dashboard-content" role="main">
        <div class="pull-left mt-lg-5">
            <h3>Home</h3>
        </div>
        <div class="table-responsive dashboard-widget mt-lg-5">
          <div class="dashboard-wdiget mt-lg-5">
                <div class="dashboard-wdiget-inner row">
                    <router-link :to="{ name: 'New-User-Deal'}" class="width-100">
                        <div class="col-md-12">
                            <div class="pull-left">
                                <h4>Make a request</h4>
                                <p>To buy or sell a Commodity</p>
                            </div>
                            <div class="pull-right">
                                <i class="fa fa-angle-right fa-2x"></i>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="dashboard-wdiget mt-lg-5">
                <div class="dashboard-wdiget-inner row">
                    <router-link :to="{ name: 'User-Marketplace'}" class="width-100">
                        <div class="col-md-12">
                            <div class="pull-left">
                                <h4>Current Offers</h4>
                                <p>View current commodities available on Comflo</p>
                            </div>
                            <div class="pull-right">
                                <i class="fa fa-angle-right fa-2x"></i>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
  </main> -->
  <main class="col-sm-11 offset-sm-1 content content-m content-offset content-offset-m px-0">
    <div class="container mrt-6">
        <div class="d-flex align-content-center align-items-center">
        <span>
            <div class="content__icon--bg"><i class="fas fa-boxes"></i></div>
        </span>
        <span class="content__desc">
            <h3>Home</h3>
            <p class="empty-state"></p>
            <p>Choose an action</p>
        </span>
        </div>
        <div class="home mb-5">
        <div class="home__card text-center">
            <router-link :to="{ name: 'New-User-Transaction'}" >
                <div class="home__card-content">
                    <img src="/static/img/request.svg" alt="request icon">
                    <h6>Make a request</h6>
                    <p class="empty-state m-auto"></p>
                    <p>To buy or sell a
                    Commodity</p>
                </div>
            </router-link>
        </div>

        <div class="home__card text-center">
            <router-link :to="{ name: 'User-Marketplace'}">
            <div class="home__card-content">
                <img src="/static/img/offers.svg" alt="request icon">
                <h6>Current offers</h6>
                <p class="empty-state m-auto"></p>
                <p>View current commodities
                available on Comflo</p>
            </div>
            </router-link>
        </div>
        <div class="home__card text-center">
            <a href="#">
            <div class="home__card-content">
                <img src="/static/img/trade.svg" alt="request icon">
                <h6>Trade Services</h6>
                <p class="empty-state m-auto"></p>
                <p>We offer support for special
                trade request </p>
                <small>(Coming Soon)</small>
            </div>
            </a>
        </div>
        </div>
    </div>
    <Footer></Footer>
    </main>
</template>
<script>
import Footer from '@/components/user/UserFooter'
export default {
  name: 'User-Dashboard',
  dashboard: true,
  title () {
    return `Dashboard | Comflo Inc`
  },
  components: {
    Footer
  }
}
</script>
