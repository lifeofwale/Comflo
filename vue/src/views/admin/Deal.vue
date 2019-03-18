<template>
    <main class="col-sm-11 ml-sm-auto col-md-11 col-lg-10 dashboard-content" role="main">
        <div class="form-widget mt-lg-5">
            <p v-if="mainerror.length > 0" class="text-danger text-center col-md-12">{{mainerror}}</p>
            <loading :active.sync="visible" :can-cancel="true"></loading>
            <div class="row">
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">ID</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{deal.reference}}</p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">Posted by</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{poster.fname}} {{poster.lname}}</p>
                    </div>
                </div>
                <!-- <div v-if="!notEmpty(deal[8])" class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">Receiver</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{receiver}}</p>
                    </div>
                </div>
                <div v-if="notEmpty(deal[8])" class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">Buyer</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <div class="form-group">
                            <div class="form-group">
                                <v-select v-model="receiver" :options='users'>
                                </v-select>
                            </div>
                        </div>
                        <p class="pull-left mt-10">
                            <button @click="updateReceiver" :disabled="!emptyText || disable" class="btn btn-action">
                                Set Receiver
                            </button>
                        </p>
                    </div>
                </div> -->
                <div v-if="partners.length > 0" class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">Participants</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p v-for="(partner, index) in partners" :key="index">
                            <span class="col-md-4">{{ partner.user_id.fname }} {{ partner.user_id.lname }}</span>
                            <span class="col-md-4">{{partner.role}}</span>
                            <span class="col-md-4"><a @click="removePartner(index, partner._id)">Remove</a></span>
                        </p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <table class="wrapper" width="100%">
                        <tfoot>
                        <tr>
                            <td>
                                <span class="add"><button type="button" @click="addPartnerRow" class="btn btn-action mt-10"><i class="fa fa-plus"></i> New Participant</button></span>
                                <button type="button" @click="uploadPartnersLink" v-if="uploadPartners.length > 0" class="btn btn-action mt-10 pull-right">Add Partner</button>
                            </td>
                        </tr>
                        </tfoot>
                        <tbody id="milestones" class="container">
                            <tr v-for="(partner, index) in uploadPartners" :key="index" class="template row">
                                <td class="col-md-6">
                                    <label class="fileContainer">
                                        User
                                    </label>
                                    <v-select v-model="partner.user_id" :options='users'>
                                    </v-select>
                                </td>
                                <td class="col-md-6">
                                    <label class="fileContainer">
                                        Role
                                    </label>
                                    <v-select v-model="partner.role" :options='[
                                    //{"value":"Buyer", "label":"Buyer"},
                                    //{"value":"Seller", "label":"Seller"},
                                    {"value":"Agent", "label":"Agent"},
                                    {"value":"Bank", "label":"Bank"},
                                    {"value":"Vendor", "label":"Vendor"}
                                    ]'>
                                    </v-select>
                                </td>
                                <td class="col-md-12">
                                    <label class="fileContainer">
                                        <p></p>
                                    </label>
                                    <a v-on:click="removePartnerElement(index)" class="btn btn-action col-md-12" style="cursor: pointer">Remove</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">ID</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{deal[1]}}</p>
                    </div>
                </div> -->
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">Type</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{deal.type}}</p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">Commodity</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{deal.commodity}}</p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">Price</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{price}}</p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">Quantity</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{deal.quantity}}</p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">INCOTERM</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{deal.incoterm}}</p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">Payment</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{deal.payment}}</p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">Commodity Location</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{deal.location}}</p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">Status</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{deal.status}}</p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted"></p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <div class="form-group">
                            <div class="form-group">
                                <template v-if="deal.status=='Contract'">
                                  <v-select v-model="status" :options='[
                                    {"value":"Completed", "label":"Completed"},
                                    {"value":"Contract", "label":"Contract"},
                                    {"value":"Terminated", "label":"Terminated"}
                                    ]'>
                                  </v-select>
                                </template>
                                <template v-else>
                                  <v-select v-model="status" :options='[
                                    {"value":"Pending", "label":"Pending"},
                                    {"value":"In Progress", "label":"In Progress"},
                                    {"value":"Contract", "label":"Contract"},
                                    {"value":"Completed", "label":"Completed"},
                                    {"value":"Terminated", "label":"Terminated"}
                                    ]'>
                                  </v-select>
                                </template>
                            </div>
                        </div>
                        <p v-if="emptyStatusText" class="pull-left mt-10">
                            <button @click="updateStatus" :disabled="disable" class="btn btn-action">
                                Set Status
                            </button>
                        </p>
                        <p v-if="emptyContractText" class="pull-right mt-10">
                            <router-link :to="{ name: 'Admin-Add-Contract', params: { id: encodeIt(deal._id, deal.reference, deal.type) }}" class="btn btn-action">
                                Create Contract
                            </router-link>
                        </p>
                    </div>
                </div>
                <!-- <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <h5 class="text-muted">Category</h5>
                    </div>
                    <div class="col-md-8 pull-right">
                        <h5>{{deal[10]}}</h5>
                    </div>
                </div> -->
                <!-- <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <h5 class="text-muted">Images</h5>
                    </div>
                    <div class="col-md-8 pull-right">
                        <h5 v-for="(image, index) in images" :key="index">
                            <span class="col-md-4">{{image.name}}</span>
                            <span class="col-md-4"><a @click="removeImage(index, image.url, image._id)">Remove</a></span>
                            <span v-if="image.url" class="col-md-4"><a :href="image.url" target="_blank">View</a></span>
                        </h5>
                    </div>
                </div> -->
                <!-- <div class="form-group col-md-12">
                    <table class="wrapper" width="100%">
                        <tfoot>
                        <tr>
                            <td>
                                <span class="add"><button type="button" @click="addImageRow" class="btn btn-round venice-bg mt-10"><i class="fa fa-plus"></i> Add Images</button></span>
                                <button type="button" @click="uploadImages" v-if="uploadimages.length > 0" class="btn btn-round venice-bg mt-10 pull-right">Upload Images</button>
                            </td>
                        </tr>
                        </tfoot>
                        <tbody id="milestones" class="container">
                            <tr v-for="(image, index) in uploadimages" :key="index" class="template row">
                                <td class="col-md-4">
                                    <input type="text" v-model="image.name" class="form-control mb-2" placeholder="Name"/>
                                </td>
                                <td class="col-md-4">
                                    <label class="fileContainer">
                                        {{image.file.name}}
                                        <input type="file" @change="setImageFilename($event, image)" :id="index" accept="image/*"/>
                                    </label>
                                </td>
                                <td class="col-md-4">
                                    <a v-on:click="removeImageElement(index)" class="btn btn-round venice-bg" style="cursor: pointer">Remove</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div> -->
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">View Offer Documents</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p v-for="(sdoc, index) in sellerDocs" :key="index">
                            <span class="col-md-3">{{sdoc.name}}</span>
                            <span v-if="sdoc.uploader && sdoc.uploader !== ''" class="col-md-3">Uploaded by - {{sdoc.uploader.fname}} {{sdoc.uploader.lname}}</span>
                            <span class="col-md-3"><a @click="removeSDoc(index, sdoc.url, sdoc._id)">Remove</a></span>
                            <span v-if="sdoc.url" class="col-md-3"><a :href="sdoc.url" target="_blank">View</a></span>
                        </p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <table class="wrapper" width="100%">
                        <tfoot>
                        <tr>
                            <td>
                                <span class="add"><button type="button" @click="addSdocRow" class="btn btn-action mt-10"><i class="fa fa-plus"></i> Add Offer Documents</button></span>
                                <button type="button" @click="uploadSdocs" v-if="uploadsellerDocs.length > 0" class="btn btn-action mt-10 pull-right">Upload Documents</button>
                            </td>
                        </tr>
                        </tfoot>
                        <tbody id="milestones" class="container">
                            <tr v-for="(sdoc, index) in uploadsellerDocs" :key="index" class="template row">
                                <td class="col-md-4">
                                    <input type="text" v-model="sdoc.name" class="form-control mb-2" placeholder="Name"/>
                                </td>
                                <td class="col-md-4">
                                    <label class="fileContainer">
                                        {{sdoc.file.name}}
                                        <input type="file" @change="setSdocFilename($event, sdoc)" :id="index" accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf,image/*"/>
                                    </label>
                                </td>
                                <td class="col-md-4">
                                    <a v-on:click="removeSdocElement(index)" class="btn btn-action" style="cursor: pointer">Remove</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">View Requested Documents</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p v-for="(bdoc, index) in buyerDocs" :key="index">
                            <span class="col-md-3">{{bdoc.name}}</span>
                            <span v-if="bdoc.uploader && bdoc.uploader !== ''" class="col-md-3"><span v-if="bdoc.url && bdoc.url !== 'false'">Uploaded by</span> <span v-else>Requested by</span> - {{bdoc.uploader.fname}} {{bdoc.uploader.lname}}</span>
                            <span class="col-md-3"><a @click="removeBDoc(index, bdoc.url, bdoc._id)">Remove</a></span>
                            <span v-if="bdoc.url && bdoc.url !== 'false'" class="col-md-3"><a :href="bdoc.url" target="_blank">View</a></span>
                        </p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <table class="wrapper" width="100%">
                        <tfoot>
                        <tr>
                            <td>
                                <span class="add"><button type="button" @click="addBdocRow" class="btn btn-action mt-10"><i class="fa fa-plus"></i> Add Requested Documents</button></span>
                                <button type="button" @click="uploadBdocs" v-if="uploadbuyerDocs.length > 0" class="btn btn-action mt-10 pull-right">Upload Documents</button>
                            </td>
                        </tr>
                        </tfoot>
                        <tbody id="milestones" class="container">
                            <tr v-for="(bdoc, index) in uploadbuyerDocs" :key="index" class="template row">
                                <td class="col-md-4">
                                    <input type="text" v-model="bdoc.name" class="form-control mb-2" placeholder="Name"/>
                                </td>
                                <td class="col-md-4">
                                    <label class="fileContainer">
                                        {{bdoc.file.name}}
                                        <input type="file" @change="setBdocFilename($event, bdoc)" :id="index" accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf,image/*"/>
                                    </label>
                                </td>
                                <td class="col-md-4">
                                    <a v-on:click="removeBdocElement(index)" class="btn btn-action" style="cursor: pointer">Remove</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-md-12 col-lg-12">
            <p class="pull-right mt-10">
                <router-link class="btn btn-round venice-bg" :to="{ name: 'Admin-Edit-Deal', params: { id: encodeIt(deal._id, deal.reference, deal.type) }}">
                    Edit
                </router-link>
            </p>
            <p class="pull-left mt-10">
                <a @click="$router.go(-1)" class="btn btn-round venice-bg">
                    Back
                </a>
            </p>
        </div>
  </main>
</template>
<script>
import api from '@/api/user'
import adminApi from '@/api/admin'
import offerApi from '@/api/offer'
import { deleteFile, decode, addCompare, upload, encode } from '@/config'
import {mapGetters} from 'vuex'
export default {
  name: 'Admin-Deal',
  data: function () {
    return {
      users: [],
      deal: [],
      uploadsellerDocs: [],
      uploadbuyerDocs: [],
      uploadPartners: [],
      sellerDocs: [],
      buyerDocs: [],
      partners: [],
      partner_id: '',
      poster: '',
      price: '',
      commodity: '',
      status: {'value': 'Pending', 'label': 'Pending'},
      receiver: {'value': '', 'label': 'Search Users'},
      mainerror: '',
      link: '',
      visible: false,
      disable: false
    }
  },
  mounted () {
    this.getDeal()
    this.getUsers()
  },
  computed: {
    ...mapGetters('admin', ['admin']),
    emptyAddressText () {
      return this.partners[0].value.length > 1
    },
    emptyStatusText () {
      return this.status.value !== this.deal.status
    },
    emptyContractText () {
      return this.deal.contract === 'False' && this.deal.status === 'Contract'
    }
  },
  methods: {
    /**
     * convert a price string
     */
    locale (text) {
      let price = text.toString().split(' ')
      return price[0] + ' ' + parseInt(price[1], 10).toLocaleString()
    },
    async uploadBdocs () {
      let loader = this.$loading.show()
      for (let i = 0; i < this.uploadbuyerDocs.length; i++) {
        let file = this.uploadbuyerDocs[i].file
        let url = ''
        if (file.name) {
          url = await upload(file, 'buyer-docs', this.commodity)
          this.uploadbuyerDocs[i].uploader = this.admin._id
        }
        this.uploadbuyerDocs[i].url = url
        delete this.uploadbuyerDocs[i].file
      }
      const details = {
        doc_id: this.deal.buyerDocuments,
        documents: this.uploadbuyerDocs
      }
      let response = await api.userAddDocs(details)
      //   // console.log(response)
      //   // console.log(response.data.status)
      loader.hide()
      if (response.data.status === 'success') {
        this.disable = false
        location.reload()
      } else {
        this.mainerror = 'An error occured uploading buyer documents'
        return false
      }
    },
    async uploadSdocs () {
      let loader = this.$loading.show()
      for (let i = 0; i < this.uploadsellerDocs.length; i++) {
        let file = this.uploadsellerDocs[i].file
        let url = ''
        if (file.name) {
          url = await upload(file, 'seller-docs', this.commodity)
          this.uploadsellerDocs[i].uploader = this.admin._id
        }
        this.uploadsellerDocs[i].url = url
        delete this.uploadsellerDocs[i].file
      }
      const details = {
        doc_id: this.deal.sellerDocuments,
        documents: this.uploadsellerDocs
      }

      console.log(details)
      let response = await api.userAddDocs(details)
      console.log(response)
      console.log(response.data.status)
      loader.hide()
      if (response.data.status === 'success') {
        this.disable = false
        location.reload()
      } else {
        this.mainerror = 'An error occured uploading buyer documents'
        return false
      }
    },
    async uploadPartnersLink () {
      let loader = this.$loading.show()
      let partners = []
      for (let i = 0; i < this.uploadPartners.length; i++) {
        let partner = {}
        partner.user_id = this.uploadPartners[i].user_id.value
        // partner.address = this.uploadPartners[i].address.value
        partner.role = this.uploadPartners[i].role.value
        partners.push(partner)
      }
      const details = {
        partner_id: this.partner_id,
        link: this.link,
        commodity: this.deal.commodity,
        partners
      }
      //   // console.log(details)
      let response = await adminApi.adminAddPartner(details)
      //   // console.log(response)
      //   // console.log(response.data)
      loader.hide()
      if (response.data.status === 'success') {
        this.disable = false
        location.reload()
      } else {
        this.mainerror = 'An error occured adding partners'
        return false
      }
    },
    /**
     * Get details about a deal
     */
    async getDeal () {
      let loader = this.$loading.show()
      let decodedString = this.decodeIt(this.$route.params.id)
      let response = await offerApi.getOffer(decodedString)
      //   // console.log(response)
      //   // console.log(response.data.status)
      loader.hide()
      if (response.data.status === 'success') {
        this.deal = response.data.data
        this.commodity = this.deal.commodity
        this.status.value = this.deal.status
        this.price = this.locale(this.deal.price)
        // // console.log(this.deal[11])
        this.getDocs()
        this.getPartners()
        this.poster = await this.getName(this.deal.poster)
        if (this.deal.status === 'Contract') {
          this.status = {'value': 'Contract', 'label': 'Contract'}
        }
        this.link = 'https://trade.comflo.com/user/deals/' + this.$route.params.id
      }
      this.disable = false
    },
    /**
     * Get Offer Doccuments
     */
    async getDocs () {
      let loader = this.$loading.show()
      let [sellerResponse, buyerResponse] = await Promise.all([offerApi.getOfferDocs(this.deal._id, this.deal.sellerDocuments), offerApi.getOfferDocs(this.deal._id, this.deal.buyerDocuments)])
      loader.hide()
      if (sellerResponse.data.status === 'success' && buyerResponse.data.status === 'success') {
        this.sellerDocs = sellerResponse.data.data
        this.buyerDocs = buyerResponse.data.data
      }
      this.disable = false
    },
    /**
     * Get Buyer/Receiver Doccuments
     */
    async getPartners () {
      let loader = this.$loading.show()
      let response = await adminApi.getPartners(this.deal.partners)
      // // console.log(response)
      // // console.log(response.data.status)
      loader.hide()
      if (response.data.status === 'success') {
        this.partner_id = response.data.data._id
        this.partners = response.data.data.partner
      }
      this.disable = false
    },
    /**
     * Remove seller image, i.e if a user made a mistake
     */
    async removeSDoc (index, url, _id) {
      let loader = this.$loading.show()
      if (url !== '') {
        deleteFile(url)
      }
      await api.userDeleteDoc(_id)
      this.sellerDocs.splice(index, 1)
      loader.hide()
    },
    /**
     * Remove buyer image, i.e if a user made a mistake
     */
    async removeBDoc (index, url, _id) {
      let loader = this.$loading.show()
      if (url !== '') {
        deleteFile(url)
      }
      await api.userDeleteDoc(_id)
      this.buyerDocs.splice(index, 1)
      loader.hide()
    },
    /**
     * Remove partner, i.e if a user made a mistake
     */
    async removePartner (index, _id) {
      let loader = this.$loading.show()
      await adminApi.adminRemovePartner(_id)
      this.partners.splice(index, 1)
      loader.hide()
    },
    // /**
    //  * helper function, check if a string is empty
    //  */
    // notEmpty (address) {
    //   return String(address).toLowerCase().includes('0x00')
    // },
    /**
     * Get the name of the owner of a blockchain address
     */
    async getName (id) {
      let response = await adminApi.getUser(id)
      if (response.data.status === 'success') {
        // // console.log(response.data.data)
        return response.data.data
      } else {
        return false
      }
    },
    /**
     * Get all users registered into a select field
     */
    async getUsers () {
      let loader = this.$loading.show()
      let response = await adminApi.getUsers()
      //   // console.log('Admin Users')
      //   // console.log(response.data)
      loader.hide()
      if (response.data.status === 'success') {
        for (const key in response.data.data) {
          if (response.data.data.hasOwnProperty(key)) {
            const element = response.data.data[key]
            let user = {'value': element._id, 'label': element.fname + ' ' + element.lname}
            if (element.type === 'User') {
              this.users.push(user)
            }
          }
        }
      }
      this.disable = false
    },
    // /**
    //  * update receiver of a deal
    //  */
    // async updateReceiver () {
    //   let loader = this.$loading.show()
    //   let details = {
    //     deal_id: this.deal._id,
    //     poster: this.deal.poster,
    //     receiver: this.receiver.value,
    //     user_address: this.admin.address
    //   }
    //   //   // console.log(details)
    //   let response = await adminApi.updateTrader(details)
    //   //   // console.log('Update receiver')
    //   //   // console.log(response.data.status)
    //   //   // console.log(response.data)
    //   loader.hide()
    //   if (response.data.status === 'success') {
    //     this.getDeal()
    //   } else {
    //     this.mainerror = 'An error occured'
    //     return false
    //   }
    //   this.disable = false
    // },
    /**
     * update status of a deal
     */
    async updateStatus () {
      let loader = this.$loading.show()
      let details = {
        status: this.status.value,
        link: this.link
      }
      let response = await offerApi.patchOfferStatus(this.deal._id, details)
      loader.hide()
      if (response.data.status === 'success') {
        this.getDeal()
      } else {
        this.mainerror = 'An error occured'
        return false
      }
      this.disable = false
    },
    /**
     * Decode the encrypted deal string
     */
    decodeIt (text) {
      return decode(text)
    },
    addSdocRow () {
      //   var elem = document.createElement('tr')
      this.uploadsellerDocs.push({
        name: '',
        file: {
          name: 'Choose File'
        }
      })
    },
    addPartnerRow () {
      //   var elem = document.createElement('tr')
      this.uploadPartners.push({
        name: '',
        role: ''
      })
    },
    removePartnerElement (index) {
      this.uploadPartners.splice(index, 1)
    },
    removeSdocElement (index) {
      this.uploadsellerDocs.splice(index, 1)
    },
    setSdocFilename (event, sdoc) {
      var file = event.target.files[0]
      sdoc.file = file
    },
    addBdocRow () {
      this.uploadbuyerDocs.push({
        name: '',
        file: {
          name: 'Choose File'
        }
      })
    },
    removeBdocElement (index) {
      this.uploadbuyerDocs.splice(index, 1)
    },
    setBdocFilename (event, bdoc) {
      var file = event.target.files[0]
      bdoc.file = file
    },
    notSame (seller, address) {
      return !addCompare(seller, address)
    },
    encodeIt (id, buyorsell, commodity) {
      return encode(id, buyorsell, commodity)
    }
  }
}
</script>
<style>
.disabled {
  pointer-events:none;
  opacity:0.6;
}
</style>
