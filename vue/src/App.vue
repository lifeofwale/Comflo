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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<style lang="css">
  .v-select .dropdown-menu a{
    color: #000000 !important;
  }

  .v-select .dropdown-toggle{
    background-color: #ffffff;
  }
</style>
