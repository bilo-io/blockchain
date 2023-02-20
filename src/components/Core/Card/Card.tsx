/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react'
import './Card.style.scss'

interface CardProps {
  id?: string
  children: any
  isRounded?: boolean
  depth?: '0' | '1' | '2' | '3' | '4' | '5'
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClick?: Function
  style?: any
  className?: string
}

export const Card: React.FC<CardProps> = ({
  id,
  children,
  isRounded,
  depth,
  onClick,
  style,
  className,
  ...rest
}) => {
  return (
        <div
            id={id}
            className={`card-${depth} ${className}`} style={{
              borderRadius: (isRounded ?? false) ? '8px' : 0,
              ...style
            }}
            // @ts-expect-error
            onClick={onClick}
            {...rest}>
            {children}
        </div>
  )
}

Card.defaultProps = {
  isRounded: true,
  depth: '1'
}
