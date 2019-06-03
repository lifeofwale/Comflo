<template>
  <main class="col-sm-11 offset-sm-1 content content-m content-offset content-offset-m px-0">
      <div class="container support mrt-6 mb-10">
        <div class="d-flex align-content-center align-items-center">
          <span>
            <div class="content__icon--bg"><i class="far fa-user-circle"></i></div>
          </span>
          <span class="content__desc">
            <h3>Profile</h3>
            <p class="empty-state"></p>
            <p>You can make a few changes to your account </p>
          </span>
        </div>

        <div class="row profile mb-10">
          <div class="col-sm-3 mt-5">
            <div class="profile__img text-center">
              <template v-if="user.image"><img :src="user.image" alt="user image"></template>
              <template v-else><img src="/static/img/profile--img.png" alt="user image"></template>
            </div>
            <div class="card mt-4 text-center px-4 d-none d-md-block" style="height: 29.85rem;">
              <form>
                <img class="mt-4 mb-3" src="/static/img/chat__icon.svg" alt="chat icon">
                <p class="mb-3 font-weight-bold" style="font-size: 13px;">We are here to help if you
                  have any problem</p>
                <div class="form-group">
                  <textarea type="text" class="form-control cinput mb-3" id="inputquestion" rows="2">
                                </textarea>
                </div>
                <button type="submit" class="btn button__primary mb-4" style="width:5rem;">Send help</button>
              </form>
            </div>
          </div>
          <div class="col-sm-9 mb-10">
            <form>
              <div class="card market__card mt-5">
                <div class="card-body px-5">
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <a :class="{ active: isActive === 0 }" @click="isActive = 0" class="nav-item nav-link px-5 cursor-active" id="nav-home-tab" data-toggle="tab"
                        role="tab" aria-controls="nav-home" aria-selected="true">PERSONAL INFORMATION</a>
                      <a v-if="user.type.toLowerCase() === 'admin'" :class="{ active: isActive === 1 }" @click="isActive = 1"  class="nav-item nav-link px-5 cursor-active" id="nav-profile-tab" data-toggle="tab"
                        role="tab" aria-controls="nav-profile" aria-selected="false">COMPANY INFORMATON</a>
                      <a :class="{ active: isActive === 2 }" @click="isActive = 2"  class="nav-item nav-link px-5" id="nav-profile-tab cursor-active" data-toggle="tab"
                        role="tab" aria-controls="nav-profile" aria-selected="false">CHANGE PASSWORD</a>

                    </div>
                  </nav>
                  <div class="tab-content" id="nav-tabContent">
                    <div :class="{ show: isActive === 0, active: isActive === 0 }" class="tab-pane fade" id="nav-home" role="tabpanel"
                      aria-labelledby="nav-home-tab">

                      <div class="row mt-5">

                        <div class="col">
                          <div class="form-group mb-5">
                            <label for="inputfirst">First Name
                            </label>
                            <input type="text" class="form-control cinput" id="inputfirst" v-model="fname">
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-group mb-5">
                            <label for="inputlast">Last Name
                            </label>
                            <input type="text" class="form-control cinput" id="inputlast" v-model="lname" value="Adaji">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="form-group mb-5">
                            <label for="inputEmail">Email Address</label>
                            <input type="email" class="form-control cinput" v-model="email" id="inputEmail"
                              value="Nachiadaji@comflo.com" readonly>
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-group mb-5">
                            <label for="inputPosition">Position in company</label>
                            <input type="text" class="form-control cinput" v-model="position" id="inputPosition">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <label for="file-upload">Change profile image</label>
                            <div class="content__formfile w-100 p-rel">
                              <span class="content__uploadfile  w-100">select file</span>
                              <input @change="setDocFilename($event, image)" accept="image/*" type="file" class="form-control cinput w-100" id="file-upload"
                                style="opacity:0;z-index:1;">
                              <div v-if="image.file.name != 'Choose File'" id="file-upload-filename">{{image.file.name}}</div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-group mb-5">
                            <label for="inputPhone">Phone Number</label>
                            <input type="tel" class="form-control cinput" id="inputPhone" v-model="phone" value="+2349073663333"
                              required>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div :class="{ show: isActive === 1, active: isActive === 1 }" class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                      <div class="row mt-5">
                        <div class="col">
                          <div class="form-group mb-5">
                            <label for="inputCname">Company name
                            </label>
                            <input type="text" class="form-control cinput" id="inputCname" v-model="company_name" value="Abu farm holdings">
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-group mb-5">
                            <label for="inputClast">Company type
                            </label>
                            <input type="text" class="form-control cinput" id="inputClast" v-model="company_type" value="Farming">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="form-group mb-5">
                            <label for="inputCountry">Country</label>
                            <v-select class="  cselect" v-model="company_country" :options='[
                                {"value":"Search Country", "label":"Search Country"},
                                {"value":"AF", "label":"Afghanistan"},
                                {"value":"AX", "label":"Åland Islands"},
                                {"value":"AL", "label":"Albania"},
                                {"value":"DZ", "label":"Algeria"},
                                {"value":"AS", "label":"American Samoa"},
                                {"value":"AD", "label":"Andorra"},
                                {"value":"AO", "label":"Angola"},
                                {"value":"AI", "label":"Anguilla"},
                                {"value":"AQ", "label":"Antarctica"},
                                {"value":"AG", "label":"Antigua and Barbuda"},
                                {"value":"AR", "label":"Argentina"},
                                {"value":"AM", "label":"Armenia"},
                                {"value":"AW", "label":"Aruba"},
                                {"value":"AU", "label":"Australia"},
                                {"value":"AT", "label":"Austria"},
                                {"value":"AZ", "label":"Azerbaijan"},
                                {"value":"BS", "label":"Bahamas"},
                                {"value":"BH", "label":"Bahrain"},
                                {"value":"BD", "label":"Bangladesh"},
                                {"value":"BB", "label":"Barbados"},
                                {"value":"BY", "label":"Belarus"},
                                {"value":"BE", "label":"Belgium"},
                                {"value":"BZ", "label":"Belize"},
                                {"value":"BJ", "label":"Benin"},
                                {"value":"BM", "label":"Bermuda"},
                                {"value":"BT", "label":"Bhutan"},
                                {"value":"BO", "label":"Bolivia"},
                                {"value":"BA", "label":"Bosnia and Herzegovina"},
                                {"value":"BW", "label":"Botswana"},
                                {"value":"BV", "label":"Bouvet Island"},
                                {"value":"BR", "label":"Brazil"},
                                {"value":"IO", "label":"British Indian Ocean Territory"},
                                {"value":"BN", "label":"Brunei Darussalam"},
                                {"value":"BG", "label":"Bulgaria"},
                                {"value":"BF", "label":"Burkina Faso"},
                                {"value":"BI", "label":"Burundi"},
                                {"value":"KH", "label":"Cambodia"},
                                {"value":"CM", "label":"Cameroon"},
                                {"value":"CA", "label":"Canada"},
                                {"value":"CV", "label":"Cape Verde"},
                                {"value":"KY", "label":"Cayman Islands"},
                                {"value":"CF", "label":"Central African Republic"},
                                {"value":"TD", "label":"Chad"},
                                {"value":"CL", "label":"Chile"},
                                {"value":"CN", "label":"China"},
                                {"value":"CX", "label":"Christmas Island"},
                                {"value":"CC", "label":"Cocos (Keeling) Islands"},
                                {"value":"CO", "label":"Colombia"},
                                {"value":"KM", "label":"Comoros"},
                                {"value":"CG", "label":"Congo"},
                                {"value":"CD", "label":"Congo, The Democratic Republic of the"},
                                {"value":"CK", "label":"Cook Islands"},
                                {"value":"CR", "label":"Costa Rica"},
                                {"value":"CI", "label":"Cote DIvoire"},
                                {"value":"HR", "label":"Croatia"},
                                {"value":"CU", "label":"Cuba"},
                                {"value":"CY", "label":"Cyprus"},
                                {"value":"CZ", "label":"Czech Republic"},
                                {"value":"DK", "label":"Denmark"},
                                {"value":"DJ", "label":"Djibouti"},
                                {"value":"DM", "label":"Dominica"},
                                {"value":"DO", "label":"Dominican Republic"},
                                {"value":"EC", "label":"Ecuador"},
                                {"value":"EG", "label":"Egypt"},
                                {"value":"SV", "label":"El Salvador"},
                                {"value":"GQ", "label":"Equatorial Guinea"},
                                {"value":"ER", "label":"Eritrea"},
                                {"value":"EE", "label":"Estonia"},
                                {"value":"ET", "label":"Ethiopia"},
                                {"value":"FK", "label":"Falkland Islands (Malvinas)"},
                                {"value":"FO", "label":"Faroe Islands"},
                                {"value":"FJ", "label":"Fiji"},
                                {"value":"FI", "label":"Finland"},
                                {"value":"FR", "label":"France"},
                                {"value":"GF", "label":"French Guiana"},
                                {"value":"PF", "label":"French Polynesia"},
                                {"value":"TF", "label":"French Southern Territories"},
                                {"value":"GA", "label":"Gabon"},
                                {"value":"GM", "label":"Gambia"},
                                {"value":"GE", "label":"Georgia"},
                                {"value":"DE", "label":"Germany"},
                                {"value":"GH", "label":"Ghana"},
                                {"value":"GI", "label":"Gibraltar"},
                                {"value":"GR", "label":"Greece"},
                                {"value":"GL", "label":"Greenland"},
                                {"value":"GD", "label":"Grenada"},
                                {"value":"GP", "label":"Guadeloupe"},
                                {"value":"GU", "label":"Guam"},
                                {"value":"GT", "label":"Guatemala"},
                                {"value":"GG", "label":"Guernsey"},
                                {"value":"GN", "label":"Guinea"},
                                {"value":"GW", "label":"Guinea-Bissau"},
                                {"value":"GY", "label":"Guyana"},
                                {"value":"HT", "label":"Haiti"},
                                {"value":"HM", "label":"Heard Island and Mcdonald Islands"},
                                {"value":"VA", "label":"Holy See (Vatican City State)"},
                                {"value":"HN", "label":"Honduras"},
                                {"value":"HK", "label":"Hong Kong"},
                                {"value":"HU", "label":"Hungary"},
                                {"value":"IS", "label":"Iceland"},
                                {"value":"IN", "label":"India"},
                                {"value":"ID", "label":"Indonesia"},
                                {"value":"IR", "label":"Iran, Islamic Republic Of"},
                                {"value":"IQ", "label":"Iraq"},
                                {"value":"IE", "label":"Ireland"},
                                {"value":"IM", "label":"Isle of Man"},
                                {"value":"IL", "label":"Israel"},
                                {"value":"IT", "label":"Italy"},
                                {"value":"JM", "label":"Jamaica"},
                                {"value":"JP", "label":"Japan"},
                                {"value":"JE", "label":"Jersey"},
                                {"value":"JO", "label":"Jordan"},
                                {"value":"KZ", "label":"Kazakhstan"},
                                {"value":"KE", "label":"Kenya"},
                                {"value":"KI", "label":"Kiribati"},
                                {"value":"KP", "label":"Korea, Democratic Peoples Republic of"},
                                {"value":"KR", "label":"Korea, Republic of"},
                                {"value":"KW", "label":"Kuwait"},
                                {"value":"KG", "label":"Kyrgyzstan"},
                                {"value":"LA", "label":"Lao Peoples Democratic Republic"},
                                {"value":"LV", "label":"Latvia"},
                                {"value":"LB", "label":"Lebanon"},
                                {"value":"LS", "label":"Lesotho"},
                                {"value":"LR", "label":"Liberia"},
                                {"value":"LY", "label":"Libyan Arab Jamahiriya"},
                                {"value":"LI", "label":"Liechtenstein"},
                                {"value":"LT", "label":"Lithuania"},
                                {"value":"LU", "label":"Luxembourg"},
                                {"value":"MO", "label":"Macao"},
                                {"value":"MK", "label":"Macedonia, The Former Yugoslav Republic of"},
                                {"value":"MG", "label":"Madagascar"},
                                {"value":"MW", "label":"Malawi"},
                                {"value":"MY", "label":"Malaysia"},
                                {"value":"MV", "label":"Maldives"},
                                {"value":"ML", "label":"Mali"},
                                {"value":"MT", "label":"Malta"},
                                {"value":"MH", "label":"Marshall Islands"},
                                {"value":"MQ", "label":"Martinique"},
                                {"value":"MR", "label":"Mauritania"},
                                {"value":"MU", "label":"Mauritius"},
                                {"value":"YT", "label":"Mayotte"},
                                {"value":"MX", "label":"Mexico"},
                                {"value":"FM", "label":"Micronesia, Federated States of"},
                                {"value":"MD", "label":"Moldova, Republic of"},
                                {"value":"MC", "label":"Monaco"},
                                {"value":"MN", "label":"Mongolia"},
                                {"value":"MS", "label":"Montserrat"},
                                {"value":"MA", "label":"Morocco"},
                                {"value":"MZ", "label":"Mozambique"},
                                {"value":"MM", "label":"Myanmar"},
                                {"value":"NA", "label":"Namibia"},
                                {"value":"NR", "label":"Nauru"},
                                {"value":"NP", "label":"Nepal"},
                                {"value":"NL", "label":"Netherlands"},
                                {"value":"AN", "label":"Netherlands Antilles"},
                                {"value":"NC", "label":"New Caledonia"},
                                {"value":"NZ", "label":"New Zealand"},
                                {"value":"NI", "label":"Nicaragua"},
                                {"value":"NE", "label":"Niger"},
                                {"value":"NG", "label":"Nigeria"},
                                {"value":"NU", "label":"Niue"},
                                {"value":"NF", "label":"Norfolk Island"},
                                {"value":"MP", "label":"Northern Mariana Islands"},
                                {"value":"NO", "label":"Norway"},
                                {"value":"OM", "label":"Oman"},
                                {"value":"PK", "label":"Pakistan"},
                                {"value":"PW", "label":"Palau"},
                                {"value":"PS", "label":"Palestinian Territory, Occupied"},
                                {"value":"PA", "label":"Panama"},
                                {"value":"PG", "label":"Papua New Guinea"},
                                {"value":"PY", "label":"Paraguay"},
                                {"value":"PE", "label":"Peru"},
                                {"value":"PH", "label":"Philippines"},
                                {"value":"PN", "label":"Pitcairn"},
                                {"value":"PL", "label":"Poland"},
                                {"value":"PT", "label":"Portugal"},
                                {"value":"PR", "label":"Puerto Rico"},
                                {"value":"QA", "label":"Qatar"},
                                {"value":"RE", "label":"Reunion"},
                                {"value":"RO", "label":"Romania"},
                                {"value":"RU", "label":"Russian Federation"},
                                {"value":"RW", "label":"Rwanda"},
                                {"value":"SH", "label":"Saint Helena"},
                                {"value":"KN", "label":"Saint Kitts and Nevis"},
                                {"value":"LC", "label":"Saint Lucia"},
                                {"value":"PM", "label":"Saint Pierre and Miquelon"},
                                {"value":"VC", "label":"Saint Vincent and the Grenadines"},
                                {"value":"WS", "label":"Samoa"},
                                {"value":"SM", "label":"San Marino"},
                                {"value":"ST", "label":"Sao Tome and Principe"},
                                {"value":"SA", "label":"Saudi Arabia"},
                                {"value":"SN", "label":"Senegal"},
                                {"value":"CS", "label":"Serbia and Montenegro"},
                                {"value":"SC", "label":"Seychelles"},
                                {"value":"SL", "label":"Sierra Leone"},
                                {"value":"SG", "label":"Singapore"},
                                {"value":"SK", "label":"Slovakia"},
                                {"value":"SI", "label":"Slovenia"},
                                {"value":"SB", "label":"Solomon Islands"},
                                {"value":"SO", "label":"Somalia"},
                                {"value":"ZA", "label":"South Africa"},
                                {"value":"GS", "label":"South Georgia and the South Sandwich Islands"},
                                {"value":"ES", "label":"Spain"},
                                {"value":"LK", "label":"Sri Lanka"},
                                {"value":"SD", "label":"Sudan"},
                                {"value":"SR", "label":"Surilabel"},
                                {"value":"SJ", "label":"Svalbard and Jan Mayen"},
                                {"value":"SZ", "label":"Swaziland"},
                                {"value":"SE", "label":"Sweden"},
                                {"value":"CH", "label":"Switzerland"},
                                {"value":"SY", "label":"Syrian Arab Republic"},
                                {"value":"TW", "label":"Taiwan"},
                                {"value":"TJ", "label":"Tajikistan"},
                                {"value":"TZ", "label":"Tanzania, United Republic of"},
                                {"value":"TH", "label":"Thailand"},
                                {"value":"TL", "label":"Timor-Leste"},
                                {"value":"TG", "label":"Togo"},
                                {"value":"TK", "label":"Tokelau"},
                                {"value":"TO", "label":"Tonga"},
                                {"value":"TT", "label":"Trinidad and Tobago"},
                                {"value":"TN", "label":"Tunisia"},
                                {"value":"TR", "label":"Turkey"},
                                {"value":"TM", "label":"Turkmenistan"},
                                {"value":"TC", "label":"Turks and Caicos Islands"},
                                {"value":"TV", "label":"Tuvalu"},
                                {"value":"UG", "label":"Uganda"},
                                {"value":"UA", "label":"Ukraine"},
                                {"value":"AE", "label":"United Arab Emirates"},
                                {"value":"GB", "label":"United Kingdom"},
                                {"value":"US", "label":"United States"},
                                {"value":"UM", "label":"United States Minor Outlying Islands"},
                                {"value":"UY", "label":"Uruguay"},
                                {"value":"UZ", "label":"Uzbekistan"},
                                {"value":"VU", "label":"Vanuatu"},
                                {"value":"VE", "label":"Venezuela"},
                                {"value":"VN", "label":"Vietnam"},
                                {"value":"VG", "label":"Virgin Islands, British"},
                                {"value":"VI", "label":"Virgin Islands, U.S."},
                                {"value":"WF", "label":"Wallis and Futuna"},
                                {"value":"EH", "label":"Western Sahara"},
                                {"value":"YE", "label":"Yemen"},
                                {"value":"ZM", "label":"Zambia"},
                                {"value":"ZW", "label":"Zimbabwe"}
                                ]'>
                                </v-select>
                          </div>
                        </div>
                        <div class="col">
                          <div class="row">
                            <div class="col">
                              <div class="form-group mb-5">
                                <label for="inputState">State</label>
                                <input type="text" class="form-control cinput" v-model="company_state" id="inputState" value="Toronto">
                              </div>
                            </div>

                            <div class="col">
                              <div class="form-group mb-5">
                                <label for="inputCity">City</label>
                                <input type="text" class="form-control cinput" v-model="company_city" id="inputCity" value="NY">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="form-group mb-5">
                            <label for="inputStreet">Street address</label>
                            <input type="text" class="form-control cinput" id="inputStreet" v-model="company_street"
                              value="Block 650 Madson way">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div :class="{ show: isActive === 2, active: isActive === 2 }" class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-password-tab">
                      <div class="row mt-5">
                        <div class="col">
                          <div class="form-group mb-5">

                            <label for="inputPassword">Password</label>
                            <div class="input-group" id="show_hide_password">
                              <input :type="passwordFieldType" class="form-control cinput" placeholder="**********" v-model="password"
                                >
                              <a @click="switchVisibility"><i class="fa fa-eye-slash show-pass" style="color:#83c225;"
                                  aria-hidden="true"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-center">
                    <button v-if="isActive === 0" @click="updateUser" type="button" class="btn  button__primary mt-3 mb-2">Save Profile</button>
                    <button v-if="isActive === 1" @click="updateCompany" type="button" class="btn  button__primary mt-3 mb-2">Save Company</button>
                    <button v-if="isActive === 2" @click="updatePass" type="button" class="btn  button__primary mt-3 mb-2">Change Password</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </main>
</template>
<script>
import api from '@/api/user'
import companyApi from '@/api/company'
import Footer from '@/components/user/UserFooter'
import { mapGetters, mapActions } from 'vuex'
import { upload } from '@/config'
export default {
  name: 'User-Profile',
  dashboard: true,
  title () {
    return `Profile | Comflo Inc`
  },
  computed: {
    ...mapGetters('user', ['user']),
    ...mapGetters('company', ['company'])
  },
  components: {
    Footer
  },
  mounted () {
    // User
    this.fname = this.user.fname
    this.lname = this.user.lname
    this.email = this.user.email
    // this.image = this.user.image ? this.user.image : { name: '', file: { name: 'Choose File' } }
    this.phone = this.user.phone
    this.position = this.user.position
    // Company
    this.company_name = this.company.name
    this.company_type = this.company.type
    this.company_state = this.company.state
    this.company_country = this.company.country
    this.company_city = this.company.city
    this.company_street = this.company.street
  },
  data () {
    return {
      isActive: 0,
      // User Profile
      fname: '',
      lname: '',
      email: '',
      image: { name: '', file: { name: 'Choose File' } },
      phone: '',
      position: '',
      // Company Profile
      company_name: '',
      company_type: '',
      company_state: '',
      company_country: 'Search Country',
      company_city: '',
      company_street: '',
      // Password
      password: ''
    }
  },
  methods: {
    ...mapActions('user', ['clearError', 'addUser']),
    ...mapActions('company', ['clearError', 'addCompany']),
    async updateUser () {
      const loader = this.$loading.show()
      this.disable = true
      try {
        const details = {
          fname: this.fname,
          lname: this.lname,
          email: this.email,
          phone: this.phone,
          position: this.position
        }
        if (this.image.file.name !== 'Choose File') {
          const image = this.image.file
          const imageUrl = await upload(image, 'Profile', this.user._id)
          details.image = imageUrl
          console.log(imageUrl)
        }
        const response = await api.userupdate(details)
        console.log(response.data)
        if (response.data.status === 'success') {
          const user = this.cleanObject(response.data.data)
          this.addUser(user)
          this.$toast.success('User profile update successful', '', this.notificationSystem.options.success)
        } else {
          this.$toast.error(response.data.data, '', this.notificationSystem.options.error)
          // this.mainerror = response.data.message
        }
        loader.hide()
        this.disable = false
      } catch (error) {
        loader.hide()
        this.disable = false
        this.$toast.error('Error updating user', '', this.notificationSystem.options.error)
      }
    },
    async updateCompany () {
      const loader = this.$loading.show()
      this.disable = true
      try {
        const details = {
          name: this.company_name,
          type: this.company_type,
          state: this.company_state,
          country: this.company_country,
          city: this.company_city,
          street: this.company_street
        }
        const response = await companyApi.companyupdate(this.company._id, details)
        console.log(response.data)
        if (response.data.status === 'success') {
          const company = this.cleanObject(response.data.data)
          this.addCompany(company)
          this.$toast.success('Company update successful', '', this.notificationSystem.options.success)
        } else {
          this.$toast.error(response.data.data, '', this.notificationSystem.options.error)
        }
        loader.hide()
        this.disable = false
      } catch (error) {
        loader.hide()
        this.disable = false
        this.$toast.error('Error updating company', '', this.notificationSystem.options.error)
      }
    },
    async updatePass () {
      const loader = this.$loading.show()
      this.disable = true
      try {
        const details = {
          password: this.password
        }
        const response = await api.userchangepass(details)
        console.log(response.data)
        if (response.data.status === 'success') {
          this.$toast.success('Password change successful', '', this.notificationSystem.options.success)
          this.password = ''
        } else {
          this.$toast.error(response.data.data, '', this.notificationSystem.options.error)
        }
        loader.hide()
        this.disable = false
      } catch (error) {
        loader.hide()
        this.disable = false
        this.$toast.error('Error changing password', '', this.notificationSystem.options.error)
      }
    }
  }
}
</script>
