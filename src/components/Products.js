import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductListContext } from '../context/productListContext'

export function Products () {
  const { productList, products, setProducts, isLoading } = useContext(ProductListContext)
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('name')

  useEffect(() => {
    const filteredProduct = getFilteredProducts(productList, filter)
    const sortedProduct = getSortedProducts(filteredProduct, sort)
    setProducts([...sortedProduct])
  }, [productList, sort, filter])

  const getFilteredProducts = (products, type) => {
    if (type === 'all') {
      return products
    } else {
      return products.filter(product => type === product.type)
    }
  }

  const getSortedProducts = (products, sort) => {
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

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleSort = (event) => {
    setSort(event.target.value)
  }

  const showProductInfo = (product) => {
    console.log(product)
  }

  if (isLoading) return <p>Loading...</p>
  return (
    <>
      <select value={sort} onChange={handleSort}>
        <option value='name'>Name</option>
        <option value='price'>Price</option>
      </select>
      <select value={filter} onChange={handleFilter}>
        <option value='all'>All</option>
        <option value='clothes'>Clothes</option>
        <option value='bag'>Bag</option>
        <option value='shoes'>Shoes</option>
      </select>
      <ul className='product-items'>
        {products.map(product => (
          <li key={product.sku} className='product-items-list'>
            <ul className='product-item' onClick={() => showProductInfo(product)}>
              <li className='product-item-name'>
                <Link to={`/products/${product.sku}`}>name: {product.name}</Link>
              </li>
              <li className='product-item-sku'><span>sku: {product.sku}</span></li>
              <li className='product-item-desc'><span>description: {product.description}</span></li>
              <li className='product-item-price'>
                {product.inStock
                  ? <span>price: {product.price}</span>
                  : <span> Out of Stock </span>}
              </li>
              {product.sizes
                ? <li className='product-item-size'>size: {product.sizes.join(',')} </li>
                : null}
              <li className='product-item-img'><img src={product.img} alt={product.description} /></li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  )
}
