// Here we add all the external links
const contractAddress = '0x2ae23f6b1a10a186ef06f5cc53c59fea1d544a07'

export const config = {
  blockchain: {
    contractUrl: `https://bscscan.com/token/${contractAddress}`,

    // TODOPRESALE:
    contractAddress,
    fundraisingAddress: '0x5970C97aFE037a2499e787242c43Bd1d45509bd3',
  },

  social: {
    twitter: 'https://twitter.com/kofatoken',
    telegram: 'https://t.me/KofaTokenOfficial',
    youtube: 'http://www.youtube.com/channel/UCpHoUKMUwKsBI6ptlCScLnw',
    facebook: 'http://www.facebook.com/kofatoken',
  },

  buy_on: {
    buy_now: 'https://v1.app.bounce.finance/fixed-swap/11120',
    presale: 'https://v1.app.bounce.finance/fixed-swap/11120',
  },

  email: {
    info: 'support@kofatoken.com',
  },

  trackers: {
    poocoin: `https://poocoin.app/tokens/${contractAddress}`,
    bscscan: `https://bscscan.com/token/${contractAddress}`,
    boggedfinance: `https://charts.bogged.finance/${contractAddress}`,
    dextools: '',
    coingecko: '',
    coinmarketcap: '',
  },

  demoVideo: 'https://www.youtube.com/embed/w_tM8DZXBho',

  medium: '',

  presale_date: new Date(Date.UTC(2021, 12, 15, 23, 0, 0)),

  whitepaper_pdf:
    'https://drive.google.com/file/d/1a-1jDEd8NphDv4gw1enlCihhmVcJ_L1o/view?usp=sharing',

  external: {
    metamask: 'https://metamask.io/',
    trust_wallet: 'https://trustwallet.com/',
    pancakeswap: 'https://pancakeswap.finance/',
    trust_wallet_buy_bnb: 'https://trustwallet.com/buy-bnb/',
  },

  total_supply: 88888888888,
  total_burned: 66280934784,
  total_circulating: 22607954104,
} as const
