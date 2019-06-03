<template>
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
                        <select @change="filter" v-model="filterQuery" class="form-control search-input">
                            <option value="all">Filter by commodity</option>
                            <option v-for="(commodity, index) in commodities" :key="index" :value="commodity">{{commodity}}</option>
                        </select>
                    </div>
                    <router-link v-if="user" class="btn__green" :to="{ name: 'New-User-Transaction'}">
                      New Transaction
                    </router-link>
                </div>
            </div>
        </div>

    </div>
    <div v-if='collections.length > 0' class="market container mt-5 mb-10">
        <div v-for="(transaction, index) in collections" :key="index" class="card market__listing mb-5">
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
                            <div v-if="transaction.availability" class="col-12 mb-3">
                                <p class="market__desc">
                                    MARKET AVAILABILITY
                                </p>
                                <p class="market__value d-inline-block">
                                    <span class="d-inline">
                                        <div class="d-inline-block status-red"></div>
                                    </span>
                                    <span class="d-inline-block">{{daysLeft(transaction.availability)}} days left</span>
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
        <div class="d-flex justify-content-between mt-4">
        <p>
          <i><small>Showing results 1 - {{collections.length}} of 20</small></i>
        </p>
        <!-- {{pagination}} -->
        <!-- pagination begin -->
        <nav aria-label="Page navigation">
            <ul class="pagination pagination__ul justify-content-center pagination-lg">
                <li v-if="pagination.pre_page != null" class="page-item pagination__li">
                    <a class="page-link pagination__a" @click="collections = paginator(filteredCollections, pagination.pre_page, 20)" tabindex="-1"
                        aria-disabled="true">&laquo;</a>
                </li>
                <template v-if="pagination.page !== 0">
                    <li v-for="(n, index) in pagination.page" :key="index" :class="{active: index + 1 == pagination.page}" class="page-item pagination__li"><a class="page-link pagination__a" @click="collections = paginator(filteredCollections, n, 20)">{{n}}</a></li>
                </template>
                <li v-if="pagination.next_page != null" class="page-item pagination__li">
                    <a class="page-link pagination__a" @click="collections = paginator(filteredCollections, pagination.next_page, 20)">&raquo;</a>
                </li>
            </ul>
        </nav>
        <!-- pagination -end -->
      </div>
    </div>
    <div v-else class="market container mt-5 mb-10">
        <div class="text-center mt-5">
        <img src="/static/img/empty--list.svg" alt="empty">
        <p class="font-weight-bold" style="color: #0a6994;">There are no items available now.<br>
            Please check back.</p>
        </div>
    </div>
    <Footer></Footer>
</main>
</template>
<script>
import api from '@/api/offer'
import {mapGetters} from 'vuex'
export default {
  name: 'Index',
  dashboard: true,
  title () {
    return `Marketplace | Comflo Inc`
  },
  data: function () {
    return {
      collections: [],
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
      let response = await api.getOffers('?status=pending&type=Sell')
      loader.hide()
      if (response.data.status === 'success') {
        console.log(response.data.data)
        this.allCollections = response.data.data
        this.filteredCollections = this.allCollections
        this.commodities = [...new Set(this.allCollections.map(transaction => transaction.commodity.trim()))]
        this.collections = this.paginator(this.allCollections, 1, 20)
      }
      this.disable = false
    }
  }
}
</script>
