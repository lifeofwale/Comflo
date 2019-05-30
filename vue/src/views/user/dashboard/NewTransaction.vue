<template>
  <!-- <main class="col-sm-11 ml-sm-auto col-md-10 dashboard-content mt-lg-5" role="main">
            <form action="/admin/dashboard/projects/create" method="post" enctype="multipart/form-data">
                <div class="width-100">
                    <h4 class="pull-left">New Transaction</h4>
                </div>

                <div class="width-100 dashboard-widget">
                    <div class="row">
                        <p v-if="mainerror.length > 0" class="text-danger text-center col-md-12">{{mainerror}}</p>
                        <loading :active.sync="visible" :can-cancel="true"></loading>
                        <div class="col-md-12 col-lg-12">
                            <div class="form-widget">
                                <div class="form-group">
                                    <label>Type</label>
                                    <v-select v-model="type" :options='[
                                    {"value":"Buy", "label":"Buy"},
                                    {"value":"Sell", "label":"Sell"}
                                    ]'>
                                    </v-select>
                                </div>
                                <div class="form-group">
                                    <label>Commodity</label>
                                    <input type="text" v-model="commodity" class="form-control" placeholder="Commodity">
                                </div>
                                <div class="form-group">
                                    <label>Quantity</label>
                                    <input type="text" v-model="quantity" v-on:keypress='isNumber($event)' class="form-control" placeholder="Quantity in Tonnes">
                                </div>
                                <div class="form-group">
                                    <label>INCOTERM</label>
                                    <v-select v-model="incoterm" :options='[
                                    {"value":"EXW - ExWorks", "label":"EXW - ExWorks"},
                                    {"value":"FCA - Free Carrier", "label":"FCA - Free Carrier"},
                                    {"value":"FAS - Free Alongside Ship", "label":"FAS - Free Alongside Ship"},
                                    {"value":"FOB - Free On Board", "label":"FOB - Free On Board"},
                                    {"value":"CFR - Cost and Freight", "label":"CFR - Cost and Freight"},
                                    {"value":"CIF - Cost, Insurance, Freight", "label":"CIF - Cost, Insurance, Freight"},
                                    {"value":"CIP - Carriage and Insurance Paid", "label":"CIP - Carriage and Insurance Paid"},
                                    {"value":"CPT - Carriage Paid To", "label":"CPT - Carriage Paid To"},
                                    {"value":"DAF - Delivered At Frontier", "label":"DAF - Delivered At Frontier"},
                                    {"value":"DEQ - Delivered Ex Quay", "label":"DEQ - Delivered Ex Quay"},
                                    {"value":"DES - Delivered Ex Ship", "label":"DES - Delivered Ex Ship"},
                                    {"value":"DDP - Delivered Duty Paid", "label":"DDP - Delivered Duty Paid"},
                                    {"value":"DDU - Delivered Duty Unpaid", "label":"DDU - Delivered Duty Unpaid"},
                                    {"value":"DAT - Delivered At Terminal", "label":"DAT - Delivered At Terminal"},
                                    {"value":"DAT - Delivered At Place", "label":"DAT - Delivered At Place"},
                                    {"value":"Not Applicable", "label":"Not Applicable"}
                                    ]'>
                                    </v-select>
                                </div>
                                <div class="form-group">
                                    <label>Payment</label>
                                    <input type="text" v-model="payment" class="form-control" placeholder="Payment Type">
                                </div>
                            </div>
                            <div class="form-widget">
                                <div class="form-group">
                                    <label>Currency</label>
                                    <v-select v-model="currency" :options='[
                                    {"cc":"AED","symbol":"\u062f.\u0625;","label":"UAE dirham"},
                                    {"cc":"AFN","symbol":"Afs","label":"Afghan afghani"},
                                    {"cc":"ALL","symbol":"L","label":"Albanian lek"},
                                    {"cc":"AMD","symbol":"AMD","label":"Armenian dram"},
                                    {"cc":"ANG","symbol":"NA\u0192","label":"Netherlands Antillean gulden"},
                                    {"cc":"AOA","symbol":"Kz","label":"Angolan kwanza"},
                                    {"cc":"ARS","symbol":"$","label":"Argentine peso"},
                                    {"cc":"AUD","symbol":"$","label":"Australian dollar"},
                                    {"cc":"AWG","symbol":"\u0192","label":"Aruban florin"},
                                    {"cc":"AZN","symbol":"AZN","label":"Azerbaijani manat"},
                                    {"cc":"BAM","symbol":"KM","label":"Bosnia and Herzegovina konvertibilna marka"},
                                    {"cc":"BBD","symbol":"Bds$","label":"Barbadian dollar"},
                                    {"cc":"BDT","symbol":"\u09f3","label":"Bangladeshi taka"},
                                    {"cc":"BGN","symbol":"BGN","label":"Bulgarian lev"},
                                    {"cc":"BHD","symbol":".\u062f.\u0628","label":"Bahraini dinar"},
                                    {"cc":"BIF","symbol":"FBu","label":"Burundi franc"},
                                    {"cc":"BMD","symbol":"BD$","label":"Bermudian dollar"},
                                    {"cc":"BND","symbol":"B$","label":"Brunei dollar"},
                                    {"cc":"BOB","symbol":"Bs.","label":"Bolivian boliviano"},
                                    {"cc":"BRL","symbol":"R$","label":"Brazilian real"},
                                    {"cc":"BSD","symbol":"B$","label":"Bahamian dollar"},
                                    {"cc":"BTN","symbol":"Nu.","label":"Bhutanese ngultrum"},
                                    {"cc":"BWP","symbol":"P","label":"Botswana pula"},
                                    {"cc":"BYR","symbol":"Br","label":"Belarusian ruble"},
                                    {"cc":"BZD","symbol":"BZ$","label":"Belize dollar"},
                                    {"cc":"CAD","symbol":"$","label":"Canadian dollar"},
                                    {"cc":"CDF","symbol":"F","label":"Congolese franc"},
                                    {"cc":"CHF","symbol":"Fr.","label":"Swiss franc"},
                                    {"cc":"CLP","symbol":"$","label":"Chilean peso"},
                                    {"cc":"CNY","symbol":"\u00a5","label":"Chinese/Yuan renminbi"},
                                    {"cc":"COP","symbol":"Col$","label":"Colombian peso"},
                                    {"cc":"CRC","symbol":"\u20a1","label":"Costa Rican colon"},
                                    {"cc":"CUC","symbol":"$","label":"Cuban peso"},
                                    {"cc":"CVE","symbol":"Esc","label":"Cape Verdean escudo"},
                                    {"cc":"CZK","symbol":"K\u010d","label":"Czech koruna"},
                                    {"cc":"DJF","symbol":"Fdj","label":"Djiboutian franc"},
                                    {"cc":"DKK","symbol":"Kr","label":"Danish krone"},
                                    {"cc":"DOP","symbol":"RD$","label":"Dominican peso"},
                                    {"cc":"DZD","symbol":"\u062f.\u062c","label":"Algerian dinar"},
                                    {"cc":"EEK","symbol":"KR","label":"Estonian kroon"},
                                    {"cc":"EGP","symbol":"\u00a3","label":"Egyptian pound"},
                                    {"cc":"ERN","symbol":"Nfa","label":"Eritrean nakfa"},
                                    {"cc":"ETB","symbol":"Br","label":"Ethiopian birr"},
                                    {"cc":"EUR","symbol":"\u20ac","label":"European Euro"},
                                    {"cc":"FJD","symbol":"FJ$","label":"Fijian dollar"},
                                    {"cc":"FKP","symbol":"\u00a3","label":"Falkland Islands pound"},
                                    {"cc":"GBP","symbol":"\u00a3","label":"British pound"},
                                    {"cc":"GEL","symbol":"GEL","label":"Georgian lari"},
                                    {"cc":"GHS","symbol":"GH\u20b5","label":"Ghanaian cedi"},
                                    {"cc":"GIP","symbol":"\u00a3","label":"Gibraltar pound"},
                                    {"cc":"GMD","symbol":"D","label":"Gambian dalasi"},
                                    {"cc":"GNF","symbol":"FG","label":"Guinean franc"},
                                    {"cc":"GQE","symbol":"CFA","label":"Central African CFA franc"},
                                    {"cc":"GTQ","symbol":"Q","label":"Guatemalan quetzal"},
                                    {"cc":"GYD","symbol":"GY$","label":"Guyanese dollar"},
                                    {"cc":"HKD","symbol":"HK$","label":"Hong Kong dollar"},
                                    {"cc":"HNL","symbol":"L","label":"Honduran lempira"},
                                    {"cc":"HRK","symbol":"kn","label":"Croatian kuna"},
                                    {"cc":"HTG","symbol":"G","label":"Haitian gourde"},
                                    {"cc":"HUF","symbol":"Ft","label":"Hungarian forint"},
                                    {"cc":"IDR","symbol":"Rp","label":"Indonesian rupiah"},
                                    {"cc":"ILS","symbol":"\u20aa","label":"Israeli new sheqel"},
                                    {"cc":"INR","symbol":"\u20B9","label":"Indian rupee"},
                                    {"cc":"IQD","symbol":"\u062f.\u0639","label":"Iraqi dinar"},
                                    {"cc":"IRR","symbol":"IRR","label":"Iranian rial"},
                                    {"cc":"ISK","symbol":"kr","label":"Icelandic kr\u00f3na"},
                                    {"cc":"JMD","symbol":"J$","label":"Jamaican dollar"},
                                    {"cc":"JOD","symbol":"JOD","label":"Jordanian dinar"},
                                    {"cc":"JPY","symbol":"\u00a5","label":"Japanese yen"},
                                    {"cc":"KES","symbol":"KSh","label":"Kenyan shilling"},
                                    {"cc":"KGS","symbol":"\u0441\u043e\u043c","label":"Kyrgyzstani som"},
                                    {"cc":"KHR","symbol":"\u17db","label":"Cambodian riel"},
                                    {"cc":"KMF","symbol":"KMF","label":"Comorian franc"},
                                    {"cc":"KPW","symbol":"W","label":"North Korean won"},
                                    {"cc":"KRW","symbol":"W","label":"South Korean won"},
                                    {"cc":"KWD","symbol":"KWD","label":"Kuwaiti dinar"},
                                    {"cc":"KYD","symbol":"KY$","label":"Cayman Islands dollar"},
                                    {"cc":"KZT","symbol":"T","label":"Kazakhstani tenge"},
                                    {"cc":"LAK","symbol":"KN","label":"Lao kip"},
                                    {"cc":"LBP","symbol":"\u00a3","label":"Lebanese lira"},
                                    {"cc":"LKR","symbol":"Rs","label":"Sri Lankan rupee"},
                                    {"cc":"LRD","symbol":"L$","label":"Liberian dollar"},
                                    {"cc":"LSL","symbol":"M","label":"Lesotho loti"},
                                    {"cc":"LTL","symbol":"Lt","label":"Lithuanian litas"},
                                    {"cc":"LVL","symbol":"Ls","label":"Latvian lats"},
                                    {"cc":"LYD","symbol":"LD","label":"Libyan dinar"},
                                    {"cc":"MAD","symbol":"MAD","label":"Moroccan dirham"},
                                    {"cc":"MDL","symbol":"MDL","label":"Moldovan leu"},
                                    {"cc":"MGA","symbol":"FMG","label":"Malagasy ariary"},
                                    {"cc":"MKD","symbol":"MKD","label":"Macedonian denar"},
                                    {"cc":"MMK","symbol":"K","label":"Myanma kyat"},
                                    {"cc":"MNT","symbol":"\u20ae","label":"Mongolian tugrik"},
                                    {"cc":"MOP","symbol":"P","label":"Macanese pataca"},
                                    {"cc":"MRO","symbol":"UM","label":"Mauritanian ouguiya"},
                                    {"cc":"MUR","symbol":"Rs","label":"Mauritian rupee"},
                                    {"cc":"MVR","symbol":"Rf","label":"Maldivian rufiyaa"},
                                    {"cc":"MWK","symbol":"MK","label":"Malawian kwacha"},
                                    {"cc":"MXN","symbol":"$","label":"Mexican peso"},
                                    {"cc":"MYR","symbol":"RM","label":"Malaysian ringgit"},
                                    {"cc":"MZM","symbol":"MTn","label":"Mozambican metical"},
                                    {"cc":"NAD","symbol":"N$","label":"Namibian dollar"},
                                    {"cc":"NGN","symbol":"\u20a6","label":"Nigerian naira"},
                                    {"cc":"NIO","symbol":"C$","label":"Nicaraguan c\u00f3rdoba"},
                                    {"cc":"NOK","symbol":"kr","label":"Norwegian krone"},
                                    {"cc":"NPR","symbol":"NRs","label":"Nepalese rupee"},
                                    {"cc":"NZD","symbol":"NZ$","label":"New Zealand dollar"},
                                    {"cc":"OMR","symbol":"OMR","label":"Omani rial"},
                                    {"cc":"PAB","symbol":"B./","label":"Panamanian balboa"},
                                    {"cc":"PEN","symbol":"S/.","label":"Peruvian nuevo sol"},
                                    {"cc":"PGK","symbol":"K","label":"Papua New Guinean kina"},
                                    {"cc":"PHP","symbol":"\u20b1","label":"Philippine peso"},
                                    {"cc":"PKR","symbol":"Rs.","label":"Pakistani rupee"},
                                    {"cc":"PLN","symbol":"z\u0142","label":"Polish zloty"},
                                    {"cc":"PYG","symbol":"\u20b2","label":"Paraguayan guarani"},
                                    {"cc":"QAR","symbol":"QR","label":"Qatari riyal"},
                                    {"cc":"RON","symbol":"L","label":"Romanian leu"},
                                    {"cc":"RSD","symbol":"din.","label":"Serbian dinar"},
                                    {"cc":"RUB","symbol":"R","label":"Russian ruble"},
                                    {"cc":"SAR","symbol":"SR","label":"Saudi riyal"},
                                    {"cc":"SBD","symbol":"SI$","label":"Solomon Islands dollar"},
                                    {"cc":"SCR","symbol":"SR","label":"Seychellois rupee"},
                                    {"cc":"SDG","symbol":"SDG","label":"Sudanese pound"},
                                    {"cc":"SEK","symbol":"kr","label":"Swedish krona"},
                                    {"cc":"SGD","symbol":"S$","label":"Singapore dollar"},
                                    {"cc":"SHP","symbol":"\u00a3","label":"Saint Helena pound"},
                                    {"cc":"SLL","symbol":"Le","label":"Sierra Leonean leone"},
                                    {"cc":"SOS","symbol":"Sh.","label":"Somali shilling"},
                                    {"cc":"SRD","symbol":"$","label":"Surinamese dollar"},
                                    {"cc":"SYP","symbol":"LS","label":"Syrian pound"},
                                    {"cc":"SZL","symbol":"E","label":"Swazi lilangeni"},
                                    {"cc":"THB","symbol":"\u0e3f","label":"Thai baht"},
                                    {"cc":"TJS","symbol":"TJS","label":"Tajikistani somoni"},
                                    {"cc":"TMT","symbol":"m","label":"Turkmen manat"},
                                    {"cc":"TND","symbol":"DT","label":"Tunisian dinar"},
                                    {"cc":"TRY","symbol":"TRY","label":"Turkish new lira"},
                                    {"cc":"TTD","symbol":"TT$","label":"Trinidad and Tobago dollar"},
                                    {"cc":"TWD","symbol":"NT$","label":"New Taiwan dollar"},
                                    {"cc":"TZS","symbol":"TZS","label":"Tanzanian shilling"},
                                    {"cc":"UAH","symbol":"UAH","label":"Ukrainian hryvnia"},
                                    {"cc":"UGX","symbol":"USh","label":"Ugandan shilling"},
                                    {"cc":"USD","symbol":"US$","label":"United States dollar"},
                                    {"cc":"UYU","symbol":"$U","label":"Uruguayan peso"},
                                    {"cc":"UZS","symbol":"UZS","label":"Uzbekistani som"},
                                    {"cc":"VEB","symbol":"Bs","label":"Venezuelan bolivar"},
                                    {"cc":"VND","symbol":"\u20ab","label":"Vietnamese dong"},
                                    {"cc":"VUV","symbol":"VT","label":"Vanuatu vatu"},
                                    {"cc":"WST","symbol":"WS$","label":"Samoan tala"},
                                    {"cc":"XAF","symbol":"CFA","label":"Central African CFA franc"},
                                    {"cc":"XCD","symbol":"EC$","label":"East Caribbean dollar"},
                                    {"cc":"XDR","symbol":"SDR","label":"Special Drawing Rights"},
                                    {"cc":"XOF","symbol":"CFA","label":"West African CFA franc"},
                                    {"cc":"XPF","symbol":"F","label":"CFP franc"},
                                    {"cc":"YER","symbol":"YER","label":"Yemeni rial"},
                                    {"cc":"ZAR","symbol":"R","label":"South African rand"},
                                    {"cc":"ZMK","symbol":"ZK","label":"Zambian kwacha"},
                                    {"cc":"ZWR","symbol":"Z$","label":"Zimbabwean dollar"}
                                    ]'>
                                    </v-select>
                                </div>
                                <div class="form-group">
                                    <label>Price</label>
                                    <input type="text" v-model="price" v-on:keypress='isNumber($event)' class="form-control" placeholder="Price">
                                </div>
                                <div class="form-group">
                                    <label>Location</label>
                                    <input type="text" v-model="location" class="form-control" placeholder="Location">
                                </div>
                            </div>
                            <div class="form-group form-widget">
                                <label>Upload relevant document</label>
                                <table class="wrapper" width="100%">
                                    <tfoot>
                                    <tr>
                                        <td><span class="add"><button type="button" @click="addDocRow" class="btn btn-action mt-10"><i class="fa fa-plus"></i> Add Documents</button></span></td>
                                    </tr>
                                    </tfoot>
                                    <tbody id="milestones" class="container">
                                        <tr v-for="(sdoc, index) in sellerDocs" :key="index" class="template row">
                                            <td class="col-md-4">
                                                <input type="text" v-model="sdoc.name" class="form-control mb-2" placeholder="Name"/>
                                            </td>
                                            <td class="col-md-4">
                                                <label class="fileContainer">
                                                    {{sdoc.file.name}}
                                                    <input type="file" @change="setDocFilename($event, sdoc)" :id="index" accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf, image/*"/>
                                                </label>
                                            </td>
                                            <td class="col-md-4">
                                                <a v-on:click="removeDocElement(index, sellerDocs)" class="btn btn-action" style="cursor: pointer">Remove</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="form-group form-widget">
                                <label>Request for documents</label>
                                <table class="wrapper" width="100%">
                                    <tfoot>
                                    <tr>
                                        <td><span class="add"><button type="button" @click="addBdocRow" class="btn btn-action mt-10"><i class="fa fa-plus"></i> Request Documents</button></span></td>
                                    </tr>
                                    </tfoot>
                                    <tbody id="milestones" class="container">
                                        <tr v-for="(bdoc, index) in buyerDocs" :key="index" class="template row">
                                            <td class="col-md-4">
                                                <input type="text" v-model="bdoc.name" class="form-control mb-2" placeholder="Name"/>
                                            </td>
                                            <td class="col-md-4">
                                                <a v-on:click="removeDocElement(index, buyerDocs)" class="btn btn-action" style="cursor: pointer">Remove</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-12">
                    <p class="pull-right mt-10">
                        <button type="button" @click="saveTransaction" :disabled="!emptyText || disable" class="btn btn-round venice-bg">
                            Submit
                        </button>
                    </p>
                    <p class="pull-left mt-10">
                        <router-link :to="{ name: 'User-Deals'}">
                            <a class="btn btn-round venice-bg">
                            Back
                            </a>
                        </router-link>
                    </p>
                </div>
            </form>
            <input name="image" type="file" id="upload" accept="image/*" hidden onchange="">
        </main> -->
  <main class="col-sm-11 offset-sm-1 content content-m content-offset content-offset-m px-0">
    <div class="container mrt-6">
      <div class="d-flex align-content-center align-items-center">
        <span>
          <div class="content__icon--bg"><i class="fas fa-shopping-basket"></i></div>
        </span>
        <span class="content__desc">
          <h3>Make a Request</h3>
          <p class="empty-state"></p>
          <p>Create/Make a new request</p>
        </span>
      </div>
      <div class="container request mt-5">
        <form action="" class="request__regform" id="regForm">
          <div class="d-flex justify-content-between">
            <div class="request__step text-center">
              <p class="mb-0 clr--grey">STEP 1</p>
              <p class="mb-0 clr--grey">Commodity Information</p>
              <span :class="{ active: isActive === 0 }" class="cstepindicator__level  d-inline-block grey__bg w-100"></span>
            </div>
            <div class="request__step text-center">
              <p class="mb-0 clr--grey">STEP 2</p>
              <p class="mb-0 clr--grey">Commodity Information</p>
              <span :class="{ active: isActive === 1 }" class="cstepindicator__level  d-inline-block grey__bg w-100"></span>
            </div>
            <div class="request__step text-center">
              <p class="mb-0 clr--grey">STEP 3</p>
              <p class="mb-0 clr--grey">Commodity Information</p>
              <span :class="{ active: isActive === 2 }" class="cstepindicator__level  d-inline-block grey__bg w-100"></span>
            </div>

          </div>
          <fieldset :class="{ request__commodity: isActive != 0 }" class="mt-5 mb-3">
            <div class="card border-0 p-5">
              <div class="row">
                <div class="col">
                  <div class="form-group mb-5">
                    <label for="inputType">TYPE <sup>*</sup></label>
                    <!-- <select class="form-control cselect" id="inputType">
                      <option selected>Select Type</option>
                      <option>...</option>

                    </select> -->
                    <v-select v-model="type" class="cselect" :options='[
                      {"value":"Buy", "label":"Buy"},
                      {"value":"Sell", "label":"Sell"}
                      ]'>
                    </v-select>
                  </div>
                </div>
                <div class="col">
                  <div class="form-group mb-5">
                    <label for="inputCommodity">COMMODITY <sup>*</sup></label>
                    <input type="text" v-model="commodity" class="form-control cinput" id="inputCommodity"
                      placeholder="Enter commodity name" required>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group mb-5">
                    <label for="inputQuantity">QUANTITY <sup>*</sup></label>
                    <input type="text" @keypress='isNumber($event)' v-model="quantity" class="form-control cinput" id="inputQuantity"
                      placeholder="Enter quantity in (MT)" required>
                  </div>
                </div>
                <div class="col">
                  <div class="form-group mb-5">
                    <label for="inputIncoterm">INCOTERM <sup>*</sup></label>
                    <!-- <select class="form-control cselect" id="inputIncoterm">
                      <option>Select method</option>
                    </select> -->
                    <v-select v-model="incoterm" :options='[
                      {"value":"EXW - ExWorks", "label":"EXW - ExWorks"},
                      {"value":"FCA - Free Carrier", "label":"FCA - Free Carrier"},
                      {"value":"FAS - Free Alongside Ship", "label":"FAS - Free Alongside Ship"},
                      {"value":"FOB - Free On Board", "label":"FOB - Free On Board"},
                      {"value":"CFR - Cost and Freight", "label":"CFR - Cost and Freight"},
                      {"value":"CIF - Cost, Insurance, Freight", "label":"CIF - Cost, Insurance, Freight"},
                      {"value":"CIP - Carriage and Insurance Paid", "label":"CIP - Carriage and Insurance Paid"},
                      {"value":"CPT - Carriage Paid To", "label":"CPT - Carriage Paid To"},
                      {"value":"DAF - Delivered At Frontier", "label":"DAF - Delivered At Frontier"},
                      {"value":"DEQ - Delivered Ex Quay", "label":"DEQ - Delivered Ex Quay"},
                      {"value":"DES - Delivered Ex Ship", "label":"DES - Delivered Ex Ship"},
                      {"value":"DDP - Delivered Duty Paid", "label":"DDP - Delivered Duty Paid"},
                      {"value":"DDU - Delivered Duty Unpaid", "label":"DDU - Delivered Duty Unpaid"},
                      {"value":"DAT - Delivered At Terminal", "label":"DAT - Delivered At Terminal"},
                      {"value":"DAT - Delivered At Place", "label":"DAT - Delivered At Place"},
                      {"value":"Not Applicable", "label":"Not Applicable"}
                      ]'>
                      </v-select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group mb-5">
                    <label for="inputLocation">LOCATION <sup>*</sup></label>
                    <input type="text" v-model="location" class="form-control cinput" id="inputLocation" placeholder="Enter Location"
                      required>
                  </div>
                </div>

              </div>
            </div>
          </fieldset>
          <fieldset :class="{ request__commodity: isActive != 1 }" class="mt-5 mb-3">
            <div class="card border-0 p-5">
              <div class="row">
                <div class="col">
                  <div class="form-group mb-5">
                    <label for="inputType">CURRENCY <sup>*</sup></label>
                    <!-- <select class="form-control cselect" id="inputType">
                      <option selected>Select currency type</option>
                      <option>...</option>

                    </select> -->
                    <v-select v-model="currency" :options='[
                      {"cc":"AED","symbol":"\u062f.\u0625;","label":"UAE dirham"},
                      {"cc":"AFN","symbol":"Afs","label":"Afghan afghani"},
                      {"cc":"ALL","symbol":"L","label":"Albanian lek"},
                      {"cc":"AMD","symbol":"AMD","label":"Armenian dram"},
                      {"cc":"ANG","symbol":"NA\u0192","label":"Netherlands Antillean gulden"},
                      {"cc":"AOA","symbol":"Kz","label":"Angolan kwanza"},
                      {"cc":"ARS","symbol":"$","label":"Argentine peso"},
                      {"cc":"AUD","symbol":"$","label":"Australian dollar"},
                      {"cc":"AWG","symbol":"\u0192","label":"Aruban florin"},
                      {"cc":"AZN","symbol":"AZN","label":"Azerbaijani manat"},
                      {"cc":"BAM","symbol":"KM","label":"Bosnia and Herzegovina konvertibilna marka"},
                      {"cc":"BBD","symbol":"Bds$","label":"Barbadian dollar"},
                      {"cc":"BDT","symbol":"\u09f3","label":"Bangladeshi taka"},
                      {"cc":"BGN","symbol":"BGN","label":"Bulgarian lev"},
                      {"cc":"BHD","symbol":".\u062f.\u0628","label":"Bahraini dinar"},
                      {"cc":"BIF","symbol":"FBu","label":"Burundi franc"},
                      {"cc":"BMD","symbol":"BD$","label":"Bermudian dollar"},
                      {"cc":"BND","symbol":"B$","label":"Brunei dollar"},
                      {"cc":"BOB","symbol":"Bs.","label":"Bolivian boliviano"},
                      {"cc":"BRL","symbol":"R$","label":"Brazilian real"},
                      {"cc":"BSD","symbol":"B$","label":"Bahamian dollar"},
                      {"cc":"BTN","symbol":"Nu.","label":"Bhutanese ngultrum"},
                      {"cc":"BWP","symbol":"P","label":"Botswana pula"},
                      {"cc":"BYR","symbol":"Br","label":"Belarusian ruble"},
                      {"cc":"BZD","symbol":"BZ$","label":"Belize dollar"},
                      {"cc":"CAD","symbol":"$","label":"Canadian dollar"},
                      {"cc":"CDF","symbol":"F","label":"Congolese franc"},
                      {"cc":"CHF","symbol":"Fr.","label":"Swiss franc"},
                      {"cc":"CLP","symbol":"$","label":"Chilean peso"},
                      {"cc":"CNY","symbol":"\u00a5","label":"Chinese/Yuan renminbi"},
                      {"cc":"COP","symbol":"Col$","label":"Colombian peso"},
                      {"cc":"CRC","symbol":"\u20a1","label":"Costa Rican colon"},
                      {"cc":"CUC","symbol":"$","label":"Cuban peso"},
                      {"cc":"CVE","symbol":"Esc","label":"Cape Verdean escudo"},
                      {"cc":"CZK","symbol":"K\u010d","label":"Czech koruna"},
                      {"cc":"DJF","symbol":"Fdj","label":"Djiboutian franc"},
                      {"cc":"DKK","symbol":"Kr","label":"Danish krone"},
                      {"cc":"DOP","symbol":"RD$","label":"Dominican peso"},
                      {"cc":"DZD","symbol":"\u062f.\u062c","label":"Algerian dinar"},
                      {"cc":"EEK","symbol":"KR","label":"Estonian kroon"},
                      {"cc":"EGP","symbol":"\u00a3","label":"Egyptian pound"},
                      {"cc":"ERN","symbol":"Nfa","label":"Eritrean nakfa"},
                      {"cc":"ETB","symbol":"Br","label":"Ethiopian birr"},
                      {"cc":"EUR","symbol":"\u20ac","label":"European Euro"},
                      {"cc":"FJD","symbol":"FJ$","label":"Fijian dollar"},
                      {"cc":"FKP","symbol":"\u00a3","label":"Falkland Islands pound"},
                      {"cc":"GBP","symbol":"\u00a3","label":"British pound"},
                      {"cc":"GEL","symbol":"GEL","label":"Georgian lari"},
                      {"cc":"GHS","symbol":"GH\u20b5","label":"Ghanaian cedi"},
                      {"cc":"GIP","symbol":"\u00a3","label":"Gibraltar pound"},
                      {"cc":"GMD","symbol":"D","label":"Gambian dalasi"},
                      {"cc":"GNF","symbol":"FG","label":"Guinean franc"},
                      {"cc":"GQE","symbol":"CFA","label":"Central African CFA franc"},
                      {"cc":"GTQ","symbol":"Q","label":"Guatemalan quetzal"},
                      {"cc":"GYD","symbol":"GY$","label":"Guyanese dollar"},
                      {"cc":"HKD","symbol":"HK$","label":"Hong Kong dollar"},
                      {"cc":"HNL","symbol":"L","label":"Honduran lempira"},
                      {"cc":"HRK","symbol":"kn","label":"Croatian kuna"},
                      {"cc":"HTG","symbol":"G","label":"Haitian gourde"},
                      {"cc":"HUF","symbol":"Ft","label":"Hungarian forint"},
                      {"cc":"IDR","symbol":"Rp","label":"Indonesian rupiah"},
                      {"cc":"ILS","symbol":"\u20aa","label":"Israeli new sheqel"},
                      {"cc":"INR","symbol":"\u20B9","label":"Indian rupee"},
                      {"cc":"IQD","symbol":"\u062f.\u0639","label":"Iraqi dinar"},
                      {"cc":"IRR","symbol":"IRR","label":"Iranian rial"},
                      {"cc":"ISK","symbol":"kr","label":"Icelandic kr\u00f3na"},
                      {"cc":"JMD","symbol":"J$","label":"Jamaican dollar"},
                      {"cc":"JOD","symbol":"JOD","label":"Jordanian dinar"},
                      {"cc":"JPY","symbol":"\u00a5","label":"Japanese yen"},
                      {"cc":"KES","symbol":"KSh","label":"Kenyan shilling"},
                      {"cc":"KGS","symbol":"\u0441\u043e\u043c","label":"Kyrgyzstani som"},
                      {"cc":"KHR","symbol":"\u17db","label":"Cambodian riel"},
                      {"cc":"KMF","symbol":"KMF","label":"Comorian franc"},
                      {"cc":"KPW","symbol":"W","label":"North Korean won"},
                      {"cc":"KRW","symbol":"W","label":"South Korean won"},
                      {"cc":"KWD","symbol":"KWD","label":"Kuwaiti dinar"},
                      {"cc":"KYD","symbol":"KY$","label":"Cayman Islands dollar"},
                      {"cc":"KZT","symbol":"T","label":"Kazakhstani tenge"},
                      {"cc":"LAK","symbol":"KN","label":"Lao kip"},
                      {"cc":"LBP","symbol":"\u00a3","label":"Lebanese lira"},
                      {"cc":"LKR","symbol":"Rs","label":"Sri Lankan rupee"},
                      {"cc":"LRD","symbol":"L$","label":"Liberian dollar"},
                      {"cc":"LSL","symbol":"M","label":"Lesotho loti"},
                      {"cc":"LTL","symbol":"Lt","label":"Lithuanian litas"},
                      {"cc":"LVL","symbol":"Ls","label":"Latvian lats"},
                      {"cc":"LYD","symbol":"LD","label":"Libyan dinar"},
                      {"cc":"MAD","symbol":"MAD","label":"Moroccan dirham"},
                      {"cc":"MDL","symbol":"MDL","label":"Moldovan leu"},
                      {"cc":"MGA","symbol":"FMG","label":"Malagasy ariary"},
                      {"cc":"MKD","symbol":"MKD","label":"Macedonian denar"},
                      {"cc":"MMK","symbol":"K","label":"Myanma kyat"},
                      {"cc":"MNT","symbol":"\u20ae","label":"Mongolian tugrik"},
                      {"cc":"MOP","symbol":"P","label":"Macanese pataca"},
                      {"cc":"MRO","symbol":"UM","label":"Mauritanian ouguiya"},
                      {"cc":"MUR","symbol":"Rs","label":"Mauritian rupee"},
                      {"cc":"MVR","symbol":"Rf","label":"Maldivian rufiyaa"},
                      {"cc":"MWK","symbol":"MK","label":"Malawian kwacha"},
                      {"cc":"MXN","symbol":"$","label":"Mexican peso"},
                      {"cc":"MYR","symbol":"RM","label":"Malaysian ringgit"},
                      {"cc":"MZM","symbol":"MTn","label":"Mozambican metical"},
                      {"cc":"NAD","symbol":"N$","label":"Namibian dollar"},
                      {"cc":"NGN","symbol":"\u20a6","label":"Nigerian naira"},
                      {"cc":"NIO","symbol":"C$","label":"Nicaraguan c\u00f3rdoba"},
                      {"cc":"NOK","symbol":"kr","label":"Norwegian krone"},
                      {"cc":"NPR","symbol":"NRs","label":"Nepalese rupee"},
                      {"cc":"NZD","symbol":"NZ$","label":"New Zealand dollar"},
                      {"cc":"OMR","symbol":"OMR","label":"Omani rial"},
                      {"cc":"PAB","symbol":"B./","label":"Panamanian balboa"},
                      {"cc":"PEN","symbol":"S/.","label":"Peruvian nuevo sol"},
                      {"cc":"PGK","symbol":"K","label":"Papua New Guinean kina"},
                      {"cc":"PHP","symbol":"\u20b1","label":"Philippine peso"},
                      {"cc":"PKR","symbol":"Rs.","label":"Pakistani rupee"},
                      {"cc":"PLN","symbol":"z\u0142","label":"Polish zloty"},
                      {"cc":"PYG","symbol":"\u20b2","label":"Paraguayan guarani"},
                      {"cc":"QAR","symbol":"QR","label":"Qatari riyal"},
                      {"cc":"RON","symbol":"L","label":"Romanian leu"},
                      {"cc":"RSD","symbol":"din.","label":"Serbian dinar"},
                      {"cc":"RUB","symbol":"R","label":"Russian ruble"},
                      {"cc":"SAR","symbol":"SR","label":"Saudi riyal"},
                      {"cc":"SBD","symbol":"SI$","label":"Solomon Islands dollar"},
                      {"cc":"SCR","symbol":"SR","label":"Seychellois rupee"},
                      {"cc":"SDG","symbol":"SDG","label":"Sudanese pound"},
                      {"cc":"SEK","symbol":"kr","label":"Swedish krona"},
                      {"cc":"SGD","symbol":"S$","label":"Singapore dollar"},
                      {"cc":"SHP","symbol":"\u00a3","label":"Saint Helena pound"},
                      {"cc":"SLL","symbol":"Le","label":"Sierra Leonean leone"},
                      {"cc":"SOS","symbol":"Sh.","label":"Somali shilling"},
                      {"cc":"SRD","symbol":"$","label":"Surinamese dollar"},
                      {"cc":"SYP","symbol":"LS","label":"Syrian pound"},
                      {"cc":"SZL","symbol":"E","label":"Swazi lilangeni"},
                      {"cc":"THB","symbol":"\u0e3f","label":"Thai baht"},
                      {"cc":"TJS","symbol":"TJS","label":"Tajikistani somoni"},
                      {"cc":"TMT","symbol":"m","label":"Turkmen manat"},
                      {"cc":"TND","symbol":"DT","label":"Tunisian dinar"},
                      {"cc":"TRY","symbol":"TRY","label":"Turkish new lira"},
                      {"cc":"TTD","symbol":"TT$","label":"Trinidad and Tobago dollar"},
                      {"cc":"TWD","symbol":"NT$","label":"New Taiwan dollar"},
                      {"cc":"TZS","symbol":"TZS","label":"Tanzanian shilling"},
                      {"cc":"UAH","symbol":"UAH","label":"Ukrainian hryvnia"},
                      {"cc":"UGX","symbol":"USh","label":"Ugandan shilling"},
                      {"cc":"USD","symbol":"US$","label":"United States dollar"},
                      {"cc":"UYU","symbol":"$U","label":"Uruguayan peso"},
                      {"cc":"UZS","symbol":"UZS","label":"Uzbekistani som"},
                      {"cc":"VEB","symbol":"Bs","label":"Venezuelan bolivar"},
                      {"cc":"VND","symbol":"\u20ab","label":"Vietnamese dong"},
                      {"cc":"VUV","symbol":"VT","label":"Vanuatu vatu"},
                      {"cc":"WST","symbol":"WS$","label":"Samoan tala"},
                      {"cc":"XAF","symbol":"CFA","label":"Central African CFA franc"},
                      {"cc":"XCD","symbol":"EC$","label":"East Caribbean dollar"},
                      {"cc":"XDR","symbol":"SDR","label":"Special Drawing Rights"},
                      {"cc":"XOF","symbol":"CFA","label":"West African CFA franc"},
                      {"cc":"XPF","symbol":"F","label":"CFP franc"},
                      {"cc":"YER","symbol":"YER","label":"Yemeni rial"},
                      {"cc":"ZAR","symbol":"R","label":"South African rand"},
                      {"cc":"ZMK","symbol":"ZK","label":"Zambian kwacha"},
                      {"cc":"ZWR","symbol":"Z$","label":"Zimbabwean dollar"}
                      ]'>
                      </v-select>
                  </div>
                </div>

              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group mb-5">
                    <label for="inputQuantity">PRICE <sup>*</sup></label>
                    <input type="text" @keypress='isNumber($event)' v-model="price" class="form-control cinput" id="inputQuantity"
                      placeholder="Enter asking  price" required>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group mb-5">
                    <label for="inputQuantity">PAYMENT TYPE <sup>*</sup></label>
                    <input type="text" v-model="payment" class="form-control cinput" id="inputQuantity"
                      placeholder="Enter payment type" required>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group mb-5">
                    <label for="inputQuantity">MARKET AVAILABILITY <sup>*</sup></label>
                    <datepicker v-model="availability" :input-class="'form-control cinput'" :placeholder="'Select Date'" :disabled="promoDuration.startState" v-on:selected="disableTo" required></datepicker>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset :class="{ request__commodity: isActive != 2 }" class="mt-5 mb-5">
            <div class="card border-0 p-5">
              <div v-for="(sdoc, index) in sellerDocs" :key="index" class="row">
                <div class="col">
                  <div class="form-group mb-5">
                    <label for="inputQuantity">FILE NAME <sup>*</sup></label>
                    <input type="text" v-model="sdoc.name" class="form-control cinput" id="inputQuantity" placeholder="Enter file name"
                      required>
                  </div>
                </div>
                <div class="col">
                  <div class="form-group mb-5">
                    <label for="inputQuantity">UPLOAD DOCUMENT <sup>*</sup></label>
                    <input type="file" @change="setDocFilename($event, sdoc)" :id="index" accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf, image/*" class="form-control cinput"
                      placeholder="Enter asking  price" required>
                  </div>
                </div>
                <div class="col-2">
                  <button v-on:click="removeDocElement(index, sellerDocs)" class="btn pt-5"> <img src="/static/img/trash-icon.svg" alt="trash-icon"></button>
                </div>
              </div>
              <div class="d-flex">
                <button type="button" @click="addDocRow(sellerDocs)" style="font-size: 16px;" class="btn btn-link bg-transparent">+Add document</button>
              </div>
              <div class="row mt-3">
                <div class="col">
                  <div class="form-group mb-5">
                    <label for="inputmoreinfo">MORE INFORMATION</label>
                    <textarea type="text" class="form-control cinput" v-model="additionalInfo" id="inputmoreinfo" rows="5" required></textarea>
                  </div>
                </div>
              </div>

            </div>
          </fieldset>
          <div class="d-flex justify-content-center mb-10">

            <button @click="isActive--" v-if="isActive > 0" type="button" class="btn button__grey mx-2" id="prevBtn" onclick="nextPrev(-1)">BACK</button>
            <button @click="isActive++" :disabled="!step1 || disable" v-if="isActive < 1" type="button" class="btn  button__primary  mx-2" id="nextBtn">NEXT</button>
            <button @click="isActive++" :disabled="!step2 || disable" v-if="isActive === 1" type="button" class="btn  button__primary  mx-2" id="nextBtn">NEXT</button>
            <button @click="saveTransaction" :disabled="disable" v-if="isActive === 2" type="button" class="btn  button__primary  mx-2" id="nextBtn">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
<script>
// import api from '@/api/user'
import offerApi from '@/api/offer'
import Header from '@/components/Header'
import { upload } from '@/config'
import {mapGetters} from 'vuex'
export default {
  name: 'User-New-Transaction',
  components: {
    Header
  },
  dashboard: true,
  title () {
    return `New Transaction | Comflo Inc`
  },
  data: function () {
    return {
      isActive: 0,
      // Deal types
      dealTypes: [],
      // Step 1
      type: {'value': 'Buy', 'label': 'Buy'},
      commodity: '',
      quantity: '',
      incoterm: {'value': 'EXW - ExWorks', 'label': 'EXW - ExWorks'},
      location: '',
      // Step 2
      currency: {'cc': 'USD', 'symbol': 'US$', 'label': 'United States dollar'},
      price: '',
      payment: '',
      availability: '',
      // Step 3
      sellerDocs: [],
      buyerDocs: [],
      additionalInfo: '',
      visible: false,
      disable: false,
      promoDuration: {
        startState: {
          to: new Date()
        },
        endState: {
          to: null
        }
      }
    }
  },
  computed: {
    ...mapGetters('user', ['user']),
    ...mapGetters('company', ['company']),
    step1 () {
      return this.type.value.length > 0 && this.commodity.length > 0 && this.quantity.length > 0 && this.incoterm.value.length > 0 && this.location.length > 0
    },
    step2 () {
      return this.currency.cc.length > 0 && this.price.length > 0 && this.payment.length > 0 && this.availability.length > 0
    }
  },
  methods: {
    disableTo (val) {
      this.promoDuration.endState.to = val
    },
    async saveTransaction () {
      let loader = this.$loading.show()
      for (let i = 0; i < this.sellerDocs.length; i++) {
        let file = this.sellerDocs[i].file
        // console.log(file)
        let url = ''
        if (file.name) {
          url = await upload(file, 'seller-docs', this.commodity)
          this.sellerDocs[i].uploader = this.user._id
        }
        this.sellerDocs[i].url = url
        delete this.sellerDocs[i].file
      }
      for (let i = 0; i < this.buyerDocs.length; i++) {
        let file = this.buyerDocs[i].file
        // console.log(file)
        let url = ''
        if (file.name) {
          url = await upload(file, 'buyer-docs', this.commodity)
          this.buyerDocs[i].uploader = this.user._id
        }
        this.buyerDocs[i].url = url
        delete this.buyerDocs[i].file
      }
      const deal = {
        // Step 1
        type: this.type.value,
        commodity: this.commodity,
        quantity: this.quantity,
        incoterm: this.incoterm.value,
        location: this.location,
        // Step 2
        currency: this.currency.cc,
        price: this.price,
        payment: this.payment,
        availability: this.availability,
        // Step 3
        sellerdocuments: this.sellerDocs,
        buyerdocuments: this.buyerDocs,
        jointdocuments: [],
        additionalInfo: this.additionalInfo,
        poster: this.user._id,
        user_address: this.user.address,
        company: this.company._id
      }
      console.log(deal)
      let response = await offerApi.postOffer(deal)
      loader.hide()
      console.log(response.data.data)
      if (response.data.status === 'success') {
        this.$toast.success('Trabsaction has been created', '', this.notificationSystem.options.success)
        this.disable = false
        this.clearFields()
        this.$router.push('/user/transactions')
      } else {
        this.$toast.error('Error creating a new transaction', '', this.notificationSystem.options.error)
        // this.mainerror = 'An error occured'
        return false
      }
    },

    clearFields () {
      this.type = {'value': 'Buy', 'label': 'Buy'}
      this.commodity = ''
      this.currency = {'cc': 'USD', 'symbol': 'US$', 'label': 'United States dollar'}
      this.price = ''
      this.payment = ''
      this.quantity = ''
      this.incoterm = {'value': 'EXW - ExWorks', 'label': 'EXW - ExWorks'}
      this.location = ''
      this.category = {'value': '1', 'label': 'Oil & Gas'}
      this.sellerDocs = []
      this.buyerDocs = []
      this.partners = []
      this.visible = false
      this.disable = false
    }
  }
}
</script>
