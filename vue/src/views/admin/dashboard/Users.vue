<template>
  <main class="col-sm-11 offset-sm-1 content content-m content-offset content-offset-m px-0">
    <div class="container mrt-6">
      <div class="d-flex align-content-center align-items-center justify-content-between request__query">
        <div class="d-flex align-content-center align-items-center">
          <span>
            <div class="content__icon--bg">
              <img src="/static/img/current-user.svg" width="30px" alt="current-user" /></div>
          </span>
          <span class="content__desc">
            <h3>Current Users</h3>
            <p class="empty-state"></p>
            <p>View list of all current users</p>
          </span>
        </div>
        <div class="d-flex justify-content-start">
          <div class="form-inline">
            <router-link class="btn__green" :to="{ name: 'New-Admin'}"><img class="mr-2" src="/static/img/add-user.svg" alt="add user" />
              New Admin
            </router-link>
          </div>
        </div>
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
          <a class="dropdown-item drop-link" @click="filterQuery = 'Admin'; filter(0)" >Show Admin</a>
          <a class="dropdown-item drop-link" @click="filterQuery = 'User'; filter(0)">Show User</a>
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
            <th scope="col">EMAIL</th>
            <th scope="col">PHONE</th>
            <!-- <th scope="col">COUNTRY</th> -->
            <th scope="col">TYPE</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <!-- @change="setSdocFilename($event, sdoc)" :id="index" -->
          <tr v-for="(user, index) in collections" :key="index" class="tr-custom mb-3">
            <th scope="row">{{index + 1}}</th>
            <td>{{user.fname}} {{user.lname}}</td>
            <td>{{user.email}}</td>
            <td>{{user.phone}}</td>
            <!-- <td>{{user}}</td> -->
            <td>
              <div v-if='user.type.toLowerCase() == "admin"' class="statusblock-green--m text-center">Admin</div>
              <div v-else class="statusblock-blue--m text-center">User</div>
            </td>
            <td>
              <div :id="'show-'+index" class="dropdown">
                <a class="btn p-0" @click='makeDropdown(index)' role="button" id="dropdownMenuLink" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="true">
                  <img src="/static/img/drop-down.svg" width="32px" alt="drop-dwon" />
                </a>

                <div :id="'show-2-'+index" class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                  <a v-if='user.type.toLowerCase() == "admin"' class="dropdown-item drop-link" @click="makeUser(user._id)">Make User</a>
                  <a v-else class="dropdown-item drop-link" @click="makeAdmin(user._id)">Make Admin</a>
                  <a class="dropdown-item drop-link" href="#">View details</a>
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
import api from '@/api/admin'
import companyApi from '@/api/company'
import Footer from '@/components/admin/AdminFooter'
import vClickOutside from 'v-click-outside'
export default {
  name: 'Admin-Users',
  dashboard: true,
  title () {
    return `Admin Users | Comflo Inc`
  },
  components: {
    Footer
  },
  data: function () {
    return {
      showFilter: false,
      visible: false,
      disable: false,
      mainerror: ''
    }
  },
  mounted () {
    this.getUsers()
    document.body.classList.add('bg-grey')
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  methods: {
    hideFilter (event) {
      this.showFilter = false
      // console.log('Clicked outside. Event: ', event)
    },
    async getUsers () {
      let loader = this.$loading.show()
      try {
        let response = await api.getUsers()
        // console.log(response)
        // console.log(response.data.status)
        loader.hide()
        if (response.data.status === 'success') {
          this.allCollections = response.data.data
          this.filteredCollections = this.allCollections
          // this.commodities = [...new Set(this.allCollections.map(transaction => transaction.commodity.trim()))]
          this.collections = this.paginator(this.filteredCollections, 1, 20)
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
    },
    async deactivateUser (_id) {
      let loader = this.$loading.show()
      let details = {
        user_id: _id
      }
      // console.log(details)
      let response = await companyApi.deactivateUser(details)
      // console.log(response)
      // console.log(response.data.status)
      loader.hide()
      if (response.data.status === 'success') {
        this.getUsers()
      }
      this.disable = false
    },
    async activateUser (_id) {
      let loader = this.$loading.show()
      let details = {
        user_id: _id
      }
      // console.log(details)
      let response = await companyApi.activateUser(details)
      // console.log(response)
      // console.log(response.data.status)
      loader.hide()
      if (response.data.status === 'success') {
        this.getUsers()
      }
      this.disable = false
    },
    async makeUser (_id) {
      let loader = this.$loading.show()
      let response = await api.makeUser(_id)
      // console.log(response)
      // console.log(response.data.status)
      loader.hide()
      if (response.data.status === 'success') {
        this.getUsers()
      }
      this.disable = false
    },
    async makeAdmin (_id) {
      let loader = this.$loading.show()
      let response = await api.makeAdmin(_id)
      // console.log(response)
      // console.log(response.data.status)
      loader.hide()
      if (response.data.status === 'success') {
        this.getUsers()
      }
      this.disable = false
    }
  }
}
</script>
