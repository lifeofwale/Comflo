<template>
    <!-- <main class="col-sm-11 ml-sm-auto col-md-11 col-lg-10 dashboard-content" role="main">
        <div class="pull-left mt-lg-5">
            <h3>Users</h3>
            <p class="mt-lg-3 text-gray">Initiate transactions, receive updates and track progress</p>
        </div>
        <p class="pull-right mt-lg-5">
            <router-link class="btn btn-round venice-bg" :to="{ name: 'Admin-Add-User'}">
                Add User
            </router-link>
            <router-link class="btn btn-round venice-bg" :to="{ name: 'Admin-Add-Admin'}">
                Add Admin
            </router-link>
        </p>
        <div class="table-responsive dashboard-widget">
          <p v-if="mainerror.length > 0" class="text-danger text-center col-md-12 mt-lg-5">{{mainerror}}</p>
            <table id="projects" class="table" cellspacing="0" width="100%">
                <thead>
                <tr>
                    <th class=" hidden-md-down"></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Country</th>
                    <th>Type</th>
                    <th></th>
                   <th></th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in users" :key="index">
                      <td class="hidden-md-down"></td>
                      <td class="">{{user.fname + ' ' + user.lname}}</td>
                      <td class="">{{user.email}}</td>
                      <td class="">{{user.phone}}</td>
                      <td class="">{{user.country}}</td>
                      <td v-if="user.status == '0'" class="text-danger">Deactivated</td>
                      <td v-else class="text-success">Active</td>
                      <td v-if="user.user_type == '3'" class="text-danger">Admin</td>
                      <td v-else class="text-success">User</td>
                      <td v-if="user.user_type == '3'" class="text-danger">
                        <a @click="makeUser(user._id)" >
                              Make User
                          </a>
                      </td>
                      <td v-else class="text-success">
                        <a @click="makeAdmin(user._id)">
                              Make Admin
                          </a>
                      </td>
                      <td>
                          <a @click="removeUser(user._id)">
                              Remove
                          </a>
                      </td>
                      <td v-if="user.status == '1'" class="text-danger">
                        <a @click="deactivateUser(user._id)" >
                              Deactivate
                          </a>
                      </td>
                      <td v-else class="text-success">
                        <a @click="activateUser(user._id)">
                              Activate
                          </a>
                      </td>
                      <td>
                          <a @click="removeUser(user._id)">
                              Remove
                          </a>
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
            <h3>Company</h3>
            <p class="empty-state"></p>
            <p>View list of all companies</p>
          </span>
        </div>
        <!-- <div class="d-flex justify-content-start">
          <div class="form-inline">
            <router-link class="btn__green" :to="{ name: 'New-Admin'}"><img class="mr-2" src="/static/img/add-user.svg" alt="add user" />
              New Admin
            </router-link>
          </div>
        </div> -->
      </div>
    </div>
    <div class="container">
      <hr class="my-3" />
    </div>
    <div class="container d-flex justify-content-between">
      <div class="dropdown">
        <a style="z-index: 100" class="btn btn-dropdown dropdown-toggle" v-click-outside="hideFilter" @click="showFilter = !showFilter" role="button" id="dropdownMenuLink"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Total Users: <span>{{ collections.length }}</span>
        </a>

        <div :class="{ show: showFilter }" class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item drop-link" @click="filterQuery = false; filter(0)" >Show Not Passed</a>
          <a class="dropdown-item drop-link" @click="filterQuery = true; filter(0)">Show Passed</a>
          <a class="dropdown-item drop-link" @click="filterQuery = ''; filter(0)">Show All</a>
        </div>
      </div>

      <div class="form-group d-none d-md-block">
        <input type="text" class="form-control search-input" v-model="query"  @input="searchTransactions" placeholder="Search..." />
      </div>
    </div>
    <div v-if='collections.length > 0' class="container table-responsive mt-4" style="margin-bottom:5%;">
      <table class="table custom-table table-borderless">
        <thead class="thead-custom">
          <tr>
            <th scope="col"></th>
            <th scope="col">NAME</th>
            <th scope="col">CITY</th>
            <th scope="col">STATE</th>
            <th scope="col">ZIP CODE</th>
            <th scope="col">COUNTRY</th>
            <th scope="col">KYC STATUS</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <!-- @change="setSdocFilename($event, sdoc)" :id="index" -->
          <tr v-for="(company, index) in collections" :key="index" class="tr-custom mb-3">
            <th scope="row">{{index + 1}}</th>
            <td>{{company.name}}</td>
            <td>{{company.city}}</td>
            <td>{{company.state}}</td>
            <td>{{company.zip_code}}</td>
            <td>{{company.country}}</td>
            <td>
              <div v-if='company.verified == true' class="statusblock-green--m text-center">Passed</div>
              <div v-else class="statusblock-red text-center">Not Passed</div>
            </td>
            <td>
              <div :id="'show-'+index" class="dropdown">
                <a class="btn p-0" @click='makeDropdown(index)' role="button" id="dropdownMenuLink" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="true">
                  <img src="/static/img/drop-down.svg" width="32px" alt="drop-dwon" />
                </a>

                <div :id="'show-2-'+index" class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                  <router-link class="dropdown-item drop-link" :to="{ name: 'Admin-Company', params: { id: encodeIt(company._id, company.name, company.state) }}">
                    View details
                  </router-link>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
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
import api from '@/api/admin'
// import companyApi from '@/api/company'
import Footer from '@/components/admin/AdminFooter'
import vClickOutside from 'v-click-outside'
export default {
  name: 'Admin-Companies',
  dashboard: true,
  title () {
    return `Admin Companies | Comflo Inc`
  },
  components: {
    Footer
  },
  data: function () {
    return {
      showFilter: false,
      companies: [],
      visible: false,
      disable: false,
      mainerror: ''
    }
  },
  mounted () {
    this.getCompanies()
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  methods: {
    hideFilter (event) {
      this.showFilter = false
      // console.log('Clicked outside. Event: ', event)
    },
    async getCompanies () {
      let loader = this.$loading.show()
      try {
        let response = await api.getCompanies()
        console.log(response)
        console.log(response.data.status)
        loader.hide()
        if (response.data.status === 'success') {
          this.allCollections = response.data.data
          this.filteredCollections = this.allCollections
          // this.commodities = [...new Set(this.allCollections.map(transaction => transaction.commodity.trim()))]
          this.collections = this.paginator(this.allCollections, 1, 20)
        }
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
