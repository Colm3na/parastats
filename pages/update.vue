<template>
  <div class="page parachains-page container py-3">
    <div>
      <h1 class="mb-4">Update data</h1>

      <h3 class="mb-4">Add a new project</h3>
      <p>
        If you want to add a project, please send a tweet including the name of
        the project to
        <a href="https://twitter.com/PolkaStats" target="_blank">@PolkaStats</a
        >.
      </p>
      <b-alert variant="warning" show>
        Please note that this list is only for projects that have the intention
        to participate in the Kusama parachain slot auction or crowdloan.
        Thanks!
      </b-alert>
      <h3 class="mb-4">Update project info</h3>
      <p>
        If you find any incorrect or want to add anything, please send a tweet
        including the project name and proper details to
        <a href="https://twitter.com/PolkaStats" target="_blank">@PolkaStats</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Kusama Parachains | ParaStats | Update data',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A parachain is an application-specific data structure that is globally coherent and validatable by the validators of the Kusama Relay Chain.',
        },
      ],
    }
  },
}
</script>
