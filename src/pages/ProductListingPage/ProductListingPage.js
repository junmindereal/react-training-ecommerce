import { useState, useEffect, useContext } from 'react'
import { Select } from '../../components/Select'
import { Product } from '../../components/Product'
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
            <Product product={product} />
          </li>
        ))}
      </ul>
    </>
  )
}
