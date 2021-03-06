<template>
  <div class="page project-page container pt-3">
    <div class="row mb-4">
      <div class="col-6">
        <nuxt-link
          v-if="getPrev()"
          v-b-tooltip.hover
          :to="getPrev()"
          title="Navigate to previous project"
        >
          <font-awesome-icon icon="chevron-left" size="2x" />
        </nuxt-link>
      </div>
      <div class="col-6 text-right">
        <nuxt-link
          v-if="getNext()"
          v-b-tooltip.hover
          :to="getNext()"
          title="Navigate to next project"
        >
          <font-awesome-icon icon="chevron-right" size="2x" />
        </nuxt-link>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 mb-4">
        <p class="text-center">
          <img :src="project.logo" class="project-logo" />
        </p>
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
        <b-badge
          pill
          variant="secondary"
          class="mb-4"
          style="font-size: 1.5rem"
        >
          {{ project.category }}
        </b-badge>
        <p class="text-light">{{ project.description }}</p>
        <p class="py-2">
          <span class="mr-2">TAGS:</span>
          <b-badge
            v-for="tag in project.tags"
            :key="tag"
            pill
            variant="primary"
            class="mr-2 mb-2"
            style="font-size: 1rem"
            >{{ tag }}</b-badge
          >
        </p>
        <div class="row project-detail">
          <div class="col-6">SISTER OF:</div>
          <div class="col-6">
            <a :href="project.sisterOf.website" target="_blank">
              <img :src="project.sisterOf.logo" class="sisterof-logo" />
              {{ project.sisterOf.name }}
            </a>
          </div>
        </div>
        <div class="row project-detail">
          <div class="col-6">TOKEN:</div>
          <div class="col-6">
            <span class="text-light">{{ project.token }}</span>
          </div>
        </div>
        <div class="row project-detail">
          <div class="col-6">LEASE PERIOD:</div>
          <div class="col-6">
            <span class="text-light">{{ project.leasePeriod }}</span>
          </div>
        </div>
        <div class="row project-detail">
          <div class="col-6">INCLUDED IN ROCOCO V1:</div>
          <div class="col-6">
            <span class="text-light">{{
              project.rococoV1.included ? 'Yes' : 'No'
            }}</span>
          </div>
        </div>
        <div v-if="project.rococoV1.included" class="row project-detail">
          <div class="col-6">ROCOCO V1 LINK:</div>
          <div class="col-6">
            <a
              v-if="project.rococoV1.included && project.rococoV1.link"
              :href="project.rococoV1.link"
              target="_blank"
              >[ link ]</a
            >
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <Timeline
          :id="project.twitter.split('/')[3]"
          source-type="profile"
          :options="{ theme: 'dark', tweetLimit: '2' }"
        />
      </div>
    </div>
    <p>
      <b-button variant="outline-primary" to="/"
        ><b-icon-arrow-left></b-icon-arrow-left> Return to project
        list</b-button
      >
    </p>
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
      title: `Project ${this.project.name} | ParaStats | Upcoming projects opting for a parachain in Kusama`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.description,
        },
      ],
    }
  },
  computed: {
    projects() {
      const { projects } = this.config
      return projects.sort(function (a, b) {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
      })
    },
  },
  methods: {
    getPrev() {
      const index = this.projects.findIndex(({ slug }) => slug === this.slug)
      if (index === 0) {
        return undefined
      }
      const slug = this.projects[index - 1].slug
      return `/project/${slug}`
    },
    getNext() {
      const index = this.projects.findIndex(({ slug }) => slug === this.slug)
      if (index === this.projects.length - 1) {
        return undefined
      }
      const slug = this.projects[index + 1].slug
      return `/project/${slug}`
    },
  },
}
</script>
