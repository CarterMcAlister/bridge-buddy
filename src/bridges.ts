export interface Chain {
  name: string
  symbol: string
  logo: string
}

export const chains = {
  ETH: {
    name: 'Ethereum',
    symbol: 'ETH',
    logo: '',
  },
  OP: {
    name: 'Optimism',
    symbol: 'OP',
    logo: '',
  },
  ARBI: {
    name: 'Arbitrum',
    symbol: 'ARBI',
    logo: '',
  },
  MATIC: {
    name: 'Polygon',
    symbol: 'MATIC',
    logo: '',
  },
  AVAX: {
    name: 'Avalanche',
    symbol: 'AVAX',
    logo: '',
  },
  SOL: {
    name: 'Solana',
    symbol: 'SOL',
    logo: '',
  },
  BSC: {
    name: 'Binance Smart Chain',
    symbol: 'BSC',
    logo: '',
  },
  STAKE: {
    name: 'xDai',
    symbol: 'STAKE',
    logo: '',
  },
  FTM: {
    name: 'Fantom',
    symbol: 'FTM',
    logo: '',
  },
  MOVR: {
    name: 'Moonriver',
    symbol: 'MOVR',
    logo: '',
  },
  LUNA: {
    name: 'Terra',
    symbol: 'LUNA',
    logo: '',
  },
  DOT: {
    name: 'Polkadot',
    symbol: 'DOT',
    logo: '',
  },
  ATOM: {
    name: 'Cosmos',
    symbol: 'ATOM',
    logo: '',
  },
  BTC: {
    name: 'Bitcoin',
    symbol: 'BTC',
    logo: '',
  },
  ONE: {
    name: 'Harmony',
    symbol: 'ONE',
    logo: '',
  },
  CELO: {
    name: 'Celo',
    symbol: 'CELO',
    logo: '',
  },
  NEAR: {
    name: 'Near',
    symbol: 'NEAR',
    logo: '',
  },
  AR: {
    name: 'Arweave',
    symbol: 'AR',
    logo: '',
  },
  HBT: {
    name: 'Habitat',
    symbol: 'HBT',
    logo: '',
  },
}

type ChainId = keyof typeof chains

export interface Bridge {
  name: string
  address: string
  url: string
  logo: string
  chains: ChainId[]
}

export const bridges: Bridge[] = [
  {
    name: 'OxHabitat',
    address: '0x96E471B5945373dE238963B4E032D3574be4d195',
    url: 'https://0xhabitat.org/app/#habitat-account',
    logo: 'https://assets.coingecko.com/coins/images/14456/large/habitat-logo.png',
    chains: ['ETH', 'HBT'],
  },
  {
    name: 'Anyswap',
    address: '0x96E471B5945373dE238963B4E032D3574be4d195',
    url: 'https://anyswap.exchange/#/router',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'BSC', 'MATIC', 'FTM', 'ARBI', 'AVAX', 'MOVR'], // todo: missing some networks
  },
  {
    name: 'Arbitrum',
    address: '0x96E471B5945373dE238963B4E032D3574be4d195',
    url: 'https://bridge.arbitrum.io/',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'ARBI'],
  },
  {
    name: 'Avalanche',
    address: '0x96E471B5945373dE238963B4E032D3574be4d195',
    url: 'https://bridge.avax.network/',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'AVAX'],
  },
  {
    name: 'Axie Infinity: Ronin',
    address: '0x96E471B5945373dE238963B4E032D3574be4d195',
    url: 'https://bridge.roninchain.com/',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'RONIN'],
  },
  {
    name: 'Aztec',
    address: '0x96E471B5945373dE238963B4E032D3574be4d195',
    url: 'https://aztec.network/',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH'],
  },
  {
    name: 'Biconomy: Hyphen Bridge',
    address: '0x96E471B5945373dE238963B4E032D3574be4d195',
    url: 'https://hyphen.biconomy.io/',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'MATIC'],
  },
  {
    name: 'Celer Network: cBridge',
    address: '0x96E471B5945373dE238963B4E032D3574be4d195',
    url: 'https://cbridge.celer.network/#/transfer',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: [
      'ETH',
      'MATIC',
      'STAKE',
      'AVAX',
      'ARBI',
      'FTM',
      'OP',
      'BSC',
      'HECO',
      'OKT',
    ],
  },
  {
    name: 'DeversiFi',
    address: '0x96E471B5945373dE238963B4E032D3574be4d195',
    url: 'https://app.deversifi.com/portfolio',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'DeversiFi', 'MATIC'],
  },
  {
    name: 'dYdX',
    address: '0x96E471B5945373dE238963B4E032D3574be4d195',
    url: 'https://trade.dydx.exchange/portfolio/overview',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH'],
  },
  {
    name: 'Fantom',
    address: '0x9A8C4bdCd75CFa1059A6E453Ac5cE9d3F5c82A35',
    url: 'https://bnbridge.exchange/',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'BSC', 'XAR', 'FTM'], //FTM OPERA?
  },
  {
    name: 'Fuse',
    address: '0xf301d525da003e874DF574BCdd309a6BF0535bb6',
    url: 'https://app.fuse.fi/#/bridge',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'FUSE'],
  },
  {
    name: 'Harmony',
    address: '0x2dCCDB493827E15a5dC8f8b72147E6c4A5620857',
    url: 'https://bridge.harmony.one/',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'ONE'],
  },
  {
    name: 'Hop',
    address: '0x3666f603Cc164936C1b87e207F36BEBa4AC5f18a',
    url: 'https://app.hop.exchange/send',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'MATIC', 'STAKE', 'OP', 'ARBI'],
  },
  // {
  //   name: 'Immutable X',
  //   address: '0x5FDCCA53617f4d2b9134B29090C87D01058e27e9',
  //   url: 'https://www.immutable.com/',
  //   logo: 'https://i.imgur.com/qXZQZQJ.png',
  //   chains: ['ETH'],
  // },
  {
    name: 'Layer2.Finance',
    address: '0xf86FD6735f88d5b6aa709B357AD5Be22CEDf1A05',
    url: 'https://app.l2.finance/#/invest',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'L2F'],
  },
  {
    name: 'Loopring',
    address: '0x674bdf20A0F284D710BC40872100128e2d66Bd3f',
    url: 'https://app.loopring.io/#/layer2',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'LRC'],
  },
  {
    name: 'Multichain',
    address: '0x5cBE98480A790554403694b98BFf71A525907f5d',
    url: 'https://multichain.xyz/',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'FTM'],
  },
  {
    name: 'NEAR: Rainbow Bridge',
    address: '0x23Ddd3e3692d1861Ed57EDE224608875809e127f',
    url: 'https://ethereum.bridgetonear.org/',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'NEAR'],
  },
  {
    name: 'OMG: Boba Gateway',
    address: '0xdc1664458d2f0B6090bEa60A8793A4E66c2F1c00',
    url: 'https://gateway.boba.network/',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'BOBA'],
  },
  // {
  //   name: 'Optics',
  //   address: '0x96E471B5945373dE238963B4E032D3574be4d195',
  //   url: 'https://0xhabitat.org/app/#habitat-account',
  //   logo: 'https://i.imgur.com/qXZQZQJ.png',
  //   chains: ['ETH'],
  // },
  {
    name: 'Optimism',
    address: '0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1',
    url: 'https://gateway.optimism.io/',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'OP'],
  },
  {
    name: 'Orbit Chain: Bridge',
    address: '0x1Bf68A9d1EaEe7826b3593C20a0ca93293cb489a',
    url: 'https://bridge.orbitchain.io/',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'ICON', 'KLAY', 'ORC'],
  },
  {
    name: 'Polygon Hermez',
    address: '0xA68D85dF56E733A06443306A095646317B5Fa633',
    url: 'https://hermez.io/',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'HEZ'],
  },
  {
    name: 'Polygon Bridge',
    address: '0xA0c68C638235ee32657e8f720a23ceC1bFc77C77',
    url: 'https://wallet.polygon.technology/bridge',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH'],
  },
  {
    name: 'Relay Chain',
    address: '0xF687e1481d85F8b9F4D1f4D4C15348CeF8E5a762',
    url: 'https://0xhabitat.org/app/#habitat-account',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: [
      'ETH',
      'BSC',
      'AVAX',
      'HECO',
      'MATIC',
      'AVAX',
      'FTM',
      'IOTX',
      'SDN',
      'MOVR',
    ],
  },
  {
    name: 'RenBridge',
    address: '0x32666B64e9fD0F44916E1378Efb2CFa3B3B96e80',
    url: 'https://bridge.renproject.io/',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'MATIC', 'FTM', 'AVAX', 'SOL', 'BSC', 'ARBI'],
  },
  {
    name: 'RSK: Token Bridge',
    address: '0x12eD69359919Fc775bC2674860E8Fe2d2b6a7B5D',
    url: 'https://tokenbridge.rsk.co/',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'RSK'],
  },
  {
    name: 'Secret Network: Bridge',
    address: '0xf4B00C937b4ec4Bb5AC051c3c719036c668a31EC',
    url: 'https://bridge.scrt.network/',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'BSC', 'SCRT', 'XMR'],
  },
  {
    name: 'Sollet: Solana Bridge',
    address: '0xeae57ce9cc1984F202e15e038B964bb8bdF7229a',
    url: 'https://www.sollet.io/',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'SOL'],
  },
  // {
  //   name: 'Sorare',
  //   address: '0x96E471B5945373dE238963B4E032D3574be4d195',
  //   url: 'https://0xhabitat.org/app/#habitat-account',
  //   logo: 'https://i.imgur.com/qXZQZQJ.png',
  //   chains: ['ETH'],
  // },
  {
    name: 'Synapse',
    address: '0x2796317b0fF8538F253012862c06787Adfb8cEb6',
    url: 'https://synapseprotocol.com/',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'BSC', 'MATIC', 'FTM', 'ARBI', 'AVAX'],
  },
  {
    name: 'Synthetix',
    address: '0x045e507925d2e05D114534D0810a1abD94aca8d6',
    url: 'https://staking.synthetix.io/l2',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'OP'],
  },
  {
    name: 'Umbria: Narni Bridge',
    address: '0x4103c267Fba03A1Df4fe84Bc28092d629Fa3f422',
    url: 'https://bridge.umbria.network/bridge/',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'MATIC'],
  },
  {
    name: 'Wormhole',
    address: '0xf92cD566Ea4864356C5491c177A430C222d7e678',
    url: 'https://wormholebridge.com/#/transfer',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'BSC', 'SOL', 'LUNA'],
  },
  {
    name: 'xDAI',
    address: '0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016',
    url: 'https://dai-bridge.poa.network/',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'STAKE'],
  },
  {
    name: 'ZKSwap V2',
    address: '0x6dE5bDC580f55Bc9dAcaFCB67b91674040A247e3',
    url: 'https://zks.app/en/wallet',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH'],
  },
  {
    name: 'zkSync',
    address: '0xaBEA9132b05A70803a4E85094fD0e1800777fBEF',
    url: 'https://wallet.zksync.io/',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH'],
  },
  {
    name: 'Terra Bridge',
    address: '0x96E471B5945373dE238963B4E032D3574be4d195',
    url: 'https://bridge.terra.money/',
    logo: 'https://i.imgur.com/qXZQZQJ.png',
    chains: ['ETH', 'BSC', 'ONE', 'LUNA'],
  },
  // {
  //   name: 'Interlay',
  //   address: '0x96E471B5945373dE238963B4E032D3574be4d195',
  //   url: 'https://bridge.interlay.io/bridge',
  //   logo: 'https://i.imgur.com/qXZQZQJ.png',
  //   chains: ['ETH'],
  // },
]
