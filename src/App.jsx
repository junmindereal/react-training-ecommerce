import { product } from './data/product'
import './App.css'

function App () {
  const { name, sku, img, description, price } = product

  return (
    <main className='main'>
      <ul className='product-item'>
        <li className='product-item-name'><span>name: {name}</span></li>
        <li className='product-item-sku'><span>sku: {sku}</span></li>
        <li className='product-item-desc'><span>description: {description}</span></li>
        <li className='product-item-price'><span>price: {price}</span></li>
        <li className='product-item-img'><img src={img} alt={description} /></li>
      </ul>
    </main>
  )
}

export default App
