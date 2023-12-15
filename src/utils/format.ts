export const formatCurrency = (value: number, currency: string): string => {
  return value.toLocaleString('en-US', { style: 'currency', currency })
}

export const collapseHashZeros = (value: string | number): string => {
  const stringValue = `${value}`

  return stringValue.includes('0000')
    ? stringValue.replace(/^0+/, '0..0')
    : stringValue
}
