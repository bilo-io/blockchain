/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useLatestBlockHeight } from 'hooks/useLatestBlockHeight'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  getBlock, getTransactions,
  type IBlockchairBlock
} from 'services/blockchair'

export const Block: React.FC = () => {
  const location = useLocation()
  const latestBlockHeight = useLatestBlockHeight()

  const block: IBlockchairBlock = location?.state?.block
  const [blockData, setBlockData] = useState<any>({})
  const [loading, setLoading] = useState<boolean>(false)

  const [loadingTransactions, setLoadingTransactions] = useState<boolean>(false)
  const [transactionsData, setTransactionsData] = useState<any>(null)
  // const latestBlockHeight: number = location?.state?.latestBlockHeight

  const fetchBlockData = (): void => {
    const invertedId = Number(latestBlockHeight.data) - Number(block?.id)
    // eslint-disable-next-line no-debugger
    // debugger
    setLoading(true)
    console.log('Fetching Block')
    if (!loading) {
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
        .finally(() => { setLoading(false) })
    }
  }

  const fetchTransactions = (): void => {
    if ((Boolean((blockData?.data?.tx))) && !(loadingTransactions) && !transactionsData) {
      console.log('Fetching Transactions')
      getTransactions(blockData?.data?.tx)
        .then((response: any) => {
          console.log('response', response)
          setTransactionsData(response)
        }).catch((error: any) => {
          console.error('error', error)
        })
        .finally(() => { setLoadingTransactions(false) })
    }
  }
  useEffect(() => {
    // if (!loading && !latestBlockHeight.loading && latestBlockHeight.data > 0) {
    // console.log('-----\nlatestBlockHeight:', latestBlockHeight.data)
    if (latestBlockHeight.data > 0) { fetchBlockData() }
    // }
  }, [])

  // useEffect(() => {
  // // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  // fetchTransactions()
  // }, [blockData?.data?.tx])

  return (
    <div className="flex-grow padded-page">
      <h4>Block <span>{blockData?.data?.id}</span></h4>
      <div style={{ color: '#f00', fontWeight: 'bold' }}>{latestBlockHeight?.data}</div>
      <div>
        <h2>BTC / Block / { blockData?.data?.hash}</h2>
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
        <div>
          <pre><code>{JSON.stringify(transactionsData, null, 2)}</code></pre>
        </div>
      </div>
    </div>
  )
}

export default Block
