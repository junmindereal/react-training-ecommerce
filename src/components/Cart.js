import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'

export function Cart () {
  const { cartItems, removeFromCart } = useContext(CartContext)

  const handleRemoveFromCart = (sku) => {
    removeFromCart(sku)
  }

  if (cartItems.length === 0) return <div>Cart is empty</div>

  return (
    <ul>
      {cartItems.map(product => (
        <li key={product.sku} className='product-items-list'>
          <ul className='product-item'>
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
            <button type='button' onClick={() => handleRemoveFromCart(product.sku)}>Remove Product</button>
          </ul>
        </li>
      ))}
    </ul>
  )
}
