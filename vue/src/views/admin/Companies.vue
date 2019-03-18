<template>
    <main class="col-sm-11 ml-sm-auto col-md-11 col-lg-10 dashboard-content" role="main">
        <div class="pull-left mt-lg-5">
            <h3>Companies</h3>
            <!-- <p class="mt-lg-3 text-gray">Initiate transactions, receive updates and track progress</p> -->
        </div>
        <p class="pull-right mt-lg-5">
            <router-link class="btn btn-round venice-bg" :to="{ name: 'Admin-Add-Company'}">
                Add Company
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
                    <tr v-for="(company, index) in companies" :key="index">
                      <td class="hidden-md-down"></td>
                      <td class="">{{company.name}}</td>
                      <td class="">{{company.email}}</td>
                      <td class="">{{company.phone}}</td>
                      <td class="">{{company.country}}</td>
                      <td v-if="company.status == '0'" class="text-danger">Deactivated</td>
                      <td v-else class="text-success">Active</td>
                      <!-- <td v-if="Company.status == '1'" class="text-danger">
                        <a @click="deactivateCompany(Company._id)" >
                              Deactivate
                          </a>
                      </td>
                      <td v-else class="text-success">
                        <a @click="activateCompany(Company._id)">
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
  name: 'Admin-Companies',
  data: function () {
    return {
      companies: [],
      visible: false,
      disable: false,
      mainerror: ''
    }
  },
  mounted () {
    this.getCompanies()
  },
  methods: {
    async getCompanies () {
      let loader = this.$loading.show()
      let response = await api.getCompanies()
      //   console.log(response)
      //   console.log(response.data.status)
      loader.hide()
      if (response.data.status === 'success') {
        this.companies = response.data.data
      }
      this.disable = false
    }
  }
}
</script>
