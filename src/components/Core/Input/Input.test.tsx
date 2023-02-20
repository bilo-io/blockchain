import React from 'react'
import { render, screen } from '@testing-library/react'
import { Input } from './Input'

xtest('renders learn react link', () => {
  render(<Input placeholder='inputPlaceholder' value="inputValue" onChange={() => { }} />)
  const linkElement = screen.getByText(/inputValue/i)
  expect(linkElement).toBeInTheDocument()
})
