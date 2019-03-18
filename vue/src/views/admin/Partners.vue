<template>
    <main class="col-sm-11 ml-sm-auto col-md-11 col-lg-10 dashboard-content" role="main">
        <div class="pull-left mt-lg-5">
            <h3>Partners</h3>
            <!-- <p class="mt-lg-3 text-gray">Initiate transactions, receive updates and track progress</p> -->
        </div>
        <p class="pull-right mt-lg-5">
            <router-link class="btn btn-round venice-bg" :to="{ name: 'Admin-Add-Partner'}">
                Add Partner
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
                    <tr v-for="(partner, index) in partners" :key="index">
                      <td class="hidden-md-down"></td>
                      <td class="">{{partner.name}}</td>
                      <td class="">{{partner.email}}</td>
                      <td class="">{{partner.phone}}</td>
                      <td class="">{{partner.country}}</td>
                      <td v-if="partner.status == '0'" class="text-danger">Deactivated</td>
                      <td v-else class="text-success">Active</td>
                      <!-- <td v-if="partner.status == '1'" class="text-danger">
                        <a @click="deactivatePartner(partner._id)" >
                              Deactivate
                          </a>
                      </td>
                      <td v-else class="text-success">
                        <a @click="activatePartner(partner._id)">
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
  name: 'Admin-Partners',
  data: function () {
    return {
      partners: [],
      visible: false,
      disable: false,
      mainerror: ''
    }
  },
  mounted () {
    this.getPartners()
  },
  methods: {
    async getPartners () {
      let loader = this.$loading.show()
      let response = await api.getAllPartners()
      // console.log(response)
      // console.log(response.data.status)
      loader.hide()
      if (response.data.status === 'success') {
        this.partners = response.data.data
      }
      this.disable = false
    }
  }
}
</script>
