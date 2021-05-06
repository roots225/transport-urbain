<template lang="html">
  <section class="app-sidebar">
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item nav-category">Menu</li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'dashboard'}">
            <i class="menu-icon typcn typcn-document-text"></i>
            <span class="menu-title">Tableau de bord</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'transports'}">
            <i class="menu-icon typcn typcn-document-add"></i>
            <span class="menu-title">Quartier</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'dashboard'}">
            <i class="menu-icon typcn typcn-document-add"></i>
            <span class="menu-title">Moyens de transport</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'dashboard'}">
            <i class="menu-icon typcn typcn-document-add"></i>
            <span class="menu-title">Transports</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script lang="js">
import JQuery from 'jquery'
// eslint-disable-next-line
let $ = JQuery
export default {
  name: 'app-sidebar',
  mounted () {
    const body = document.querySelector('body')
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
      el.addEventListener('mouseover', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open')
        }
      })
      el.addEventListener('mouseout', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open')
        }
      })
    })
  }
}
</script>

<style scoped lang="scss">
.app-sidebar {
}
</style>
