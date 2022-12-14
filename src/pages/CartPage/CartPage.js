import { useContext, useMemo } from 'react'
import { CartProduct } from '../../components/CartProduct'
import { CartContext } from '../../context/cartContext'

export const CartPage = () => {
  const { cartItems } = useContext(CartContext)
  const grandtotal = useMemo(() => {
    let total = 0
    cartItems.forEach(item => {
      total = total + item.subtotal
    })

    return total
  }, [cartItems])

  if (cartItems.length === 0) {
    return (
      <section className='cart-container'>
        <h1 className='cart-empty'>Cart is empty </h1>
      </section>
    )
  }

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
