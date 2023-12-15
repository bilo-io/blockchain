import { getAssetColor } from './assets'

describe('assets', () => {
  describe('getAssetColor', () => {
    it('has BTC color', () => {
      expect(getAssetColor('BTC')).toBe('#F7931A')
    })

    it('has BCH color', () => {
      expect(getAssetColor('BCH')).toBe('#0AC18E')
    })

    it('has ETH color', () => {
      expect(getAssetColor('ETH')).toBe('#454A75')
    })
  })
})
