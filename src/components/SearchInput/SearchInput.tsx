import { Button, Input } from 'components/Core'
import React from 'react'
import translations from 'utils/translations'
import iconSearch from 'assets/svg/icon_search.svg'
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
    onChange(e.target.value)
  }

  return (
    <div className="relative flex-row justify-between">
      <img className="absolute" style={{
        left: '0.75rem',
        top: '0.75rem',
        width: '2rem'
      }}
        src={iconSearch}
        alt="search"
      />
      <Input
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="search-input"
      />
      <Button size="md" color={'primary'} className="search-button" onClick={() => { onClick() }}>
        {commonMessages.search}
      </Button>
    </div>

  )
}

SearchInput.defaultProps = {
  placeholder: 'Search...'
}

export default SearchInput
