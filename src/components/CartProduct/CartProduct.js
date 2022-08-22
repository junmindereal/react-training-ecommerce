import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import { IconButton } from '../IconButton/IconButton'
import { ReactComponent as CrossIcon } from '../../static/svg/cross-icon.svg'

export const CartProduct = ({ product }) => {
  const { sku, name, description, price, selectedSize, img, qty, id, subtotal } = product
  const { removeFromCart, cartItems, setCartItems } = useContext(CartContext)
  const [thisQty, setThisQty] = useState(qty)

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId)
  }

  const handleQtyOnBlur = (event) => {
    const qtyValue = event.target.value
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, qty: qtyValue, subtotal: price * qtyValue }
      } else {
        return item
      }
    })
    setCartItems([...updatedCartItems])
  }

  const handleQtyOnChange = (event) => {
    setThisQty(event.target.value)
  }

  return (
    <ul className='cart-product-item'>
      <li className='cart-product-column-product'>
        <IconButton className='btn btn-icon' onClick={() => handleRemoveFromCart(id)}><CrossIcon /></IconButton>
        <img className='cart-product-item-img' src={img} alt={description} />
        <Link className='cart-product-item-name' to={`/products/${sku}`}>{name}</Link>
      </li>
      <li className='cart-product-column-size'>
        {selectedSize &&
          <span className='cart-product-item-size'>{selectedSize}</span>}
      </li>
      <li className='cart-product-column-price'>
        <span className='cart-product-item-price'>${price}</span>

      </li>
      <li className='cart-product-column-qty'>
        <input
          type='text'
          required
          name='qty'
          value={thisQty}
          onBlur={handleQtyOnBlur}
          onChange={handleQtyOnChange}
        />
      </li>
      <li className='cart-product-column-subtotal'>
        <span className='cart-product-item-subtotal'>${subtotal}</span>
      </li>
    </ul>
  )
}
