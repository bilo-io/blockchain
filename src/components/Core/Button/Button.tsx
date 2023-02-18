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
    backgroundColor: color
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
