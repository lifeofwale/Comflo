<template>
    <main class="col-sm-11 ml-sm-auto col-md-11 col-lg-10 dashboard-content" role="main">
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
  </main>
</template>
