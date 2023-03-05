import { Button, Input } from 'components/Core'
import React from 'react'
import translations from 'utils/translations'
import './SearchInput.scss'

export interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  onClick: () => void
  placeholder?: string
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onClick,
  placeholder
}) => {
  const commonMessages = translations.eng.common

  const handleChange = (e: any): void => {
    console.log('SearchInput.handleChange', e)
    onChange(e.target.value)
  }

  return (
    <div className="flex-row justify-between">
      <Input
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="search-input"
      />
      <Button size="lg" color={'secondary'} onClick={() => { onClick() }}>
        {commonMessages.search}
      </Button>
    </div>

  )
}

SearchInput.defaultProps = {
  placeholder: 'Search'
}

export default SearchInput
