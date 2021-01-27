<template>
  <div class="page parachains-page container py-3">
    <div>
      <img src="/img/polkadot-architecture.png" class="img-fluid mb-4" />
      <h1 class="mb-4">What is a parachain?</h1>
      <p>
        A parachain is an application-specific data structure that is globally
        coherent and validatable by the validators of the Kusama Relay Chain.
        Most commonly a parachain will take the form of a blockchain, but there
        is no specific need for them to be actual blockchains. They take their
        name from the concept of parallelized chains that run parallel to the
        Relay Chain. Due to their parallel nature, they are able to parallelize
        transaction processing and achieve scalability of the Kusama network.
        They share in the security of the entire Kusama network and can
        communicate with other parachains through XCMP.
      </p>
      <h2 class="mb-4">Parachain Slot Acquisition</h2>
      <p>
        Kusama supports a limited number of parachains, currently estimated to
        be about 100. As the number of slots is limited, Kusama has several ways
        to allocate the slots:
      </p>
      <ul>
        <li>System level parachains</li>
        <li>Auction granted parachains</li>
        <li>Parathreads</li>
      </ul>
      <p>
        System parachains are those deemed as a "common good" for the network,
        such as bridges to other networks or chains that remove functionality
        from the Relay Chain, e.g. a governance parachain. These typically do
        not have an economic model of their own and help remove transactions
        from the Relay Chain, allowing for more efficient parachain processing.
      </p>
      <p>
        Auction granted parachains are granted in a permissionless auction.
        Parachain teams can either bid with their own DOT tokens, or source them
        from the community using the crowdloan functionality.
      </p>
      <p>
        Parathreads have the same API as parachains, but are scheduled for
        execution on a pay-as-you-go basis with an auction for each block.
      </p>
      <h3 class="mb-4">Slot Expiration</h3>
      <p>
        When a parachain wins an auction, the DOT that it bid gets reserved
        until the end of the lease. Reserved balances are non-transferrable and
        cannot be used for staking. At the end of the lease, the DOT is
        unreserved. Parachains that have not secured a new lease to extend their
        slot will automatically become parathreads.
      </p>
      <b-alert variant="info" show>
        <h3>Source:</h3>
        <a
          href="https://wiki.polkadot.network/docs/en/learn-parachains"
          target="_blank"
          class="alert-link pt-2"
        >
          https://wiki.polkadot.network/docs/en/learn-parachains
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
        'Kusama Parachains | ParaStats | Upcoming projects opting for a parachain in Kusama',
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
