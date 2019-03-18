<template>
  <div class="signup">
    <div class="h-100">
      <Header></Header>
      <div class="row mt-lg-5">
        <div class="col-md-12 mt-lg-5">
          <div class="container signup-panel p-lg-3">
            <p class="demo-form-title text-gray text-center"><strong>Sign up for Comflo Company</strong></p>
            <form class="">
              <p v-if="mainerror.length > 0" class="text-danger text-center">{{mainerror}}</p>
              <loading :active.sync="visible" :can-cancel="true"></loading>
              <div class="form-group">
                <input type="text" class="form-control" v-model="name" placeholder="Company Name">
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
                <input type="password" class="form-control" v-model="password" placeholder="Password">
              </div>
              <div class="form-group">
                <input type="password" class="form-control" v-model="password2" placeholder="Confirm Password">
              </div>
              <button type="button" @click="postCompany" :disabled="!emptyText || disable" class="btn btn-primary width-100 mb-lg-3">Submit</button>
              <div class="col-md-12 text-center">
                <router-link to="/company/login" class=' text-info'>
                  <a class="login-font">
                    I already have an account
                  </a>
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api/company'
import Header from '@/components/Header'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'Index',
  components: {
    Header
  },
  data: function () {
    return {
      email: '',
      name: '',
      phone: '',
      country: 'Search Country',
      password: '',
      password2: '',
      disable: false,
      mainerror: '',
      visible: false
    }
  },
  computed: {
    ...mapGetters('company', ['error']),
    emptyText () {
      return this.email.length > 0 && this.name.length > 0 && this.phone.length > 0 && this.password.length > 0 && this.password2.length > 0 && this.country.label.length > 0
    }
  },
  methods: {
    ...mapActions('company', ['clearError', 'addCompany']),
    resetDetails () {
      this.email = ''
      this.name = ''
      this.phone = ''
      this.country = 'Search Country'
      this.password = ''
      this.password2 = ''
      this.disable = false
    },
    async postCompany () {
      if (this.password !== this.password2) {
        this.mainerror = 'Passwords do not match'
        return false
      }
      let loader = this.$loading.show()
      this.disable = true
      let company = {
        email: this.email,
        name: this.name,
        phone: this.phone,
        country: this.country.label,
        password: this.password
      }
      let response = await api.companyregister(company)
      // console.log(response)
      // console.log(response.data.status)
      loader.hide()
      if (response.data.status === 'success') {
        company = response.data.data
        delete company['password']
        // console.log(company)
        this.addCompany(company)
        this.clearError()
        this.$router.push('/company')
        this.disable = false
      } else {
        this.mainerror = response.data.data
        this.resetDetails()
        return false
      }
    }
  }
}
</script>
