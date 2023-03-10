import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'

test('renders learn react link', () => {
  render(<Button color='primary' size='lg'>Primary Button</Button>)
  const linkElement = screen.getByText(/Primary Button/i)
  expect(linkElement).toBeInTheDocument()
})
