<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
  @import '../static/assets/css/bootstrap.min.css';
  @import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
  @import '../static/css/style.css';
  @import '../static/css/responsive.css';
</style>

<style lang="css">
  .v-select .dropdown-menu a{
    color: #000000 !important;
  }

  .v-select .dropdown-toggle{
    background-color: #ffffff;
  }
</style>
