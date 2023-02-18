import { formatCurrency } from './format'

describe('format', () => {
  it('formatsCurrency', () => {
    expect(formatCurrency(10_000, 'USD')).toBe('$10,000.00')
    expect(formatCurrency(100_000, 'USD')).toBe('$100,000.00')
    expect(formatCurrency(1_000_000, 'USD')).toBe('$1,000,000.00')
  })
})
