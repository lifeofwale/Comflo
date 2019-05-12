<template>
  <!-- <main class="col-sm-11 ml-sm-auto col-md-10 dashboard-content mt-lg-5" role="main">
    <form class="">
        <div class="width-100">
            <h1 class="pull-left">Add User</h1>
        </div>
        <div class="width-100 dashboard-widget form-widget">
                <p v-if="mainerror.length > 0" class="text-danger text-center">{{mainerror}}</p>
                <loading :active.sync="visible" :can-cancel="true"></loading>
                <div class="form-group">
                    <input type="text" class="form-control" v-model="fname" placeholder="First Name">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" v-model="lname" placeholder="Last Name">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" v-model="phone" placeholder="Phone">
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" v-model="email" placeholder="Email Address">
                </div>
                <div class="form-group">
                    <v-select v-model="country" :options='[
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
                <div class="form-group">
                <input type="text" class="form-control" v-model="company" placeholder="Company">
              </div>
                <div class="form-group">
                    <input type="password" class="form-control" v-model="password" placeholder="Password">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" v-model="password2" placeholder="Confirm Password">
                </div>
            </div>
        </form>
        <div class="col-md-12 col-lg-12">
            <p class="pull-right mt-10">
                <button type="button" @click="postUser" :disabled="!emptyText || disable" class="btn btn-round venice-bg">
                    Submit
                </button>
            </p>
            <p class="pull-left mt-10">
                <router-link :to="{ name: 'Admin-Home'}">
                    <a class="btn btn-round venice-bg">
                    Back to users
                    </a>
                </router-link>
            </p>
        </div>
    </main> -->
    <main class="col-sm-11 offset-sm-1 content content-m content-offset content-offset-m px-0">
        <div class="container mrt-6 mb-10">
          <div class="d-flex align-content-center align-items-center justify-content-between request__query">
            <div class="d-flex align-content-center align-items-center">
              <span>
                <div class="content__icon--bg"><img src="/static/img/current-user.svg" width="30px" alt="current-user"></div>
              </span>
              <span class="content__desc">
                <h3>Add Admin</h3>
                <p class="empty-state"></p>
                <p>Add a new admin user</p>
              </span>
            </div>
          </div>

          <div class="mt-4">
            <div class="card border-0 m-auto" style="max-width:90.4rem;">
              <div class="card-body p-5">
                <div class="row">
                  <div class="col">
                    <div class="form-group mb-5">
                      <label for="inputPost">First Name</label>
                      <input type="text" class="form-control cinput form__valid" v-model="fname" placeholder="" required>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group mb-5">
                      <label for="inputPost">Last Name</label>
                      <input type="text" class="form-control cinput form__valid" v-model="lname" placeholder="" required>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="form-group mb-5">
                      <label for="inputPost">Phone Number</label>
                      <input type="text" @keypress='isNumber($event)' class="form-control cinput form__valid" v-model="phone" placeholder=""
                        required>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group mb-5">
                      <label for="inputPost">Email Address</label>
                      <input type="text" class="form-control cinput form__valid" v-model="email" placeholder="" required>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="form-group mb-5">
                      <label for="inputPost">Password</label>
                      <input type="password" class="form-control cinput form__valid" v-model="password" placeholder=""
                        required>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group mb-5">
                      <label for="inputPost">Confirm Password</label>
                      <input type="password" class="form-control cinput form__valid" v-model="password2" placeholder=""
                        required>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center mt-4">
              <button @click="$router.push('/admin')" class="btn button__grey mx-2">Reject</button>
              <!-- <router-link class="btn button__grey mx-2" :to="{ name: 'Admin-Users'}">
                Reject
              </router-link> -->
              <button @click="postAdmin" class="btn  button__primary  mx-2">Approve</button>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </main>
</template>
<script>
import api from '@/api/admin'
import Footer from '@/components/admin/AdminFooter'
export default {
  name: 'AddUser',
  dashboard: true,
  title () {
    return `New Admin | Comflo Inc`
  },
  components: {
    Footer
  },
  data: function () {
    return {
      email: '',
      fname: '',
      lname: '',
      phone: '',
      password: '',
      password2: '',
      disable: false,
      mainerror: '',
      visible: false
    }
  },
  computed: {
    emptyText () {
      return this.email.length > 0 && this.fname.length > 0 && this.lname.length > 0 && this.phone.length > 0 && this.password.length > 0 && this.password2.length > 0
    }
  },
  methods: {
    resetDetails () {
      this.email = ''
      this.fname = ''
      this.lname = ''
      this.phone = ''
      this.password = ''
      this.password2 = ''
      this.disable = false
    },
    async postAdmin () {
      if (this.password !== this.password2) {
        this.mainerror = 'Passwords do not match'
        return false
      }

      let loader = this.$loading.show()
      this.disable = true
      try {
        let user = {
          email: this.email,
          fname: this.fname,
          lname: this.lname,
          phone: this.phone,
          password: this.password
        }
        let response = await api.createAdmin(user)
        console.log(response)
        console.log(response.data.status)
        loader.hide()
        if (response.data.status === 'success') {
          this.$toast.success('Admin has been created', '', this.notificationSystem.options.success)
          this.$router.push('/admin')
        } else {
          this.$toast.error(response.data.data, '', this.notificationSystem.options.error)
          this.resetDetails()
          return false
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
