<template>
  <div class="page home-page container-fluid py-3">
    <Countdown />
    <div class="header text-center">
      <h1 class="title mt-1 mb-5">
        UPCOMING <span class="text-secondary">PROJECTS</span> OPTING FOR A
        <span class="text-secondary">PARACHAIN</span> ON
        <img class="kusama-logo" src="/img/logo/kusama.svg" />
      </h1>
    </div>
    <!-- Filter -->
    <b-row>
      <b-col md="3">
        <b-form-input
          id="filterInput"
          v-model="filter"
          type="search"
          placeholder="Search project"
          debounce="500"
          class="mb-3"
        />
      </b-col>
      <b-col md="9" class="text-right">
        <p class="pt-2 text-light">
          Showing: {{ filteredRows }} / {{ projects.length }}
        </p>
      </b-col>
    </b-row>
    <b-table
      hover
      :fields="fields"
      :items="projects"
      class="mt-3"
      :filter="filter"
      :filter-included-fields="filterOn"
      :per-page="perPage"
      :current-page="currentPage"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      @filtered="onFiltered"
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
          <b-badge
            pill
            variant="secondary"
            class="category mb-3 mt-1"
            style="font-size: 1.2rem"
          >
            {{ data.item.category }}
          </b-badge>
          <p class="text-light">{{ data.item.description }}</p>
          <p class="py-2">
            <span class="mr-2">TAGS:</span>
            <b-badge
              v-for="tag in data.item.tags"
              :key="tag"
              pill
              variant="primary"
              class="mr-2 mb-2"
              style="font-size: 1rem"
              >{{ tag }}</b-badge
            >
          </p>
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
      <template #cell(category)="data">
        <b-badge pill variant="secondary" style="font-size: 1.2rem">
          {{ data.item.category }}
        </b-badge>
      </template>
      <template #cell(token)="data">
        <h4>{{ data.item.token }}</h4>
      </template>
      <template #cell(leasePeriod)="data">
        <h5>{{ data.item.leasePeriod }}</h5>
      </template>
    </b-table>
    <!-- page size and pagination -->
    <div class="row">
      <div class="col-6">
        <!-- desktop -->
        <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block">
          <b-button-group>
            <b-button
              :variant="perPage === 10 ? 'outline-primary' : 'outline-light'"
              :class="{ 'selected-per-page': perPage === 10 }"
              @click="setPageSize(10)"
              >10</b-button
            >
            <b-button
              :variant="perPage === 20 ? 'outline-primary' : 'outline-light'"
              :class="{ 'selected-per-page': perPage === 20 }"
              @click="setPageSize(10)"
              >20</b-button
            >
            <b-button
              :variant="perPage === 50 ? 'outline-primary' : 'outline-light'"
              :class="{ 'selected-per-page': perPage === 50 }"
              @click="setPageSize(50)"
              >50</b-button
            >
            <b-button
              :variant="perPage === 1000 ? 'outline-primary' : 'outline-light'"
              :class="{ 'selected-per-page': perPage === 1000 }"
              @click="setPageSize(1000)"
              >All</b-button
            >
          </b-button-group>
        </div>
        <!-- mobile -->
        <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none">
          <b-dropdown class="m-md-2" text="Page size" variant="outline-light">
            <b-dropdown-item @click="setPageSize(10)">10</b-dropdown-item>
            <b-dropdown-item @click="setPageSize(10)">20</b-dropdown-item>
            <b-dropdown-item @click="setPageSize(50)">50</b-dropdown-item>
            <b-dropdown-item @click="setPageSize(1000)">All</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      <div class="col-6">
        <b-pagination
          v-model="currentPage"
          :total-rows="filteredRows"
          :per-page="perPage"
          aria-controls="my-table"
          variant="light"
          align="right"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Countdown from '@/components/Countdown'
import { config } from '@/config.js'
export default {
  components: {
    Countdown,
  },
  data() {
    return {
      projects: config.projects,
      perPage: 20,
      currentPage: 1,
      sortBy: 'name',
      sortDesc: false,
      filter: null,
      filterOn: [],
      rows: 0,
      fields: [
        { key: 'name', label: 'NAME' },
        {
          key: 'category',
          label: 'CATEGORY',
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
  computed: {
    filteredRows() {
      return this.filter ? this.rows : this.projects.length
    },
  },
  methods: {
    onRowClicked(project) {
      this.$router.push({
        path: `/project/${project.slug}`,
      })
    },
    onFiltered(filteredItems) {
      this.rows = filteredItems.length
      this.currentPage = 1
    },
    setPageSize(size) {
      this.perPage = size
    },
  },
}
</script>
