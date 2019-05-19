<template>
    <!-- <main class="col-sm-11 ml-sm-auto col-md-11 col-lg-10 dashboard-content" role="main">
        <div class="pull-left mt-lg-5">
            <h3>Transactions</h3>
           <p class="mt-lg-3 text-gray">Initiate transactions, receive updates and track progress</p>
        </div>
        <p class="pull-right mt-lg-5">
            <router-link :to="{ name: 'Admin-New-Deal'}" class='btn btn-round venice-bg'>
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
                          <td>
                              <router-link :to="{ name: 'Edit-Deal', params: { id: encodeIt(deal[0], deal[1], deal[2]) }}">
                                  Edit
                              </router-link>
                          </td>
                          <td>
                              <router-link :to="{ name: 'Admin-Deal', params: { id: encodeIt(deal._id, deal.reference, deal.type) }}">
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
                <div class="content__icon--bg"><img src="/static/img/company-icon.svg" width="25px" alt="company icon"></div>
              </span>
              <span class="content__desc">
                <h3>Transactions</h3>
                <p class="empty-state"></p>
                <p>View list of all current transactions</p>
              </span>
            </div>
            <!-- <div class="d-flex justify-content-start">
              <div class="form-inline">
                <a href="#" class="btn__green"><span><img src="/static/img/trans-icon.svg" alt="trans icon"></span> Add
                  Transaction</a>
              </div>
            </div> -->
          </div>
        </div>
        <div class="container">
          <hr class="my-3">
        </div>
        <div class="container d-flex justify-content-between">
          <div class="dropdown">
            <a style="z-index: 100" class="btn btn-dropdown dropdown-toggle" v-click-outside="hideFilter" @click="showFilter = !showFilter" role="button" id="dropdownMenuLink"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Total Transactions: <span>{{ collections.length }}</span>
            </a>

            <div :class="{ show: showFilter }" class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item drop-link" @click="filterQuery = 'Completed'; filter(1)" >Completed</a>
              <a class="dropdown-item drop-link" @click="filterQuery = 'In Progress'; filter(1)">In Progress</a>
              <a class="dropdown-item drop-link" @click="filterQuery = 'Pending'; filter(1)">Pending</a>
              <a class="dropdown-item drop-link" @click="filterQuery = 'Contract'; filter(1)">Contract</a>
              <a class="dropdown-item drop-link" @click="filterQuery = ''; filter(1)">All</a>
            </div>
          </div>

          <div class="form-group d-none d-md-block">
            <input type="text" class="form-control search-input" v-model="query"  @input="searchTransactions" placeholder="Search...">
          </div>
        </div>
        <div v-if='collections.length > 0' class="container mt-4" style="margin-bottom:5%;">
          <div class="table-responsive">
            <table class="table custom-table table-borderless">
              <thead class="thead-custom">
                <tr>
                  <th scope="col"></th>
                  <th scope="col">ID</th>
                  <th scope="col">TYPE</th>
                  <th scope="col">COMMODITY</th>
                  <th scope="col">QUANTITY(MT)</th>
                  <th scope="col">STATUS</th>
                  <th scope="col">ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(transaction, index) in collections" :key="index" class="tr-custom mb-3">
                  <th scope="row">{{index + 1}}</th>
                  <td>{{transaction.reference}}</td>
                  <td>{{transaction.type}}</td>
                  <td>{{transaction.commodity}}</td>
                  <td>{{transaction.quantity.toLocaleString()}}</td>
                  <td>
                    <div v-if="transaction.status.toLowerCase() == 'pending'" class="statusblock-yellow--m text-center">{{transaction.status | capitalCase }}</div>
                    <div v-else-if="transaction.status.toLowerCase() == 'completed'" class="statusblock-green--m text-center">{{transaction.status | capitalCase}}</div>
                    <div v-else-if="transaction.status.toLowerCase() == 'contract'" class="statusblock-grey--m text-center">{{transaction.status | capitalCase}}</div>
                    <div v-else-if="transaction.status.toLowerCase() == 'active'" class="statusblock-blue--m text-center">{{transaction.status | capitalCase}}</div>
                    <div v-else-if="transaction.status.toLowerCase() == 'terminated'" class="statusblock-red--m text-center">{{transaction.status | capitalCase}}</div>
                  </td>
                  <td>
                    <!-- <div class="dropdown">
                      <a class="btn p-0" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <img src="/static/img/drop-down.svg" width="32px" alt="drop-dwon">
                      </a>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item drop-link" href="#">View details</a>
                      </div>
                    </div> -->
                    <div :id="'show-'+index" class="dropdown">
                      <a class="btn p-0" @click='makeDropdown(index)' role="button" id="dropdownMenuLink" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="true">
                        <img src="/static/img/drop-down.svg" width="32px" alt="drop-dwon" />
                      </a>

                      <div :id="'show-2-'+index" class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                        <router-link class="dropdown-item drop-link" :to="{ name: 'Admin-Transaction', params: { id: encodeIt(transaction._id, transaction.reference, transaction.type) }}">
                          View details
                        </router-link>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <p>
              <i><small>Showing results 1 - {{collections.length}} of 20</small></i>
            </p>
            <!-- pagination begin -->
            <nav aria-label="Page navigation">
                <ul class="pagination pagination__ul justify-content-center pagination-lg">
                    <li v-if="pagination.pre_page != null" class="page-item pagination__li">
                        <a class="page-link pagination__a" @click="collections = paginator(allCollections, pagination.pre_page, 20)" tabindex="-1"
                            aria-disabled="true">&laquo;</a>
                    </li>
                    <template v-if="pagination.page !== 0">
                        <li v-for="(n, index) in pagination.page" :key="index" class="page-item active pagination__li"><a class="page-link pagination__a" @click="collections = paginator(allCollections, n, 20)">{{n}}</a></li>
                    </template>
                    <li v-if="pagination.next_page != null" class="page-item pagination__li">
                        <a class="page-link pagination__a" @click="collections = paginator(allCollections, pagination.next_page, 20)">&raquo;</a>
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
import Footer from '@/components/admin/AdminFooter'
import vClickOutside from 'v-click-outside'
export default {
  name: 'Admin-Transactions',
  dashboard: true,
  title () {
    return `Admin Transactions | Comflo Inc`
  },
  components: {
    Footer
  },
  data: function () {
    return {
      showFilter: false
    }
  },
  mounted () {
    this.getTransactions()
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  methods: {
    hideFilter (event) {
      this.showFilter = false
      // console.log('Clicked outside. Event: ', event)
    },
    async getTransactions () {
      let loader = this.$loading.show()
      try {
        let response = await api.getOffers('')
        loader.hide()
        if (response.data.status === 'success') {
          this.allCollections = response.data.data
          this.filteredCollections = this.allCollections
          this.commodities = [...new Set(this.allCollections.map(transaction => transaction.commodity.trim()))]
          this.collections = this.paginator(this.allCollections, 1, 20)
        }
        this.$forceUpdate()
        loader.hide()
        this.disable = false
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
