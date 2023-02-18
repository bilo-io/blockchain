import React from 'react'
import { useNavigate } from 'react-router-dom'
import { products, type IProduct } from './data'
import './Explore.scss'

export const Explore: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div>
            Explore Blocks
      <div className='sidenav'>

        {products.map((p: IProduct) => (
          <div key={p.code} className="sidenav-item" onClick={() => {
            console.log('clicked: ', p.code)
            navigate(`/explore/${p.code}`)
          }}>
            {p?.icon as boolean && <img src={p.icon} alt={p.code} />}
            <span>{p.code}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Explore
