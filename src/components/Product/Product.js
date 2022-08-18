import { Link } from 'react-router-dom'

export const Product = ({ product, noLink = false }) => {
  const showProductInfo = (product) => {
    console.log(product)
  }

  const { sku, name, description, inStock, price, sizes, img } = product

  return (
    <ul className='product-item' onClick={() => showProductInfo(product)}>
      <li className='product-item-name'>
        {noLink
          ? <p>name: {name}</p>
          : <Link to={`/products/${sku}`}>name: {name}</Link>}
      </li>
      <li className='product-item-sku'><span>sku: {sku}</span></li>
      <li className='product-item-desc'><span>description: {description}</span></li>
      <li className='product-item-price'>
        {inStock
          ? <span>price: {price}</span>
          : <span> Out of Stock </span>}
      </li>
      {sizes
        ? <li className='product-item-size'>size: {sizes.join(',')} </li>
        : null}
      <li className='product-item-img'><img src={img} alt={description} /></li>
    </ul>
  )
}
