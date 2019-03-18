<template>
  <main class="col-sm-12 ml-sm-auto col-md-11 dashboard-content" role="main">
    <div class="pull-left mt-lg-5">
      <h3>My Profile</h3>
    </div>
    <div class="width-100 dashboard-widget">
      <div class="row mt-lg-5">
        <div class="col-md-6 col-lg-6">
          <form>
            <div class="form-group">
              <div class="row">
                <div class="col-md-4 mt-lg-2">
                  <label>Change Picture</label>
                </div>
                <div class="col-md-6">
                  <input type="file" class="form-control">
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="col-md-6 col-lg-6">
          <form>
            <div class="form-group">
              <div class="row">
                <div class="col-md-4 mt-lg-2">
                  <label>Change Password</label>
                </div>
                <div class="col-md-6">
                  <button type="button" class="btn btn-round venice-bg">
                   Change
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <p class="mt-10">
      <button type="button" @click="confirm" class="btn btn-round venice-bg pull-right">
        Return to Home
      </button>
    </p>
  </main>
</template>
<script>
export default {
  name: 'Matching',
  data: function () {
    return {
    }
  },
  methods: {
    confirm () {
      this.$router.push('/dashboard/')
    }
  }
}
</script>
