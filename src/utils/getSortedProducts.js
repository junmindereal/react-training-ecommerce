export const getSortedProducts = (products, sort) => {
  if (sort === 'price') {
    return products.sort((a, b) => {
      return a.price - b.price
    })
  }
  if (sort === 'name') {
    return products.sort((a, b) => {
      const priceA = a.name.toUpperCase()
      const priceB = b.name.toUpperCase()
      return priceA > priceB ? 1 : -1
    })
  }
  return products
}
