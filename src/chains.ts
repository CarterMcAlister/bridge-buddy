export interface Chain {
  name: string
  symbol: string
  logo: string
}

export type ChainId = keyof typeof chains

export const chains = {
  ETH: {
    name: 'Ethereum',
    symbol: 'ETH',
    logo: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
  },
  OP: {
    name: 'Optimism',
    symbol: 'OP',
    logo: './bridge/optimism.png',
  },
  ARBI: {
    name: 'Arbitrum',
    symbol: 'ARBI',
    logo: './bridge/arbitrum.svg',
  },
  MATIC: {
    name: 'Polygon',
    symbol: 'MATIC',
    logo: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png',
  },
  AVAX: {
    name: 'Avalanche',
    symbol: 'AVAX',
    logo: 'https://assets.coingecko.com/coins/images/12559/large/coin-round-red.png',
  },
  SOL: {
    name: 'Solana',
    symbol: 'SOL',
    logo: 'https://assets.coingecko.com/coins/images/4128/large/coinmarketcap-solana-200.png',
  },
  BSC: {
    name: 'Binance Smart Chain',
    symbol: 'BSC',
    logo: 'https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png',
  },
  STAKE: {
    name: 'xDai',
    symbol: 'STAKE',
    logo: 'https://assets.coingecko.com/coins/images/11061/large/xdai.png',
  },
  FTM: {
    name: 'Fantom',
    symbol: 'FTM',
    logo: 'https://assets.coingecko.com/coins/images/4001/large/Fantom.png',
  },
  MOVR: {
    name: 'Moonriver',
    symbol: 'MOVR',
    logo: 'https://assets.coingecko.com/coins/images/17984/large/9285.png',
  },
  LUNA: {
    name: 'Terra',
    symbol: 'LUNA',
    logo: 'https://assets.coingecko.com/coins/images/8284/large/luna1557227471663.png',
  },
  DOT: {
    name: 'Polkadot',
    symbol: 'DOT',
    logo: 'https://assets.coingecko.com/coins/images/12171/large/aJGBjJFU_400x400.jpg',
  },
  ATOM: {
    name: 'Cosmos',
    symbol: 'ATOM',
    logo: 'https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png',
  },
  BTC: {
    name: 'Bitcoin',
    symbol: 'BTC',
    logo: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
  },
  ONE: {
    name: 'Harmony',
    symbol: 'ONE',
    logo: 'https://assets.coingecko.com/coins/images/4344/large/Y88JAze.png',
  },
  CELO: {
    name: 'Celo',
    symbol: 'CELO',
    logo: 'https://assets.coingecko.com/coins/images/11090/large/icon-celo-CELO-color-500.png',
  },
  NEAR: {
    name: 'Near',
    symbol: 'NEAR',
    logo: 'https://assets.coingecko.com/coins/images/10365/large/near_icon.png',
  },
  AR: {
    name: 'Arweave',
    symbol: 'AR',
    logo: 'https://assets.coingecko.com/coins/images/4343/large/oRt6SiEN_400x400.jpg',
  },
  HBT: {
    name: 'Habitat',
    symbol: 'HBT',
    logo: 'https://assets.coingecko.com/coins/images/14456/large/habitat-logo.png',
  },
}
