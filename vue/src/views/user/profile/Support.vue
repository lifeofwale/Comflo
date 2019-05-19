<template>
    <main class="col-sm-11 offset-sm-1 content content-m content-offset content-offset-m px-0">
        <div class="container support mrt-6 mb-10">
          <div class="text-center">
            <h1 class="text-center font-weight-bold">How can we help you?</h1>
            <!-- <div class="d-flex justify-content-center">
              <div class="support__icon text-center mx-3">
                <div class="support__img"><img src="/static/img/avatar.jpg" alt="avatar"></div>
                <p class="text-center">Nachi Adaji</p>
              </div>
              <div class="support__icon text-center mx-3">
                <div class="support__img"><img src="/static/img/avatar.jpg" alt="avatar"></div>
                <p class="text-center">Eniola Adewale</p>
              </div>
            </div> -->
          </div>

          <div class="card support__card px-5 py-5">
            <form action="">
              <!-- <div class="form-group mb-5">
                <label for="inputCategory">Please select category</label>
                {{category}}
                <select v-model="category" class="form-control cselect" id="inputCategory">
                  <option>Please select category</option>
                  <option v-for="(category, index) in categories" :key="index" :value="category">{{category}}</option>
                </select>
              </div> -->
              <div class="form-group mb-5">
                <label for="inputSubject">Subject</label>
                <input v-model="subject" type="text" class="form-control cinput form__valid" id="inputSubject" required>
              </div>
              <div class="form-group mb-5">
                <label for="inputmoreinfo">Give us the details
                  <br>
                  <small>Please provide us with as much details as you can. We’ll reply in a few hours.</small>
                </label>
                <textarea v-model="body" class="form-control cinput" id="inputmoreinfo" rows="5" required>
                          </textarea>
              </div>
              <div class="text-center"> <button type="button" @click="sendSupportMail" :disabled="!emptyText || disable" class="btn  button__primary mb-2">Send a mail</button></div>
            </form>
            </div>
          </div>
        <Footer></Footer>
    </main>
</template>
<script>
import api from '@/api/user'
import { mapGetters } from 'vuex'
import Footer from '@/components/user/UserFooter'
export default {
  name: 'User-Support',
  dashboard: true,
  title () {
    return `Support | Comflo Inc`
  },
  components: {
    Footer
  },
  computed: {
    ...mapGetters('user', ['user']),
    emptyText () {
      return this.category.length > 0 && this.subject.length > 0 && this.body.length > 0
    }
  },
  data () {
    return {
      categories: ['Argo', 'IT', 'Business', 'Another'],
      category: 'Argo',
      subject: '',
      body: ''
    }
  },
  methods: {
    async sendSupportMail () {
      const loader = this.$loading.show()
      this.disable = true
      try {
        const details = {
          // subject: `Category: ${this.category}; ${this.subject}`,
          subject: `${this.subject}`,
          body: this.body,
          email: this.user.email
        }
        const response = await api.usersupport(details)
        console.log(response.data)
        if (response.data.status === 'success') {
          this.$toast.success(response.data.data, '', this.notificationSystem.options.success)
          this.clearfields()
        } else {
          this.$toast.error(response.data.data, '', this.notificationSystem.options.error)
        }
        loader.hide()
        this.disable = false
      } catch (error) {
        loader.hide()
        this.disable = false
        this.$toast.error('Error sending support mail', '', this.notificationSystem.options.error)
      }
    },
    clearfields () {
      this.category = 'Argo'
      this.subject = ''
      this.body = ''
    }
  }
}
</script>
