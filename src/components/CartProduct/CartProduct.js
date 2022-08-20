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
      <li className='cart-product-item-img'><img src={img} alt={description} /></li>
      <li className='cart-product-item-name'><Link to={`/products/${sku}`}>{name}</Link></li>
      {selectedSize && <li className='cart-product-item-size'><span>{selectedSize}</span></li>}
      <li className='cart-product-item-price'> <span className='price'>${price}</span> </li>
      <li className='cart-product-item-desc'><span>{description}</span></li>
      {qty && <li className='cart-product-item-qty'> <span className='qty'>{qty}</span> </li>}
      <Button onClick={() => handleRemoveFromCart(product.id)}>x</Button>
    </ul>
  )
}
