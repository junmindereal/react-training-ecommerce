export function Product ({ product }) {
  const showProductInfo = () => {
    console.log(product)
  }

  const { name, sku, description, inStock, price, sizes, img } = product

  return (
    <ul className='product-item' onClick={() => showProductInfo()}>
      <li className='product-item-name'><span>name: {name}</span></li>
      <li className='product-item-sku'><span>sku: {sku}</span></li>
      <li className='product-item-desc'><span>description: {description}</span></li>
      <li className='product-item-price'>
        {!inStock
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
