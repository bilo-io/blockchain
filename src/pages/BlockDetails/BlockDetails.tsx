/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { AssetIcon } from 'components/Core/AssetIcon/AssetIcon'
import { Loader } from 'components/Core/Loader/Loader'
import { useLatestBlockHeight } from 'hooks/useLatestBlockHeight'
import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import {
  getBlock, getTransactions,
  type IBlockchairBlock
} from 'services/blockchair'

export const BlockDetails: React.FC = () => {
  // #region HOOKS
  // initiate dataFetch
  const initFetch = useRef(false)
  const location = useLocation()
  const { assetCode, blockHash, blockChain } = useParams()
  const latestBlockHeight = useLatestBlockHeight()
  // #endregion

  // #region STATE
  const block: IBlockchairBlock = location?.state?.block
  const [blockData, setBlockData] = useState<any>({})
  const [blockLoading, setBlockLoading] = useState<boolean>(true)
  const [transactionsData, setTransactionsData] = useState<any>(null)
  const [transactionsLoading, setTransactionsLoading] = useState<boolean>(true)
  // #endregion

  // #region HELPERS
  const fetchBlockData = (): void => {
    const invertedId = Number(latestBlockHeight.data) - Number(block?.id)
    console.log('Fetching Block', invertedId)
    setBlockLoading(true)

    getBlock(blockHash)
      .then((response: any) => {
        console.log('getBlock', invertedId, response)
        setBlockData({
          data: response.data[blockHash as string].decoded_raw_block,
          context: response.context
        })
      }).catch((error: any) => {
        console.error(error)
      })
      .finally(() => { setBlockLoading(false) })
  }

  const fetchTransactions = (): void => {
    // setTransactionsLoading(true)
    if ((blockData?.data?.tx?.length > 0)) {
      const transactionHash = blockData?.data?.tx?.[0]
      console.log('Fetching Transactions', transactionHash)

      getTransactions(transactionHash)
        .then((response: any) => {
          console.log('response', response)
          setTransactionsLoading(false)
          setTransactionsData(response)
        }).catch((error: any) => {
          setTransactionsLoading(false)
          console.error('error', error)
        })
        .finally(() => { setTransactionsLoading(false) })
    } else {
      // setTransactionsLoading(false)
    }
  }
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    // Start: prevent double API fetch
    if (initFetch.current) { return }
    initFetch.current = true
    // end: prevent double API fetch

    fetchBlockData()
    // }
  }, [])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    fetchTransactions()
  }, [blockData?.data?.tx])

  console.log({ assetCode })
  // #endregion

  return (
    <div className="flex-grow padded-page">
      <div>
        <div className="flex-row center">
          <AssetIcon code={'BTC'} />
          <h2>BTC / Block </h2>
        </div>

        {blockLoading
          ? (<Loader type={'ripple'} />)
          : (
            <>
              <div>{blockData?.data?.id}</div>
              <div>
                <table>
                  {Object.keys(blockData?.data ?? {}).map((key: string) => (
                    <tr key={key} className="flex-row">
                      <th style={{ width: '20rem' }}>{key}</th>
                      <td>{Array.isArray(blockData.data[key]) ? blockData.data[key].length : blockData.data[key]}</td>
                    </tr>))}
                </table>
              </div>
            </>
            )}

        <h2>Transactions</h2>
        {transactionsLoading
          ? (<Loader type={'ripple'} />)
          : (<div>
            <pre><code>{JSON.stringify(transactionsData, null, 2)}</code></pre>
          </div>)}
      </div>
    </div>
  )
}

export default BlockDetails
