import React from 'react'
import './Loader.scss'

interface LoaderProps {
  type: 'spinner' | 'ripple'
}
export const Loader: React.FC<LoaderProps> = ({
  type
}) => {
  switch (type) {
    case 'ripple': return (
          <div className="mx-auto w-fit-content">

          <div className="lds-ripple mx-auto">
                <div />
                <div />
            </div>
          </div>
    )
    case 'spinner':
    default: return (
      <div className="spinner"></div>
    )
  }
}
