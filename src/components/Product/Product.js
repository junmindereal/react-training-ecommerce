import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { RadioGroup } from '../RadioGroup'
import { Button } from '../Button'
import { CartContext } from '../../context/cartContext'

export const Product = ({ product, noLink = false }) => {
  const { sku, name, description, inStock, price, sizes, img } = product
  const { addToCart } = useContext(CartContext)
  const [selectedSize, setSelectedSize] = useState()
  const [selectSizeWarning, setSelecSizeWarning] = useState()

  const handleProductToCart = () => {
    if (!sizes || selectedSize) {
      addToCart({
        ...product,
        selectedSize,
        id: sku + selectedSize,
        qty: 1,
        subtotal: price
      })
    } else {
      setSelecSizeWarning({
        message: 'Please select product size'
      })
    }
  }

  const handleSelectSize = (event) => {
    setSelectedSize(event.target.value)
    setSelecSizeWarning(null)
  }

  return (
    <ul className='product-item'>
      <li className='product-item-img'><img src={img} alt={description} /></li>
      <li className='product-item-name'>
        {noLink
          ? <p>{name}</p>
          : <Link to={`/products/${sku}`}>{name}</Link>}
      </li>
      <li className='product-item-desc'><span>{description}</span></li>
      {sizes
        ? <li className='product-item-size'>
          <RadioGroup handleChange={handleSelectSize} values={sizes} name={sku} />
          </li>
        : null}
      <li className='product-item-price'>
        {inStock
          ? <span className='price'>${price}</span>
          : <span className='out-of-stock'> Out of Stock </span>}
      </li>
      <li className='product-item-action'>
        <Button onClick={handleProductToCart} className='btn btn-primary btn-full'>Add to Cart</Button>
      </li>
      {selectSizeWarning &&
        <li className='product-item-warning'>
          <p>{selectSizeWarning.message}</p>
        </li>}
      {product.selectedSize && <p>{product.selectedSize}</p>}
      {product.id && <p>{product.id}</p>}
    </ul>
  )
}
