<template>
  <main class="col-sm-12 ml-sm-auto col-md-11 dashboard-content" role="main">
    <div class="width-100 mt-lg-5">
      <h3>Raw Cashew Nuts</h3>
      <p class="text-gray">To buy or sell raw cashew nuts, complete the fields below to begin the Comflo matching process</p>
    </div>
    <div class="width-100 dashboard-widget">
      <div class="row">
        <div class="col-md-12">
          <form class="form-widget">
            <!--<div class="width-100">-->
              <!--<h3 class="pull-left margin-bottom-1-5">Enter Transaction Details</h3>-->
            <!--</div>-->
            <div class="form-group">
              <label>Buy or Sell</label>
              <select title="transactionType" v-model="transactionType" id="" class="form-control">
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
              </select>
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
            <div class="form-group">
              <label>Date Available</label>
              <datepicker v-model="date" :input-class="'form-control'" :placeholder="'Date'"></datepicker>
            </div>
            <div class="form-group">
              <label>KOR</label>
              <input type="text" v-model="kor" class="form-control" placeholder="kor">
            </div>
            <div class="form-group">
              <label>Moisture Content</label>
              <input type="text" v-model="moisture" class="form-control" placeholder="Moisture Content">
            </div>
            <div class="form-group">
              <label>Packaging Type</label>
              <input type="text" v-model="packaging" class="form-control" placeholder="Packaging Type">
            </div>
            <div class="form-group">
              <label>Preferred INCOTERM</label>
              <input type="text" v-model="incoterms" class="form-control" placeholder="INCOTERM">
            </div>
            <div class="form-group">
              <label>Other Details</label>
              <textarea title="others" class="form-control" v-model="others" id="others" cols="30" rows="5"></textarea>
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
  name: 'BuyOrSell',
  data: function () {
    return {
      transactionType: 'Buy',
      location: '',
      quantity: '',
      variety: '',
      date: '',
      kor: '',
      moisture: '',
      packaging: '',
      incoterms: '',
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
