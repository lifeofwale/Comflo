<template>
    <main class="col-sm-11 ml-sm-auto col-md-11 col-lg-10 dashboard-content" role="main">
        <div class="pull-left mt-lg-5">
            <h3>Admins</h3>
            <!-- <p class="mt-lg-3 text-gray">Initiate transactions, receive updates and track progress</p> -->
        </div>
        <p class="pull-right mt-lg-5">
            <router-link class="btn btn-round venice-bg" to='/admin/add-admin'>
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
                    <th>Status</th>
                    <!-- <th></th> -->
                    <!-- <th></th> -->
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(admin, index) in admins" :key="index">
                      <td class="hidden-md-down"></td>
                      <td class="">{{admin.fname +" "+admin.lname}}</td>
                      <td class="">{{admin.email}}</td>
                      <td class="">{{admin.phone}}</td>
                      <td class="">{{admin.country}}</td>
                      <td v-if="admin.status == '0'" class="text-danger">Deactivated</td>
                      <td v-else class="text-success">Active</td>
                      <!-- <td v-if="admin.status == '1'" class="text-danger">
                        <a @click="deactivateadmin(admin._id)" >
                              Deactivate
                          </a>
                      </td>
                      <td v-else class="text-success">
                        <a @click="activateadmin(admin._id)">
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
export default {
  name: 'Admin-Admins',
  data: function () {
    return {
      admins: [],
      visible: false,
      disable: false,
      mainerror: ''
    }
  },
  mounted () {
    this.getAdmins()
  },
  methods: {
    async getAdmins () {
      let loader = this.$loading.show()
      let response = await api.getAdmins()
      //   console.log(response)
      //   console.log(response.data.status)
      loader.hide()
      if (response.data.status === 'success') {
        this.admins = response.data.data
      }
      this.disable = false
    }
  }
}
</script>
