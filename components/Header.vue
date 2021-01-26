<template>
  <div class="container-fluid header">
    <div class="row">
      <div class="col-md-2">
        <img class="kusama-canary" src="/img/logo/kusama-canary.svg" />
      </div>
      <div class="col-md-10">
        <h1 class="title mt-3">
          UPCOMING <span class="text-secondary">PROJECTS</span> OPTING FOR A
          <span class="text-secondary">PARACHAIN</span> ON
          <img class="kusama-logo" src="/img/logo/kusama.svg" />
        </h1>
      </div>
    </div>
  </div>
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
