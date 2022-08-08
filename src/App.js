import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
    <Router>
      <main className='main'>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <NewProductForm
              defaultValues={defaultValues}
              onSubmit={onSubmit}
            />
          </Route>
          <Route exact path='/products'>
            <Products products={products} />
          </Route>
          <Route path='/products/:sku'>
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

export default App
