import React, { useEffect, useState } from 'react'
import Table from 'components/Core/Table/Table'
import { useNavigate } from 'react-router-dom'
import translations from 'utils/translations'
import { products, type IProduct } from './data'
import './Explore.scss'
import SearchInput from 'components/SearchInput/SearchInput'
import { getLatestBlock } from 'services/blockchain'
import { getBlocks, type IBlockchairBlock } from 'services/blockchair'

const blockchainBaseUrl = 'https://www.blockchain.com'
export const Explore: React.FC = () => {
  const assetCode = 'btc'
  // #region HOOKS
  const navigate = useNavigate()
  // #endregion

  // #region TRANSLATIONS
  const commonMessages = translations.eng.common
  const viewMessages = translations.eng.explore
  // #endregion

  const hash = '00000000000000000005ca55a40c80213c61e5dfc6a5c2d6d38263303ead1468'
  const hash2 = '0000000000000000000557e48ed5feada38c016f72c1be2458fd908f19a15d92'
  // #region STATE
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [latestBlockHeight, setLatestBlockHeight] = useState<number>(0)
  const [data, setData] = useState<any[]>([{
    height: 'bilo',
    hash: <a target="_blank" href={`${blockchainBaseUrl}/${assetCode}/block/${hash2}`} rel="noreferrer">
      {hash2}
    </a>
  }, {
    height: 'taariq',
    hash: <a target="_blank" href={`${blockchainBaseUrl}/${assetCode}/block/${hash}`} rel="noreferrer">
      {hash}
    </a>
  }])
  const columns = [
    {
      key: 'id',
      label: commonMessages.height
    }, {
      key: 'hash',
      label: commonMessages.hash
    }, {
      key: 'guessed_miner',
      label: 'Miner'
    // }, {
    //   key: 'id',
    //   label: 'id'
    // }, {
    //   key: 'size',
    //   label: 'Size'
    // }, {
    //   key: 'difficulty',
    //   label: 'Difficulty'
    // }, {
    //   key: 'merkle_root',
    //   label: 'Merkle Root'
    // }, {
    //   key: 'version',
    //   label: 'Version'
    // }, {
    //   key: 'bits',
    //   label: 'Bits'
    // }, {
    //   key: 'weights',
    //   label: 'Weights'
    // }, {
    //   key: 'reward_usd',
    //   label: 'Reward'
    // }, {
    //   key: 'fee_total_usd',
    //   label: 'Fee'
    // }, {
    //   key: 'nonce',
    //   label: 'Nonce'
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

        getBlocks(10_000)
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
                      navigate(`/blocks/${b.hash}`, {
                        state: {
                          latestBlockHeight,
                          block: b
                        }

                      })
                      // eslint-disable-next-line no-debugger
                      debugger
                    }}>
                    {b.hash}
                  </div>
                </div>
              )
            })))
          })
          .catch((err: any) => { console.log({ err }) })
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

export default Explore
