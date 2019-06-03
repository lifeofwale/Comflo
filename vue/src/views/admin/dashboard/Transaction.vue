<template>
  <main class="col-sm-11 offset-sm-1 content content-m content-offset content-offset-m px-0">
        <div class="container mrt-6 mb-10">
          <div class="row">
            <div class="col-md-12">
              <p><span class="d-inline-block"><img src="/static/img/id__icon.svg" alt="id__icon"></span> OFFER ID: <span
                  class="font-weight-bold">{{transaction.reference}}</span></p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8 col-xs-12 mt-3">
              <div class="card market__card">
                <div class="card-body px-5">
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <a :class="{ active: detailPart == 1 }" class="nav-item nav-link px-5 cursor-active" id="nav-home-tab" data-toggle="tab" @click="detailPart = 1"
                        role="tab" aria-controls="nav-home" aria-selected="true">DETAILS</a>
                      <a :class="{ active: detailPart == 2 }" class="nav-item nav-link px-5 cursor-active"  id="nav-profile-tab" data-toggle="tab" @click="detailPart = 2"
                        role="tab" aria-controls="nav-profile" aria-selected="true">DOCUMENTS</a>
                      <a :class="{ active: detailPart == 3 }" class="nav-item nav-link cursor-active" id="nav-contact-tab" data-toggle="tab" @click="detailPart = 3" role="tab"
                        aria-controls="nav-contact" aria-selected="true">PARTICIPANTS</a>
                      <a :class="{ active: detailPart == 4 }" class="nav-item nav-link cursor-active" id="nav-contract-tab" data-toggle="tab" @click="detailPart = 4"
                        role="tab" aria-controls="nav-contract" aria-selected="true">CONTRACT</a>
                    </div>
                  </nav>
                  <div class="tab-content" id="nav-tabContent">
                    <div :class="{ active: detailPart === 1, show: detailPart === 1, fade: detailPart != 1  }" class="tab-pane" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                      <div class="market__details mt-4">
                        <p class="font-weight-bold"><span class="d-inline-block mr-2"><img src="/static/img/paper_icon.svg"
                              alt="paper icon"></span>QUICK DETAILS</p>
                        <p class="empty-state"></p>
                        <div class="row mt-5">
                          <div class="col">
                            <p class="market__desc">
                              CREATED
                            </p>
                            <p class="market__value">
                              {{ new Date(transaction.createdAt).toLocaleDateString("en-US")}}
                            </p>
                          </div>
                          <div class="col">
                            <p class="market__desc">
                              COMMODITY
                            </p>
                            <p class="market__value">
                              {{transaction.commodity}}
                            </p>
                          </div>
                          <div class="col">
                            <p class="market__desc">
                              STATUS:
                            </p>
                            <div v-if="transaction.status == 'pending'" class="statusblock-yellow text-center">{{transaction.status | capitalCase }}</div>
                            <div v-else-if="transaction.status == 'completed'" class="statusblock-green text-center">{{transaction.status | capitalCase}}</div>
                            <div v-else-if="transaction.status == 'contract'" class="statusblock-grey text-center">{{transaction.status | capitalCase}}</div>
                            <div v-else-if="transaction.status == 'in progress'" class="statusblock-blue text-center">{{transaction.status | capitalCase}}</div>
                            <div v-else-if="transaction.status == 'terminated'" class="statusblock-red text-center">{{transaction.status | capitalCase}}</div>
                          </div>
                          <div class="col">
                            <p class="market__desc">
                              ORDER TYPE:
                            </p>
                            <p class="market__value">
                              {{transaction.type}}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="market__details mt-5">
                        <p class="font-weight-bold"><span class="d-inline-block mr-2"><img src="/static/img/paper_icon.svg"
                              alt="paper icon"></span>PRICE & QUANTITY DETAILS</p>
                        <p class="empty-state"></p>
                        <div class="row mt-4">
                          <div class="col-4">
                            <p class="market__desc">
                              QUANTITY(MT)
                            </p>
                            <p class="market__value">
                              {{transaction.quantity}}
                            </p>
                          </div>
                          <div class="col-7">
                            <p class="market__desc">
                              ASKING PRICE
                            </p>
                            <p class="market__value">
                              {{transaction.price}}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="market__details mt-5">
                        <p class="font-weight-bold"><span class="d-inline-block mr-2"><img src="/static/img/paper_icon.svg"
                              alt="paper icon"></span>OTHER DETAILS</p>
                        <p class="empty-state"></p>
                        <div class="row mt-4">
                          <div class="col-4">
                            <p class="market__desc">
                              INCOTERM
                            </p>
                            <p class="market__value">
                              {{transaction.incoterm}}
                            </p>
                          </div>
                          <div class="col-7">
                            <p class="market__desc">
                              COMMODITY LOCATION
                            </p>
                            <p class="market__value">
                              {{transaction.location}}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div :class="{ active: detailPart == 2, show: detailPart == 2, fade: detailPart != 2  }" class="tab-pane" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                      <div class="market__details mt-4 mb-5">
                        <!-- <p class="font-weight-bold"><span class="d-inline-block mr-2"><img src="/static/img/paper_icon.svg"
                              alt="paper icon"></span>SELLER's DOCUMENT</p>
                        <p class="empty-state"></p> -->
                         <!--  SELLER's DOCUMENT -->
                        <div class="row mt-5">
                          <div v-for="(sdoc, index) in sellerDocs" :key="index" class="col-sm-6 col-xs-12">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                              <div class="media">
                                <img src="/static/img/doc-icon.svg" class="mr-3" alt="doc-icon">
                                <div class="media-body">
                                  <p class="mt-0 mb-1">{{sdoc.name}}</p>
                                  <template v-if="sdoc.uploader">
                                    <small v-if="sdoc.uploader._id == transaction.buyer">Uploaded by Buyer</small>
                                    <small v-if="sdoc.uploader._id == transaction.seller">Uploaded by Seller</small>
                                    <small v-if="sdoc.uploader.type == 'Admin'">Uploaded by Admin</small>
                                  </template>
                                  <small v-else>Uploaded by Buyer</small>
                                </div>
                              </div>
                              <a :href="sdoc.url" target="_blank" class="btn btn__green-v">View</a>
                            </div>
                          </div>
                        </div>
                        <!--  BUYER's DOCUMENT -->
                        <div class="row mt-5">
                          <div v-for="(bdoc, index) in buyerDocs" :key="index" class="col-sm-6 col-xs-12">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                              <div class="media">
                                <img src="/static/img/doc-icon.svg" class="mr-3" alt="doc-icon">
                                <div class="media-body">
                                  <p class="mt-0 mb-1">{{bdoc.name}}</p>
                                  <small>Uploaded by Buyer</small>
                                </div>
                              </div>
                              <a v-if="bdoc.url && bdoc.url !== 'false'" :href="bdoc.url" target="_blank" class="btn btn__green-v">View</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- <div class="market__details mt-5">
                        <p class="font-weight-bold"><span class="d-inline-block mr-2"><img src="/static/img/paper_icon.svg"
                              alt="paper icon"></span>BUYER's DOCUMENT</p>
                        <p class="empty-state"></p>
                      </div> -->
                      <div class="market__details mt-4">
                        <p class="font-weight-bold"><span class="d-inline-block mr-2"><img src="/static/img/paper_icon.svg"
                              alt="paper icon"></span>MORE INFORMATION</p>
                        <p class="empty-state"></p>
                        <div class="mt-1">
                          <p>{{transaction.additionalInfo}} </p>
                        </div>
                      </div>
                    </div>
                    <div :class="{ active: detailPart === 3, show: detailPart === 3, fade: detailPart != 3  }" class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                      <div class="container-fluid participants">
                        <div class="add-participants">
                          <div v-for="(partner, index) in uploadPartners" :key="index" class="row mt-4">
                            <div class="col-sm-6">
                              <div class="form-group mb-5">
                                <label for="inputCity">Select User</label>
                                <v-select v-model="partner.user_id" :options='users'>
                                    </v-select>
                              </div>
                            </div>

                            <div class="col-sm-6">
                              <label for="inputCity">Select Role</label>
                              <div class="form-group">
                                <div class="form-check form-check-inline">
                                  <input class="form-check-input" type="radio" v-model="partner.role" name="inlineRadioOptions"
                                    id="inlineRadio1" value="Vendor">
                                  <label class="form-check-label" for="inlineRadio1">Vendor</label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <input class="form-check-input" type="radio" v-model="partner.role" name="inlineRadioOptions"
                                    id="inlineRadio2" value="Agent">
                                  <label class="form-check-label" for="inlineRadio2">Agent</label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <input class="form-check-input" type="radio" v-model="partner.role" name="inlineRadioOptions"
                                    id="inlineRadio3" value="Bank">
                                  <label class="form-check-label" for="inlineRadio3">Bank</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="d-flex justify-content-center  mb-3">
                            <button :disabled="!uploadPartners.length > 0" @click="uploadPartnersLink" class="button__primary border-0">Add Participant</button>
                          </div>
                        </div>
                        <div class="row mt-5">
                          <!-- <div v-for="(partner, index) in partners" :key="index" class="col-sm-6">
                            <div class="text-left d-flex justify-content-between p-3 border rounded mb-4">
                              <p class="market__desc pt-3">
                                {{partner.role}}
                              </p>
                              <p class="market__value">
                                {{partner.user_id.fname}} {{partner.user_id.lname}}
                              </p>
                              <div :id="'show-'+index" class="pt-3">
                                <a @click='makeDropdown(index)' class="btn btn__green-v" data-toggle="dropdown" aria-haspopup="true"
                                  aria-expanded="true"><i class="fas fa-ellipsis-v" style="color:#83c225"></i></a>
                                <div :id="'show-2-'+index" class="dropdown-menu dropdown-menu-right shadow border-0"
                                  style="font-size:1.5rem;">

                                  <button class="dropdown-item" type="button" data-toggle="modal"
                                    data-target="#deleteFileCenter"><i class="far fa-trash-alt mr-4"></i>Delete</button>

                                </div>
                              </div>
                            </div>
                          </div> -->
                          <div v-for="(partner, index) in partners" :key="index" class="col-sm-6">
                            <div class="text-left d-flex justify-content-between p-3 border rounded mb-4">
                              <div>
                                <p class="market__desc pt-3">
                                  {{partner.role}}
                                </p>
                                <p class="market__value">
                                  {{partner.user_id.fname}} {{partner.user_id.lname}}
                                </p>
                              </div>
                              <div :id="'show-'+index" class="pt-3">
                                <a href="#" @click='makeDropdown(index)' class="btn btn__green-v" data-toggle="dropdown" aria-haspopup="true"
                                  aria-expanded="true"><i class="fas fa-ellipsis-v" style="color:#83c225"></i></a>
                                <div :id="'show-2-'+index" class="dropdown-menu dropdown-menu-right shadow border-0"
                                  style="font-size:1.5rem;">
                                  <button @click="removePartner(index, partner._id, transaction.partners)" class="dropdown-item" type="button" data-toggle="modal"
                                    data-target="#deleteFileCenter"><i class="far fa-trash-alt mr-4"></i>Delete</button>

                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="transaction.status == 'contract'" :class="{ active: detailPart === 4, show: detailPart === 4, fade: detailPart != 4  }" class="tab-pane fade" id="nav-contract" role="tabpanel" aria-labelledby="nav-contract-tab">
                      <div class="market__details mt-5">
                        <p class="font-weight-bold"><span class="d-inline-block mr-2"><img src="/static/img/paper_icon.svg"
                              alt="paper icon"></span>CONTRACT DETAILS</p>
                        <p class="empty-state"></p>
                        <div class="row mt-4">
                          <div class="col-sm-3 mb-4">
                            <p class="market__desc">
                              BUYER
                            </p>
                            <p v-if="transaction.poster" class="market__value">
                              {{transaction.poster.fname}} {{transaction.poster.lname}}
                            </p>
                          </div>
                          <div class="col-sm-3 mb-4">
                            <p class="market__desc">
                              SELLER
                            </p>
                            <p v-if="transaction.receiver" class="market__value">
                              {{transaction.receiver.fname}} {{transaction.receiver.lname}}
                            </p>
                          </div>
                          <div class="col-sm-3 mb-4">
                            <p class="market__desc">
                              ORIGIN
                            </p>
                            <p class="market__value">
                             {{transaction.origin}}
                            </p>
                          </div>
                          <div class="col-sm-3 mb-4">
                            <p class="market__desc">
                              DESTINATION
                            </p>
                            <p class="market__value">
                              {{transaction.destination}}
                            </p>
                          </div>
                          <div class="col-sm-3 mb-4">
                            <p class="market__desc">
                              SHIPMENT DATE
                            </p>
                            <p class="market__value">
                              {{ new Date(transaction.shipmentdate).toLocaleDateString("en-US")}}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="market__details mt-5">
                        <p class="font-weight-bold"><span class="d-inline-block mr-2"><img src="/static/img/paper_icon.svg"
                              alt="paper icon"></span>CONTRACT DOCUMENT</p>
                        <p class="empty-state"></p>
                        <div class="row mt-5">
                          <div v-for="(jdoc, index) in jointDocs" :key="index" class="col-sm-6 col-xs-12">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                              <div class="media">
                                <img src="/static/img/doc-icon.svg" class="mr-3" alt="doc-icon">
                                <div class="media-body">
                                  <p class="mt-0 mb-1">{{jdoc.name}}</p>
                                  <template v-if="jdoc.uploader">
                                    <small v-if="jdoc.uploader._id == transaction.buyer">Uploaded by Buyer</small>
                                    <small v-if="jdoc.uploader._id == transaction.seller">Uploaded by Seller</small>
                                    <small v-if="jdoc.uploader.type == 'Admin'">Uploaded by Admin</small>
                                  </template>
                                  <small v-else>Uploaded by Buyer</small>
                                </div>
                              </div>
                              <a v-if="jdoc.url && jdoc.url !== 'false'" :href="jdoc.url" target="_blank" class="btn btn__green-v">View</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-xs-12 mt-3">
              <div class="market__nego">

                <form>
                  <div class="card pb-3 d-none d-md-block" style="height:auto;">
                    <div class="card-header bg-white">
                      TRANSACTION STATUS
                    </div>

                    <div class="card-body px-1">
                      <div class="col">
                        <div class="form-group mb-5">
                          <label for="inputCity">Select Status</label>
                          <!-- <select v-model="status" class="form-control cselect" id="inputCity">
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Contract">Contract</option>
                            <option value="Completed">Completed</option>
                          </select> -->
                          <v-select v-model="status" :options='[
                            {"value":"Pending", "label":"Pending"},
                            {"value":"In Progress", "label":"In Progress"},
                            {"value":"Contract", "label":"Contract"},
                            {"value":"Completed", "label":"Completed"},
                            {"value":"Terminated", "label":"Terminated"}
                            ]'>
                          </v-select>
                        </div>

                        <div class="d-flex justify-content-between">
                          <button type="button" @click="updateStatus" :disabled="disable" class="btn btn-green-status">Set Status</button>
                          <!-- <button >Create Contract</button> -->
                          <keep-alive>
                            <router-link v-if="transaction.contract === 'False' && transaction.status.toLowerCase() === 'contract'" :to="{ name: 'Admin-Add-Contract', params: { id: encodeIt(transaction._id, transaction.reference, transaction.type) }}" class="btn btn-green-status--m">
                                  Create Contract
                              </router-link>
                          </keep-alive>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="clearfix mt-3">
                    <div class="float-left">
                      <a href="#" class="btn button__grey-a">Back</a>
                    </div>
                    <div class="float-right">
                      <button @click="showModal = true" type="button" class="btn button__primary-m" data-toggle="modal"
                        data-target="#exampleModalCenter">Add Document</button>
                      <!-- Modal -->
                      <div v-if="showModal === true" class="modal cwrap__modal show" id="exampleModalCenter" tabindex="-1" role="dialog" style="display: block;"
                      aria-labelledby="exampleModalCenterTitle" aria-modal="true">
                        <div class="modal-dialog modal-dialog-centered cwrap__modal-dialog" role="document">
                          <div class="modal-content cwrap__modal-content">
                            <div class="modal-header cwrap__modal-header ">
                              <h5 class="modal-title cwrap__modal-title text-center m-auto"
                                id="exampleModalCenterTitle">ADD DOCUMENT</h5>

                            </div>
                            <div class="modal-body px-5">
                            <div class="form-group mb-5">
                              <label for="inputFilename">FILE NAME <sup>*</sup></label>
                              <input type="text" v-model="newDoc.name" class="form-control cinput" id="inputFilename"
                                 required>
                            </div>
                            <div class="custom-file cwrap__file mb-4">
                              <input @change="setDocFilename($event, newDoc)" accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf, image/*" type="file" class="custom-file-input" id="customFile-2">
                              <label class="custom-file-label cwrap__file-label" for="customFile-2">{{newDoc.file.name}}</label>
                            </div>
                          </div>
                          <div class="modal-footer  cwrap__modal-footer">
                            <button @click="showModal = false" type="button" class="btn button__grey-m">Cancel</button>
                            <button @click="uploadFile(newDoc)" type="button" class="btn  button__primary mx-3">Upload</button>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
        <div v-if="showModal === true" class="modal-backdrop fade show"></div>
      </main>
</template>
<script>
import api from '@/api/user'
import offerApi from '@/api/offer'
import adminApi from '@/api/admin'
import Footer from '@/components/user/UserFooter'
import { upload } from '@/config'
import {mapGetters} from 'vuex'
export default {
  name: 'Index',
  components: {
    Footer
  },
  dashboard: true,
  title () {
    return `Transaction Details | Comflo Inc`
  },
  data: function () {
    return {
      newDoc: { name: '', file: { name: 'Choose File' } },
      showModal: false,
      detailPart: 1,
      transaction: [],
      users: [],
      uploadPartners: [{user_id: '', role: ''}],
      sellerDocs: [],
      buyerDocs: [],
      jointDocs: [],
      partners: [],
      link: '',
      isPartner: false,
      price: '',
      uploadfile: {},
      status: {'value': 'Pending', 'label': 'Pending'},
      visible: false
    }
  },
  computed: {
    ...mapGetters('admin', ['admin'])
  },
  mounted () {
    this.getTransaction()
    this.getUsers()
  },
  methods: {
    /**
     * Get all users registered into a select field
     */
    async getUsers () {
      let loader = this.$loading.show()
      try {
        let response = await adminApi.getUsers()
        //   console.log('Admin Users')
        // console.log(response.data)
        loader.hide()
        if (response.data.status === 'success') {
          for (const key in response.data.data) {
            if (response.data.data.hasOwnProperty(key)) {
              const element = response.data.data[key]
              let user = {'value': element._id, 'label': element.fname + ' ' + element.lname}
              // console.log(element)
              if (element.type === 'User') {
                this.users.push(user)
              }
            }
            this.uploadPartners[0].user_id = this.users[0].label
          }
        } else {
          this.$toast.error(response.data.message, '', this.notificationSystem.options.error)
        }
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
     * Get details about a transaction
     */
    async getTransaction () {
      const loader = this.$loading.show()
      try {
        const decodedString = this.decodeIt(this.$route.params.id)
        const response = await offerApi.getOffer(decodedString)
        console.log(response)
        loader.hide()
        if (response.data.status === 'success') {
          this.transaction = response.data.data
          this.transaction.status = this.transaction.status.toLowerCase()
          this.transaction.quantity = this.transaction.quantity.toLocaleString()
          this.transaction.currency = this.transaction.price.split(' ')[0]
          this.transaction.price = parseInt(this.transaction.price.split(' ')[1], 10).toLocaleString()
          this.price = this.locale(this.transaction.price)
          this.status = this.capitalCase(this.transaction.status)
          this.link = 'https://trade.comflo.com/admin/transactions/' + this.$route.params.id
          this.getDocs()
          this.getPartners()
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
     * Get Buyer/Receiver Doccuments
     */
    async getPartners () {
      const loader = this.$loading.show()
      try {
        let response = await offerApi.getOfferPartners(this.transaction.partners)
        console.log('partners', response)
        loader.hide()
        if (response.data.status === 'success') {
          this.partners = response.data.data.partner
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
     * upload partners
     */
    async uploadPartnersLink () {
      console.log('partner link')
      let loader = this.$loading.show()
      try {
        let partners = []
        for (let i = 0; i < this.uploadPartners.length; i++) {
          let partner = {}
          partner.user_id = this.uploadPartners[i].user_id.value
          // partner.address = this.uploadPartners[i].address.value
          partner.role = this.uploadPartners[i].role
          partners.push(partner)
        }
        const details = {
          partner_id: this.transaction.partners,
          partners,
          link: this.link,
          commodity: this.transaction.commodity
        }
        // console.log(details)
        let response = await adminApi.adminAddPartner(details)
        //   console.log(response)
        //   console.log(response.data)
        loader.hide()
        if (response.data.status === 'success') {
          this.$toast.success('Transaction Partner has been added', '', this.notificationSystem.options.success)
          this.disable = false
          // location.reload()
          this.getTransaction()
        } else {
          this.$toast.error(response.data.data, '', this.notificationSystem.options.error)
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
    async getDocs () {
      const loader = this.$loading.show()
      try {
        let [sellerResponse, jointResponse] = await Promise.all([offerApi.getOfferDocs(this.transaction._id), offerApi.getContractDocs(this.transaction._id)])
        loader.hide()
        if (sellerResponse.data.status === 'success') {
          this.sellerDocs = sellerResponse.data.data
          this.jointDocs = jointResponse.data.data
          console.log(jointResponse, sellerResponse)
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

    async uploadFile (doc) {
      const loader = this.$loading.show()
      try {
        this.showModal = false
        let file = doc.file

        let type = 'buyer-docs'
        let docId = this.transaction.buyerDocuments
        if (this.admin._id === this.transaction.seller) {
          type = 'seller-docs'
          docId = this.transaction.sellerDocuments
        }
        // console.log(file)
        let url = ''
        if (file.name) {
          url = await upload(file, type, this.transaction.commodity)
          doc.uploader = this.admin._id
        }
        doc.url = url
        doc.contract = false
        delete doc.file

        const documents = []
        documents.push(doc)
        const details = {
          documents
        }
        let response = await api.userAddDocs(details, this.transaction._id, docId)
        console.log(response)
        // console.log(response.data.status)
        loader.hide()
        if (response.data.status === 'success') {
          this.$toast.success('Document uploaded', '', this.notificationSystem.options.success)
          this.disable = false
          // location.reload()
          this.getTransaction()
        } else {
          this.$toast.error('An error occured uploading document', '', this.notificationSystem.options.error)
          return false
        }
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
     * update status of a deal
     */
    async updateStatus () {
      let loader = this.$loading.show()
      try {
        let details = {
          status: this.status.value,
          link: this.link
        }
        let response = await offerApi.patchOfferStatus(this.transaction._id, details)
        loader.hide()
        if (response.data.status === 'success') {
          this.$toast.success(`Transaction status has been set to ${details.status}`, '', this.notificationSystem.options.success)
          this.getTransaction()
        } else {
          this.$toast.error(response.data.data, '', this.notificationSystem.options.error)
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
     * Remove partner, i.e if a user made a mistake
     */
    async removePartner (index, partnerId, _id) {
      let loader = this.$loading.show()
      try {
        await adminApi.adminRemovePartner({partner: partnerId, id: _id})
        this.partners.splice(index, 1)
        this.$toast.success('Transaction Partner has been removed', '', this.notificationSystem.options.success)
        loader.hide()
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
