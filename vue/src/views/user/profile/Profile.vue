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
              <img src="/static/img/profile--img.png" alt="user image">
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
                      <a :class="{ active: isActive === 0 }" @click="isActive = 0" class="nav-item nav-link px-5" id="nav-home-tab" data-toggle="tab"
                        role="tab" aria-controls="nav-home" aria-selected="true">PERSONAL INFORMATION</a>
                      <a :class="{ active: isActive === 1 }" @click="isActive = 1"  class="nav-item nav-link px-5" id="nav-profile-tab" data-toggle="tab"
                        role="tab" aria-controls="nav-profile" aria-selected="false">COMPANY INFORMATON</a>
                      <a :class="{ active: isActive === 2 }" @click="isActive = 2"  class="nav-item nav-link px-5" id="nav-profile-tab" data-toggle="tab"
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
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <label for="file-upload">Change profile image</label>
                            <div class="content__formfile w-100 p-rel">
                              <span class="content__uploadfile  w-100">select file</span>
                              <input type="file" class="form-control cinput w-100" id="file-upload"
                                style="opacity:0;z-index:1;">
                              <div id="file-upload-filename">{{image}}</div>
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
                            <input type="text" class="form-control cinput" id="inputCname" value="Abu farm holdings"
                              readonly>
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-group mb-5">
                            <label for="inputClast">Company type
                            </label>
                            <input type="text" class="form-control cinput" id="inputClast" value="Farming" readonly>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="form-group mb-5">
                            <label for="inputCountry">Country</label>
                            <input type="text" class="form-control cinput" id="inputCountry" value="Canada" readonly>
                          </div>
                        </div>
                        <div class="col">
                          <div class="row">
                            <div class="col">
                              <div class="form-group mb-5">
                                <label for="inputState">State</label>
                                <input type="text" class="form-control cinput" id="inputState" value="Toronto"
                                  readonly>
                              </div>
                            </div>

                            <div class="col">
                              <div class="form-group mb-5">
                                <label for="inputCity">City</label>
                                <input type="text" class="form-control cinput" id="inputCity" value="NY" readonly>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="form-group mb-5">
                            <label for="inputStreet">Street address</label>
                            <input type="text" class="form-control cinput" id="inputStreet"
                              value="Block 650 Madson way" readonly>
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-group mb-5">
                            <label for="inputPosition">Position in company</label>
                            <input type="text" class="form-control cinput" id="inputPosition"
                              value="Marketing manager" readonly>
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
                              <input :type="passwordFieldType" class="form-control cinput" value="ssssssssss"
                                id="inputPassword">
                              <a @click="switchVisibility"><i class="fa fa-eye-slash show-pass" style="color:#83c225;"
                                  aria-hidden="true"></i></a>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-group mb-5">

                            <label for="inputPassword">Confirm Password</label>
                            <div class="input-group" id="show_hide_password">
                              <input :type="passwordFieldType" class="form-control cinput" value="ssssssssss"
                                id="inputPassword">
                              <a @click="switchVisibility"><i class="fa fa-eye-slash show-pass" style="color:#83c225;"
                                  aria-hidden="true"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-center">
                    <button v-if="isActive === 0" type="button" class="btn  button__primary mt-3 mb-2">Save Profile</button>
                    <button v-if="isActive === 1" type="button" class="btn  button__primary mt-3 mb-2">Save Company</button>
                    <button v-if="isActive === 2" type="button" class="btn  button__primary mt-3 mb-2">Change Password</button>
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
import Footer from '@/components/user/UserFooter'
import {mapGetters} from 'vuex'
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
    this.fname = this.user.fname
    this.lname = this.user.lname
    this.email = this.user.email
    this.image = this.user.image
    this.phone = this.user.phone
  },
  data () {
    return {
      isActive: 0,
      passwordFieldType: 'password',
      // User Profile
      fname: '',
      lname: '',
      email: '',
      image: '',
      phone: '',
      // Company Profile
      company_name: '',
      company_type: '',
      company_state: '',
      company_country: '',
      company_city: '',
      company_street: '',
      company_position: ''
    }
  },
  methods: {
    switchVisibility () {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    }
  }
}
</script>
