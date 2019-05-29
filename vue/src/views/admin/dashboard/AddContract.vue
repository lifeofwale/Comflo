<template>
  <!-- <main class="col-sm-11 ml-sm-auto col-md-10 dashboard-content mt-lg-5" role="main">
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
        </main> -->
  <main class="col-sm-11 offset-sm-1 content content-m content-offset content-offset-m px-0">
    <div class="container mrt-6 mb-10">
      <div class="d-flex align-content-center align-items-center justify-content-between request__query">
        <div class="d-flex align-content-center align-items-center">
          <span>
            <div class="content__icon--bg"> <i class="fas fa-window-restore"></i></div>
          </span>
          <span class="content__desc">
            <h3>Add Contract</h3>
            <p class="empty-state"></p>
            <p>Add a new Contract</p>
          </span>
        </div>
      </div>

      <div class="mt-4">
        <div class="card border-0 m-auto" style="max-width:90.4rem;">
          <div class="card-body p-5">
            <div class="row">
              <div class="col">
                <div class="form-group mb-5">
                  <label for="inputPost">Shipment Date</label>
                  <datepicker v-model="shipmentdate" :input-class="'form-control cinput form__valid'" :placeholder="'Select Date'" required></datepicker>
                </div>
              </div>
              <div class="col">
                <div class="form-group mb-5">
                  <label for="inputDestination">Destination</label>
                  <input type="text" v-model="destination" class="form-control cinput form__valid" id="inputDestination" required>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="form-group mb-5">
                  <label for="inputOrigin">Origin</label>
                  <input type="text" v-model="origin" class="form-control cinput form__valid" id="inputOrigin" required>
                </div>
              </div>
              <!-- <div class="col">
                <div class="form-group mb-5">
                  <label for="inputPost">Email Address</label>
                  <input type="text" class="form-control cinput form__valid" id="inputPost" placeholder="" required>
                </div>
              </div> -->
            </div>
            <div class="row">
              <div class="col">
                <div class="form-group mb-5">
                  <label for="inputSeller">Seller</label>
                  <v-select v-model="seller" :options='users' required>
                   </v-select>
                </div>
              </div>
              <div class="col">
                <div class="form-group mb-5">
                  <label for="inputBuyers">Buyers</label>
                  <v-select v-model="buyer" :options='users' required>
                   </v-select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center mt-4">
          <button @click="$router.go(-1)" class="btn button__grey mx-2">Back</button>
          <button @click="addContract" class="btn  button__primary  mx-2">Next</button>

        </div>
      </div>
    </div>
    <Footer></Footer>
  </main>
</template>
<script>
import saveState from 'vue-save-state'
import adminApi from '@/api/admin'
import Footer from '@/components/admin/AdminFooter'
import {mapGetters} from 'vuex'
export default {
  name: 'Admin-Add-Contract',
  dashboard: true,
  mixins: [saveState],
  title () {
    return `Admin Add Contract | Comflo Inc`
  },
  components: {
    Footer
  },
  data: function () {
    return {
      visible: false,
      disable: false,
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
    getSaveStateConfig () {
      return {
        'cacheKey': 'Admin-Add-Contract'
      }
    },
    async addContract () {
      let loader = this.$loading.show()
      try {
        const transaction = {
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
            transaction: transaction
          }
        })
        loader.hide()
      } catch (error) {
        if (error.message === 'Network Error') {
          this.$toast.error('Connection not established, please check your internet connection', '', this.notificationSystem.options.error)
        } else {
          this.$toast.error(error.message, '', this.notificationSystem.options.error)
        }
        loader.hide()
        this.disable = false
      }
    },

    /**
     * Get all users registered into a select field
     */
    async getUsers () {
      let loader = this.$loading.show()
      try {
        let response = await adminApi.getUsers()
        //   console.log('Admin Users')
        // console.log(response.data)
        loader.hide()
        if (response.data.status === 'success') {
          for (const key in response.data.data) {
            if (response.data.data.hasOwnProperty(key)) {
              const element = response.data.data[key]
              let user = {'value': element._id, 'label': element.fname + ' ' + element.lname}
              // console.log(element)
              if (element.type === 'User') {
                this.users.push(user)
              }
            }
          }
        } else {
          this.$toast.error(response.data.message, '', this.notificationSystem.options.error)
        }
      } catch (error) {
        if (error.message === 'Network Error') {
          this.$toast.error('Connection not established, please check your internet connection', '', this.notificationSystem.options.error)
        } else {
          this.$toast.error(error.message, '', this.notificationSystem.options.error)
        }
        loader.hide()
        this.disable = false
      }
    }
  }
}
</script>
