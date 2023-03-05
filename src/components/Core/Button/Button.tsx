import React, { type ReactNode } from 'react'
import classNames from 'classnames'
import './Button.style.scss'

type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'error'
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface ButtonProps {
  children: ReactNode
  color?: Color
  size?: Size
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'primary',
  size = 'md',
  onClick
}) => {
  const buttonClasses = classNames('btn', `btn-${color}`, `btn-${size}`)

  return (
          <button className={buttonClasses} onClick={onClick}>
               {children}
          </button>
  )
}

export default Button
