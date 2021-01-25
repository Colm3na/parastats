<template>
  <b-navbar type="dark" variant="dark" sticky>
    <b-container class="px-sm-3">
      <b-navbar-brand>
        <nuxt-link to="/" class="navbar-brand" :title="config.title">
          <img class="logo mb-1" :src="config.logo" />
        </nuxt-link>
      </b-navbar-brand>
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
