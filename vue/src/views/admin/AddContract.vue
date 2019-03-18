<template>
  <main class="col-sm-11 ml-sm-auto col-md-10 dashboard-content mt-lg-5" role="main">
            <form action="/admin/dashboard/projects/create" method="post" enctype="multipart/form-data">
                <div class="width-100">
                    <h4 class="pull-left">New Contract</h4>
                </div>
                <div class="width-100 dashboard-widget">
                    <div class="row">
                        <p v-if="mainerror.length > 0" class="text-danger text-center col-md-12">{{mainerror}}</p>
                        <loading :active.sync="visible" :can-cancel="true"></loading>
                        <div class="col-md-12 col-lg-12">
                            <div class="form-widget">
                              <div class="form-group">
                                <label>Shipment Date</label>
                                <datepicker v-model="shipmentdate" :input-class="'form-control'" :placeholder="'Select Date'"></datepicker>
                              </div>
                              <div class="form-group">
                                  <label>Destination</label>
                                  <input type="text" v-model="destination" class="form-control" placeholder="Destination">
                              </div>
                              <div class="form-group">
                                  <label>Origin</label>
                                  <input type="text" v-model="origin" class="form-control" placeholder="Origin">
                              </div>
                              <div class="form-group">
                                  <label>Seller</label>
                                  <v-select v-model="seller" :options='users'>
                                  </v-select>
                              </div>
                              <div class="form-group">
                                  <label>Buyer</label>
                                  <v-select v-model="buyer" :options='users'>
                                  </v-select>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-12">
                    <p class="pull-right mt-10">
                        <button type="button" @click="addContract" :disabled="!emptyText || disable" class="btn btn-round venice-bg">
                            Next
                        </button>
                    </p>
                    <p class="pull-left mt-10">
                        <router-link :to="{ name: 'Admin-Deals'}">
                            <a class="btn btn-round venice-bg">
                            Back
                            </a>
                        </router-link>
                    </p>
                </div>
            </form>
        </main>
</template>
<script>
// import api from '@/api/offer'
import adminApi from '@/api/admin'
import { decode } from '@/config'
import {mapGetters} from 'vuex'
export default {
  name: 'Admin-Add-Contract',
  data: function () {
    return {
      deals: [],
      visible: false,
      disable: false,
      mainerror: '',
      seller: {'value': '', 'label': 'Search Users'},
      buyer: {'value': '', 'label': 'Search Users'},
      users: [],
      destination: '',
      origin: '',
      shipmentdate: ''
    }
  },
  mounted () {
    this.getUsers()
  },
  computed: {
    ...mapGetters('admin', ['admin']),
    emptyText () {
      return this.destination.length > 0 && this.origin.length > 0 && this.buyer.value.length > 1 && this.seller.value.length > 1
    }
  },
  methods: {
    async addContract () {
      // let loader = this.$loading.show()
      //   console.log(response)
      //   console.log(response.data.status)
      const deal = {
        offer: `${this.decodeIt(this.$route.params.id)}`,
        seller: this.seller.value,
        buyer: this.buyer.value,
        shipmentdate: this.shipmentdate,
        destination: this.destination,
        origin: this.origin
      }
      this.$router.push({
        name: 'Admin-Add-Contract-Contd',
        params: {
          id: this.$route.params.id,
          deal: deal
        }
      })
      // console.log(deal)
      // let response = await adminApi.postDeal(deal)
      // // console.log(response)
      // // console.log(response.data.status)
      // loader.hide()
      // if (response.data.status === 'success') {
      //   // this.clearFields()
      //   this.$router.push('/admin/contracts')
      // }
      this.disable = false
    },

    async getUsers () {
      let loader = this.$loading.show()
      let response = await adminApi.getUsers()
      //   console.log('Admin Users')
      // console.log(response.data)
      loader.hide()
      if (response.data.status === 'success') {
        for (const key in response.data.data) {
          if (response.data.data.hasOwnProperty(key)) {
            const element = response.data.data[key]
            let user = {'value': element.address, 'label': element.fname + ' ' + element.lname}
            if (element.type === 'User') {
              this.users.push(user)
            }
          }
        }
      }
      this.disable = false
    },
    decodeIt (id, buyorsell, commodity) {
      return decode(id, buyorsell, commodity)
    }
  }
}
</script>
