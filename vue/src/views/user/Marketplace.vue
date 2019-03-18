<template>
    <main class="col-sm-11 ml-sm-auto col-md-11 col-lg-10 dashboard-content" role="main">
        <div class="pull-left mt-lg-5">
            <h3>Marketplace</h3>
            <!-- <p class="mt-lg-3 text-gray">Initiate transactions, receive updates and track progress</p> -->
        </div>
        <p class="pull-right mt-lg-5">
            <router-link :to="{ name: 'New-User-Deal'}" class='btn btn-round venice-bg'>
                New Transaction
            </router-link>
        </p>
        <div class="table-responsive dashboard-widget">
          <p v-if="mainerror.length > 0" class="text-danger text-center col-md-12 mt-lg-5">{{mainerror}}</p>
          <p v-if="!isOnline" class="text-danger text-center col-md-12 mt-lg-5">You are not connected to the internet</p>
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
      visible: false,
      disable: false,
      mainerror: ''
    }
  },
  computed: {
    ...mapGetters('user', ['user']),
    isOnline () {
      return window.navigator.onLine
    }
  },
  mounted () {
    this.getDeals()
  },
  methods: {
    async getDeals () {
      let loader = this.$loading.show()
      let response = await api.getOffers('?status=pending')
      // // console.log(response)
      // // console.log(response.data.status)
      loader.hide()
      if (response.data.status === 'success') {
        this.deals = response.data.data
      }
      this.disable = false
    },
    encodeIt (id, reference, type) {
      return encode(id, reference, type)
    }
  }
}
</script>
