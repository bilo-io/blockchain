import { collapseHashZeros, formatCurrency } from './format'

describe('format', () => {
  describe('formatsCurrency', () => {
    it('works for FIAT currencies', () => {
      expect(formatCurrency(10_000, 'USD')).toBe('$10,000.00')
      expect(formatCurrency(100_000, 'USD')).toBe('$100,000.00')
      expect(formatCurrency(1_000_000, 'USD')).toBe('$1,000,000.00')
    })
  })

  describe('collapseHashZeros', () => {
    it('works for 000123', () => {
      const newLocal = '000123'
      expect(collapseHashZeros(newLocal)).toBe('000123')
    })

    it('works for 0000123', () => {
      const newLocal = '0..0123'
      expect(collapseHashZeros(newLocal)).toBe('0..0123')
    })

    it('works for 000000123', () => {
      const newLocal = '000000123'
      expect(collapseHashZeros(newLocal)).toBe('0..0123')
    })

    it('works for 000000000000000123', () => {
      const newLocal = '000000123'
      expect(collapseHashZeros(newLocal)).toBe('0..0123')
    })

    it('works for a reach BTC block hash', () => {
      const newLocal = '00000000000000000005ab84ab5e1c6036f1635db6c09385da794db4ff0cda02'
      expect(collapseHashZeros(newLocal)).toBe('00000000000000000005ab84ab5e1c6036f1635db6c09385da794db4ff0cda02')
    })
  })
})
