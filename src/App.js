import { useState } from 'react'
import { products } from './data/products'
import { Product } from './components/Product'
import { NewProductForm } from './components/NewProductForm'
import './App.css'

function App () {
  const [name, setName] = useState('')
  const [sku, setSku] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  return (
    <main className='main'>
      <NewProductForm
        name={name}
        onNameChange={setName}
        sku={sku}
        onSkuChange={setSku}
        description={description}
        onDescriptionChange={setDescription}
        price={price}
        onPriceChange={setPrice}
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
