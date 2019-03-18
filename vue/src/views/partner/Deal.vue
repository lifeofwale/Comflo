<template>
    <main class="col-sm-11 ml-sm-auto col-md-11 col-lg-10 dashboard-content" role="main">
        <div class="form-widget mt-lg-5 p-5">
            <div class="form-group">
                <div class="pull-left">
                    <h3 class="mb-4">{{deal[1]}}</h3>
                    <!-- <h3 class="mb-4">Deals</h3> -->
                </div>
                <div class="pull-right">
                    <h3>${{deal[3]}}</h3>
                </div>
            </div>
            <!-- <div class="form-group">
                <div class="pull-left">
                    <h3>Deals</h3>
                </div>
                <div class="pull-right">
                    <a class="btn btn-round venice-bg" href="/user/sell-deal">
                        Add Transaction
                    </a>
                </div>
            </div> -->
        </div>
        <div class="form-widget mt-lg-5">
            <div class="row">
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <h5 class="text-muted">Name</h5>
                    </div>
                    <div class="col-md-8 pull-right">
                        <h5>{{deal[1]}}</h5>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <h5 class="text-muted">Seller</h5>
                    </div>
                    <div class="col-md-8 pull-right">
                        <h5>{{seller}}</h5>
                    </div>
                </div>
                <div v-if="!includes(deal[5])" class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <h5 class="text-muted">Buyer</h5>
                    </div>
                    <div class="col-md-8 pull-right">
                        <h5>{{buyer}}</h5>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <h5 class="text-muted">Description</h5>
                    </div>
                    <div class="col-md-8 pull-right">
                        <h5>{{deal[2]}}</h5>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <h5 class="text-muted">Price</h5>
                    </div>
                    <div class="col-md-8 pull-right">
                        <h5>${{deal[3]}}</h5>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <h5 class="text-muted">Status</h5>
                    </div>
                    <div class="col-md-8 pull-right">
                        <h5>{{deal[9]}}</h5>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <h5 class="text-muted">Category</h5>
                    </div>
                    <div class="col-md-8 pull-right">
                        <h5>{{deal[10]}}</h5>
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
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <h5 class="text-muted">Seller Documents</h5>
                    </div>
                    <div class="col-md-8 pull-right">
                        <h5 v-for="(sdoc, index) in sellerDocs" :key="index">
                            <span class="col-md-4">{{sdoc.name}}</span>
                            <span class="col-md-4"><a @click="removeSDoc(index, sdoc.url, sdoc._id)">Remove</a></span>
                            <span class="col-md-4"><a :href="sdoc.url" target="_blank">View</a></span>
                        </h5>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <div class="col-md-4 pull-left">
                        <h5 class="text-muted">Buyer Documents</h5>
                    </div>
                    <div class="col-md-8 pull-right">
                        <h5 v-for="(bdoc, index) in buyerDocs" :key="index">
                            <span class="col-md-4">{{bdoc.name}}</span>
                            <span class="col-md-4"><a @click="removeBDoc(index, bdoc.url, bdoc._id)">Remove</a></span>
                            <span class="col-md-4"><a :href="bdoc.url" target="_blank">View</a></span>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12 col-lg-12">
            <template v-if="user.address == deal.seller">
                <p class="pull-right mt-10">
                    <a v-link="'/user/deals/'+deal[0]+'/edit'" class="btn btn-round venice-bg">
                    Edit
                    </a>
                </p>
            </template>
            <template v-else>
                <p class="pull-right mt-10">
                    <a class="btn btn-round venice-bg" @click="buyDeal(deal[0])" v-if="includes(deal[5]) && compare(deal[4], user.address)" >
                        Buy
                    </a>
                </p>
            </template>
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
import Header from '@/components/Header'
import { deleteFile, addCompare } from '@/config'
import {mapGetters} from 'vuex'
export default {
  name: 'Index',
  components: {
    Header
  },
  data: function () {
    return {
      deal: [],
      images: [],
      sellerDocs: [],
      buyerDocs: [],
      seller: '',
      buyer: '',
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
    async getDeal () {
      let loader = this.$loading.show()
      let response = await api.getDeal(this.$route.params.id)
      // console.log(response)
      // console.log(response.data.status)
      loader.hide()
      if (response.data.status === 'success') {
        this.deal = response.data.data
        this.getDealImage()
        this.getSellerName(this.deal[4])
        this.getBuyerName(this.deal[5])
      }
      this.disable = false
    },
    async getDealImage () {
      let loader = this.$loading.show()
      this.getSellerDocs()
      this.getBuyerDocs()
      let response = await api.getDealImage(this.deal[8])
      // console.log(response)
      // console.log(response.data.status)
      loader.hide()
      if (response.data.status === 'success') {
        this.images = response.data.data
      }
      this.disable = false
    },
    async getSellerDocs () {
      let loader = this.$loading.show()
      let response = await api.getDealDocs(this.deal[6])
      // console.log(response)
      // console.log(response.data.status)
      loader.hide()
      if (response.data.status === 'success') {
        this.sellerDocs = response.data.data
      }
      this.disable = false
    },
    async getBuyerDocs () {
      let loader = this.$loading.show()
      let response = await api.getDealDocs(this.deal[7])
      // console.log(response)
      // console.log(response.data.status)
      loader.hide()
      if (response.data.status === 'success') {
        this.buyerDocs = response.data.data
      }
      this.disable = false
    },
    async removeImage (index, url, _id) {
      let loader = this.$loading.show()
      deleteFile(url)
      await api.userDeleteImage(_id)
      this.images.splice(index, 1)
      loader.hide()
    },
    async removeSDoc (index, url, _id) {
      let loader = this.$loading.show()
      deleteFile(url)
      await api.userDeleteDoc(_id)
      this.sellerDocs.splice(index, 1)
      loader.hide()
    },
    async removeBDoc (index, url, _id) {
      let loader = this.$loading.show()
      deleteFile(url)
      await api.userDeleteDoc(_id)
      this.buyerDocs.splice(index, 1)
      loader.hide()
    },
    includes (address) {
      return String(address).toLowerCase().includes('0x00')
    },
    compare (seller, address) {
      return !addCompare(seller, address)
    },
    async buyDeal (_id) {
      let loader = this.$loading.show()
      let details = {
        deal_id: parseInt(_id),
        user_address: this.user.address
      }
      // console.log(details)
      let response = await api.userBuyDeal(details)
      // console.log(response)
      // console.log(response.data.status)
      loader.hide()
      if (response.data.status === 'success') {
        // console.log(response.data.data)
        this.getDeal()
      } else {
        this.mainerror = 'An error occured'
        return false
      }
      this.disable = false
    },
    async getSellerName (address) {
      let loader = this.$loading.show()
      let details = {
        address
      }
      // console.log(details)
      let response = await api.getName(details)
      // console.log(response)
      loader.hide()
      if (response.data.status === 'success') {
        this.seller = response.data.data
      } else {
        this.mainerror = 'An error occured'
        return false
      }
      this.disable = false
    },
    async getBuyerName (address) {
      let loader = this.$loading.show()
      let details = {
        address
      }
      // console.log(details)
      let response = await api.getName(details)
      // console.log(response)
      loader.hide()
      if (response.data.status === 'success') {
        this.buyer = response.data.data
      } else {
        this.mainerror = 'An error occured'
        return false
      }
      this.disable = false
    }
  }
}
</script>
