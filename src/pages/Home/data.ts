// import iconBtc from '../../assets/svg/crypto/btc.svg'
// import iconBch from '../../assets/svg/crypto/bch.svg'
// import iconEth from '../../assets/svg/crypto/eth-purple.svg'

export interface IProduct {
  name: string
  code: string
  color: string
  icon?: any
}

export const products = [
  {
    name: 'Bitcoin',
    code: 'BTC',
    color: '#F7931A'
    // icon: iconBtc
  },
  {
    name: 'Ethereum',
    code: 'ETH',
    color: '#454A75'
    // icon: iconEth
  },
  {
    name: 'Bitcoin Cash',
    code: 'BCH',
    color: '#475885'
    // icon: iconBch
  }
]
