import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Select } from '../../components/Select'
import { ProductListContext } from '../../context/productListContext'
import { getFilteredProducts } from '../../utils/getFilteredProducts'
import { getSortedProducts } from '../../utils/getSortedProducts'

export const ProductListingPage = () => {
  const { productList, isLoading } = useContext(ProductListContext)
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('name')
  const sortSelectValues = ['name', 'price']
  const sortSelectLabels = ['Name', 'Price']
  const filterSelectValues = ['all', 'clothes', 'bag', 'shoes']
  const filterSelectLabels = ['All', 'Clothes', 'Bag', 'Shoes']

  useEffect(() => {
    const filteredProduct = getFilteredProducts(productList, filter)
    const sortedProduct = getSortedProducts(filteredProduct, sort)
    setProducts([...sortedProduct])
  }, [productList, sort, filter])

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
      <Select
        selectValue={sort}
        handleChange={handleSort}
        optionValues={sortSelectValues}
        optionLabels={sortSelectLabels}
      />
      <Select
        selectValue={filter}
        handleChange={handleFilter}
        optionValues={filterSelectValues}
        optionLabels={filterSelectLabels}
      />
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
