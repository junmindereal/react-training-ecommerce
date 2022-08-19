import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { NotFound } from '../../components/NotFound'
import { Product } from '../../components/Product'

import { CartContext } from '../../context/cartContext'
import { ProductListContext } from '../../context/productListContext'

export const ProductDetailPage = () => {
  const { sku } = useParams()
  const { productList, isLoading } = useContext(ProductListContext)
  const { cartItems, addToCart } = useContext(CartContext)
  const [product, setProduct] = useState()
  const [isError, setIsError] = useState(false)
  const [isAlreadyAddedToCart, setIsAlreadyAddedToCart] = useState(false)

  const handleAddToCart = () => {
    if (cartItems.some(item => item.sku === product.sku)) {
      setIsAlreadyAddedToCart(true)
    } else {
      addToCart(product)
    }
  }

  useEffect(() => {
    if (productList.length > 0) {
      const product = productList.find(product => product.sku === sku)
      if (!product) return setIsError({ errorMessage: `Product with ${sku} sku was not found` })
      setProduct(product)
    }
  }, [sku, productList])

  return (
    <div>
      {isLoading && <p>loading...</p>}
      {product &&
        <>
          {isAlreadyAddedToCart && <p>Each product can only be added once in to cart.</p>}
          <Product product={product} noLink />
          <button type='button' onClick={handleAddToCart}>Add to Cart</button>
        </>}
      {isError && <NotFound notFound={isError} />}
    </div>
  )
}
