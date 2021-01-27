<template>
  <div class="page crowdloans-page container py-3">
    <div>
      <h1 class="mb-4">Kusama Parachain Crowdloans</h1>
      <p>
        Kusama allows parachains to source KSM for their parachain bids in a
        decentralized crowdloan.
      </p>
      <p>
        Anyone can create a new crowdloan campaign for a parachain slot. A
        campaign is configured as a range of slots (i.e. the duration the
        parachain will bid for), a cap, and a duration. The duration can last
        over several auctions, meaning that the team will not need to restart
        the campaign just because they do not secure a slot on their first
        attempt.
      </p>
      <p>
        Each created campaign will have an index. Once a crowdloan campaign is
        open, anyone can participate by sending a special transaction that
        references the campaign's index. KSM used to participate must be
        transferable — that is, not locked for any reason, including staking,
        vesting, and governance — because they will be moved into a
        module-controlled account that was generated uniquely for this campaign.
      </p>
      <b-alert variant="warning" show>
        <h3>Important!</h3>
        <p class="pt-2">
          All crowdloan contributions are handled by the Crowdloan module’s
          logic where a campaign is identified by index, not by address.
        </p>
        <h5>Never transfer KSM to an address in support of a campaign!</h5>
      </b-alert>
      <p>
        It is up to individual parachain teams to decide if and how they want to
        reward participants who forgo staking and choose to lock their KSM in
        support of the parachain’s campaign. As one can imagine, rewards will
        take many forms and may vary widely among projects.
      </p>
      <p>
        During some point of the crowdloan campaign the owner will upload the
        parachain data. Ideally, the owner does this before soliciting
        contributions to the campaign so that the contributors can verify it.
        The data can only be uploaded once during the course of the campaign and
        it will be what is deployed as the parachain's runtime. Of course, once
        the parachain is running it can always change via runtime upgrades (as
        determined through its own local governance).
      </p>
      <p>
        If a crowdloan campaign is successful, that parachain will be on-boarded
        in Kusama. The collective KSM will be locked in that parachain's account
        for the entire duration that it is active (up to two years).
      </p>
      <p>Participants will be able to reclaim their KSM in one of two ways:</p>
      <ul>
        <li>
          If the campaign was successful, then the parachain will enter a
          retirement phase at the end of its lease. During this phase,
          participants can withdraw the KSM with which they participated.
        </li>
        <li>
          If the campaign was not successful, then this retirement phase will
          begin at the campaign's configured end, and participants can likewise
          withdraw their KSM.
        </li>
      </ul>
      <p>
        Note that withdrawing KSM requires a transaction for each participant.
        Anyone can make the transactions, so a parachain team could free every
        participant's KSM in a batch. Tokens that are not withdrawn within a
        certain amount of time will go to the Kusama Treasury.
      </p>
      <p>
        Several teams in the ecosystem are preparing dashboards to track
        auctions and crowdloan campaigns. Check back to this page for updates as
        these are released.
      </p>
      <b-alert variant="info" show>
        <h3>Source:</h3>
        <a
          href="https://wiki.polkadot.network/docs/en/learn-crowdloans"
          target="_blank"
          class="alert-link pt-2"
        >
          https://wiki.polkadot.network/docs/en/learn-crowdloans
        </a>
      </b-alert>
    </div>
  </div>
</template>

<script>
export default {}
</script>
