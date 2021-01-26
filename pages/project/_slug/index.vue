<template>
  <div class="page project-page container pt-3">
    <nuxt-link to="/"
      ><b-icon-arrow-left></b-icon-arrow-left> Return to project list</nuxt-link
    >
    <div class="row">
      <div class="col-md-8 text-center">
        <img :src="project.logo" class="project-logo" />
        <h2>{{ project.name }}</h2>
        <div class="social my-4">
          <span v-if="project.website" class="mr-3">
            <a :href="project.website" target="_blank">
              <font-awesome-icon icon="link" size="lg" />
            </a>
          </span>
          <span v-if="project.twitter" class="mr-3">
            <a :href="project.twitter" target="_blank">
              <font-awesome-icon :icon="['fab', 'twitter']" size="lg" />
            </a>
          </span>
          <span v-if="project.telegram" class="mr-3">
            <a :href="project.telegram" target="_blank">
              <font-awesome-icon :icon="['fab', 'telegram']" size="lg" />
            </a>
          </span>
          <span v-if="project.discord" class="mr-3">
            <a :href="project.discord" target="_blank">
              <font-awesome-icon :icon="['fab', 'discord']" size="lg" />
            </a>
          </span>
          <span v-if="project.medium" class="mr-3">
            <a :href="project.medium" target="_blank">
              <font-awesome-icon :icon="['fab', 'medium']" size="lg" />
            </a>
          </span>
          <span v-if="project.github" class="mr-3">
            <a :href="project.github" target="_blank">
              <font-awesome-icon :icon="['fab', 'github']" size="lg" />
            </a>
          </span>
          <span v-if="project.youtube">
            <a :href="project.youtube" target="_blank">
              <font-awesome-icon :icon="['fab', 'youtube']" size="lg" />
            </a>
          </span>
        </div>
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
            project.rococoV1.included ? 'Yes' : 'No'
          }}</span>
          <a
            :href="project.rococoV1.link"
            v-if="project.rococoV1.included && project.rococoV1.link"
            target="_blank"
            >[ link ]</a
          >
        </h5>
      </div>
      <div class="col-md-4">
        <Timeline
          :id="project.twitter.split('/')[3]"
          sourceType="profile"
          :options="{ theme: 'dark', tweetLimit: '3' }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { BIconArrowLeft } from 'bootstrap-vue'
import { Timeline } from 'vue-tweet-embed'
import { config } from '@/config.js'
export default {
  components: {
    BIconArrowLeft,
    Timeline,
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
