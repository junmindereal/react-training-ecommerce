import { useState, useContext, useEffect } from 'react'
import { Product } from '../../components/Product'
import { ProductListContext } from '../../context/productListContext'

export const SearchPage = () => {
  const { productList, isLoading } = useContext(ProductListContext)
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')

  const handleSearch = (event) => {
    const { value } = event.target
    setSearch(value.toLowerCase())
  }

  useEffect(() => {
    const searchedProducts = productList.filter(product => {
      const name = product.name.toLowerCase()
      const type = product.type.toLowerCase()

      if (name.indexOf(search) !== -1 || type.indexOf(search) !== -1) {
        return product
      } else { return false }
    })

    setProducts([...searchedProducts])
  }, [search, productList])

  if (isLoading) return <p className='message notice'>Loading...</p>
  return (
    <section className='product-listing-page'>
      <div className='product-search-wrapper'>
        <input
          className='product-search-input'
          type='text'
          required
          name='search'
          value={search}
          onChange={handleSearch}
        />
        <div className='product-search-count'>{`${products.length} Products`}</div>
      </div>
      <ul className='product-items'>
        {products.map(product => (
          <li key={product.sku} className='product-items-list'>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </section>
  )
}
