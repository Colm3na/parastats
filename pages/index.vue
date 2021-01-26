<template>
  <div class="page home-page container-fluid py-3">
    <div class="header text-center">
      <h1 class="title mt-2 mb-4">
        UPCOMING <span class="text-secondary">PROJECTS</span> OPTING FOR A
        <span class="text-secondary">PARACHAIN</span> ON
        <img class="kusama-logo" src="/img/logo/kusama.svg" />
      </h1>
    </div>
    <b-table
      hover
      :fields="fields"
      :items="projects"
      class="mt-3"
      @row-clicked="onRowClicked"
    >
      <template #cell(name)="data">
        <!-- desktop -->
        <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block">
          <img :src="data.item.logo" class="project-logo d-inline" />
          <h3 class="d-inline">{{ data.item.name }}</h3>
        </div>
        <!-- mobile -->
        <div
          class="d-block d-sm-block d-md-block d-lg-none d-xl-none text-center"
        >
          <img :src="data.item.logo" class="project-logo-mobile" />
          <h3>{{ data.item.name }}</h3>
          <p class="text-light">{{ data.item.description }}</p>
          <h5>
            SISTER OF:
            <span class="text-light">{{ data.item.sisterOf.name }}</span>
          </h5>
          <h5>
            TOKEN: <span class="text-light">{{ data.item.token }}</span>
          </h5>
          <h5>
            LEASE PERIOD:
            <span class="text-light">{{ data.item.leasePeriod }}</span>
          </h5>
        </div>
      </template>
      <template #cell(sisterOf)="data">
        <img :src="data.item.sisterOf.logo" class="sisterof-logo d-inline" />
        <h4 class="d-inline">{{ data.item.sisterOf.name }}</h4>
      </template>
      <template #cell(token)="data">
        <h4>{{ data.item.token }}</h4>
      </template>
      <template #cell(leasePeriod)="data">
        <h5>{{ data.item.leasePeriod }}</h5>
      </template>
    </b-table>
  </div>
</template>

<script>
import { config } from '@/config.js'
export default {
  data() {
    return {
      projects: config.projects,
      fields: [
        { key: 'name', label: 'NAME' },
        {
          key: 'sisterOf',
          label: 'SISTER OF',
          class:
            'text-center d-none d-sm-none d-md-none d-lg-table-cell d-xl-table-cell',
        },
        {
          key: 'description',
          label: 'DESCRIPTION',
          class:
            'text-center d-none d-sm-none d-md-none d-lg-table-cell d-xl-table-cell',
        },
        {
          key: 'token',
          label: 'TOKEN',
          class:
            'text-center d-none d-sm-none d-md-none d-lg-table-cell d-xl-table-cell',
        },
        {
          key: 'leasePeriod',
          label: 'LEASE PERIOD',
          class:
            'text-center d-none d-sm-none d-md-none d-lg-table-cell d-xl-table-cell',
        },
        {
          key: 'name',
          label: 'NAME',
          class:
            'text-center d-none d-sm-none d-md-none d-lg-table-cell d-xl-table-cell',
        },
        {
          key: 'name',
          label: 'NAME',
          class:
            'text-center d-none d-sm-none d-md-none d-lg-table-cell d-xl-table-cell',
        },
      ],
    }
  },
  head() {
    return {
      title: 'ParaStats | Upcoming projects opting for a parachain in Kusama',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Upcoming projects opting for a parachain in Kusama',
        },
      ],
    }
  },
  methods: {
    onRowClicked(project) {
      this.$router.push({
        path: `/project/${project.slug}`,
      })
    },
  },
}
</script>
