<template>
    <main class="col-sm-11 ml-sm-auto col-md-11 col-lg-10 dashboard-content" role="main">
        <div class="form-widget mt-lg-5">
            <p v-if="mainerror.length > 0" class="text-danger text-center col-md-12">{{mainerror}}</p>
            <p v-if="mainsuccess.length > 0" class="text-success text-center col-md-12">{{mainsuccess}}</p>
            <loading :active.sync="visible" :can-cancel="true"></loading>
            <div class="row">
                <div v-if="seller !== ''" class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">Seller</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{seller.fname}} {{seller.lname}}</p>
                    </div>
                </div>
                <div v-if="buyer !== ''" class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">Buyer</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{buyer.fname}} {{buyer.lname}}</p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">ID</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{deal.reference}}</p>
                    </div>
                </div>
                <div v-if="partners.length > 0" class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">Participants</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p v-for="(partner, index) in partners" :key="index">
                            <span class="col-md-4">{{ partner.user_id.fname }} {{ partner.user_id.lname }}</span>
                            <span class="col-md-4">{{partner.role}}</span>
                        </p>
                    </div>
                </div>
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
                        <p class="text-muted">Commodity Origin</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{deal.origin}}</p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">Commodity Destination</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{deal.origin}}</p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">Shipment Date</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{ new Date(deal.shipmentdate).toLocaleDateString("en-US")}}</p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">View Offer Documents</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p v-for="(sdoc, index) in sellerDocs" :key="index">
                            <span class="col-md-3">{{sdoc.name}}</span>
                            <!-- <span v-if="sdoc.uploader && sdoc.uploader !== ''" class="col-md-3">Uploaded by - {{sdoc.uploader}}</span> -->
                            <!-- <span class="col-md-3"><a @click="removeSDoc(index, sdoc.url, sdoc._id)">Remove</a></span> -->
                            <span class="col-md-3"><a :href="sdoc.url" target="_blank">View</a></span>
                        </p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">View Requested Documents</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p v-for="(bdoc, index) in buyerDocs" :key="index">
                            <span class="col-md-3">{{bdoc.name}}</span>
                            <span v-if="(!bdoc.url || bdoc.url == 'false') && isPartner">
                                <span>
                                    <label class="fileContainer">
                                        <!-- {{bdoc.file.name}} -->
                                        <input type="file" @change="setBdocFilename($event, bdoc)" :id="index" accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf, image/*"/>
                                    </label>
                                </span>
                                <span>
                                    <button @click="uploadBdocFile($event, bdoc)" type="button" class="btn btn-action">
                                        Upload
                                    </button>
                                </span>
                            </span>
                            <!-- <span v-if="bdoc.uploader && bdoc.uploader !== ''" class="col-md-3"><span v-if="bdoc.url && bdoc.url !== 'false'">Uploaded by</span> <span v-else>Requested by</span> - {{bdoc.uploader}}</span> -->
                            <!-- <span class="col-md-3"><a @click="removeBDoc(index, bdoc.url, bdoc._id)">Remove</a></span> -->
                            <span v-if="bdoc.url && bdoc.url !== 'false'" class="col-md-3"><a :href="bdoc.url" target="_blank">View</a></span>
                        </p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">View Contract Documents</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p v-for="(jdoc, index) in jointDocs" :key="index">
                            <span class="col-md-3">{{jdoc.name}}</span>
                            <!-- <span v-if="bdoc.uploader && bdoc.uploader !== ''" class="col-md-3"><span v-if="bdoc.url && bdoc.url !== 'false'">Uploaded by</span> <span v-else>Requested by</span> - {{bdoc.uploader}}</span> -->
                            <!-- <span class="col-md-3"><a @click="removeBDoc(index, jdoc.url, bdoc._id)">Remove</a></span> -->
                            <span v-if="jdoc.url && jdoc.url !== 'false'" class="col-md-3"><a :href="jdoc.url" target="_blank">View</a></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12 col-lg-12">
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
// import offerApi from '@/api/offer'
import Header from '@/components/Header'
import { deleteFile, addCompare, decode, upload } from '@/config'
import {mapGetters} from 'vuex'
export default {
  name: 'Index',
  components: {
    Header
  },
  data: function () {
    return {
      buyer: '',
      seller: '',
      deal: [],
      sellerDocs: [],
      buyerDocs: [],
      jointDocs: [],
      partners: [],
      partner_id: '',
      isPartner: false,
      price: '',
      mainsuccess: '',
      mainerror: '',
      uploadfile: {},
      visible: false
    }
  },
  computed: {
    ...mapGetters('user', ['user'])
  },
  mounted () {
    this.getDeal()
  },
  methods: {
    /**
     * convert a price string
     */
    locale (text) {
      let price = text.toString().split(' ')
      return price[0] + ' ' + parseInt(price[1], 10).toLocaleString()
    },
    /**
     * Get details about a deal
     */
    async getDeal () {
      let loader = this.$loading.show()
      let decodedString = this.decodeIt(this.$route.params.id)
      let response = await api.getDeal(decodedString)
      loader.hide()
      if (response.data.status === 'success') {
        this.deal = response.data.data
        // console.log(response.data)
        this.price = this.locale(this.deal.price)
        let [buyer, seller] = await Promise.all([this.getAddressName(this.deal.buyer), this.getAddressName(this.deal.seller), this.getDocs(), this.getPartners()])
        this.buyer = buyer
        this.seller = seller
      }
      this.disable = false
    },
    /**
     * Get Buyer/Receiver Doccuments
     */
    async getPartners () {
      let loader = this.$loading.show()
      let response = await adminApi.getPartners(this.deal.partners)
      loader.hide()
      if (response.data.status === 'success') {
        this.partner_id = response.data.data._id
        this.partners = response.data.data.partner
      }
      this.disable = false
    },
    /**
     * Get Offer Doccuments
     */
    async getDocs () {
      let loader = this.$loading.show()
      let [sellerResponse, buyerResponse, jointResponse] = await Promise.all([api.getDealDocs(this.deal.sellerDocuments), api.getDealDocs(this.deal.buyerDocuments), api.getDealDocs(this.deal.jointDocuments)])
      loader.hide()
      if (sellerResponse.data.status === 'success' && buyerResponse.data.status === 'success' && jointResponse.data.status === 'success') {
        this.sellerDocs = sellerResponse.data.data
        this.buyerDocs = buyerResponse.data.data
        this.jointDocs = jointResponse.data.data
      }
      this.disable = false
    },
    /**
     * Get the name of the owner of a blockchain address
     */
    async getAddressName (address) {
      let details = {
        address
      }
      let response = await api.getName(details)
      if (response.data.status === 'success') {
        return response.data.data
      } else {
        return false
      }
    },
    /**
     * Remove seller image, i.e if a user made a mistake
     */
    async removeSDoc (index, url, _id) {
      let loader = this.$loading.show()
      deleteFile(url)
      await api.userDeleteDoc(_id)
      this.sellerDocs.splice(index, 1)
      loader.hide()
    },
    /**
     * Remove buyer image, i.e if a user made a mistake
     */
    async removeBDoc (index, url, _id) {
      let loader = this.$loading.show()
      deleteFile(url)
      await api.userDeleteDoc(_id)
      this.buyerDocs.splice(index, 1)
      loader.hide()
    },
    /**
     * helper function, check if a string is empty
     */
    notEmpty (address) {
      return String(address).toLowerCase().includes('0x00')
    },
    /**
     * helper function, check 2 addresses are same
     */
    notSame (seller, user) {
      // console.log(seller, user)
      return !addCompare(seller, user)
    },
    /**
     * Decode the encrypted deal string
     */
    decodeIt (text) {
      return decode(text)
    },
    setBdocFilename (event, bdoc) {
      var file = event.target.files[0]
      bdoc.file = file
    },
    async uploadBdocFile ($event, bdoc) {
      let loader = this.$loading.show()
      let file = bdoc.file
      let url = ''
      if (file.name) {
        url = await upload(file, 'buyer-docs', this.deal[3])
        bdoc.uploader = this.user.fname + ' ' + this.user.lname
      }
      bdoc.url = url
      delete bdoc.file

      const details = {
        doc: bdoc
      }
      let response = await api.userUpdateDocs(details)
      loader.hide()
      if (response.data.status === 'success') {
        this.disable = false
        location.reload()
      } else {
        this.mainerror = 'An error occured uploading buyer documents'
        return false
      }
    }
  }
}
</script>
