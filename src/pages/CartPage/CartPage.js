import { useContext } from 'react'
import { Product } from '../../components/Product'
import { CartContext } from '../../context/cartContext'

export const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext)

  const handleRemoveFromCart = (sku) => {
    removeFromCart(sku)
  }

  if (cartItems.length === 0) return <div>Cart is empty</div>

  return (
    <ul>
      {cartItems.map(product => (
        <li key={product.sku} className='product-items-list'>
          <Product product={product} />
          <button type='button' onClick={() => handleRemoveFromCart(product.sku)}>Remove Product</button>
        </li>
      ))}
    </ul>
  )
}
