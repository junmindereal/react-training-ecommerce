import { Link } from 'react-router-dom'

export const CartProduct = ({ product, noLink = false }) => {
  const { sku, name, description, price, selectedSize, img, qty } = product

  return (
    <ul className='cart-product-item'>
      <li className='cart-product-item-img'><img src={img} alt={description} /></li>
      <li className='cart-product-item-name'>
        {noLink
          ? <p>{name}</p>
          : <Link to={`/products/${sku}`}>{name}</Link>}
      </li>
      {selectedSize && <li className='cart-product-item-size'><span>{selectedSize}</span></li>}
      <li className='cart-product-item-price'> <span className='price'>${price}</span> </li>
      <li className='cart-product-item-desc'><span>{description}</span></li>
      {qty && <li className='cart-product-item-qty'> <span className='qty'>{qty}</span> </li>}
    </ul>
  )
}
