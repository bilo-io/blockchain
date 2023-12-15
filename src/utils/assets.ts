import { assets } from '../styles/colors'

export const getAssetColor = (code: string): string => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return assets?.[code.toUpperCase()] ?? '#00adee'
}
