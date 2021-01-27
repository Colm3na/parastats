<template>
  <footer class="footer">
    <div class="container text-center">
      <h4>DISCLAIMER</h4>
      <p class="text-primary">
        All content provided herein our website, hyperlinked sites, associated
        applications, forums, blogs, social media accounts and other platforms
        is for your general information only, collected primarily from third
        party sources. We make no warranties of any kind in relation to our
        content and services, including but not limited to accuracy, security
        and updatedness. No part of the content and services that we provide
        constitutes financial advice, legal advice or any other form of advice
        meant for your specific reliance for any purpose, nor any dealing in (or
        promotion of) securities. Any use or reliance on our content and
        services is solely at your own risk and discretion. You should conduct
        your own research, review, analyse and verify our content and services
        before relying on or using them. Participating in cryptocurrency
        activities is a highly risky endeavour, please therefore consult your
        financial advisor before making any monetary decisions.
      </p>
      <p class="text-muted">
        <nuxt-link to="/terms">Terms of use</nuxt-link>
        - / -
        <nuxt-link to="/privacy">Privacy policy</nuxt-link>
        - / -
        <a href="#" @click.prevent="Klaro.show()">Cookie Settings</a>
      </p>
      <p class="text-muted">
        &copy; {{ new Date().getFullYear() }}
        <a href="https://parastats.io">ParaStats</a> - Made with ❤️ by
        <a href="https://polkastats.io" target="_blank">PolkaStats</a>
      </p>
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
