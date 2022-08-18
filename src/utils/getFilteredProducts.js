export const getFilteredProducts = (products, type) => {
  if (type === 'all') {
    return products
  } else {
    return products.filter(product => type === product.type)
  }
}
