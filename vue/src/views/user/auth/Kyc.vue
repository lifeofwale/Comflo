<template>
  <section class="container-fluid px-0 hero h-100vh">

    <div class="container mt-5">
      <div class="text-center">
        <img src="/static/img/comflo__logo.png" class="mb-4" alt="comflo__logo">
      </div>
      <div class="row">
        <div class="col-sm-8">
          <div class="text-left">
            <h2 class="cmedium-text mb-4">Know Your Client</h2>
            <p class="mb-5">Thank you for registering to trade on Comflo. Just a few more steps before you can view
              our exciting offers in the Marketplace and start trading.Kindly follow the link sent to your
              email address to complete your registration.
            </p>
          </div>
          <div class="cwrap mb-5">
            <input id="cwrap__collapse" class="cwrap__toggle" type="checkbox">
            <label for="cwrap__collapse" class="cwrap__collapse-label">
              <div class="media cwrap__media">
                <img src="/static/img/company__reg.svg" width="50px" class="mr-3 cwrap__img" alt="companyreg">
                <div class="media-body cwrap__body">
                  <h5 class="mt-0">STEP 1 OF 2</h5>
                  <p class="pt-2">Upload Company registration/Business license</p>
                </div>
              </div>
            </label>
            <div class="cwrap__content">
              <div class="custom-file cwrap__file">
                <input @change="setFile($event, companyLicense)" accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf, image/*" type="file" class="custom-file-input" id="customFile">
                <label class="custom-file-label cwrap__file-label" for="customFile">{{companyLicense.file.name}}</label>
              </div>
            </div>
          </div>
          <div class="cwrap mb-5">
            <input id="cwrap__collapse-2" class="cwrap__toggle" type="checkbox">
            <label for="cwrap__collapse-2" class="cwrap__collapse-label">
              <div class="media cwrap__media">
                <img src="/static/img/user__reg.svg" width="50px" class="mr-3 cwrap__img" alt="companyreg">
                <div class="media-body cwrap__body">
                  <h5 class="mt-0">STEP 2 OF 2</h5>
                  <p class="pt-2">Upload a valid personal Identification</p>
                </div>
              </div>
            </label>
            <div class="cwrap__content">
              <div class="custom-file cwrap__file">
                <input @change="setDocFilename($event, personalID)" accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf, image/*" type="file" class="custom-file-input" id="customFile-2">
                <label class="custom-file-label cwrap__file-label" for="customFile-2">{{personalID.file.name}}</label>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center mt-5">
            <button @click="showModal = true" class="btn button__grey mx-2" data-toggle="modal" data-target="#exampleModalCenter">Skip</button>
            <!-- Button trigger modal -->

            <!-- Modal -->
            <transition name="fade">
              <div v-if="showModal === true" class="modal cwrap__modal show" id="exampleModalCenter" tabindex="-1" role="dialog" style="display: block;"
                aria-labelledby="exampleModalCenterTitle" aria-modal="true">
                <div class="modal-dialog modal-dialog-centered cwrap__modal-dialog" role="document">
                  <div class="modal-content cwrap__modal-content">
                    <div class="modal-header cwrap__modal-header ">
                      <h5 class="modal-title cwrap__modal-title text-center m-auto" id="exampleModalCenterTitle">SKIP KYC
                      </h5>

                    </div>
                    <div class="modal-body cwrap__modal-body text-center">
                      <img src="/static/img/caution__icon.svg" class="mb-3" alt="caution__icon">
                      <p>
                        We advise you complete
                        your KYC(know your client).
                        Are you sure you want
                        to skip this step?
                      </p>
                    </div>
                    <div class="modal-footer  cwrap__modal-footer">
                      <button @click="showModal = false" type="button" class="btn  btn-no mx-3" data-dismiss="modal">No</button>
                      <button @click="$router.push('/user')" type="button" class="btn  btn-yes mx-3">Yes</button>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
            <button :disabled="!emptyText || disable" @click="uploadKYC" class="btn  button__primary  mx-2">Submit</button>

          </div>
        </div>
        <side-card></side-card>
      </div>
      <p class="text-center  p-copyright">© 2019 Comflo. All rights reserved.</p>
    </div>
    <div v-if="showModal === true" class="modal-backdrop fade show"></div>
  </section>
</template>
<script>
import companyApi from '@/api/company'
import { upload } from '@/config'
import { mapGetters, mapActions } from 'vuex'
import SideCard from '@/components/SideCard'
export default {
  name: 'User-Kyc',
  components: {
    SideCard
  },
  dashboard: true,
  title () {
    return `KYC | Comflo Inc`
  },
  data: function () {
    return {
      companyLicense: { name: '', file: { name: 'Choose File' } },
      personalID: { name: '', file: { name: 'Choose File' } },
      showModal: false,
      disable: false,
      mainerror: '',
      visible: false
    }
  },
  computed: {
    ...mapGetters('user', ['user']),
    ...mapGetters('company', ['company']),
    emptyText () {
      return this.companyLicense.file.name !== 'Choose File' && this.personalID.file.name !== 'Choose File'
    }
  },
  mounted () {
    this.mainerror = this.error
  },
  methods: {
    ...mapActions('company', ['clearError', 'addCompany']),
    async uploadKYC () {
      const loader = this.$loading.show()
      this.disable = true
      const companyLicense = this.companyLicense.file
      const personalID = this.personalID.file
      if (companyLicense.name && personalID.name) {
        const [companyLicenseUrl, personalIDUrl] = await Promise.all([upload(companyLicense, 'Company-License', this.user._id), await upload(personalID, 'Personal-ID', this.user._id)])
        console.log(companyLicenseUrl, personalIDUrl)
        const kycDetails = {
          id: this.company._id,
          user_id: this.user._id,
          company_id_url: personalIDUrl,
          company_id_name: personalID.name,
          registeration_url: companyLicenseUrl,
          registeration_name: companyLicense.name
        }
        const response = await companyApi.companyKyc(this.company._id, kycDetails)
        const company = this.cleanObject(response.data.data)
        this.addCompany(company)
        // console.log(response)
        // console.log(response.data.status)
        if (response.data.status === 'success') {
          this.$router.push('/user')
        } else {
          this.mainerror = response.data.message
        }
        this.disable = false
      }
      loader.hide()
      this.disable = false
      this.mainerror = 'Please select your Company ID and Personal ID for verification'
    }
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
