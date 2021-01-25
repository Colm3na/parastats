<template>
  <div class="page home-page container-fluid py-3">
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
    <b-table striped hover :fields="fields" :items="projects" class="mt-3">
      <template #cell(name)="data">
        <img :src="data.item.logo" class="project-logo d-inline" />
        <h3 class="mt-2 d-inline">{{ data.item.name }}</h3>
      </template>
      <template #cell(project)="data">
        <h4 class="mt-2">{{ data.item.project }}</h4>
      </template>
      <template #cell(token)="data">
        <h4 class="mt-2">{{ data.item.token }}</h4>
      </template>
      <template #cell(leasePeriod)="data">
        <h4 class="mt-2">{{ data.item.leasePeriod }}</h4>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { key: 'name', label: 'NAME' },
        { key: 'project', label: 'PROJECT' },
        { key: 'description', label: 'DESCRIPTION' },
        { key: 'token', label: 'TOKEN' },
        { key: 'leasePeriod', label: 'LEASE PERIOD' },
        { key: 'name', label: 'NAME' },
        { key: 'name', label: 'NAME' },
      ],
      projects: [
        {
          logo: 'img/logo/Karura_400x400.jpg',
          name: 'Karura',
          project: 'Acala',
          website: 'https://acala.network/',
          description:
            'Karura Network is an unaudited and experimental release of Acala that will join the Kusama network as parachain',
          token: 'KAR',
          leasePeriod: 'TBA',
          includedInRococoV1: true,
        },
        {
          logo: 'img/logo/Moonbeam_400x400.jpg',
          name: 'Moonriver',
          project: 'Moonbeam',
          website: 'https://moonbeam.network/',
          description:
            'Moonbeam is much more than just an EVM implementation: it’s a highly specialized Layer 1.5 chain that mirrors Ethereum’s Web3 RPC, accounts, keys, subscriptions, logs, and more. The Moonbeam platform extends the base Ethereum feature set with additional features such as on-chain governance, staking, and cross-chain integrations.',
          token: 'RIVER',
          leasePeriod: 'TBA',
          includedInRococoV1: false,
        },
        {
          logo: 'img/logo/ChainX_400x400.jpg',
          name: 'SherpaX',
          project: 'ChainX',
          website: 'https://chainx.org/',
          description:
            'ChainX, one of the earliest projects to launch in the Polkadot ecosystem, is committed to the research and application of Bitcoin Layer 2 expansion, its growth as a digital asset gateway and becoming a Polkadot second-layer relay chain for cross-chain asset exchange. A true pioneer in the development of Bitcoin Cross-DeFi.',
          token: 'KSX',
          leasePeriod: 'TBA',
          includedInRococoV1: false,
        },
        {
          logo: 'img/logo/Darwinia_400x400.jpg',
          name: 'Darwinia Crab',
          project: 'Darwinia',
          website: 'https://darwinia.network/',
          description:
            'Darwinia Network is a decentralized cross-chain bridge protocol building on Substrate, which is the "Golden Gate Bridge" of the cross-chain ecology. It provides the safest heterogeneous cross-chain solution that does not rely on third-party multi-signatures, connecting Polkadot, Ethereum, TRON and other heterogeneous chains',
          token: 'CRING',
          leasePeriod: 'TBA',
          includedInRococoV1: true,
        },
        {
          logo: 'img/logo/BiFrost_400x400.jpg',
          name: 'BiFrost',
          project: 'BiFrost',
          website: 'https://thebifrost.io/',
          description:
            'A blockchain middleware platform that provides scalability, flexibility and interoperability for the success of DApps, and a platform that provides even BiFi, a multi-chain DeFi',
          token: 'BNC',
          leasePeriod: '6-12 months',
          includedInRococoV1: true,
        },
        {
          logo: 'img/logo/KILT_400x400.png',
          name: 'KILT',
          project: 'KILT',
          website: 'https://www.kilt.io/',
          description:
            'KILT is a Blockchain protocol for Self-Sovereign Data and Interoperability. It describes and attests any kind of characteristics in a standardised way',
          token: 'KILT',
          leasePeriod: '1 year',
          includedInRococoV1: true,
        },
        {
          logo: 'img/logo/Phala_400x400.jpg',
          name: 'Phala Network',
          project: 'Phala Network',
          website: 'https://phala.network/',
          description:
            'General-Purpose Confidential Smart Contract for DApps and DeFi',
          token: 'PHA',
          leasePeriod: '1 year',
          includedInRococoV1: true,
        },
        {
          logo: 'img/logo/Crust_400x400.jpg',
          name: 'Crust Maxwell',
          project: 'Crust Network',
          website: 'https://www.crust.network/',
          description:
            "CRUST provides a decentralized storage network of Web3 ecosystem. It supports multiple storage layer protocols such as IPFS, and exposes storage interfaces to application layer. Crust's technical stack is also capable of supporting a decentralized computing layer. It is designed to build a decentralized cloud ecosystem that values data privacy and ownership.",
          token: 'CRU',
          leasePeriod: 'TBA',
          includedInRococoV1: true,
        },
        {
          logo: 'img/logo/Plasm_400x400.jpg',
          name: 'Plasm Network',
          project: 'Plasm Network',
          website: 'https://www.plasmnet.io/',
          description: 'Plasm Network is a scaling dApps platform on Substrate',
          token: 'PLM',
          leasePeriod: 'TBA',
          includedInRococoV1: true,
        },
        {
          logo: 'img/logo/Robonomics_400x400.jpg',
          name: 'Robonomics',
          website: 'https://robonomics.network/',
          project: 'Robonomics Network',
          description:
            'Secure, сost-effective, and futuristic IoT platform for connecting robotics under Polkadot and Ethereum control',
          token: 'XRT',
          leasePeriod: 'TBA',
          includedInRococoV1: true,
        },
      ],
    }
  },
  head() {
    return {
      title: `ParaStats | Upcoming projects opting for a parachain in Kusama`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Upcoming projects opting for a parachain in Kusama',
        },
      ],
    }
  },
}
</script>
