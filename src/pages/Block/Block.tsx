import { useLatestBlockHeight } from 'hooks/useLatestBlockHeight'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getBlock, getTransactions, type IBlockchairBlock } from 'services/blockchair'

export const Block: React.FC = () => {
  const location = useLocation()
  const latestBlockHeight = useLatestBlockHeight()

  const block: IBlockchairBlock = location?.state?.block
  const [blockData, setBlockData] = useState<any>({})
  // const latestBlockHeight: number = location?.state?.latestBlockHeight
  console.log('latestBlockHeight:', latestBlockHeight.data)

  useEffect(() => {
    if (!latestBlockHeight.loading && latestBlockHeight.data > 0) {
      const invertedId = Number(latestBlockHeight.data) - Number(block?.id)
      // eslint-disable-next-line no-debugger
      // debugger
      getBlock(invertedId)
        .then((response: any) => {
          console.log('getBlock', invertedId, response)
          setBlockData({
            data: response.data[invertedId].decoded_raw_block,
            context: response.context
          })
        }).catch((error: any) => {
          console.error(error)
        })
    }
  }, [latestBlockHeight])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (blockData?.tx) {
      getTransactions(blockData?.tx)
        .then((response: any) => {
          console.log('response', response)
        }).catch((error: any) => {
          console.error('error', error)
        })
    }
  }, [blockData?.tx])

  return (
    <div className="flex-grow padded-page">
      Block
      <div>
        <h2>BTC / Block { blockData.hash}</h2>
        <div>
          <table>
            {Object.keys(blockData?.data ?? {}).map((key: string) => (
              <tr key={key} className="flex-row">
                <th style={{ width: '20rem' }}>{key}</th>
                <td>{blockData.data[key]}</td>
              </tr>))}
          </table>
        </div>
        <h2>Transactions</h2>
      </div>
    </div>
  )
}

export default Block
