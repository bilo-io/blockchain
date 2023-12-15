import React from 'react'
import iconBtc from '../../../assets/svg/crypto/btc.svg'
import iconBch from '../../../assets/svg/crypto/bch.svg'
import iconEth from '../../../assets/svg/crypto/eth.svg'

import iconGeneric from '../../../assets/svg/crypto/generic-crypto-icon.svg'
import { getAssetColor } from 'utils/assets'

interface AssetIconProps {
  code: string | null | undefined
}

export const AssetIcon: React.FC<AssetIconProps> = ({
  code
}): React.ReactElement => {
  const backgroundColor = getAssetColor(code as string)
  if (code == null || code === undefined) {
    return <div />
  }

  switch (code.toUpperCase()) {
    case 'BITCOIN':
    case 'BTC': return (
            <img src={iconBtc} alt={code} width={32} height={32} style={{
              borderRadius: '100%',
              padding: '0.3rem',
              backgroundColor
            }}
          />
    )
    case 'ETHEREUM':
    case 'ETH': return (
          <img src={iconEth} alt={code} width={32} height={32} style={{
            borderRadius: '100%',
            padding: '0.3rem',
            backgroundColor
          }}
          />
    )

    case 'BITCOIN-CASH':
    case 'BCH': return (
          <img src={iconBch} alt={code} width={32} height={32} style={{
            borderRadius: '100%',
            padding: '0.3rem',
            backgroundColor
          }}
          />
    )
    default: return (
      <img src={iconGeneric} alt={'asset icon'} style={{
        borderRadius: '100%',
        padding: '0.3rem',
        backgroundColor
      }} />
    )
  }
}
