import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { products } from './data/products'
import { Products } from './components/Products'
import { ProductDetail } from './components/ProductDetail'
import { NewProductForm } from './components/NewProductForm'
import { Nav } from './components/Nav'
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
      <Nav />
      <Routes>
        <Route exact path='/' element={<NewProductForm defaultValues={defaultValues} onSubmit={onSubmit} />} />
        <Route exact path='/products' element={<Products products={products} />} />
        <Route path='/products/:sku' element={<ProductDetail />} />
      </Routes>
    </main>
  )
}

export default App
