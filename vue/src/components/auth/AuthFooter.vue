<template>
  <footer class="footer fixed-bottom border">
    <ul class="nav footer__ul justify-content-center text-center">
      <li class="nav-item footer__li">
        <router-link to="/" class='nav-link footer__a'>
          Home
        </router-link>
      </li>
      <li class="nav-item footer__li">
        <a href="#" class="nav-link footer__a">Terms of Service</a>
      </li>
      <li class="nav-item footer__li">
        <a href="#" class="nav-link footer__a">Privacy Policy</a>
      </li>
    </ul>
    <ul class="nav footer__ul justify-content-center text-center">
      <li class="nav-item footer__li">
        <a href="#" target="_blank" class="nav-link footer__a"><i class="fab fa-medium-m"></i></a>
      </li>
      <li class="nav-item footer__li">
        <a href="#" target="_blank" class="nav-link footer__a"><i class="fab fa-facebook"></i></a>
      </li>
      <li class="nav-item footer__li">
        <a href="#" target="_blank" class="nav-link footer__a"><i class="fab fa-twitter-square"></i></a>
      </li>
      </ul>
  </footer>
  <!-- <footer class="dashboard-foot">
    <div class="container">
      <div class="row">
        <div class="col-md-9 col-sm-12 col-xs-12">
          <p>&copy; 2018 Comflo. All rights reserved.</p>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <ul class="social-icons">
            <li>
              <a href="#" target="_blank">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i class="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer> -->
</template>
<script>
export default {
  name: 'MinFrontFooter'
}
</script>
