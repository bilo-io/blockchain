import iconBtc from '../../assets/svg/crypto/btc.svg'
import iconBch from '../../assets/svg/crypto/bch.svg'
import iconEth from '../../assets/svg/crypto/eth.svg'

export interface IProduct {
  name: string
  code: string
  color: string
  icon?: any
  assetCode?: {
    blockchain: string
    blockchair: string
  }
}

export const products = [
  {
    name: 'Bitcoin',
    code: 'BTC',
    color: '#F7931A',
    assetCode: {
      blockchain: 'btc',
      blockchair: 'bitcoin'
    },
    icon: iconBtc
  },
  {
    name: 'Ethereum',
    code: 'ETH',
    color: '#454A75',
    assetCode: {
      blockchain: 'eth',
      blockchair: 'ethereum'
    },
    icon: iconEth
  },
  {
    name: 'Bitcoin Cash',
    code: 'BCH',
    color: '#0AC18E',
    assetCode: {
      blockchain: 'bch',
      blockchair: 'bitcoin-cash'
    },
    icon: iconBch
  }
]
