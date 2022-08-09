import { Link } from 'react-router-dom'

export function Products ({ products }) {
  const showProductInfo = (product) => {
    console.log(product)
  }

  return (
    <ul className='product-items'>
      {products.map(product => (
        <li key={product.sku} className='product-items-list'>
          <ul className='product-item' onClick={() => showProductInfo(product)}>
            <li className='product-item-name'>
              <Link to={`/products/${product.sku}`}>name: {product.name}</Link>
            </li>
            <li className='product-item-sku'><span>sku: {product.sku}</span></li>
            <li className='product-item-desc'><span>description: {product.description}</span></li>
            <li className='product-item-price'>
              {product.inStock
                ? <span>price: {product.price}</span>
                : <span> Out of Stock </span>}
            </li>
            {product.sizes
              ? <li className='product-item-size'>size: {product.sizes.join(',')} </li>
              : null}
            <li className='product-item-img'><img src={product.img} alt={product.description} /></li>
          </ul>
        </li>
      ))}
    </ul>

  )
}
