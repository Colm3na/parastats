<template>
  <b-navbar toggleable="lg" type="dark">
    <b-container class="px-sm-3">
      <b-navbar-brand>
        <nuxt-link to="/" class="navbar-brand" :title="config.title">
          <img class="logo mb-1 d-inline" src="/img/logo/ParaStats_Logo.png" />
        </nuxt-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Project list</b-nav-item>
          <b-nav-item to="/kusama">What is Kusama?</b-nav-item>
          <b-nav-item to="/parachains">Kusama Parachains</b-nav-item>
          <b-nav-item to="/crowdloans">Kusama Crowdloans</b-nav-item>
          <b-nav-item to="/update">Add/Edit</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import { config } from '@/config.js'
export default {
  data() {
    return {
      config,
    }
  },
}
</script>
