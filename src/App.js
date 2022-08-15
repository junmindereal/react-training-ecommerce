import { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Products } from './components/Products'
import { ProductDetail } from './components/ProductDetail'
import { NewProductForm } from './components/NewProductForm'
import { Header } from './components/Header'
import { NotFound } from './components/NotFound'
import { Cart } from './components/Cart'
import { Login } from './components/Login'
import { Account } from './components/Account'
import { ProtectedRoute } from './components/ProtectedRoute'

import { ProductListProvider } from './context/productListContext'
import { CartProvider } from './context/cartContext'
import { AccountContext } from './context/accountContext'

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

  const { user } = useContext(AccountContext)

  return (
    <main className='main'>
      <ProductListProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path='/' element={<NewProductForm defaultValues={defaultValues} onSubmit={onSubmit} />} />
            <Route
              path='/account' element={
                <ProtectedRoute user={user}>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route path='/login' element={<Login />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products/:sku' element={<ProductDetail />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </CartProvider>
      </ProductListProvider>
    </main>
  )
}

export default App
