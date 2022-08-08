import { useState } from 'react'
import { products } from './data/products'
import { Product } from './components/Product'
import { NewProductForm } from './components/NewProductForm'
import './App.css'

function App () {
  const data = {
    name: '',
    sku: '',
    description: '',
    price: 0
  }

  const [defaultValues, setDefaultValues] = useState(data)

  const onSubmit = (product) => {
    setDefaultValues(product)
  }

  return (
    <main className='main'>
      <NewProductForm
        defaultValues={defaultValues}
        onSubmit={onSubmit}
      />
      <ul className='product-items'>
        {products.map(product => (
          <li key={product.sku} className='product-items-list'>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
