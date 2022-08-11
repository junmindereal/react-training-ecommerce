import { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductListContext } from '../context/productListContext'
import { CartContext } from '../context/cartContext'

export function ProductDetail () {
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
      if (!product) return setIsError(true)
      setProduct(product)
    }
  }, [sku, productList])

  return (
    <div>
      {isLoading && <p>loading...</p>}
      {product &&
        <>
          {isAlreadyAddedToCart && <p>Each product can only be added once in to cart.</p>}
          <h1>{product.name}</h1>
          {product.inStock
            ? <p>price: {product.price}</p>
            : <p> Out of Stock </p>}
          <p>Description: {product.description}</p>
          <p>SKU: {product.sku}</p>
          <img src={product.img} alt={product.description} />
          <button type='button' onClick={handleAddToCart}>Add to Cart</button>
        </>}
      {isError &&
        <>
          <h1>Product Not found</h1>
          <Link to='/products'>Go back to products</Link>
        </>}
    </div>
  )
}
