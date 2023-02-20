import React from 'react'
import './Button.style.scss'

interface ButtonProps {
  ref?: any
  type?: 'submit' | 'reset' | 'button' | undefined
  color?: string
  /**
     * Is this the principal call to action on the page?
     */
  primary?: boolean
  /**
       * What background color to use
       */
  backgroundColor?: string
  /**
       * How large should the button be?
       */
  size?: 'small' | 'medium' | 'large'
  /**
       * Button contents
       */
  children?: any
  /**
       * Optional click handler
       */
  onClick?: () => void
  /**
       * Optional styling
       */
  style?: any
  /**
       * Optional className
       */
  className?: string

}

export const Button: React.FC<ButtonProps> = ({
  ref,
  type,
  color,
  onClick,
  children,
  className,
  style
}) => {
  const buttonStyle = {
    backgroundColor: color,
    padding: '1rem',
    paddingLeft: '3rem',
    paddingRight: '3rem',
    fontSize: '1.2rem',
    borderRadius: '0.25rem',
    color: '#fff'
  }
  return (
        <button
            ref={ref}
            type={type}
            onClick={(e) => onClick?.()}
            className={className}
            style={{
              ...buttonStyle,
              ...style
            }}
        >
            {children}
        </button>
  )
}
