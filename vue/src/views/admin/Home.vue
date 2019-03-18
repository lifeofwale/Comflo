<template>
    <main class="col-sm-11 ml-sm-auto col-md-11 col-lg-10 dashboard-content" role="main">
        <div class="pull-left mt-lg-5">
            <h3>Users</h3>
            <!-- <p class="mt-lg-3 text-gray">Initiate transactions, receive updates and track progress</p> -->
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
                    <!-- <th></th> -->
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in users" :key="index">
                      <td class="hidden-md-down"></td>
                      <td class="">{{user.fname + ' ' + user.lname}}</td>
                      <td class="">{{user.email}}</td>
                      <td class="">{{user.phone}}</td>
                      <td class="">{{user.country}}</td>
                      <!-- <td v-if="user.status == '0'" class="text-danger">Deactivated</td>
                      <td v-else class="text-success">Active</td> -->
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
                      <!-- <td>
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
                      </td> -->
                      <!-- <td>
                          <a @click="removeUser(user._id)">
                              Remove
                          </a>
                      </td> -->
                    </tr>
                </tbody>
            </table>
        </div>
  </main>
</template>
<script>
import api from '@/api/admin'
import companyApi from '@/api/company'
export default {
  name: 'Index',
  data: function () {
    return {
      users: [],
      visible: false,
      disable: false,
      mainerror: ''
    }
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    async getUsers () {
      let loader = this.$loading.show()
      let response = await api.getUsers()
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
