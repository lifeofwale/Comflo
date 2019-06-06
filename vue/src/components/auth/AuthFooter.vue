<template>
  <footer class="footer fixed-bottom border bg-white">
    <ul class="nav footer__ul justify-content-center text-center">
      <li class="nav-item footer__li">
        <router-link to="/" class='nav-link footer__a'>
          Home
        </router-link>
      </li>
      <li class="nav-item footer__li">
        <a href="https://www.comflo.com/wp-content/uploads/2018/10/Comflo-Terms-of-Use-July-2018.pdf" target="_blank" class="nav-link footer__a">Terms of Use</a>
      </li>
      <li class="nav-item footer__li">
        <a href="https://www.comflo.com/wp-content/uploads/2018/10/Comflo-Privacy-Policy-0718.pdf" target="_blank" class="nav-link footer__a">Privacy Policy</a>
      </li>
    </ul>
    <ul class="nav footer__ul justify-content-center text-center">
      <footer-link></footer-link>
    </ul>
  </footer>
</template>
<script>
import FooterLink from '@/components/FooterLink'
export default {
  name: 'MinFrontFooter',
  components: {
    FooterLink
  }
}
</script>
