<template>
  <main class="col-sm-11 ml-sm-auto col-md-10 dashboard-content mt-lg-5" role="main">
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
        </main>
</template>
<script>
// import api from '@/api/offer'
import adminApi from '@/api/admin'
import { upload } from '@/config'
import {mapGetters} from 'vuex'
export default {
  name: 'Admin-Add-Contract-Contd',
  props: ['deal'],
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
    async addContract () {
      let loader = this.$loading.show()
      const deal = this.deal
      deal.comment = this.comment
      deal.jointDocs = this.jointDocs
      deal.link = 'https://trade.comflo.com/user/contracts/' + this.$route.params.id

      for (let i = 0; i < this.jointDocs.length; i++) {
        let file = this.jointDocs[i].file
        let url = ''
        if (file.name) {
          url = await upload(file, 'joint-docs', deal.commodity)
          this.jointDocs[i].uploader = this.admin._id
        }
        this.jointDocs[i].url = url
        delete this.jointDocs[i].file
      }

      let response = await adminApi.postDeal(this.deal)
      // console.log(response)
      // console.log(response.data.status)
      loader.hide()
      if (response.data.status === 'success') {
        this.$router.push('/admin/contracts')
      } else {
        this.$router.go(-1)
      }
      this.disable = false
    },

    addJdocRow () {
      //   var elem = document.createElement('tr')
      this.jointDocs.push({
        name: '',
        file: {
          name: 'Choose File'
        }
      })
    },
    removeJdocElement (index) {
      this.jointDocs.splice(index, 1)
    },
    setJdocFilename (event, jdoc) {
      var file = event.target.files[0]
      jdoc.file = file
    }
  }
}
</script>
