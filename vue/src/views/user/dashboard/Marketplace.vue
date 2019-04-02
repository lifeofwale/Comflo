<template>
    <!-- <main class="col-sm-11 ml-sm-auto col-md-11 col-lg-10 dashboard-content" role="main">
        <div class="pull-left mt-lg-5">
            <h3>Marketplace</h3>
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
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(deal, index) in transactions" :key="index">
                      <td class="hidden-md-down"></td>
                          <td>{{deal.reference}}</td>
                          <td>{{deal.type}}</td>
                          <td>{{deal.commodity}}</td>
                          <td>{{deal.quantity}}</td>
                          <td>{{deal.price}}</td>
                          <td v-bind:class="{ 'text-warning': deal.status == 'Pending', 'text-info': deal.status == 'Active', 'text-primary': deal.status == 'In Progress', 'text-danger': deal.status == 'Terminated', 'text-success': deal.status == 'Completed', 'text-dark': deal.status == 'Contract' }" >{{deal.status}}</td>
                          <td>
                              <router-link :to="{ name: 'User-Deal', params: { id: encodeIt(deal._id, deal.reference, deal.type) }}">
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
                        <input type="text" class="form-control search-input" v-model="query"  @input="searchTransactions" placeholder="Search...">
                    </div>
                    <div class="form-group mx-sm-3 d-none d-md-block">
                        <select class="form-control search-input">
                            <option value="">Filter by commodity</option>
                        </select>
                    </div>
                    <router-link v-if="user" class="btn__green" :to="{ name: 'New-User-Transaction'}">
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
import api from '@/api/offer'
import Header from '@/components/Header'
import {mapGetters} from 'vuex'
export default {
  name: 'Index',
  components: {
    Header
  },
  data: function () {
    return {
      transactions: [],
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
    this.getTransactions()
  },
  methods: {
    async getTransactions () {
      let loader = this.$loading.show()
      let response = await api.getOffers('?status=pending')
      loader.hide()
      if (response.data.status === 'success') {
        console.log(response.data.data)
        this.allTransactions = response.data.data
        this.transactions = this.allTransactions
      }
      this.disable = false
    }
  }
}
</script>
