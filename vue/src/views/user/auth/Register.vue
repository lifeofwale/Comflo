<template>
<!-- <div class="signup">
    <div class="h-100">
      <Header></Header>
      <div class="row mt-lg-3">
        <div class="col-md-12 mt-lg-2">
          <div class="container signup-panel p-lg-3">
            <p class="demo-form-title text-gray text-center"><strong>Sign up for Comflo</strong></p>
            <form class="">
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
                <input type="text" class="form-control" v-model="company_email" placeholder="Company Email">
              </div>
              <div class="form-group">
                <input type="password" class="form-control" v-model="password" placeholder="Password">
              </div>
              <div class="form-group">
                <input type="password" class="form-control" v-model="password2" placeholder="Confirm Password">
              </div>
              <div class="form-group">
                <input type="checkbox" class="form-control" v-model="isTCChecked">
                <label class="checkbox-inline">
                  <input type="checkbox" v-model="isTCChecked"> I agree to the <a class='text-info' href="http://www.comflo.com/wp-content/uploads/2018/10/Comflo-Terms-of-Use-July-2018.pdf" target="_blank">Terms of Service</a> and <a class='text-info' href="http://www.comflo.com/wp-content/uploads/2018/10/Comflo-Privacy-Policy-0718.pdf" target="_blank">Privacy Policy</a>
                </label>
              </div>
              <button type="button" @click="createUser" :disabled="!emptyText || disable" class="btn btn-primary width-100 mb-lg-3">Submit</button>
              <div class="col-md-12 text-center">
                <router-link :to="{ name: 'User-Login'}" class='text-info'>
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
  </div> -->
  <section class="container-fluid px-0 hero h-100vh">
    <Header></Header>
    <div class="container mt-5 mb-15">
      <div v-if="signupPart == 0">
        <div class="row" id="create_1">
          <div class="col-md-8 col-sm-12 col-xs-12">
            <h1 class="cbig-text mb-4 mt-10">Create your account</h1>
            <p v-if="mainerror.length > 0" class="text-danger text-center">{{mainerror}}</p>
            <loading :active.sync="visible" :can-cancel="true"></loading>
            <div class="csignup cgreen-border">
              <form>
                <!-- 1st form row -->
                <div class="row">
                  <div class="col">
                    <div class="row">
                      <div class="col">
                          <div class="form-group mb-5">
                              <label for="inputFirstName">First Name <sup>*</sup></label>
                              <input type="text" v-model="fname" class="form-control cinput form__valid" id="inputFirstName" placeholder="Nachi" required>
                            </div>
                      </div>
                      <div class="col">
                          <div class="form-group mb-5">
                              <label for="inputLastName">Last Name <sup>*</sup></label>
                              <input type="text" v-model="lname" class="form-control cinput form__valid" id="inputLastName" placeholder="Adaji" required>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div class="col">
                      <div class="form-group mb-5">
                          <label for="inputEmail">Email <sup>*</sup></label>
                          <input type="email" v-model="email" class="form-control cinput form__valid" id="inputEmail" placeholder="nachi@comflo.com" required>
                        </div>
                  </div>
                </div>
                <!-- 2nd form row -->
                <div class="row">
                  <div class="col">
                      <div class="form-group mb-5">
                          <label for="inputPhone">Phone Number <sup>*</sup></label>
                          <input type="text" @keypress='isNumber($event)' v-model="phone" class="form-control cinput form__valid" id="inputPhone"  placeholder="234818374855" required>
                        </div>
                  </div>
                  <div class="col">
                      <div class="form-group mb-5">
                          <label for="inputPassword">Password <sup>*</sup></label>
                          <div class="input-group" id="show_hide_password">
                              <input :type="passwordFieldType" class="form-control cinput" placeholder="**********" id="inputPassword" v-model="password" required>
                              <a @click="switchVisibility"><i class="fa fa-eye-slash show-pass" style="color:#83c225;"
                                  aria-hidden="true"></i></a>
                            </div>
                        </div>
                  </div>
                </div>
                <button type="button" @click="signupPart = 1" :disabled="!personalText || disable"  class="btn btn-block button__primary mt-3">Next</button>
              </form>
            </div>
          </div>
          <div class="col-md-1 d-none d-md-block">

          </div>
          <div class="col-md-3 d-none d-md-block">
            <div class="cstepindicator cgreen-border text-center mt-16">
                <p class="cstepindicator__p">STEP 1 OF 2</p>
                <img src="/static/img/personal__info.svg" class="cstepindicator__icon" alt="personal info icon">
                <p class="cstepindicator__p mb-2">Personal Information</p>
                <div class="w-100">
                  <a @click="signupPart = 0" class="cstepindicator__level  d-inline-block green__bg">
                  </a>
                  <a @click="signupPart = 1" class="cstepindicator__level d-inline-block  grey__bg">
                    </a>
                </div>
            </div>
            </div>
        </div>
      </div>

      <div v-if="signupPart == 1">
        <div class="row" id="create_2">
            <div class="col-md-8 col-sm-12 col-xs-12">
            <h1 class="cbig-text mb-4 mt-8">Create your account</h1>
            <p v-if="mainerror.length > 0" class="text-danger text-center">{{mainerror}}</p>
            <loading :active.sync="visible" :can-cancel="true"></loading>
            <div class="csignup cgreen-border">
              <form>
                <!-- 1st form row -->
                  <div class="row">
                    <div class="col">
                        <div class="form-group mb-5">
                            <label for="inputCompanyName">Company Name <sup>*</sup></label>
                            <input type="text" v-model="company_name" class="form-control cinput form__valid" id="inputCompanyName"  placeholder="Comflo" required>
                          </div>
                    </div>
                    <div class="col">
                      <div class="form-group mb-5">
                          <label for="inputCountry">Country <sup>*</sup></label>
                          <!-- <select class="form-control cselect" id="inputCountry" >
                              <option>Select country</option>
                              </select> -->
                              <v-select class="cselect form__valid" v-model="company_country" :options='[
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
                  </div>
                  <!-- 2nd form row -->
                  <div class="row">
                    <div class="col">
                      <div class="form-group mb-5">
                        <label for="inputState">State <sup>*</sup></label>
                        <!-- <select v-model="company_state" class="form-control cselect" id="inputState" >
                          <option>Select country</option>
                        </select> -->
                        <input v-model="company_state" type="text" class="form-control cinput form__valid" id="inputState"  placeholder="Lagos" required>
                      </div>
                    </div>
                    <div class="col">
                      <div class="row">
                        <div class="col">
                          <div class="form-group mb-5">
                              <label for="inputCity">City <sup>*</sup></label>
                              <!-- <select v-model="com" class="form-control cselect" id="inputCity" >
                                <option>Select city</option>
                              </select> -->
                              <input v-model="company_city" type="text" class="form-control cinput form__valid" id="inputCity"  placeholder="Maryland" required>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group mb-5">
                                <label for="inputPost">Post/Zip Code <sup>*</sup></label>
                                <input v-model="company_zip_code" type="number" class="form-control cinput form__valid" id="inputPost" placeholder="100001" required>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
                    <!-- 3 row -->
                    <div class="row">
                          <div class="col">
                                  <div class="form-group mb-5">
                                      <label for="inputAddress">Street Address <sup>*</sup></label>
                                      <input v-model="company_address" type="text" class="form-control cinput form__valid" id="inputAddress"  placeholder="Block 96 Exile" required>
                                    </div>
                              </div>
                          <div class="col">
                              <div class="form-group mb-5">
                                  <label for="inputJob">Job Title<sup>*</sup></label>
                                  <input v-model="company_position" type="text" class="form-control cinput form__valid" id="inputJob"  placeholder="Sales Representative" required>
                                </div>
                          </div>

                        </div>
                        <div class="text-center">By signing up you agree with our <span><a href="#" class="clr_a">Terms of Service & Private Policy</a></span></div>
                  <button type="button" @click="createUser" :disabled="!companyText || disable" class="btn btn-block button__primary mt-3">Sign Up</button>
              </form>
            </div>
            </div>
            <div class="col-md-1 d-none d-md-block">

            </div>
            <div class="col-md-3 d-none d-md-block">
              <div class="cstepindicator cgreen-border text-center mt-16">
                  <p class="cstepindicator__p">STEP 2 OF 2</p>
                  <img src="/static/img/company__icon.svg" class="cstepindicator__icon" alt="personal info icon">
                  <p class="cstepindicator__p mb-2">Company Information</p>
                  <div class="w-100">
                    <a @click="signupPart = 0" class="cstepindicator__level  d-inline-block green__bg">
                    </a>
                    <a @click="signupPart = 1" class="cstepindicator__level d-inline-block  green__bg">
                      </a>
                  </div>
              </div>
              </div>
          </div>
      </div>
    </div>
    <Footer></Footer>
  </section>
</template>
<script>
import api from '@/api/user'
import Header from '@/components/auth/AuthHeader'
import Footer from '@/components/auth/AuthFooter'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'User-Register',
  components: {
    Header,
    Footer
  },
  title () {
    return `Register | Comflo Inc`
  },
  data: function () {
    return {
      email: '',
      fname: '',
      lname: '',
      phone: '',
      // country: 'Search Country',
      isTCChecked: '',
      // company_email: '',
      password: '',
      password2: '',
      company_name: '',
      company_state: '',
      company_city: '',
      company_country: 'Search Country',
      company_address: '',
      company_zip_code: '',
      company_position: '',
      disable: false,
      mainerror: '',
      visible: false,
      signupPart: 0
    }
  },
  computed: {
    ...mapGetters('user', ['error']),
    personalText () {
      return this.email.length > 0 && this.fname.length > 0 && this.lname.length > 0 && this.phone.length > 0 && this.password.length > 0
    },
    companyText () {
      return this.company_name.length > 0 && this.company_state.length > 0 && this.company_city.length > 0 && this.company_country.label.length > 0 && this.company_address.length > 0 && this.company_zip_code.length > 0 && this.company_position.length > 0
    }
  },
  methods: {
    ...mapActions('user', ['clearError', 'addUser']),
    ...mapActions('company', ['clearError', 'addCompany']),
    resetDetails () {
      this.email = ''
      this.fname = ''
      this.lname = ''
      this.phone = ''
      this.country = 'Search Country'
      this.company_name = ''
      this.company_state = ''
      this.company_city = ''
      this.company_country = ''
      this.company_address = ''
      this.company_zip_code = ''
      this.company_position = ''
      this.password = ''
      this.password2 = ''
      this.disable = false
    },
    async createUser () {
      // if (this.password !== this.password2) {
      //   this.mainerror = 'Passwords do not match'
      //   return false
      // }
      let loader = this.$loading.show()
      this.disable = true
      try {
        let user = {
          email: this.email,
          fname: this.fname,
          lname: this.lname,
          phone: this.phone,
          password: this.password,
          company_name: this.company_name,
          company_state: this.company_state,
          company_city: this.company_city,
          company_country: this.company_country.label,
          company_address: this.company_address,
          company_zip_code: this.company_zip_code,
          company_position: this.company_position
        }
        let response = await api.userregister(user)
        console.log(response)
        loader.hide()
        this.disable = false
        if (response.data.status === 'success') {
          const user = this.cleanObject(response.data.data.user)
          const company = this.cleanObject(response.data.data.company)
          user.type = response.data.data.type
          this.$toast.success('Registration Successful!', '', this.notificationSystem.options.success)
          this.addUser(user)
          this.addCompany(company)
          api.settoken(user.token)
          this.clearError()
          this.$router.push('/verify')
        } else {
          this.$toast.error(response.data.data, '', this.notificationSystem.options.error)
          return false
        }
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
