import { useParams } from 'react-router-dom'
import { products } from '../data/products'

export function ProductDetail () {
  const { sku } = useParams()
  const product = products.find(product => product.sku === sku)

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
}
