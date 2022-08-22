import { useState, useEffect, useContext } from 'react'
import { Breadcrumb } from '../../components/Breadcrumb'
import { Product } from '../../components/Product'
import { ProductListContext } from '../../context/productListContext'
import { getFilteredProducts } from '../../utils/getFilteredProducts'

export const BagPage = () => {
  const { productList, isLoading } = useContext(ProductListContext)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const filteredProducts = getFilteredProducts(productList, 'bag')
    setProducts([...filteredProducts])
  }, [productList])

  if (isLoading) return <p>Loading...</p>

  return (
    <>
      <Breadcrumb base='products' category='bag' />
      <section className='product-listing-page'>
        <ul className='product-items'>
          {products.map(product => (
            <li key={product.sku} className='product-items-list'>
              <Product product={product} />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
