<template>
    <main class="col-sm-11 ml-sm-auto col-md-11 col-lg-10 dashboard-content" role="main">
        <div class="pull-left mt-lg-5">
            <h3>Bought Transactions</h3>
            <!-- <p class="mt-lg-3 text-gray">Initiate transactions, receive updates and track progress</p> -->
        </div>
        <p class="pull-right mt-lg-5">
            <a class="btn btn-round venice-bg" href="/user/sell-deal">
                Add Transaction
            </a>
        </p>
        <div class="table-responsive dashboard-widget">
            <table id="projects" class="table" cellspacing="0" width="100%">
                <thead>
                <tr>
                    <th class=" hidden-md-down"></th>
                    <th>Type</th>
                    <th>Commodity</th>
                    <th>Quantity</th>
                    <th>INCOTERM</th>
                    <th>Price ($)</th>
                    <th>Location</th>
                    <th>Status</th>
                    <!-- <th>Category</th> -->
                    <!-- <th></th> -->
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(deal, index) in deals" :key="index">
                      <template v-if="compare(deal[8], user.address)">
                        <td class="hidden-md-down"></td>
                            <td>{{deal[1]}}</td>
                            <td>{{deal[2]}}</td>
                            <td>{{deal[3]}}</td>
                            <td>{{deal[4]}}</td>
                            <td>{{deal[5]}}</td>
                            <td>{{deal[6]}}</td>
                            <td v-if="deal[9] == '0'" class="text-warning">Pending</td>
                            <td v-else-if="deal[9] == '1'" class="text-info">In Progress</td>
                            <td v-else-if="deal[9] == '2'" class="text-success">Completed</td>
                            <td v-else class="text-danger">Terminated</td>
                            <!-- <td class="">{{deal[10]}}</td> -->
                            <!-- <td>
                                <router-link :to="{ name: 'Edit-Deal', params: { id: encodeIt(deal[0], deal[1], deal[2]) }}">
                                    Edit
                                </router-link>
                            </td> -->
                            <td>
                                <router-link :to="{ name: 'User-Deal', params: { id: encodeIt(deal[0], deal[1], deal[2]) }}">
                                    View
                                </router-link>
                            </td>
                      </template>
                    </tr>
                </tbody>
            </table>
        </div>
  </main>
</template>
<script>
import api from '@/api/user'
import Header from '@/components/Header'
import { addCompare, encode } from '@/config'
import {mapGetters} from 'vuex'
export default {
  name: 'Index',
  components: {
    Header
  },
  data: function () {
    return {
      deals: [],
      visible: false
    }
  },
  mounted () {
    this.getDeals()
  },
  computed: {
    ...mapGetters('user', ['user'])
  },
  methods: {
    async getDeals () {
      let loader = this.$loading.show()
      let response = await api.getDeals()
      // console.log(response)
      // console.log(response.data.status)
      loader.hide()
      if (response.data.status === 'success') {
        this.deals = response.data.data
      }
      this.disable = false
    },
    compare (seller, address) {
      return addCompare(seller, address)
    },
    encodeIt (id, buyorsell, commodity) {
      return encode(id, buyorsell, commodity)
    }
  }
}
</script>
