<template>
    <main class="col-sm-11 offset-sm-1 content content-m content-offset content-offset-m px-0">
        <div class="container support mrt-6 mb-10">
          <div class="text-center">
            <h1 class="text-center font-weight-bold">How can we help you?</h1>
            <div class="d-flex justify-content-center">
              <div class="support__icon text-center mx-3">
                <div class="support__img"><img src="/static/img/avatar.jpg" alt="avatar"></div>
                <p class="text-center">Nachi Adaji</p>
              </div>
              <div class="support__icon text-center mx-3">
                <div class="support__img"><img src="/static/img/avatar.jpg" alt="avatar"></div>
                <p class="text-center">Eniola Adewale</p>
              </div>
            </div>
          </div>

          <div class="card support__card px-5 py-5">
            <form action="">
              <div class="form-group mb-5">
                <label for="inputCategory">Please select category</label>
                <select class="form-control cselect" id="inputCategory">
                  <option>Please select category</option>
                </select>
              </div>
              <div class="form-group mb-5">
                <label for="inputSubject">Subject</label>
                <input type="text" class="form-control cinput form__valid" id="inputSubject" required>
              </div>
              <div class="form-group mb-5">
                <label for="inputmoreinfo">Give us the details
                  <br>
                  <small>Please provide us with as much details as you can. We’ll reply in a few hours.</small>
                </label>
                <textarea class="form-control cinput" id="inputmoreinfo" rows="5" required>
                          </textarea>
              </div>
              <div class="text-center"> <button class="btn  button__primary mb-2">Send a mail</button></div>
            </form>
            </div>
          </div>
        <Footer></Footer>
    </main>
</template>
<script>
import Footer from '@/components/user/UserFooter'
export default {
  name: 'User-Support',
  dashboard: true,
  title () {
    return `Support | Comflo Inc`
  },
  components: {
    Footer
  }
}
</script>
