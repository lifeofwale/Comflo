<template>
    <main class="col-sm-11 offset-sm-1 content content-m content-offset content-offset-m px-0">
        <div class="container mrt-6 mb-10">
          <div class="d-flex align-content-center align-items-center justify-content-between request__query">
            <div class="d-flex align-content-center align-items-center">
              <span>
                <div class="content__icon--bg"><img src="/static/img/current-user.svg" width="30px" alt="current-user"></div>
              </span>
              <span class="content__desc">
                <h3>Add User</h3>
                <p class="empty-state"></p>
                <p>Add a new user</p>
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
                      <input type="email" class="form-control cinput form__valid" v-model="email" placeholder="" required>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="form-group mb-5">
                      <label for="inputPost">Password</label>
                      <div class="input-group" id="show_hide_password">
                        <input :type="passwordFieldType" class="form-control cinput form__valid" placeholder="**********" id="inputPassword" v-model="password" required>
                        <a @click="switchVisibility"><i class="fa fa-eye-slash show-pass" style="color:#83c225;"
                            aria-hidden="true"></i></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group mb-5">
                      <label for="inputPost">Position</label>
                      <input type="text" class="form-control cinput form__valid" v-model="position" placeholder="" required>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center mt-4">
              <button @click="$router.push('/user/company')" class="btn button__grey mx-2">Cancel</button>
              <!-- <router-link class="btn button__grey mx-2" :to="{ name: 'Admin-Users'}">
                Reject
              </router-link> -->
              <button @click="postUser" class="btn  button__primary  mx-2">Submit</button>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </main>
</template>
<script>
import api from '@/api/company'
import Footer from '@/components/user/UserFooter'
import {mapGetters} from 'vuex'
export default {
  name: 'AddUser',
  dashboard: true,
  title () {
    return `New User | Comflo Inc`
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
      position: '',
      disable: false,
      mainerror: '',
      visible: false
    }
  },
  computed: {
    ...mapGetters('user', ['user']),
    ...mapGetters('company', ['company']),
    emptyText () {
      return this.email.length > 0 && this.fname.length > 0 && this.lname.length > 0 && this.phone.length > 0 && this.password.length > 0
    }
  },
  methods: {
    resetDetails () {
      this.email = ''
      this.fname = ''
      this.lname = ''
      this.phone = ''
      this.password = ''
      this.position = ''
      this.disable = false
    },
    async postUser () {
      let loader = this.$loading.show()
      this.disable = true
      try {
        let user = {
          email: this.email,
          fname: this.fname,
          lname: this.lname,
          phone: this.phone,
          position: this.position,
          password: this.password
        }
        let response = await api.addUser(user, this.company._id)
        console.log(response)
        console.log(response.data.status)
        loader.hide()
        if (response.data.status === 'success') {
          this.$toast.success('User has been created', '', this.notificationSystem.options.success)
          this.$router.push('/user/company')
        } else {
          this.$toast.error('Failed to create new user', '', this.notificationSystem.options.error)
          this.resetDetails()
          return false
        }
        this.disable = false
      } catch (error) {
        this.handleError(error, loader)
      }
    }
  }
}
</script>
