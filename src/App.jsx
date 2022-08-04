import { products } from './data/products'
import './App.css'

const showProductInfo = (product) => {
  console.log(product)
}

function App () {
  return (
    <main className='main'>
      <ul className='product-items'>
        {products.map(product => (
          <li key={product.sku} className='product-items-list'>
            <ul className='product-item' onClick={() => showProductInfo(product)}>
              <li className='product-item-name'><span>name: {product.name}</span></li>
              <li className='product-item-sku'><span>sku: {product.sku}</span></li>
              <li className='product-item-desc'><span>description: {product.description}</span></li>
              <li className='product-item-price'>
                {product.inStock === false
                  ? <span> Out of Stock </span>
                  : <span>price: {product.price}</span>}
              </li>
              {product.sizes
                ? <li className='product-item-size'>size:
                  {product.sizes.map((size, index, arr) => (
                    arr.length - 1 === index ? size : ` ${size}, `
                  ))}
                </li>
                : null}
              <li className='product-item-img'><img src={product.img} alt={product.description} /></li>
            </ul>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
