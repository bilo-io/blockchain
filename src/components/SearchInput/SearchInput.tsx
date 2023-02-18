import { Button, Input } from 'components/Core'
import { useAppTheme } from 'hooks/useAppTheme'
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
  const theme = useAppTheme()

  const commonMessages = translations.eng.common

  const handleChange = (e: any): void => {
    onChange(e.target.value)
  }

  return (
    <div>
      <Input
        className="search-input"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <Button size="large" backgroundColor={theme.colors.PRIMARY} onClick={() => { onClick() }}>
        {commonMessages.search}
      </Button>
    </div>

  )
}

SearchInput.defaultProps = {
  placeholder: 'Search'
}

export default SearchInput
