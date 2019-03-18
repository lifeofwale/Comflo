<template>
  <main class="col-sm-11 ml-sm-auto col-md-11 col-lg-10 dashboard-content" role="main">
    <div class="pull-left mt-lg-5">
      <h3>Cashew Kernels</h3>
      <p class="mt-lg-3 text-gray">Comflo provides the following services for Cashew Kernels</p>
    </div>
    <section class="row home-content w-100 mt-lg-5">
      <router-link to="/dashboard/bosr" class="col-md-12 p-lg-5 mb-lg-3 highlight">
          <div class="col-md-4 pull-left">
            <h5>Buy or Sell</h5>
          </div>
          <div class="col-md-8 pull-right">
            <p class="text-light-gray">Contract for high quality processed cashew kernels</p>
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
  name: 'CK',
  data: function () {
    return {
    }
  }
}
</script>
