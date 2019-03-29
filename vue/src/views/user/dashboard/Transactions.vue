<template>
    <!-- <main class="col-sm-11 ml-sm-auto col-md-11 col-lg-10 dashboard-content" role="main">
        <div class="pull-left mt-lg-5">
            <h3>Transactions</h3>
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
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(transaction, index) in transactions" :key="index">
                      <td class="hidden-md-down"></td>
                          <td>{{transaction.reference}}</td>
                          <td>{{transaction.type}}</td>
                          <td>{{transaction.commodity}}</td>
                          <td>{{transaction.quantity}}</td>
                          <td>{{transaction.price}}</td>
                          <td v-bind:class="{ 'text-warning': transaction.status == 'Pending', 'text-info': transaction.status == 'Active', 'text-primary': transaction.status == 'In Progress', 'text-danger': transaction.status == 'Terminated', 'text-success': transaction.status == 'Completed', 'text-dark': transaction.status == 'Contract' }" >{{transaction.status}}</td>
                          <td>
                              <router-link :to="{ name: 'Edit-Deal', params: { id: encodeIt(transaction[0], transaction[1], transaction[2]) }}">
                                  Edit
                              </router-link>
                          </td>
                          <td>
                              <router-link :to="{ name: 'User-Deal', params: { id: encodeIt(transaction._id, transaction.reference, transaction.type) }}">
                                  View
                              </router-link>
                          </td>
                    </tr>
                </tbody>
            </table>
        </div>
  </main> -->
  <main class="col-sm-11 offset-sm-1 content content-m content-offset content-offset-m px-0">
    <div class="container mrt-6">
        <div class="d-flex align-content-center align-items-center justify-content-between request__query">
            <div class="d-flex align-content-center align-items-center">
                <span>
                    <div class="content__icon--bg"><i class="fas fa-shopping-basket"></i></div>
                </span>
                <span class="content__desc">
                    <h3>Marketplace</h3>
                    <p class="empty-state"></p>
                    <p>View list of sellers</p>
                </span>
            </div>
            <div class="d-flex justify-content-start">
                <div class="form-inline">
                    <div class="form-group d-none d-md-block">
                        <input type="text" class="form-control search-input" v-model="query"  @input="search" placeholder="Search...">
                    </div>
                    <div class="form-group mx-sm-3 d-none d-md-block">
                        <select class="form-control search-input">
                            <option value="">Filter by commodity</option>
                        </select>
                    </div>
                    <router-link class="btn__green" :to="{ name: 'New-User-Transaction'}">
                      New Transaction
                    </router-link>
                </div>
            </div>
        </div>

    </div>
    <div class="market container mt-5 mb-10">
        <div v-for="(transaction, index) in transactions" :key="index" class="card market__listing mb-5">
            <div class="card-body px-5">
                <div class="d-flex justify-content-between align-items-center align-content-center">
                    <p class="market__listing-id">#{{transaction.reference}}</p>
                    <router-link class="btn btn__green-m" :to="{ name: 'User-Transaction', params: { id: encodeIt(transaction._id, transaction.reference, transaction.type) }}">
                      More details
                    </router-link>
                </div>
                <hr>
                <div class="row">
                    <div class="col">
                        <h6 class="market__listing-item">
                            {{transaction.commodity}}
                        </h6>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col-12 mb-3">
                                <p class="market__desc">
                                    CREATED
                                </p>
                                <p class="market__value">
                                    {{new Date(transaction.createdAt).getDate() + "/" + (new Date(transaction.createdAt).getMonth() + 1) + "/" + new Date(transaction.createdAt).getFullYear()}}
                                </p>
                            </div>
                            <div class="col-12 mb-3">
                                <p class="market__desc">
                                    MARKET AVAILABILITY
                                </p>
                                <p class="market__value d-inline-block">
                                    <span class="d-inline">
                                        <div class="d-inline-block status-red"></div>
                                    </span>
                                    <span class="d-inline-block">7 days left</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- 1 col -->
                    <div class="col">
                        <div class="row">
                            <div class="col-12 mb-3">
                                <p class="market__desc">
                                    QUANTITY(MT)
                                </p>
                                <p class="market__value">
                                    {{transaction.quantity}}
                                </p>
                            </div>
                            <div class="col-12 mb-3">
                                <p class="market__desc">
                                    LOCATION
                                </p>
                                <p class="market__value">
                                    {{transaction.location}}
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- 2 col -->
                    <div class="col">
                        <div class="row">
                            <div class="col-12 mb-3">
                                <p class="market__desc">
                                    ORDER TYPE
                                </p>
                                <p class="market__value">
                                    {{transaction.type}}
                                </p>
                            </div>
                            <div class="col-12 mb-3">
                                <p class="market__desc">
                                    INCOTERM
                                </p>
                                <p class="market__value">
                                    {{transaction.incoterm}}
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- 3 col -->
                </div>
            </div>
        </div>
        <!-- pagination begin -->
        <nav aria-label="Page navigation">
            <ul class="pagination pagination__ul justify-content-center pagination-lg">
                <li class="page-item pagination__li">
                    <a class="page-link pagination__a" href="#" tabindex="-1"
                        aria-disabled="true">&laquo;</a>
                </li>
                <li class="page-item active pagination__li"><a class="page-link pagination__a"
                        href="#">1</a></li>
                <li class="page-item pagination__li"><a class="page-link pagination__a" href="#">2</a></li>
                <li class="page-item pagination__li"><a class="page-link pagination__a" href="#">3</a></li>
                <li class="page-item pagination__li">
                    <a class="page-link pagination__a" href="#">&raquo;</a>
                </li>
            </ul>
        </nav>
        <!-- pagination -end -->
    </div>
    <Footer></Footer>
</main>
</template>
<script>
import Footer from '@/components/user/UserFooter'
import api from '@/api/offer'
import {mapGetters} from 'vuex'
export default {
  name: 'Index',
  components: {
    Footer
  },
  dashboard: true,
  title () {
    return `Transactions | Comflo Inc`
  },
  data: function () {
    return {
      transactions: [],
      allTransactions: [],
      query: '',
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
      let response = await api.getUserOffers(this.user._id)
      if (response.data.status === 'success') {
        this.transactions = response.data.data
        this.allTransactions = this.transactions
      }
      this.$forceUpdate()
      loader.hide()
      this.disable = false
    },
    search () {
      let query = this.query.toString().toLowerCase()
      console.log('query ', query)
      if (query === '') {
        this.transactions = this.allTransactions
      } else {
        this.transactions = this.allTransactions.filter((transaction) => { console.log(transaction); return transaction.type.toLowerCase().includes(query) || transaction.commodity.toLowerCase().includes(query) || transaction.quantity.toString().toLowerCase().includes(query) || transaction.incoterm.toLowerCase().includes(query) || transaction.location.toLowerCase().includes(query) || transaction.reference.toLowerCase().includes(query) || transaction.price.toString().toLowerCase().includes(query) || transaction.payment.toLowerCase().includes(query) })
      }
    }
  }
}
</script>
