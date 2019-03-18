<template>
  <main class="col-sm-12 ml-sm-auto col-md-11 dashboard-content" role="main">
    <div class="width-100">
      <h1 class="pull-left">Transaction Summary</h1>
    </div>
    <div class="width-100 dashboard-widget">
      <div class="row">
        <div class="col-md-12 col-lg-12">
          <form>
            <div class="width-100">
              <h4 class="pull-left margin-bottom-1-5">Transaction #: COM2374</h4>
            </div>
            <div class="form-group">
              <div class="col-md-12">
                <label>Sell</label>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12">
                <label>Location: Lagos, Nigeria</label>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12">
                <label>Quantity: 500T</label>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12">
                <label>Variety</label>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12">
                <label>Date Available</label>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12">
                <label>KOR</label>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12">
                <label>Moisture Content</label>
              </div>
            </div>

            <!--<div class="form-group">-->
              <!--<div class="row">-->
                <!--<div class="col-md-6">-->
                  <!--<label>Transaction analytics </label>-->
                <!--</div>-->
                <!--<div class="col-md-6">-->
                  <!--<label>&#45;&#45; coming soon</label>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          </form>
        </div>
      </div>
    </div>
    <p class="mt-10 pull-right">
      <router-link to="/dashboard/tracking">
        <a class="btn btn-round venice-bg text-white">
          Tracking
        </a>
      </router-link>
    </p>
    <router-link to="/dashboard/">
      <a class="btn btn-round venice-bg text-white">
        Back to Comflo
      </a>
    </router-link>
  </main>
</template>
<script>
export default {
  name: 'Request',
  data: function () {
    return {
    }
  }
}
</script>
