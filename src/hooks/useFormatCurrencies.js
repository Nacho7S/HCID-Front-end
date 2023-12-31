function useFormatCurrencies(price) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumSignificantDigits: 3,
  }).format(price)
}

export default useFormatCurrencies