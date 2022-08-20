import { useContext } from 'react'
import { CartProduct } from '../../components/CartProduct'
import { CartContext } from '../../context/cartContext'

export const CartPage = () => {
  const { cartItems } = useContext(CartContext)

  if (cartItems.length === 0) return <div>Cart is empty</div>

  return (
    <ul>
      {cartItems.map(product => (
        <li key={product.id} className='product-items-list'>
          <CartProduct product={product} />
        </li>
      ))}
    </ul>
  )
}
