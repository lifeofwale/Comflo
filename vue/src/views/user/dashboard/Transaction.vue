<template>
    <!-- <main class="col-sm-11 ml-sm-auto col-md-11 col-lg-10 dashboard-content" role="main">
        <div class="form-widget mt-lg-5">
            <p v-if="mainerror.length > 0" class="text-danger text-center col-md-12">{{mainerror}}</p>
            <p v-if="mainsuccess.length > 0" class="text-success text-center col-md-12">{{mainsuccess}}</p>
            <loading :active.sync="visible" :can-cancel="true"></loading>
            <div class="row">
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">Posted By</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{poster}}</p>
                    </div>
                </div> -
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">ID</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{transaction.reference}}</p>
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
                        <p>{{transaction.type}}</p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">Commodity</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{transaction.commodity}}</p>
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
                        <p>{{transaction.quantity}}</p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">INCOTERM</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{transaction.incoterm}}</p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">Payment</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{transaction.payment}}</p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">Commodity Location</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{transaction.location}}</p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">Status</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p>{{transaction.status}}</p>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <h5 class="text-muted">Category</h5>
                    </div>
                    <div class="col-md-8 pull-right">
                        <h5>{{transaction[10]}}</h5>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <h5 class="text-muted">Images</h5>
                    </div>
                    <div class="col-md-8 pull-right">
                        <h5 v-for="(image, index) in images" :key="index">
                            <span class="col-md-4">{{image.name}}</span>
                            <span class="col-md-4"><a @click="removeImage(index, image.url, image._id)">Remove</a></span>
                            <span class="col-md-4"><a :href="image.url" target="_blank">View</a></span>
                        </h5>
                    </div>
                </div> -
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <p class="text-muted">View Offer Documents</p>
                    </div>
                    <div class="col-md-8 pull-right">
                        <p v-for="(sdoc, index) in sellerDocs" :key="index">
                            <span class="col-md-3">{{sdoc.name}}</span>
                            <span v-if="sdoc.uploader && sdoc.uploader !== ''" class="col-md-3">Uploaded by - {{sdoc.uploader}}</span>
                            <span class="col-md-3"><a @click="removeDoc(index, sdoc.url, sdoc._id, sellerDocs)">Remove</a></span> -
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
                                        {{bdoc.file.name}} -
                                        <input type="file" @change="setFilename($event, bdoc)" :id="index" accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf, image/*"/>
                                    </label>
                                </span>
                                <span>
                                    <button @click="uploadFile($event, bdoc)" type="button" class="btn btn-action">
                                        Upload
                                    </button>
                                </span>
                            </span>
                            <span v-if="bdoc.uploader && bdoc.uploader !== ''" class="col-md-3"><span v-if="bdoc.url && bdoc.url !== 'false'">Uploaded by</span> <span v-else>Requested by</span> - {{bdoc.uploader}}</span>
                            <span class="col-md-3"><a @click="removeDoc(index, bdoc.url, bdoc._id, buyerDocs)">Remove</a></span> -
                            <span v-if="bdoc.url && bdoc.url !== 'false'" class="col-md-3"><a :href="bdoc.url" target="_blank">View</a></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12 col-lg-12">
            <template v-if="user.address == transaction.seller">
                <p class="pull-right mt-10">
                    <a v-link="'/user/transactions/'+transaction[0]+'/edit'" class="btn btn-round venice-bg">
                    Edit
                    </a>
                </p>
            </template> -
            <p class="pull-right mt-10">
                <a class="btn btn-round venice-bg" @click="negotiate()" v-if="notSame(transaction.poster, user._id) && transaction.status=='Pending'" >
                    Negotiate
                </a>
                <router-link class="btn btn-round venice-bg" v-if="!notSame(transaction.poster, user._id) && transaction.status=='Pending'" :to="{ name: 'User-Edit-Deal', params: { id: encodeIt(transaction._id, transaction.reference, transaction.type) }}">
                    Edit
                </router-link>
            </p>
            <p class="pull-left mt-10">
                <a @click="$router.go(-1)" class="btn btn-round venice-bg">
                    Back
                </a>
            </p>
        </div>
  </main> -->
  <main class="col-sm-11 offset-sm-1 content content-m content-offset content-offset-m px-0">
        <div class="container mrt-6 mb-10">
          <div class="row">
            <div class="col-md-8 col-xs-12 mt-3">
              <p><span class="d-inline-block"><img src="/static/img/id__icon.svg" alt="id__icon"></span> OFFER: <span
                  class="font-weight-bold">{{transaction.reference}}</span></p>
              <div class="card market__card mt-5">
                <div class="card-body px-5">
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <a :class="{ active: detailPart == 1 }" class="nav-item nav-link px-5" id="nav-home-tab" data-toggle="tab" @click="detailPart = 1"
                        role="tab" aria-controls="nav-home" aria-selected="true">DETAILS</a>
                      <a :class="{ active: detailPart == 2 }" class="nav-item nav-link px-5"  id="nav-profile-tab" data-toggle="tab" @click="detailPart = 2"
                        role="tab" aria-controls="nav-profile" aria-selected="true">DOCUMENTS</a>
                      <a :class="{ active: detailPart == 3 }" class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" @click="detailPart = 3" role="tab"
                        aria-controls="nav-contact" aria-selected="true">PARTICIPANTS</a>
                      <a v-if="transaction.status == 'contract'" :class="{ active: detailPart == 4 }" class="nav-item nav-link" id="nav-contract-tab" data-toggle="tab" @click="detailPart = 4"
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
                            <div v-if="transaction.status == 'pending'" class="statusblock-yellow text-center">{{transaction.status}}</div>
                            <div v-else-if="transaction.status == 'completed'" class="statusblock-green text-center">{{transaction.status}}</div>
                            <div v-else-if="transaction.status == 'contract'" class="statusblock-grey text-center">{{transaction.status}}</div>
                            <div v-else-if="transaction.status == 'active'" class="statusblock-blue text-center">{{transaction.status}}</div>
                            <div v-else-if="transaction.status == 'terminated'" class="statusblock-red text-center">{{transaction.status}}</div>
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
                        <p class="font-weight-bold"><span class="d-inline-block mr-2"><img src="/static/img/paper_icon.svg"
                              alt="paper icon"></span>SELLER's DOCUMENT</p>
                        <p class="empty-state"></p>
                        <div class="row mt-5">
                          <div v-for="(sdoc, index) in sellerDocs" :key="index" class="col-sm-6 col-xs-12">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                              <div class="media">
                                <img src="/static/img/doc-icon.svg" class="mr-3" alt="doc-icon">
                                <div class="media-body">
                                  <p class="mt-0 mb-1">{{sdoc.name}}</p>
                                  <small>Contract_bill_of_lading.doc</small>
                                </div>
                              </div>
                              <a :href="sdoc.url" target="_blank" class="btn btn__green-v">View</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="market__details mt-5">
                        <p class="font-weight-bold"><span class="d-inline-block mr-2"><img src="/static/img/paper_icon.svg"
                              alt="paper icon"></span>BUYER's DOCUMENT</p>
                        <p class="empty-state"></p>
                        <div class="row mt-5">
                          <div v-for="(bdoc, index) in buyerDocs" :key="index" class="col-sm-6 col-xs-12">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                              <div class="media">
                                <img src="/static/img/doc-icon.svg" class="mr-3" alt="doc-icon">
                                <div class="media-body">
                                  <p class="mt-0 mb-1">{{bdoc.name}}</p>
                                  <small>Contract_bill_of_lading.doc</small>
                                </div>
                              </div>
                              <a v-if="bdoc.url && bdoc.url !== 'false'" :href="bdoc.url" target="_blank" class="btn btn__green-v">View</a>
                            </div>
                          </div>
                        </div>
                      </div>
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
                          <div class="col-sm-6 col-xs-12">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                              <div class="media">
                                <img src="/static/img/doc-icon.svg" class="mr-3" alt="doc-icon">
                                <div class="media-body">
                                  <p class="mt-0 mb-1">Bill of lading</p>
                                  <small>Contract_bill_of_lading.doc</small>
                                </div>
                              </div>
                              <a href="#" class="btn btn__green-v">View</a>
                            </div>
                          </div>
                          <div class="col-sm-6 col-xs-12">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                              <div class="media">
                                <img src="/static/img/doc-icon.svg" class="mr-3" alt="doc-icon">
                                <div class="media-body">
                                  <p class="mt-0 mb-1">Bill of lading</p>
                                  <small>Contract_bill_of_lading.doc</small>
                                </div>
                              </div>
                              <a href="#" class="btn btn__green-v">View</a>
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
                <div class="clearfix">
                  <div class="float-left">
                    <a href="#" class="btn button__grey-a">Back</a>
                  </div>
                  <div class="float-right">
                    <button type="button" class="btn button__primary-m" data-toggle="modal"
                      data-target="#exampleModalCenter">Add Document</button>
                    <div class="modal fade cwrap__modal" id="exampleModalCenter" tabindex="-1" role="dialog"
                      aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered cwrap__modal-dialog" role="document">
                        <div class="modal-content cwrap__modal-content">
                          <div class="modal-header cwrap__modal-header ">
                            <h5 class="modal-title cwrap__modal-title text-center m-auto" id="exampleModalCenterTitle">NEGOTIATE</h5>
                          </div>
                          <div class="modal-body px-5">
                            <div class="form-group mb-5">
                              <label for="inputFilename">FILE NAME <sup>*</sup></label>
                              <input type="text" class="form-control cinput" id="inputFilename"
                                placeholder="Enter file name" required>
                            </div>
                            <div class="custom-file cwrap__file mb-4">
                              <input type="file" class="custom-file-input" id="customFile-2">
                              <label class="custom-file-label cwrap__file-label" for="customFile-2">Choose file</label>
                            </div>
                          </div>
                          <div class="modal-footer  cwrap__modal-footer">
                            <button type="submit" class="btn  button__primary mx-3">Upload</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mt-4 px-5 text-center d-none d-md-block">
                  <form>
                    <img class="mt-4 mb-3" src="/static/img/question-icon.svg" alt="chat icon">
                    <p class="mb-3 font-weight-bold" style="font-size: 13px;">Do you have any question
                      about this transaction?</p>
                    <div class="form-group">
                      <textarea type="text" class="form-control cinput mb-3" id="inputquestion" rows="4"></textarea>
                    </div>
                    <button type="submit" class="btn button__primary mb-4">Ask</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer
          class="col-sm-11 offset-sm-1 content content-m content-offset content-offset-m fixed-bottom cfooter navbar">
          <p>© 2019 Comflo. All rights reserved.</p>
          <ul class="nav">
            <li class="nav-item footer__li">
              <a href="#" class="nav-link footer__a"><i class="fab fa-medium-m"></i></a>
            </li>
            <li class="nav-item footer__li">
              <a href="#" class="nav-link footer__a"><i class="fab fa-facebook"></i></a>
            </li>
            <li class="nav-item footer__li">
              <a href="#" class="nav-link footer__a"><i class="fab fa-twitter-square"></i></a>
            </li>
          </ul>
        </footer>
      </main>
</template>
<script>
import api from '@/api/user'
import offerApi from '@/api/offer'
import Header from '@/components/Header'
import { deleteFile, upload } from '@/config'
import {mapGetters} from 'vuex'
export default {
  name: 'Index',
  components: {
    Header
  },
  dashboard: true,
  title () {
    return `Transaction Details | Comflo Inc`
  },
  data: function () {
    return {
      detailPart: 1,
      transaction: [],
      sellerDocs: [],
      buyerDocs: [],
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
      //   let link = 'https://localhost:8080/admin/transactions/' + this.$route.params.id
      let link = 'https://trade.comflo.com/admin/transactions/' + this.$route.params.id
      let details = {
        link,
        user: this.user._id,
        transaction: this.transaction
      }
      let response = await offerApi.negotiateOffer(this.transaction._id, details)
      console.log(response)
      loader.hide()
      if (response.data.status === 'success') {
        this.mainsuccess = 'A negotiation mail has been sent. A representative will contact you'
      } else {
        this.mainerror = 'Error sending a negotiation mail'
        return false
      }
      this.disable = false
    },
    /**
     * Get details about a transaction
     */
    async getTransaction () {
      const loader = this.$loading.show()
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
    },
    /**
     * Get Buyer/Receiver Doccuments
     */
    async getPartners () {
      let loader = this.$loading.show()
      let response = await offerApi.getOfferPartners(this.transaction._id)
      console.log(response)
      loader.hide()
      if (response.data.status === 'success') {
        this.partners = response.data.data.partner
      }
      this.disable = false
    },
    /**
     * Get Offer Doccuments
     */
    async getDocs () {
      let loader = this.$loading.show()
      let [sellerResponse, buyerResponse] = await Promise.all([api.getTransactionDocs(this.transaction.sellerDocuments), api.getTransactionDocs(this.transaction.buyerDocuments)])
      loader.hide()
      if (sellerResponse.data.status === 'success' && buyerResponse.data.status === 'success') {
        this.sellerDocs = sellerResponse.data.data
        this.buyerDocs = buyerResponse.data.data
      }
      this.disable = false
    },
    /**
     * Remove document, i.e if a user made a mistake
     */
    async removeDoc (index, url, _id, docs) {
      let loader = this.$loading.show()
      deleteFile(url)
      await api.userDeleteDoc(_id)
      docs.splice(index, 1)
      loader.hide()
    },
    /**
     * Add a file
     */
    setFilename (event, doc) {
      var file = event.target.files[0]
      doc.file = file
    },

    async uploadFile ($event, bdoc) {
      let loader = this.$loading.show()
      let file = bdoc.file
      // console.log(file)
      let url = ''
      if (file.name) {
        url = await upload(file, 'buyer-docs', this.transaction.commodity)
        bdoc.uploader = this.user.fname + ' ' + this.user.lname
      }
      bdoc.url = url
      delete bdoc.file

      const details = {
        doc: bdoc
      }
      let response = await api.userUpdateDocs(details)
      // console.log(response)
      // console.log(response.data.status)
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
