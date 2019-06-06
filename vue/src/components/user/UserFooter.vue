<template>
  <footer class="col-sm-11 offset-sm-1 content content-m content-offset content-offset-m fixed-bottom cfooter navbar">
    <p>© {{new Date().getFullYear()}}Comflo. All rights reserved.</p>
    <ul class="nav">
    <footer-link></footer-link>
    </ul>
  </footer>
</template>
<script>
import FooterLink from '@/components/FooterLink'
export default {
  name: 'Admin-Footer',
  components: {
    FooterLink
  }
}
</script>
