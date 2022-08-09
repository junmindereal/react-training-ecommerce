import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../api'
import { NotFound } from './NotFound'

export function ProductDetail () {
  const { sku } = useParams()
  const [product, setProduct] = useState({})
  const [isLoading, setIsloading] = useState(true)
  const [notFound, setNotFound] = useState({ isNotFound: false, errorMessage: '' })

  useEffect(() => {
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
  }, [])

  if (isLoading) {
    return <p>loading...</p>
  } else if (product && !notFound) {
    return (
      <div>
        <h1>{product.name}</h1>
        {product.inStock
          ? <p>price: {product.price}</p>
          : <p> Out of Stock </p>}
        <p>Description: {product.description}</p>
        <p>SKU: {product.sku}</p>
        <img src={product.img} alt={product.description} />
      </div>
    )
  } else {
    return <NotFound notFound={notFound} />
  }
}
