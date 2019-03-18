<template>
    <main class="col-sm-11 ml-sm-auto col-md-11 col-lg-10 dashboard-content" role="main">
        <div class="pull-left mt-lg-5">
            <h3>{{company.name}}  Users</h3>
            <!-- <p class="mt-lg-3 text-gray">Initiate transactions, receive updates and track progress</p> -->
        </div>
        <p class="pull-right mt-lg-5">
            <a class="btn btn-round venice-bg" href="/company/add-user">
                Add User
            </a>
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
                    <th>Status</th>
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
  </main>
</template>
<script>
import api from '@/api/company'
import Header from '@/components/Header'
import {mapGetters} from 'vuex'
export default {
  name: 'Index',
  components: {
    Header
  },
  data: function () {
    return {
      users: [],
      visible: false,
      disable: false,
      mainerror: ''
    }
  },
  computed: {
    ...mapGetters('company', ['company'])
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    async getUsers () {
      let loader = this.$loading.show()
      let details = {
        company_id: this.company._id
      }
      // console.log(details)
      let response = await api.getUsers(details)
      // console.log(response)
      // console.log(response.data.status)
      loader.hide()
      if (response.data.status === 'success') {
        this.users = response.data.data
      }
      this.disable = false
    },
    async deactivateUser (_id) {
      let loader = this.$loading.show()
      let details = {
        company_id: this.company._id,
        user_id: _id
      }
      // console.log(details)
      let response = await api.deactivateUser(details)
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
        company_id: this.company._id,
        user_id: _id
      }
      // console.log(details)
      let response = await api.activateUser(details)
      // console.log(response)
      // console.log(response.data.status)
      loader.hide()
      if (response.data.status === 'success') {
        this.getUsers()
      }
      this.disable = false
    },
    async removeUser (_id) {
      let loader = this.$loading.show()
      let details = {
        company_id: this.company._id,
        user_id: _id
      }
      // console.log(details)
      let response = await api.removeUser(details)
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
