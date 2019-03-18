<template>
  <main class="col-sm-12 ml-sm-auto col-md-11 dashboard-content" role="main">
    <div class="row mt-lg-5">
      <div class="col-md-12 pull-left text-justify">
        <h3 class="pull-left text-gray">Arrange Local Services</h3>
      </div>
    </div>
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
                  <div class="col-lg-3">
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" value="inspections" v-model="checkedNames" id="inspections">
                      </span>
                      <input type="text" class="form-control" value="Inspections" disabled>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" value="truck_transportation"
                               v-model="checkedNames" id="truck_transportation">
                      </span>
                      <input type="text" class="form-control" value="Truck Transportation" disabled>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" value="local_storage" v-model="checkedNames"
                               id="local_storage">
                      </span>
                      <input type="text" class="form-control" value="Local Storage" disabled>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" value="marine_transportation"
                               v-model="checkedNames" id="marine_transportation">
                      </span>
                      <input type="text" class="form-control" value="Marine Transportation" disabled>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>Location</label>
              <input type="text" v-model="location" class="form-control" placeholder="Location">
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
    <p class="pull-left mt-10">
      <router-link to="/dashboard/rcn">
        <a class="btn btn-round venice-bg">
          Back to Cashews
        </a>
      </router-link>
    </p>
  </main>
</template>
<script>
export default {
  name: 'Local',
  data: function () {
    return {
      checkedNames: [],
      location: '',
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
