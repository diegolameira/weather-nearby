export const normalizeTemp = (temp: number) => {
  if ( temp <= 19 ) return 'cold'
  if ( temp >= 32 ) return 'hot'
  return 'regular'
}
