import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { Header } from './components/Header'
import { ProductListingPage } from './pages/ProductListingPage'

import { ProductDetail } from './components/ProductDetail'
import { NotFound } from './components/NotFound'
import { Cart } from './components/Cart'
import { Login } from './components/Login'
import { Account } from './components/Account'
import { ProtectedRoute } from './components/ProtectedRoute'

import { ProductListProvider } from './context/productListContext'
import { CartProvider } from './context/cartContext'
import { AccountProvider } from './context/accountContext'

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
      <AccountProvider>
        <ProductListProvider>
          <CartProvider>
            <Header />
            <Routes>
              <Route path='/' element={<HomePage defaultValues={defaultValues} onSubmit={onSubmit} />} />
              <Route
                path='/account' element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
              }
              />
              <Route path='/login' element={<Login />} />
              <Route path='/products' element={<ProductListingPage />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/products/:sku' element={<ProductDetail />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </CartProvider>
        </ProductListProvider>
      </AccountProvider>
    </main>
  )
}

export default App
