<template>
  <main class="col-sm-12 ml-sm-auto col-md-11 dashboard-content" role="main">
    <div class="row mt-lg-5">
      <div class="col-md-12 text-center">
        <i class="fa fa-check-circle-o fa-20x atlantis"></i>
      </div>
      <div class="col-md-12 text-center mt-lg-5">
        <p class="text-gray">Your request has been received and we will send you an email shortly.
          <br>
          To start your transaction, please provide the following documents.</p>
      </div>
    </div>
    <h3>&nbsp;</h3>
    <p class="text-center mt-10">
      <router-link to="/dashboard/documents">
        <a class="btn btn-round text-white venice-bg">
          Documents
        </a>
      </router-link>
    </p>
  </main>
</template>
<script>
export default {
  name: 'Request',
  data: function () {
    return {
    }
  }
}
</script>
