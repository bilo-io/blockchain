import React, { type HTMLInputTypeAttribute } from 'react'

interface InputProps {
  ref?: any
  type?: HTMLInputTypeAttribute | undefined
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  style?: any
  className?: string
}

export const Input: React.FC<InputProps> = ({
  ref,
  type,
  value,
  onChange,
  placeholder,
  style,
  className
}) => {
  return (
    <input
      ref={ref}
      type={type}
      style={style}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e)}
    />
  )
}
