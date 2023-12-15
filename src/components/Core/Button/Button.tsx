import React, { type ReactNode } from 'react'
import classNames from 'classnames'
import './Button.style.scss'

type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'error'
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface ButtonProps {
  children: ReactNode
  className?: string
  color?: Color
  size?: Size
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  color = 'primary',
  size = 'md',
  onClick
}) => {
  const buttonClasses = classNames('btn', `btn-${color}`, `btn-${size}`, className)

  return (
          <button className={buttonClasses} onClick={onClick}>
               {children}
          </button>
  )
}

export default Button
