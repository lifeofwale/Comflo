<template>
  <main class="col-sm-12 ml-sm-auto col-md-11 dashboard-content" role="main">
    <div class="width-100 mt-lg-5">
      <h3>Cashew Kernels</h3>
      <p class="text-gray">To buy or sell cashew kernels, complete the fields below to begin the Comflo matching process
      </p>
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
              <label>Commodity Classification</label>
              <v-select v-model="classification" :options='[
                {"value":"Organic", "label":"Organic"},
                {"value":"Non-GMO", "label":"Non-GMO"},
                {"value":"Fairtrade", "label":"Fairtrade"},
                {"value":"Chemical Free", "label":"Chemical Free"}
                ]'>
              </v-select>
            </div>
            <div class="form-group">
              <label>Grades</label>
              <v-select v-model="grades" :options='[
                {"value":"White Wholes (WW) - 180", "label":"White Wholes (WW) - 180"},
                {"value":"White Wholes (WW) - 210", "label":"White Wholes (WW) - 210"},
                {"value":"White Wholes (WW) - 240", "label":"White Wholes (WW) - 240"},
                {"value":"White Wholes (WW) - 320", "label":"White Wholes (WW) - 320"},
                {"value":"White Wholes (WW) - 450", "label":"White Wholes (WW) - 450"},
                {"value":"White Wholes (WW) - 500", "label":"White Wholes (WW) - 500"},
                {"value":"Scorched Wholes (SW) - 180", "label":"Scorched Wholes (SW) - 180"},
                {"value":"Scorched Wholes (SW) - 210", "label":"Scorched Wholes (SW) - 210"},
                {"value":"Scorched Wholes (SW) - 240", "label":"Scorched Wholes (SW) - 240"},
                {"value":"Scorched Wholes (SW) - 320", "label":"Scorched Wholes (SW) - 320"},
                {"value":"Scorched Wholes (SW) - 450", "label":"Scorched Wholes (SW) - 450"},
                {"value":"Scorched Wholes (SW) - 500", "label":"Scorched Wholes (SW) - 500"},
                {"value":"Scorched Wholes Seconds (SSW) ", "label":"Scorched Wholes Seconds (SSW) "},
                {"value":"Dessert Wholes (DW)", "label":"Dessert Wholes (DW)"},
                {"value":"Butts (B)", "label":"Butts (B)"},
                {"value":"Splits (S)", "label":"Splits (S)"},
                {"value":"Large White Pieces (LWP)", "label":"Large White Pieces (LWP)"},
                {"value":"Small White Pieces (SWP)", "label":"Small White Pieces (SWP)"},
                {"value":"Baby Bits (BB)", "label":"Baby Bits (BB)"},
                {"value":"Scorched Butts (SB)", "label":"Scorched Butts (SB)"},
                {"value":"Scorched Splits (SS)", "label":"Scorched Splits (SS)"},
                {"value":"Scorched Pieces (SP)", "label":"Scorched Pieces (SP)"},
                {"value":"Scorched Small Pieces (SSP)", "label":"Scorched Small Pieces (SSP)"},
                {"value":"Scorched Pieces Seconds (SPS)", "label":"Scorched Pieces Seconds (SPS)"},
                {"value":"Dessert Pieces (DP)", "label":"Dessert Pieces (DP)"}
                ]'>
              </v-select>
            </div>
            <!--<div class="form-group">-->
              <!--<label>Date Available</label>-->
              <!--<datepicker v-model="date" :input-class="'form-control'" :placeholder="'Date'"></datepicker>-->
            <!--</div>-->
            <!--<div class="form-group">-->
              <!--<label>Packaging Type</label>-->
              <!--<input type="text" v-model="packaging" class="form-control" placeholder="Packaging Type">-->
            <!--</div>-->
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
      <router-link to="/dashboard/ck">
        <a class="btn btn-round venice-bg">
          Back to Cashews
        </a>
      </router-link>
    </p>
  </main>
</template>
<script>
export default {
  name: 'BuyOrSellRaw',
  data: function () {
    return {
      transactionType: 'Buy',
      location: '',
      quantity: '',
      grades: 'White Wholes (WW) - 180',
      date: '',
      packaging: '',
      incoterms: '',
      classification: 'Organic',
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
