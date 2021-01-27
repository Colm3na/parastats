<template>
  <div class="page kusama-page container py-3">
    <div>
      <p class="text-center">
        <img
          src="/img/kusama-4.png"
          class="img-fluid"
          style="width: 100%; max-width: 400px"
        />
      </p>
      <h1 class="mb-4">What is Kusama?</h1>
      <p>
        <a href="https://kusama.network" target="_blank">Kusama</a> is an early,
        unaudited and unrefined release of
        <a href="https://polkadot.network" target="_blank">Polkadot</a>.
      </p>
      <p>
        Kusama is a canary-net: It is an early, highly experimental version of
        Polkadot presenting real economic conditions. It is not economically
        centralised and there's no central kill switch.
      </p>
      <b-alert variant="info" show>
        <h3>Source:</h3>
        <a
          href="https://kusama.network"
          target="_blank"
          class="alert-link pt-2"
        >
          https://kusama.network
        </a>
      </b-alert>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title:
        'What is Kusama? | ParaStats | Upcoming projects opting for a parachain in Kusama',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Kusama is an early, unaudited and unrefined release of Polkadot',
        },
      ],
    }
  },
}
</script>
