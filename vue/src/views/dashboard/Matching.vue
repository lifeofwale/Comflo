<template>
  <main class="col-sm-12 ml-sm-auto col-md-11 dashboard-content" role="main">
    <div class="width-100">
      <h1 class="pull-left">Matching Details</h1>
    </div>
    <div class="width-100 dashboard-widget">
      <div class="row">
        <div class="col-md-6 col-lg-6">
          <form>
            <!--<div class="width-100">-->
            <!--<h4 class="pull-left margin-bottom-1-5">Trade House Inc.</h4>-->
            <!--</div>-->
            <div class="width-100">
              <h4 class="pull-left margin-bottom-1-5">Seller Requested Documentation:</h4>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-md-6">
                  <label>Letter of credit </label>
                </div>
                <div class="col-md-6">
                  <label><a href="/static/assets/3D5S2C.pdf" target="_blank">View</a></label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-md-6">
                  <label>Import certificate</label>
                </div>
                <div class="col-md-6">
                  <label><a href="/static/assets/3D5S2C.pdf" target="_blank">View</a></label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-md-6">
                  <label>Contract markup</label>
                </div>
                <div class="col-md-6">
                  <label><a href="/static/assets/3D5S2C.pdf" target="_blank">View</a></label>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="col-md-6 col-lg-6">
          <form>
            <div class="width-100">
              <h4 class="pull-left margin-bottom-1-5">Buyer Requested Documentation:</h4>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-md-6">
                  <label>Invoices</label>
                </div>
                <div class="col-md-6">
                  <input type="file" class="form-control">
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-md-6">
                  <label>Packing list</label>
                </div>
                <div class="col-md-6">
                  <label><a href="/static/assets/3D5S2C.pdf" target="_blank">Edit</a></label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-md-6">
                  <label>Inspection report</label>
                </div>
                <div class="col-md-6">
                  <label><a href="/static/assets/3D5S2C.pdf" target="_blank">Edit</a></label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-md-6">
                  <label>Customs clearance</label>
                </div>
                <div class="col-md-6">
                  <input type="file" class="form-control">
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-md-6">
                  <label>Contract markup</label>
                </div>
                <div class="col-md-6">
                  <label><a href="/static/assets/3D5S2C.pdf" target="_blank">View</a></label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <p class="mt-10">
      <button type="button" @click="confirm" class="btn btn-round venice-bg pull-right">
        Confirm Due Dilligence Complete
      </button>
    </p>
  </main>
</template>
<script>
export default {
  name: 'Matching',
  data: function () {
    return {
    }
  },
  methods: {
    confirm () {
      this.$router.push('/dashboard/tracking')
    }
  }
}
</script>
