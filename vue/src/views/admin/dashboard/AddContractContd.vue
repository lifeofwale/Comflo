<template>
  <!-- <main class="col-sm-11 ml-sm-auto col-md-10 dashboard-content mt-lg-5" role="main">
            <form action="/admin/dashboard/projects/create" method="post" enctype="multipart/form-data">
                <div class="width-100">
                    <h4 class="pull-left">New Contract</h4>
                </div>
                <div class="width-100 dashboard-widget">
                    <div class="row">
                        <p v-if="mainerror.length > 0" class="text-danger text-center col-md-12">{{mainerror}}</p>
                        <loading :active.sync="visible" :can-cancel="true"></loading>
                        <div class="col-md-12 col-lg-12">
                              <div class="form-group form-widget">
                                <label>Upload Contract</label>
                                <table class="wrapper" width="100%">
                                    <tfoot>
                                      <tr>
                                          <td><span class="add"><button type="button" @click="addJdocRow" class="btn btn-action mt-10"><i class="fa fa-plus"></i> Add Contract Documents</button></span></td>
                                      </tr>
                                    </tfoot>
                                    <tbody id="milestones" class="container">
                                        <tr v-for="(jdoc, index) in jointDocs" :key="index" class="template row">
                                            <td class="col-md-4">
                                                <input type="text" v-model="jdoc.name" class="form-control mb-2" placeholder="Name"/>
                                            </td>
                                            <td class="col-md-4">
                                                <label class="fileContainer">
                                                    {{jdoc.file.name}}
                                                    <input type="file" @change="setJdocFilename($event, jdoc)" :id="index" accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf,image/*"/>
                                                </label>
                                            </td>
                                            <td class="col-md-4">
                                                <a v-on:click="removeJdocElement(index)" class="btn btn-action" style="cursor: pointer">Remove</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="form-widget">
                              <div class="form-group">
                                  <label>comment</label>
                                  <textarea v-model="comment" class="form-control"></textarea>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-12">
                    <p class="pull-right mt-10">
                        <button type="button" @click="addContract" :disabled="!emptyText || disable" class="btn btn-round venice-bg">
                            Submit
                        </button>
                    </p>
                    <p class="pull-left mt-10">
                        <a @click="$router.go(-1)" class="btn btn-round venice-bg">
                          Back
                        </a>
                    </p>
                </div>
            </form>
        </main> -->
        <main class="col-sm-11 offset-sm-1 content content-m content-offset content-offset-m px-0">
        <div class="container mrt-6 mb-10">
          <div class="d-flex align-content-center align-items-center justify-content-between request__query">
            <div class="d-flex align-content-center align-items-center">
              <span>
                <div class="content__icon--bg"> <i class="fas fa-window-restore"></i></div>
              </span>
              <span class="content__desc">
                <h3>Add Contract</h3>
                <p class="empty-state"></p>
                <p>Add a new Contract</p>
              </span>
            </div>
          </div>

          <div class="mt-4">
            <div class="card border-0 m-auto" style="max-width:90.4rem;">
              <div class="card-body p-5">
                <!-- <div class="row">
                  <div class="col">
                    <div class="form-group mb-5">
                      <label for="inputQuantity">File Name</label>
                      <input type="text" class="form-control cinput" id="inputQuantity" placeholder="Enter file name"
                        required>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group mb-5">
                      <label for="inputQuantity">Upload Document</label>
                      <input type="file" class="form-control cinput" id="inputQuantity"
                        placeholder="Enter asking  price" required>
                    </div>
                  </div>
                  <div class="col-2">
                    <button class="btn pt-5"> <img src="/static/img/trash-icon.svg" alt="trash-icon"></button>
                  </div>

                </div>
                <div class="d-flex">
                  <button style="font-size: 16px;" class="btn btn-link bg-transparent">+Add contract document</button>
                </div> -->
                <div v-for="(jdoc, index) in jointDocs" :key="index" class="row">
                  <div class="col">
                    <div class="form-group mb-5">
                      <label for="inputQuantity">FILE NAME <sup>*</sup></label>
                      <input type="text" v-model="jdoc.name" class="form-control cinput" id="inputQuantity" placeholder="Enter file name"
                        required>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group mb-5">
                      <label for="inputQuantity">Upload Document<sup>*</sup></label>
                      <input type="file" @change="setDocFilename($event, jdoc)" :id="index" accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf, image/*" class="form-control cinput"
                        placeholder="Enter asking  price" required>
                    </div>
                  </div>
                  <div class="col-2">
                    <button v-on:click="removeDocElement(index, jointDocs)" class="btn pt-5"> <img src="/static/img/trash-icon.svg" alt="trash-icon"></button>
                  </div>
                </div>
                <div class="d-flex">
                  <button type="button" @click="addDocRow(jointDocs)" style="font-size: 16px;" class="btn btn-link bg-transparent">+Add contract document</button>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="form-group mb-5">
                      <label for="inputmoreinfo">Comment</label>
                      <textarea type="text" class="form-control cinput" v-model="comment" id="inputmoreinfo" rows="5" required>
                                                          </textarea>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="d-flex justify-content-center mt-4">
              <button @click="$router.go(-1)" class="btn button__grey mx-2">Back</button>
              <button @click="uploadContract" :disabled="!emptyText || disable" class="btn  button__primary  mx-2">Submit</button>

            </div>
          </div>
        </div>
        <Footer>
        </Footer>
      </main>
</template>
<script>
import adminApi from '@/api/admin'
import Footer from '@/components/admin/AdminFooter'
import { upload } from '@/config'
import {mapGetters} from 'vuex'
export default {
  name: 'Admin-Add-Contract-Contd',
  props: ['transaction'],
  dashboard: true,
  title () {
    return `Admin Upload Contract | Comflo Inc`
  },
  components: {
    Footer
  },
  data: function () {
    return {
      visible: false,
      disable: false,
      mainerror: '',
      comment: '',
      jointDocs: []
    }
  },
  computed: {
    ...mapGetters('admin', ['admin']),
    emptyText () {
      return this.comment.length > 0 && this.jointDocs.length > 0
    }
  },
  methods: {
    async uploadContract () {
      let loader = this.$loading.show()
      try {
        const transaction = this.transaction
        transaction.comment = this.comment
        transaction.jointDocs = this.jointDocs
        transaction.link = 'https://trade.comflo.com/user/transactions/' + this.$route.params.id

        for (let i = 0; i < this.jointDocs.length; i++) {
          let file = this.jointDocs[i].file
          let url = ''
          if (file.name) {
            url = await upload(file, 'joint-docs', transaction.commodity)
            this.jointDocs[i].uploader = this.admin._id
          }
          this.jointDocs[i].url = url
          delete this.jointDocs[i].file
        }

        let response = await adminApi.postDeal(this.transaction)
        // console.log(response)
        // console.log(response.data.status)
        loader.hide()
        if (response.data.status === 'success') {
          this.$toast.success('Contract has been created', '', this.notificationSystem.options.success)
          this.$router.push('/admin/transactions')
        } else {
          this.$toast.error(response.data.data, '', this.notificationSystem.options.error)
          // this.$router.go(-1)
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
    }
  }
}
</script>
