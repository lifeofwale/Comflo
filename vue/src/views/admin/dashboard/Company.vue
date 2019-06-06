<template>
  <main class="col-sm-11 offset-sm-1 content content-m content-offset content-offset-m px-0">
        <div class="container mrt-6 mb-10">

          <div class="card">
            <div class="card-body p-5">
              <div class="d-flex justify-content-between mt-4">
                <div>
                  <h1 class="font-weight-bold">{{company.name}}</h1>
                  <p>admin@comflo.com</p>
                </div>

                <div class="text-right">
                  <p> {{company.address}},</p>
                  <p>{{company.city}}, {{company.state}}.</p>
                  <p>{{company.country}}</p>
                </div>
              </div>
              <div class="d-flex justify-content-between mt-5 mb-5">
                <div>
                  <h2>Users</h2>
                  <p class="empty-state"></p>
                </div>
                <!-- <a href="#" class="btn__green"><img class="mr-2" src="/static/img/add-user.svg" alt="add user"> Add User</a> -->
              </div>
              <div v-if="users.length > 0" class="table-responsive">
                <table class="table custom-table table-borderless">
                  <thead class="thead-custom">
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">NAME</th>
                      <th scope="col">EMAIL</th>
                      <th scope="col">PHONE</th>
                      <th scope="col">POSITION</th>
                      <th scope="col">TYPE</th>
                      <!-- <th scope="col">ACTION</th> -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(user, index) in users" :key="index" class="tr-custom mb-3" style=" box-shadow: 0 3px 6px 0 rgba(157, 206, 255, 0.16);">
                      <th scope="row">{{index + 1}}</th>
                      <td>{{user.fname}} {{user.lname}}</td>
                      <td>{{user.email}}</td>
                      <td>{{user.phone}}</td>
                      <td>{{user.position}}</td>
                      <td>
                        <div v-if='user.type.toLowerCase() == "admin"' class="statusblock-green--m text-center">Admin</div>
                        <div v-else class="statusblock-blue--m text-center">User</div>
                      </td>
                      <!-- <td>
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
                      </td> -->
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="kyc-attachment mt-5">
                <h2>KYC Attachment</h2>
                <p class="empty-state"></p>
                <div class="row mt-5">

                  <div v-for="(doc, index) in kycDocs" :key="index" class="col-sm-4 col-xs-12 mb-3">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                      <div class="media">
                        <img src="/static/img/doc-icon.svg" class="mr-3" alt="doc-icon">
                        <div class="media-body">
                          <p class="mt-0 mb-1 font-weight-bold">{{doc.name}}</p>
                        </div>
                      </div>
                      <a @click='makeDropdown(index)' :id="'show-'+index" class="btn btn__green-v" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false"><i class="fas fa-ellipsis-v" style="color:#83c225"></i></a>
                      <div :id="'show-2-'+index" class="dropdown-menu dropdown-menu-right shadow border-0" style="font-size:1.5rem;">
                        <a target="_blank" :href="doc.url" class="dropdown-item" type="button"><i class="far fa-eye mr-4"></i>View file</a>
                        <!-- <button class="dropdown-item" type="button" data-toggle="modal"
                          data-target="#deleteFileCenter"><i class="far fa-trash-alt mr-4"></i>Delete file</button> -->

                      </div>
                    </div>
                  </div>
                  <!-- <div class="col-sm-4 col-xs-12 mb-3">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                      <div class="media">
                        <img src="/static/img/doc-icon.svg" class="mr-3" alt="doc-icon">
                        <div class="media-body">
                          <p class="mt-0 mb-1 font-weight-bold">Personal Identification</p>

                        </div>
                      </div>
                      <a href="#" class="btn btn__green-v" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false"><i class="fas fa-ellipsis-v" style="color:#83c225"></i></a>
                      <div class="dropdown-menu dropdown-menu-right shadow border-0" style="font-size:1.5rem;">
                        <button class="dropdown-item" type="button"><i class="far fa-eye mr-4"></i>View file</button>
                        <button class="dropdown-item" type="button" data-toggle="modal"
                          data-target="#deleteFileCenter"><i class="far fa-trash-alt mr-4"></i>Delete file</button>
                      </div>
                    </div>
                  </div> -->
                </div>
              </div>

              <div class="row mt-3">
                <div class="col">
                  <div class="form-group mb-5">
                    <label for="inputmoreinfo">
                      <h2>Comment</h2>
                    </label>
                    <textarea type="text" class="form-control cinput" id="inputmoreinfo" rows="5" v-model="comment" required>
                                    </textarea>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-center mt-2">
                <button :disabled="!emptyText || disable" @click="showModal = true" class="btn button__grey mx-2" data-toggle="modal"
                  data-target="#exampleModalCenter">Reject</button>
                <!-- Button trigger modal -->

                <!-- Modal -->
                <div v-if="showModal === true" class="modal fade cwrap__modal show" id="exampleModalCenter" tabindex="-1" role="dialog"
                  aria-labelledby="exampleModalCenterTitle" style="display: block;" aria-modal="true">
                  <div class="modal-dialog modal-dialog-centered cwrap__modal-dialog" role="document">
                    <div class="modal-content cwrap__modal-content">
                      <div class="modal-header cwrap__modal-header ">
                        <h5 class="modal-title cwrap__modal-title text-center m-auto" id="exampleModalCenterTitle">
                          Reject</h5>

                      </div>
                      <div class="modal-body cwrap__modal-body text-center">
                        <img src="/static/img/caution__icon.svg" class="mb-3" alt="caution__icon">
                        <p>
                          Are you sure you want to reject this KYC?
                        </p>
                      </div>
                      <div class="modal-footer  cwrap__modal-footer">
                        <button @click="showModal = false" type="button" class="btn  btn-no mx-3" data-dismiss="modal">No</button>
                        <button type="button" @click="failKYC" class="btn  btn-yes mx-3">Yes</button>
                      </div>
                    </div>
                  </div>
                </div>
                <button v-if='company.verified != true' :disabled="disable" @click="passKYC" class="btn  button__primary  mx-2">Approve</button>
              </div>
            </div>
          </div>
        </div>
        <Footer>
        </Footer>
        <div v-if="showModal === true" class="modal-backdrop fade show"></div>
      </main>
</template>
<script>
import api from '@/api/admin'
import companyApi from '@/api/company'
import Footer from '@/components/admin/AdminFooter'
import vClickOutside from 'v-click-outside'
export default {
  name: 'Admin-Company',
  dashboard: true,
  title () {
    return `Admin Company | Comflo Inc`
  },
  components: {
    Footer
  },
  data: function () {
    return {
      showFilter: false,
      company: {},
      comment: '',
      showModal: false,
      kycDocs: {},
      users: [],
      visible: false,
      disable: false,
      mainerror: ''
    }
  },
  mounted () {
    this.getCompany()
  },
  computed: {
    emptyText () {
      return this.comment.length > 0
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  methods: {
    hideFilter (event) {
      this.showFilter = false
      // console.log('Clicked outside. Event: ', event)
    },
    async passKYC () {
      let loader = this.$loading.show()
      try {
        let response = await api.passKYC(this.company._id)
        console.log(response)
        console.log(response.data.status)
        loader.hide()
        if (response.data.status === 'success') {
          this.$toast.success('Company KYC has been approved', '', this.notificationSystem.options.success)
          location.reload()
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

    async failKYC () {
      this.showModal = false
      let loader = this.$loading.show({zIndex: 999})
      try {
        let response = await api.failKYC(this.company._id, {reason: this.comment})
        console.log(response)
        console.log(response.data.status)
        loader.hide()
        if (response.data.status === 'success') {
          this.$toast.success('Company KYC has been declined, declined email has been sent', '', this.notificationSystem.options.success)
          // location.reload()
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
    async getCompany () {
      let loader = this.$loading.show()
      try {
        const decodedString = this.decodeIt(this.$route.params.id)
        let response = await api.getCompany(decodedString)
        console.log(response)
        console.log(response.data.status)
        loader.hide()
        if (response.data.status === 'success') {
          this.company = response.data.data.company
          this.users = response.data.data.users
          this.getDoc()
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
    /**
     * Get Offer Doccuments
     */
    async getDoc () {
      let loader = this.$loading.show()
      let kycResponse = await companyApi.companyKycUrl(this.company._id, this.company.kyc_documents)
      loader.hide()
      if (kycResponse.data.status === 'success') {
        this.kycDocs = kycResponse.data.data
        console.log(this.kycDocs)
      }
      this.disable = false
    }
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .9s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
