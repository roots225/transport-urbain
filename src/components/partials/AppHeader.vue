<template lang="html">
  <b-navbar id="template-header" class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row" toggleable="md">
    <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
      <router-link class="navbar-brand brand-logo" to="/">
        <!-- <img src="../../assets/images/logo_dark.svg" alt="logo" /> -->
      </router-link>
      <router-link class="navbar-brand brand-logo-mini" to="/">
        <!-- <img src="../../assets/images/logo_dark_mini.svg" alt="logo" /> -->
      </router-link>
    </div>
    <div class="navbar-menu-wrapper d-flex align-items-center ml-auto ml-lg-0">
      <button class="navbar-toggler navbar-toggler align-self-center" type="button" @click="collapedSidebar()">
        <span class="mdi mdi-menu"></span>
      </button>
      <!-- <b-navbar-nav class="navbar-nav navbar-nav-left header-links d-none d-md-flex">
        <b-nav-item class="font-weight-semibold d-none d-lg-block" href="#">Help : +050 2992 709</b-nav-item>
        <b-nav-item-dropdown right class="preview-list language-dropdown">
          <template slot="button-content">
            <div class="nav-link px-2 d-flex align-items-center">
              <div class="d-inline-flex mr-0 mr-md-3">
                <div class="flag-icon-holder">
                  <i class="flag-icon flag-icon-us"></i>
                </div>
              </div>
              <span class="profile-text font-weight-medium d-none d-md-block">English</span>
            </div>
          </template>
          <b-dropdown-item><div class="flag-icon-holder"><i class="flag-icon flag-icon-us"></i></div>English</b-dropdown-item>
          <b-dropdown-item><div class="flag-icon-holder"><i class="flag-icon flag-icon-fr"></i></div>French</b-dropdown-item>
          <b-dropdown-item><div class="flag-icon-holder"><i class="flag-icon flag-icon-ae"></i></div>Arabic</b-dropdown-item>
          <b-dropdown-item><div class="flag-icon-holder"><i class="flag-icon flag-icon-ru"></i></div>Russian</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav> -->
      <button class="navbar-toggler navbar-toggler-right align-self-center" type="button" @click="collapedMobileSidebar()">
        <span class="mdi mdi-menu"></span>
      </button>
    </div>
  </b-navbar>
</template>

<script lang="js">
// eslint-disable-next-line
import JQuery from 'jquery'
let $ = JQuery
export default {
  name: 'app-header',
  methods: {
    collapedSidebar: function () {
      $('body').toggleClass('sidebar-icon-only')
    },
    collapedMobileSidebar: function () {
      $('#sidebar').toggleClass('active')
    }
  }
}
</script>

<style scoped lang="scss">
.app-header {
}
</style>
