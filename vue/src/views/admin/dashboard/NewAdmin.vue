<template>
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
