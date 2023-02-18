export const formatCurrency = (value: number, currency: string): string => {
  return value.toLocaleString('en-US', { style: 'currency', currency })
}
