import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { NotFound } from './NotFound'
import { ProductListContext } from '../context/productListContext'
import { CartContext } from '../context/cartContext'
import { getProduct } from '../api'

export function ProductDetail () {
  const { sku } = useParams()
  const [product, setProduct] = useState({})
  const [notFound, setNotFound] = useState({ isNotFound: false, errorMessage: '' })
  const { productList, isLoading, setIsloading } = useContext(ProductListContext)
  const { setCartItems } = useContext(CartContext)

  const getProductFromContext = (sku) => {
    return productList.find(product => product.sku === sku)
  }

  const handleAddToCart = () => {
    setCartItems(prev => [...prev, product])
  }

  useEffect(() => {
    const tempProduct = getProductFromContext(sku)

    if (productList.length === 0) {
      const fetchProduct = async () => {
        try {
          const res = await getProduct(sku)
          setProduct(res)
          setIsloading(false)
        } catch (error) {
          setIsloading(false)
          setNotFound({
            isNotFound: true,
            errorMessage: error.message
          })
        }
      }

      fetchProduct()
    } else if (tempProduct) {
      setProduct({ ...tempProduct })
      setIsloading(false)
    } else {
      setIsloading(false)
      setNotFound({
        isNotFound: true,
        errorMessage: `Product with ${sku} sku was not found`
      })
    }
  }, [sku])

  if (isLoading) return <p>loading...</p>
  if (notFound.isNotFound) return <NotFound notFound={notFound} />

  return (
    <div>
      <h1>{product.name}</h1>
      {product.inStock
        ? <p>price: {product.price}</p>
        : <p> Out of Stock </p>}
      <p>Description: {product.description}</p>
      <p>SKU: {product.sku}</p>
      <img src={product.img} alt={product.description} />
      <button type='button' onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}
