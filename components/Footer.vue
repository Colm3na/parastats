<template>
  <footer class="footer">
    <div class="container text-center text-muted">
      &copy; {{ new Date().getFullYear() }} ParaStats - Made with love by
      <a href="https://polkastats.io" target="_blank">PolkaStats</a>
      - / -
      <nuxt-link to="/terms">Terms of use</nuxt-link>
      - / -
      <nuxt-link to="/privacy">Privacy policy</nuxt-link>
      - / -
      <a href="#" @click.prevent="Klaro.show()">Cookie Settings</a>
    </div>
  </footer>
</template>
<script>
import { config } from '@/config.js'
import commonMixin from '@/mixins/commonMixin.js'
import * as Klaro from 'klaro'
import { klaroConfig } from '@/klaro.config.js'
Klaro.setup(klaroConfig)
export default {
  mixins: [commonMixin],
  data() {
    return {
      config,
      Klaro,
    }
  },
  created() {
    const parastatsLocalStorage = JSON.parse(
      decodeURIComponent(localStorage.getItem('parastats'))
    )
    if (parastatsLocalStorage) {
      if (parastatsLocalStorage.googleAnalytics) {
        // TODO: start tracking
      }
    }
  },
}
</script>
