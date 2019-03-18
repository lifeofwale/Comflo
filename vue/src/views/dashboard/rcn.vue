<template>
  <main class="col-sm-11 ml-sm-auto col-md-11 col-lg-10 dashboard-content" role="main">
    <div class="pull-left mt-lg-5">
      <h3>Raw Cashew Nuts</h3>
      <p class="mt-lg-3 text-gray">Please select a service required</p>
    </div>
    <section class="row home-content w-100 mt-lg-5">
      <router-link to="/dashboard/bos" class="col-md-12 p-lg-4 mb-lg-3 highlight">
        <div class="col-md-4 pull-left">
          <h5>Buy or Sell</h5>
        </div>
        <div class="col-md-8 pull-right">
          <p class="text-light-gray">Comflo’s matching process links buyers and sellers seamlessly and provides end-to-end transaction support and visibility</p>
        </div>
      </router-link>
      <router-link to="/dashboard/local" class="col-md-12 p-lg-4 mb-lg-3 highlight">
        <div class="col-md-4 pull-left">
          <h5>Transportation & Storage</h5>
        </div>
        <div class="col-md-8 pull-right">
          <p class="text-light-gray">Arrange local services and use Comflo’s convenient local payment systems</p>
        </div>
      </router-link>
      <router-link to="/dashboard/contract" class="col-md-12 p-lg-4 mb-lg-3 highlight">
        <div class="col-md-4 pull-left">
          <h5>Processing Services</h5>
        </div>
        <div class="col-md-8 pull-right">
          <p class="text-light-gray">Contract for processing services with verified parties</p>
        </div>
      </router-link>

      <div class="col-md-12 col-sm-12">
        <router-link to="/dashboard/cashew" class="pull-right">
          <a class="btn btn-round venice-bg">
            Back
          </a>
        </router-link>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: 'RCN',
  data: function () {
    return {
    }
  }
}
</script>
