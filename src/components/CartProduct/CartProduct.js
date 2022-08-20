import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import { Button } from '../Button'

export const CartProduct = ({ product }) => {
  const { sku, name, description, price, selectedSize, img, qty } = product
  const { removeFromCart } = useContext(CartContext)
  const handleRemoveFromCart = (id) => {
    removeFromCart(id)
  }

  return (
    <ul className='cart-product-item'>
      <li className='cart-product-column-product'>
        <Button onClick={() => handleRemoveFromCart(product.id)}>x</Button>
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
        {qty &&
          <span className='cart-product-item-qty'>{qty}</span>}
      </li>
      <li className='cart-product-column-subtotal'>
        <span className='cart-product-item-subtotal'>$123</span>
      </li>
    </ul>
  )
}
