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
                      <a v-if="partners && partners.length > 0" :class="{ active: detailPart == 3 }" class="nav-item nav-link cursor-active" id="nav-contact-tab" data-toggle="tab" @click="detailPart = 3" role="tab"
                        aria-controls="nav-contact" aria-selected="true">PARTICIPANTS</a>
                      <a v-if="transaction.status == 'contract'" :class="{ active: detailPart == 4 }" class="nav-item nav-link cursor-active" id="nav-contract-tab" data-toggle="tab" @click="detailPart = 4"
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
                            <div v-if="transaction.status == 'pending'" class="statusblock-yellow--m text-center">{{transaction.status | capitalCase }}</div>
                            <div v-else-if="transaction.status == 'completed'" class="statusblock-green--m text-center">{{transaction.status | capitalCase}}</div>
                            <div v-else-if="transaction.status == 'contract'" class="statusblock-grey--m text-center">{{transaction.status | capitalCase}}</div>
                            <div v-else-if="transaction.status == 'in progress'" class="statusblock-blue--m text-center">{{transaction.status | capitalCase}}</div>
                            <div v-else-if="transaction.status == 'terminated'" class="statusblock-red--m text-center">{{transaction.status | capitalCase}}</div>
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
                                  <small>Uploaded by seller</small>
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
                        <div class="row mt-5">
                          <div v-for="(partner, index) in partners" :key="index" class="col-sm-6">
                            <div class="text-center border rounded mb-4">
                              <p class="market__desc pt-3">
                                {{partner.role}}
                              </p>
                              <p class="market__value">
                                {{partner.user_id.fname}} {{partner.user_id.lname}}
                              </p>
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
                            <p class="market__value">
                              Brech farms
                            </p>
                          </div>
                          <div class="col-sm-3 mb-4">
                            <p class="market__desc">
                              SELLER
                            </p>
                            <p class="market__value">
                              Grouch LTD
                            </p>
                          </div>
                          <div class="col-sm-3 mb-4">
                            <p class="market__desc">
                              ORIGIN
                            </p>
                            <p class="market__value">
                              Lagos, Nigeria
                            </p>
                          </div>
                          <div class="col-sm-3 mb-4">
                            <p class="market__desc">
                              DESTINATION
                            </p>
                            <p class="market__value">
                              California, USA
                            </p>
                          </div>
                          <div class="col-sm-3 mb-4">
                            <p class="market__desc">
                              SHIPMENT DATE
                            </p>
                            <p class="market__value">
                              14/17/2019
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
                                  <!-- <small>Contract_bill_of_lading.doc</small> -->
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
                <div class="card px-5 text-center d-none d-md-block">
                  <form>
                    <img class="mt-4 mb-3" src="/static/img/question-icon.svg" alt="chat icon">
                    <p class="mb-3 font-weight-bold" style="font-size: 13px;">Do you have any question
                      about this offer?</p>
                    <div class="form-group">
                      <textarea type="text" class="form-control cinput mb-3" id="inputquestion" rows="4"></textarea>
                    </div>
                    <button type="submit" class="btn button__primary mb-4">Ask</button>
                  </form>
                </div>
                <div class="clearfix mt-4">
                  <div class="float-left">
                    <!-- <a href="#" class="btn button__grey-a">Back</a> -->
                    <router-link class="btn button__grey-a" :to="{ name: 'User-Transactions'}">
                      Back
                    </router-link>
                  </div>
                  <div class="float-right">
                    <button v-if="user._id === transaction.buyer || user._id === transaction.seller || isPartner" @click="showModal = true" type="button" class="btn button__primary-m" data-toggle="modal"
                      data-target="#exampleModalCenter">Add Document</button>
                    <button @click="negotiate()" v-if="notSame(transaction.poster, user._id) && transaction.status == 'pending'" type="button" class="btn button__primary-m" data-toggle="modal"
                    data-target="#exampleModalCenter">Negotiate</button>
                    <!-- Modal -->
                    <div v-if="showModal === true" class="modal cwrap__modal show" id="exampleModalCenter" tabindex="-1" role="dialog" style="display: block;"
                      aria-labelledby="exampleModalCenterTitle" aria-modal="true">
                      <div class="modal-dialog modal-dialog-centered cwrap__modal-dialog" role="document">
                        <div class="modal-content cwrap__modal-content">
                          <div class="modal-header cwrap__modal-header ">
                            <h5 class="modal-title cwrap__modal-title text-center m-auto" id="exampleModalCenterTitle">
                              ADD DOCUMENT</h5>
                          </div>
                          <div class="modal-body px-5">
                            <div class="form-group mb-5">
                              <label for="inputFilename">FILE NAME <sup>*</sup></label>
                              <input type="text" v-model="newDoc.name" class="form-control cinput" id="inputFilename"
                                placeholder="Enter file name" required>
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
      sellerDocs: [],
      buyerDocs: [],
      jointDocs: [],
      partners: [],
      isPartner: false,
      //   poster: '',
      receiver: '',
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
    this.getTransaction()
  },
  methods: {
    /**
     * Negotiate a transaction
     */
    async negotiate () {
      let loader = this.$loading.show()
      try {
        //   let link = 'https://localhost:8080/admin/transactions/' + this.$route.params.id
        let link = 'https://trade.comflo.com/admin/transactions/' + this.$route.params.id
        let details = {
          link,
          user: this.user._id
        }
        console.log(details)
        let response = await offerApi.negotiateOffer(this.transaction._id, details)
        console.log(response)
        loader.hide()
        if (response.data.status === 'success') {
          this.$toast.success('A negotiation mail has been sent. A representative will contact you', '', this.notificationSystem.options.success)
        } else {
          this.$toast.error('Error sending a negotiation mail', '', this.notificationSystem.options.error)
          return false
        }
        this.disable = false
      } catch (error) {
        this.handleError(error, loader)
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
          this.getDocs()
          this.getPartners()
        }
        this.disable = false
      } catch (error) {
        this.handleError(error, loader)
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
          this.partners.map((partner) => {
            if (partner.user_id._id === this.user._id) {
              this.isPartner = true
            }
          })
        }
        this.disable = false
      } catch (error) {
        this.handleError(error, loader)
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
        this.handleError(error, loader)
      }
    },

    async uploadFile (doc) {
      this.showModal = false
      let loader = this.$loading.show()
      try {
        let file = doc.file

        let type = 'buyer-docs'
        let docId = this.transaction.buyerDocuments
        if (this.user._id === this.transaction.seller) {
          type = 'seller-docs'
          docId = this.transaction.sellerDocuments
        }
        // console.log(file)
        let url = ''
        if (file && file.name) {
          url = await upload(file, type, this.transaction.commodity)
          doc.uploader = this.user._id
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
          location.reload()
        } else {
          this.$toast.error('An error occured uploading document', '', this.notificationSystem.options.error)
          return false
        }
      } catch (error) {
        this.handleError(error, loader)
      }
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
