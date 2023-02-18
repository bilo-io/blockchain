import React from 'react'

export interface SearchInputProps {
  value: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  onChange: Function
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange
}) => {
  const handleChange = (e: any): void => {
    onChange(e.target.value)
  }
  return (
    <input value={value} onChange={handleChange} />

  )
}

export default SearchInput
