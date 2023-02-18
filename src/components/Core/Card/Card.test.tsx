import React from 'react'
import { render, screen } from '@testing-library/react'
import { Card } from './Card'

test('renders learn react link', () => {
  render(<Card>CardContent</Card>)
  const linkElement = screen.getByText(/CardContent/i)
  expect(linkElement).toBeInTheDocument()
})
