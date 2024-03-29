import React, { useEffect, useRef, useState } from 'react'
import Table from 'components/Core/Table/Table'
import { useNavigate } from 'react-router-dom'
import translations from 'utils/translations'
import { products, type IProduct } from './data'
import './Home.scss'
import SearchInput from 'components/SearchInput/SearchInput'
import { getLatestBlock } from 'services/blockchain'
import { getBlocks, type IBlockChainType, type IBlockchairBlock } from 'services/blockchair'
import { Loader } from 'components/Core/Loader/Loader'
import { blockchainBaseUrl } from '../../constants'
import { AssetIcon } from 'components/Core/AssetIcon/AssetIcon'
import { collapseHashZeros } from 'utils/format'

export const Home: React.FC = () => {
  const [assetCode, setAssetCode] = useState<any>({
    blockchain: 'btc',
    blockchair: 'bitcoin'
  })
  // #region HOOKS
  const initFetch = useRef(false)
  const navigate = useNavigate()
  // #endregion

  // #region TRANSLATIONS
  const commonMessages = translations.eng.common
  const viewMessages = translations.eng.explore
  // #endregion

  // #region STATE
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [latestBlockHeight, setLatestBlockHeight] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<any[]>([])
  const columns = [
    {
      key: 'id',
      label: commonMessages.height
    }, {
      key: 'hash',
      label: commonMessages.hash
    }, {
      key: 'guessed_miner',
      label: commonMessages.miner
    }]
  // #endregion

  // #region FUNCTIONS
  const fetchBlocks = (asset: IBlockChainType): void => {
    setLoading(true)
    getBlocks(asset)
      .then((res: {
        data: IBlockchairBlock[]
      }) => {
        setData(res.data.map((b: IBlockchairBlock) => ({
          ...b,
          hash: (
            <div className='flex-row'>
              <a target="_blank" href={`${blockchainBaseUrl}/${assetCode?.blockchain as string}/block/${b.hash}`} rel="noreferrer">
                {'blockchain.com ↗'}
              </a>
              <div style={{ width: '1rem' }} />
              <div className="link"
                onClick={(): void => {
                  navigate(`/${assetCode?.blockchair as string}/blocks/${b.hash}`, {
                    state: {
                      assetCode: assetCode.blockchain,
                      latestBlockHeight,
                      block: b
                    }

                  })
                }}>
                {collapseHashZeros(b.hash)}
              </div>
            </div>
          )
        })))
      })
      .catch((err: any) => { console.log({ err }) })
      .finally(() => { setLoading(false) })
  }
  const handleQuery = (value: string): void => {
    setSearchQuery(value)
  }

  const handleSearch = (): void => {
    navigate(`/${assetCode?.blockchair as string}/blocks/${searchQuery}`, {
      state: {
        assetCode: assetCode.blockchain,
        latestBlockHeight,
        block: searchQuery
      }
    })
    // getBlock(searchQuery)
    //   .then((res: {
    //     data: IBlockchairBlock | IBlockchairBlock[]
    //   }) => {
    //     setData([])
    //     const result = Array.isArray(data) ? data : [data]
    //     setData(result.map((b: IBlockchairBlock) => ({
    //       ...b,
    //       hash: (
    //         <div className='flex-row'>
    //           <a target="_blank" href={`${blockchainBaseUrl}/${assetCode?.blockchain as string}/block/${b.hash}`} rel="noreferrer">
    //             {'blockchain.com ↗'}
    //           </a>
    //           <div style={{ width: '1rem' }} />
    //           <div className="link"
    //             onClick={(): void => {
    //               navigate(`/${assetCode?.blockchair as string}/blocks/${b.hash}`, {
    //                 state: {
    //                   assetCode: assetCode.blockchain,
    //                   latestBlockHeight,
    //                   block: b
    //                 }
    //               })
    //             }}>
    //             {collapseHashZeros(b.hash)}
    //           </div>
    //         </div>
    //       )
    //     })))
    //   })
    //   .catch((err: any) => { console.log({ err }) })
    //   .finally(() => { setLoading(false) })
  }
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    // Start: prevent double API fetch
    if (initFetch.current) { return }
    initFetch.current = true
    // End: prevent double API fetch

    getLatestBlock()
      .then((response: any) => {
        const blockHeight = response?.height
        setLatestBlockHeight(blockHeight ?? 777322)
        fetchBlocks(assetCode.blockchair)
      }).catch((error: any) => {
        console.log({ error })
      })
  }, [])
  // #endregion

  return (
    <div className="flex-row flex-grow padded-page">
      <div className='sidenav'>
        <h2>{viewMessages.sidenav.heading}</h2>
        {products.map((p: IProduct) => (
          <ProductItem key={p.code} product={p} onClick={() => {
            fetchBlocks(p.assetCode?.blockchair as IBlockChainType)
            setAssetCode(p.assetCode)
            // navigate(`/${p.assetCode?.blockchair as string}/blocks`)
          }} />
        ))}
      </div>
      <div className="content">
        <>
          <SearchInput
            value={searchQuery}
            onChange={(value: string) => { handleQuery(value) }}
            onClick={handleSearch}
            placeholder={viewMessages.content.placeholder}
          />
          <h2>{viewMessages.content.heading}</h2>
          {loading
            ? <div className="flex-grow w-full">
              <Loader type="ripple" />
            </div>
            : (
              <Table
                columns={columns}
                data={data}
              />
              )
          }
        </>
      </div>
    </div>
  )
}

const ProductItem = ({ product, onClick }: { product: IProduct, onClick: () => void }): React.ReactElement => (
  <div key={product.code} className="sidenav-item" onClick={() => { onClick() }}>
    <AssetIcon code={product.code} />
    <span>{product.code}</span>
  </div>
)

export default Home
