<template>
  <main class="col-sm-12 ml-sm-auto col-md-11 dashboard-content" role="main">
    <div class="width-100 pull-left mt-lg-5">
      <h3>Raw Cashew Nuts - Buy or Sell</h3>
      <p class="mt-lg-3 text-gray">Fill out the information below</p>
    </div>

    <div class="width-80 dashboard-widget bg-light-blue">
      <!--<div class="row">-->
        <div class="col-md-12">
          <h3 class="text-gray"> Buy Processed Cashew Kernels</h3>
          <form class="form-widget">
            <div class="width-100">
              <h3 class="pull-left margin-bottom-1-5">Enter Transaction Details</h3>
            </div>
            <div class="form-group">
              <label>Buy or Sell</label>
              <select title="transactionType" v-model="transactionType" id="" class="form-control">
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
              </select>
            </div>
            <div class="form-group">
              <label>Shipping Destination</label>
              <input type="text" v-model="destination" class="form-control" placeholder="Shipping Destination">
            </div>
            <div class="form-group">
              <label>Quantity</label>
              <input type="text" v-model="quantity" class="form-control" placeholder="Quantity">
            </div>
            <div class="form-group">
              <label>Variety</label>
              <input type="text" v-model="variety" class="form-control" placeholder="Variety">
            </div>
            <div class="form-group">
              <label>Date Required</label>
              <datepicker v-model="date" :input-class="'form-control'" :placeholder="'Date'"></datepicker>
            </div>
            <div class="form-group">
              <label>Quality/Grade</label>
              <input type="text" v-model="quality" class="form-control" placeholder="Quality/Grade">
            </div>
            <div class="form-group">
              <label>Packaging Type</label>
              <input type="text" v-model="packaging_type" class="form-control" placeholder="Packaging Type">
            </div>
            <div class="form-group">
              <label>Other Details</label>
              <textarea title="others" class="form-control" name="others" id="others" cols="30" rows="5"></textarea>
            </div>
          </form>
        </div>
      <!--</div>-->
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
  name: 'Cashew',
  data: function () {
    return {
      transactionType: '',
      destination: '',
      quantity: '',
      variety: '',
      date: '',
      quality: '',
      packaging_type: '',
      others: ''
    }
  },
  methods: {
    save () {
      this.$router.push('/dashboard/request')
    }
  }
}
</script>
