<template>
  <main class="col-sm-11 ml-sm-auto col-md-11 col-lg-10 dashboard-content" role="main">
    <div class="pull-left mt-lg-5">
      <h3>Cashews</h3>
      <p class="mt-lg-3 text-gray">Offering processed and unprocessed cashews</p>
    </div>
    <div class="width-100 dashboard-widget">
      <section class="row">
        <div class="col-md-6 col-sm-12">
          <div style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/static/images/cashew-kernels.jpg) no-repeat; background-size: cover;" class="large-rounded-rectangle venice">
            <router-link to="/dashboard/ck">
              <p>Cashew Kernels</p>
            </router-link>
          </div>
          <!--<p class="text-center text-gray mt-lg-3">Processed Cashew Nuts</p>-->
        </div>
        <div class="col-md-6 col-sm-12">
          <div style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/static/images/raw-cashews.jpg) no-repeat; background-size: cover;" class="large-rounded-rectangle venice">
            <router-link to="/dashboard/rcn">
              <p>Raw Cashew Nuts</p>
            </router-link>
          </div>
          <!--<p class="text-center text-gray mt-lg-3">Unprocessed Cashew Nuts</p>-->
        </div>
      </section>
    </div>
  </main>
</template>
<script>
export default {
  name: 'Dashboard',
  data: function () {
    return {
    }
  }
}
</script>
