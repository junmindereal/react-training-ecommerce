import { useContext, useEffect, useState } from 'react'
import { CartProduct } from '../../components/CartProduct'
import { CartContext } from '../../context/cartContext'

export const CartPage = () => {
  const { cartItems } = useContext(CartContext)
  const [grandtotal, setGrandtotal] = useState()

  useEffect(() => {
    const subtotals = cartItems.map(item => {
      return item.subtotal
    })

    setGrandtotal(subtotals.reduce((a, b) => a + b, 0))
  }, [cartItems])

  if (cartItems.length === 0) return <div>Cart is empty</div>

  return (
    <section className='cart-container'>
      <ul className='cart-label-list'>
        <li className='cart-label-item cart-label-item-product'><p>Product</p></li>
        <li className='cart-label-item cart-label-item-size'><p>Size</p></li>
        <li className='cart-label-item cart-label-item-price'><p>Price</p></li>
        <li className='cart-label-item cart-label-item-qty'><p>Quantity</p></li>
        <li className='cart-label-item cart-label-item-subtotal'><p>Subtotal</p></li>
      </ul>
      <ul className='cart-product-list'>
        {cartItems.map(product => (
          <li key={product.id} className='cart-product-items'>
            <CartProduct product={product} />
          </li>
        ))}
      </ul>
      <div className='cart-grandtotal'>Grand Total: ${grandtotal}</div>
    </section>
  )
}
