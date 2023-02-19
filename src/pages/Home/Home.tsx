import React, { useEffect, useState } from 'react'
import Table from 'components/Core/Table/Table'
import { useNavigate } from 'react-router-dom'
import translations from 'utils/translations'
import { products, type IProduct } from './data'
import './Home.scss'
import SearchInput from 'components/SearchInput/SearchInput'
import { getLatestBlock } from 'services/blockchain'
import { getBlocks, type IBlockchairBlock } from 'services/blockchair'
import { Loader } from 'components/Loader/Loader'

const blockchainBaseUrl = 'https://www.blockchain.com'
export const Home: React.FC = () => {
  const assetCode = 'btc'
  // #region HOOKS
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

  // #region HANDLERS
  const handleQuery = (value: string): void => {
    setSearchQuery(value)
  }

  const handleSearch = (): void => {
    alert(`search with "${searchQuery}"`)
  }
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    getLatestBlock()
      .then((response: any) => {
        const blockHeight = response?.height
        console.log('getLatestBlockHeight', blockHeight)
        setLatestBlockHeight(blockHeight ?? 777322)

        getBlocks('bitcoin')
          .then((res: {
            data: IBlockchairBlock[]
          }) => {
            setData(res.data.map((b: IBlockchairBlock) => ({
              ...b,
              hash: (
                <div className='flex-row'>
                  <a target="_blank" href={`${blockchainBaseUrl}/${assetCode}/block/${b.hash}`} rel="noreferrer">
                    {'blockchain.com'}&#129133;
                  </a>
                  <div style={{ width: '1rem' }} />
                  <div className="link"
                    onClick={(): void => {
                      navigate(`/bitcoin/blocks/${b.hash}`, {
                        state: {
                          latestBlockHeight,
                          block: b
                        }

                      })
                      // eslint-disable-next-line no-debugger
                      // debugger
                    }}>
                    {b.hash}
                  </div>
                </div>
              )
            })))
          })
          .catch((err: any) => { console.log({ err }) })
          .finally(() => { setLoading(false) })
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
            navigate(`/explore/${p.code}`)
          }} />
        ))}
      </div>
      <div className="content">
        {loading
          ? <Loader type="ripple" />
          : (
            <>
              <SearchInput
                value={searchQuery}
                onChange={handleQuery}
                onClick={handleSearch}
                placeholder={viewMessages.content.placeholder}
              />
              <h2>{viewMessages.content.heading}</h2>
              <div>Latest block: {latestBlockHeight}</div>
              <Table
                columns={columns}
                data={data}
              />
            </>
            )}
      </div>
    </div>
  )
}

const ProductItem = ({ product, onClick }: { product: IProduct, onClick: () => void }): React.ReactElement => (
  <div key={product.code} className="sidenav-item" onClick={() => { onClick() }}>
    {product?.icon as boolean && <img src={product.icon} alt={product.code} />}
    <span>{product.code}</span>
  </div>
)

export default Home
