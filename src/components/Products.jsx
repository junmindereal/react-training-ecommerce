import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getProductsList } from '../api'

export function Products () {
  const [products, setProducts] = useState([])
  const [originalProducts, setOriginalProducts] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const [filter, setFilter] = useFilter()
  const [sort, setSort] = useSort()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProductsList()
        setProducts(res)
        setOriginalProducts(res)
        setIsloading(false)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProducts()
  }, [])

  function useFilter () {
    const [filter, setFilter] = useState()

    useEffect(() => {
      setProducts(getFilteredProducts(originalProducts, filter))
      console.log(filter)
    }, [filter])

    return [filter, setFilter]
  }

  function useSort () {
    const [sort, setSort] = useState()

    useEffect(() => {
      setProducts(getSortedProducts(products, sort))
    }, [sort])

    return [sort, setSort]
  }

  function compareNumbers (a, b) {
    if (a.inStock || b.inStock) {
      return a - b
    } else {
      return -1
    }
  }

  function getSortedProducts (products, sort) {
    console.log('sort', sort)
    if (sort === 'name') {
      return products.sort((a, b) => {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }

        return 0
      })
    }

    if (sort === 'price') {
      return products.sort(compareNumbers)
    }

    return products
  }

  function getFilteredProducts (products, type) {
    if (type === 'all') {
      return products
    } else {
      return products.filter(product => type === product.type)
    }
  }

  function handleFilter (event) {
    setFilter(event.target.value)
  }

  function handleSort (event) {
    setSort(event.target.value)
  }

  const showProductInfo = (product) => {
    console.log(product)
  }

  if (isLoading) {
    return <p>Loading...</p>
  } else {
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
}
