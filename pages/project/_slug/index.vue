<template>
  <div class="page project-page container pt-3">
    <nuxt-link to="/"
      ><b-icon-arrow-left></b-icon-arrow-left> Return to project list</nuxt-link
    >
    <div class="text-center">
      <img :src="project.logo" class="project-logo" />
      <h2>{{ project.name }}</h2>
      <p class="text-light">{{ project.description }}</p>
      <h5>
        TOKEN: <span class="text-light">{{ project.token }}</span>
      </h5>
      <h5>
        LEASE PERIOD:
        <span class="text-light">{{ project.leasePeriod }}</span>
      </h5>
      <h5>
        INCLUDED IN ROCOCO V1:
        <span class="text-light">{{
          project.includedInRococoV1 ? 'Yes' : 'No'
        }}</span>
      </h5>
    </div>
  </div>
</template>

<script>
import { BIconArrowLeft } from 'bootstrap-vue'
import { config } from '@/config.js'
export default {
  components: {
    BIconArrowLeft,
  },
  data() {
    return {
      config,
      project:
        config.projects.find(
          (project) => project.slug === this.$route.params.slug
        ) || undefined,
      slug: this.$route.params.slug,
    }
  },
  head() {
    return {
      title: `Project ${this.project.name} | ParaStats`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.description,
        },
      ],
    }
  },
}
</script>
