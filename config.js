export const config = {
  title: 'ParaStats',
  nodeWs: 'wss://kusama-rpc.polkadot.io',
  theme: '@/assets/scss/themes/parastats.scss',
  logo: '/img/logo/kusama.svg',
  favicon: '/img/favicon/kusama.ico',
  baseURL: '/',
  googleAnalytics: 'G-TNJE563YY2',
  projects: [
    {
      logo: '/img/logo/Sora_400x400.jpg',
      name: 'SORA',
      slug: 'sora',
      category: 'DeFi',
      tags: ['DEX'],
      sisterOf: {
        name: 'SORA',
        logo: '/img/logo/Sora_400x400.jpg',
        website: 'https://www.sora.org/',
      },
      website: 'https://www.sora.org/',
      twitter: 'https://twitter.com/sora_xor',
      telegram: 'https://t.me/sora_xor',
      discord: '',
      medium: 'https://polkaswap.medium.com/',
      github: 'https://github.com/soramitsu',
      youtube: 'https://www.youtube.com/channel/UCrsYZWoAqvkXSFBvTp2c3KA',
      description:
        'SORA is both a new economic system that decentralizes the concept of a central bank as well as a network that implements a new way to architect a parachain blockchain that connects to the Polkadot relay chain and ecosystem with in-built tools focused on DeFi.',
      token: 'PSWAP',
      leasePeriod: '2 years',
      rococoV1: {
        included: false,
        link: '',
      },
    },
    {
      logo: '/img/logo/Subsocial_400x400.png',
      name: 'Subsocial',
      slug: 'subsocial',
      category: 'Social Network',
      tags: ['crypto marketplace', 'ipfs'],
      sisterOf: {
        name: 'Subsocial',
        logo: '/img/logo/Subsocial_400x400.png',
        website: 'https://subsocial.network/',
      },
      website: 'https://subsocial.network/',
      twitter: 'https://twitter.com/SubsocialChain',
      telegram: 'https://t.me/Subsocial',
      discord: '',
      medium: 'https://medium.com/@alex_siman',
      github: 'https://github.com/dappforce/',
      youtube: 'https://www.youtube.com/channel/UC1xCFynfwMrjEtFdMf8nXgQ',
      description:
        "An open platform for decentralized social networks and marketplaces. It's censorship-resistant and has built-in monetization methods. Built with Polkadot and IPFS tech stack",
      token: 'SMN',
      leasePeriod: 'TBA',
      rococoV1: {
        included: false,
        link: '',
      },
    },
    {
      logo: '/img/logo/Karura_400x400.jpg',
      name: 'Karura',
      slug: 'karura',
      category: 'DeFi',
      tags: ['liquid staking', 'stablecoin', 'DEX', 'lending', 'borrowing'],
      sisterOf: {
        name: 'Acala Network',
        logo: '/img/logo/Acala_400x400.jpg',
        website: 'https://acala.network/',
      },
      website: 'https://acala.network/karura-crowdloan',
      twitter: 'https://twitter.com/KaruraNetwork',
      telegram: 'https://t.me/KaruraNetwork',
      discord: 'https://discord.com/invite/HpsZx5r',
      medium: 'https://medium.com/acalanetwork',
      github: 'https://github.com/AcalaNetwork',
      youtube: '',
      description:
        'Karura Network is an unaudited and experimental release of Acala that will join the Kusama network as parachain',
      token: 'KAR',
      leasePeriod: '6, 12 or 24 months',
      rococoV1: {
        included: true,
        link:
          'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-1.acala.laminar.one%2Fws#/accounts',
      },
    },
    {
      logo: '/img/logo/Moonbeam_400x400.jpg',
      name: 'Moonriver Network',
      slug: 'moonriver-network',
      category: 'Smart Contracts',
      tags: ['ethereum', 'solidity'],
      sisterOf: {
        name: 'Moonbeam Network',
        logo: '/img/logo/Moonbeam_400x400.jpg',
        website: 'https://moonbeam.network/',
      },
      website: 'https://moonbeam.network/networks/moonriver/river-token/',
      twitter: 'https://twitter.com/moonbeamnetwork',
      telegram: 'https://t.me/Moonbeam_Official',
      discord: 'https://discord.com/invite/PfpUATX',
      medium: 'https://medium.com/moonbeam-network',
      github: 'https://github.com/PureStake/moonbeam',
      youtube: '',
      description:
        'Moonbeam is much more than just an EVM implementation: it’s a highly specialized Layer 1.5 chain that mirrors Ethereum’s Web3 RPC, accounts, keys, subscriptions, logs, and more. The Moonbeam platform extends the base Ethereum feature set with additional features such as on-chain governance, staking, and cross-chain integrations.',
      token: 'RIVER',
      leasePeriod: 'TBA',
      rococoV1: {
        included: false,
        link: '',
      },
    },
    {
      logo: '/img/logo/ChainX_400x400.jpg',
      name: 'SherpaX',
      slug: 'sherpax',
      category: 'Bridge',
      tags: ['bitcoin'],
      sisterOf: {
        name: 'ChainX',
        logo: '/img/logo/ChainX_400x400.jpg',
        website: 'https://chainx.org/',
      },
      website:
        'https://chainx-org.medium.com/chainx-kusama-parachain-sherpax-light-paper-5341ff855c9c',
      twitter: 'https://twitter.com/chainx_org',
      telegram: 'https://t.me/chainx_org',
      discord: '',
      medium: 'https://chainx-org.medium.com/',
      github: 'https://github.com/chainx-org/ChainX',
      youtube: '',
      description:
        'ChainX, one of the earliest projects to launch in the Polkadot ecosystem, is committed to the research and application of Bitcoin Layer 2 expansion, its growth as a digital asset gateway and becoming a Polkadot second-layer relay chain for cross-chain asset exchange',
      token: 'KSX',
      leasePeriod: 'TBA',
      rococoV1: {
        included: false,
        link: '',
      },
    },
    {
      logo: '/img/logo/Darwinia_400x400.jpg',
      name: 'Darwinia Crab',
      slug: 'darwinia',
      category: 'Bridge',
      tags: ['ethereum', 'TRON'],
      sisterOf: {
        name: 'Darwinia Network',
        logo: '/img/logo/Darwinia_400x400.jpg',
        website: 'https://darwinia.network/',
      },
      website: 'https://darwinia.network/',
      twitter: 'https://twitter.com/DarwiniaNetwork',
      telegram: 'https://t.me/DarwiniaNetwork',
      discord: '',
      medium: 'https://medium.com/@DarwiniaNetwork',
      github: 'https://github.com/darwinia-network',
      youtube: '',
      description:
        'Darwinia Network is a decentralized cross-chain bridge protocol building on Substrate, which is the "Golden Gate Bridge" of the cross-chain ecology. It provides the safest heterogeneous cross-chain solution that does not rely on third-party multi-signatures, connecting Polkadot, Ethereum, TRON and other heterogeneous chains',
      token: 'CRING',
      leasePeriod: 'TBA',
      rococoV1: {
        included: true,
        link:
          'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fparachain-rpc.darwinia.network#/accounts',
      },
    },
    {
      logo: '/img/logo/BiFrost_400x400.jpg',
      name: 'BiFrost',
      slug: 'bifrost',
      category: 'DeFi',
      tags: ['ethereum', 'TRON'],
      sisterOf: {
        name: 'BiFrost',
        logo: '/img/logo/BiFrost_400x400.jpg',
        website: 'https://thebifrost.io/',
      },
      website: 'https://thebifrost.io/',
      twitter: 'https://twitter.com/bifrostio',
      telegram: 'https://t.me/Bifrost_Global',
      discord: '',
      medium: 'https://medium.com/bifrost',
      github: '',
      youtube: 'https://www.youtube.com/channel/UCYm4MGAGGGFUdykEr3JlHoA',
      description:
        'A blockchain middleware platform that provides scalability, flexibility and interoperability for the success of DApps, and a platform that provides even BiFi, a multi-chain DeFi',
      token: 'BNC',
      leasePeriod: '6-12 months',
      rococoV1: {
        included: true,
        link:
          'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-1.testnet.liebi.com#/accounts',
      },
    },
    {
      logo: '/img/logo/KILT_400x400.png',
      name: 'KILT Protocol',
      slug: 'kilt-protocol',
      category: 'Self-Sovereign Data and Identity',
      tags: [],
      sisterOf: {
        name: 'KILT Protocol',
        logo: '/img/logo/KILT_400x400.png',
        website: 'https://www.kilt.io/',
      },
      website: 'https://www.kilt.io/',
      twitter: 'https://twitter.com/Kiltprotocol',
      telegram: 'https://t.me/KILTProtocolChat',
      discord: '',
      medium: 'https://kilt-protocol.medium.com/',
      github: 'https://github.com/KILTprotocol',
      youtube: 'https://www.youtube.com/channel/UC5ihHD8UyGGx0oLZt78429w',
      description:
        'KILT is a Blockchain protocol for Self-Sovereign Data and Interoperability. It describes and attests any kind of characteristics in a standardised way',
      token: 'KILT',
      leasePeriod: '1 year',
      rococoV1: {
        included: true,
        link:
          'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpara.rococo-v1.kilt.io#/accounts',
      },
    },
    {
      logo: '/img/logo/Phala_400x400.jpg',
      name: 'Phala Network',
      slug: 'phala-network',
      category: 'Privacy',
      tags: [],
      sisterOf: {
        name: 'Phala Network',
        logo: '/img/logo/Phala_400x400.jpg',
        website: 'https://phala.network/',
      },
      website: 'https://phala.network/',
      twitter: 'https://twitter.com/PhalaNetwork',
      telegram: 'https://t.me/phalanetwork',
      discord: '',
      medium: 'https://medium.com/phala-network',
      github: 'https://github.com/Phala-Network',
      youtube: '',
      description:
        'General-Purpose Confidential Smart Contract for DApps and DeFi',
      token: 'PHA',
      leasePeriod: '1 year',
      rococoV1: {
        included: true,
        link:
          'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococov1.phala.network%2Fws#/accounts',
      },
    },
    {
      logo: '/img/logo/Crust_400x400.jpg',
      name: 'Crust Maxwell',
      slug: 'crust-maxwell',
      category: 'Decentralized Storage',
      tags: [],
      sisterOf: {
        name: 'Crust Network',
        logo: '/img/logo/Crust_400x400.jpg',
        website: 'https://www.crust.network/',
      },
      website: 'https://www.crust.network/',
      twitter: 'https://twitter.com/CrustNetwork',
      telegram: 'https://t.me/CrustNetwork',
      discord: '',
      medium: 'https://medium.com/@CrustNetwork',
      github: 'https://github.com/crustio',
      youtube: '',
      description:
        "CRUST provides a decentralized storage network of Web3 ecosystem. It supports multiple storage layer protocols such as IPFS, and exposes storage interfaces to application layer. Crust's technical stack is also capable of supporting a decentralized computing layer",
      token: 'CRU',
      leasePeriod: 'TBA',
      rococoV1: {
        included: true,
        link:
          'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fapi-rococo.crust.network#/accounts',
      },
    },
    {
      logo: '/img/logo/Shiden_400x400.jpg',
      name: 'Shiden Network',
      slug: 'shiden-network',
      category: 'Smart Contracts',
      tags: ['layer 2'],
      sisterOf: {
        name: 'Plasm Network',
        logo: '/img/logo/Plasm_400x400.jpg',
        website: 'https://www.plasmnet.io/',
      },
      website: 'https://www.plasmnet.io/',
      twitter: 'https://twitter.com/ShidenNetwork',
      telegram: 'https://t.me/PlasmOfficial',
      discord: 'https://discordapp.com/invite/Dnfn5eT',
      medium: 'https://medium.com/plasm-network',
      github: 'https://github.com/PlasmNetwork',
      youtube: '',
      description:
        'Shiden Network is a smart contract platform on Kusama Network that supports Ethereum and layer2 technologies like Rollups',
      token: 'SDN',
      leasePeriod: 'TBA',
      rococoV1: {
        included: true,
        link:
          'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.rococo.plasmnet.io#/accounts',
      },
    },
    {
      logo: '/img/logo/Robonomics_400x400.jpg',
      name: 'Robonomics',
      slug: 'robonomics-network',
      category: 'Robotics',
      tags: [],
      sisterOf: {
        name: 'Robonomics',
        logo: '/img/logo/Robonomics_400x400.jpg',
        website: 'https://robonomics.network/',
      },
      website: 'https://robonomics.network/',
      twitter: 'https://twitter.com/AIRA_Robonomics',
      telegram: 'https://t.me/robonomics',
      discord: 'https://discordapp.com/invite/Dnfn5eT',
      medium: 'https://blog.aira.life/',
      github: 'https://github.com/airalab',
      youtube: 'https://www.youtube.com/c/Airalab',
      description:
        'Secure, сost-effective, and futuristic IoT platform for connecting robotics under Polkadot and Ethereum control',
      token: 'XRT',
      leasePeriod: 'TBA',
      rococoV1: {
        included: true,
        link:
          'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo.parachain.robonomics.network#/accounts',
      },
    },
    {
      logo: '/img/logo/Encointer_400x400.png',
      name: 'Encointer',
      slug: 'encointer',
      category: 'Universal Basic Income',
      tags: [],
      sisterOf: {
        name: 'Encointer',
        logo: '/img/logo/Encointer_400x400.png',
        website: 'https://encointer.org/',
      },
      website: 'https://encointer.org/',
      twitter: 'https://twitter.com/encointer',
      telegram: '',
      discord: '',
      medium: '',
      github: '',
      youtube: '',
      description:
        'Encointer is a fundamental redesign of money. Based on the principle of equal opportunity every human gets a universal basic income and a digital ID without relying on a central authority',
      token: 'ERT',
      leasePeriod: 'TBA',
      rococoV1: {
        included: true,
        link:
          'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo.encointer.org#/accounts',
      },
    },
    {
      logo: '/img/logo/Zero_400x400.jpg',
      name: 'Zero',
      slug: 'zero',
      category: 'Gaming Protocol',
      tags: [],
      sisterOf: {
        name: 'Zero',
        logo: '/img/logo/Zero_400x400.jpg',
        website: 'https://zero.io',
      },
      website: 'https://zero.io',
      twitter: 'https://twitter.com/zerodotio',
      telegram: '',
      discord: 'https://discord.com/invite/rhwtr7p',
      medium: 'https://github.com/playzero',
      github: '',
      youtube: '',
      description:
        'ZERO is a multichain network providing asset, finance, governance protocols, a metaverse hypergraph and unique functionality tailored for the videogame, content and esports economy utilizing the native platform token PLAY',
      token: 'PLAY',
      leasePeriod: 'TBA',
      rococoV1: {
        included: true,
        link:
          'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo.encointer.org#/accounts',
      },
    },
  ],
}
