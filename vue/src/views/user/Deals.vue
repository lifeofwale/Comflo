<template>
    <main class="col-sm-11 ml-sm-auto col-md-11 col-lg-10 dashboard-content" role="main">
        <div class="pull-left mt-lg-5">
            <h3>Transactions</h3>
            <!-- <p class="mt-lg-3 text-gray">Initiate transactions, receive updates and track progress</p> -->
        </div>
        <p class="pull-right mt-lg-5">
            <router-link :to="{ name: 'New-User-Deal'}" class='btn btn-round venice-bg'>
                Add Transaction
            </router-link>
        </p>
        <div class="table-responsive dashboard-widget">
            <table id="projects" class="table" cellspacing="0" width="100%">
                <thead>
                <tr>
                    <th class=" hidden-md-down"></th>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Commodity</th>
                    <th>Quantity (Tonnes)</th>
                    <th>Price</th>
                    <th>Status</th>
                    <!-- <th></th> -->
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(deal, index) in deals" :key="index">
                      <td class="hidden-md-down"></td>
                          <td>{{deal.reference}}</td>
                          <td>{{deal.type}}</td>
                          <td>{{deal.commodity}}</td>
                          <td>{{deal.quantity}}</td>
                          <td>{{deal.price}}</td>
                          <td v-bind:class="{ 'text-warning': deal.status == 'Pending', 'text-info': deal.status == 'Active', 'text-primary': deal.status == 'In Progress', 'text-danger': deal.status == 'Terminated', 'text-success': deal.status == 'Completed', 'text-dark': deal.status == 'Contract' }" >{{deal.status}}</td>
                          <!-- <td>
                              <router-link :to="{ name: 'Edit-Deal', params: { id: encodeIt(deal[0], deal[1], deal[2]) }}">
                                  Edit
                              </router-link>
                          </td> -->
                          <td>
                              <router-link :to="{ name: 'User-Deal', params: { id: encodeIt(deal._id, deal.reference, deal.type) }}">
                                  View
                              </router-link>
                          </td>
                    </tr>
                </tbody>
            </table>
        </div>
  </main>
</template>
<script>
import api from '@/api/offer'
// import adminApi from '@/api/admin'
import Header from '@/components/Header'
import { encode } from '@/config'
import {mapGetters} from 'vuex'
export default {
  name: 'Index',
  components: {
    Header
  },
  data: function () {
    return {
      deals: [],
      // partners: {},
      visible: false
    }
  },
  created () {
    this.getUserOffers()
  },
  computed: {
    ...mapGetters('user', ['user'])
  },
  methods: {
    async getUserOffers () {
      let loader = this.$loading.show()
      // console.log(this.user._id)
      let response = await api.getUserOffers(this.user._id)
      if (response.data.status === 'success') {
        this.deals = response.data.data
        // console.log(this.deals)
      }
      this.$forceUpdate()
      loader.hide()
      this.disable = false
    },
    // compare (seller, address) {
    //   return addCompare(seller, address)
    // },
    encodeIt (id, reference, type) {
      return encode(id, reference, type)
    }
  }
}
</script>
