<template>
  <main class="col-sm-12 ml-sm-auto col-md-11 dashboard-content" role="main">
    <div class="row mt-lg-5">
      <div class="col-md-12 pull-left text-justify">
        <h3 class="pull-left text-gray"> Obtain Contract Processing Services</h3>
      </div>
    </div>
    <h3>&nbsp;</h3>
    <div class="width-100 dashboard-widget">
      <div class="row">
        <div class="col-md-12">
          <form class="form-widget">
            <div class="width-100">
              <h3 class="pull-left margin-bottom-1-5">Enter Service Details</h3>
            </div>
            <div class="col-md-12">
              <label>Select all that apply:</label>
              <div class="form-group">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="input-group">
                                              <span class="input-group-addon">
                                                <input type="checkbox" value="rcn_processing" v-model="checkedNames" id="rcn_processing">
                                              </span>
                      <input type="text" class="form-control" value="Processing of RCN" disabled>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="input-group">
                                              <span class="input-group-addon">
                                                <input type="checkbox" value="package_kernels" v-model="checkedNames" id="package_kernels">
                                              </span>
                      <input type="text" class="form-control" value="Packaging kernels" disabled>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="input-group">
                                              <span class="input-group-addon">
                                                <input type="checkbox" value="shipping" v-model="checkedNames" id="shipping">
                                              </span>
                      <input type="text" class="form-control" value="Shipping" disabled>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>Preferred Processing Region</label>
              <input type="text" v-model="region" class="form-control" placeholder="Preferred Processing Region">
            </div>
            <div class="form-group">
              <label>Quantity</label>
              <input type="text" v-model="quantity" class="form-control" placeholder="Quantity">
            </div>
            <div class="form-group">
              <label>Variety</label>
              <input type="text" v-model="variety" class="form-control" placeholder="Variety">
            </div>
          </form>
        </div>
      </div>
    </div>
    <p class="pull-right mt-10">
      <button @click="save" type="button" class="btn btn-round venice-bg">
        Submit
      </button>
    </p>
    <router-link to="/dashboard/rcn">
      <a class="btn btn-round venice-bg">
        Back to Cashews
      </a>
    </router-link>
  </main>
</template>
<script>
export default {
  name: 'Contract',
  data: function () {
    return {
      checkedNames: [],
      region: '',
      quantity: '',
      variety: ''
    }
  },
  methods: {
    save () {
      this.$router.push('/dashboard/request')
    }
  }
}
</script>
