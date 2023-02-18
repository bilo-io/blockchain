import React from 'react'

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClick: Function
  children: React.ReactElement
}

export const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  children
}) => {
  return (
    <button type={type} onClick={() => onClick()}>
      {children}
    </button>
  )
}

export default Button
