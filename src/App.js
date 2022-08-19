import { Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { Header } from './components/Header'
import { ProductListingPage } from './pages/ProductListingPage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { NotFound } from './components/NotFound'
import { CartPage } from './pages/CartPage'
import { LoginPage } from './pages/LoginPage'
import { AccountPage } from './pages/AccountPage'
import { ProtectedRoute } from './components/ProtectedRoute'

import { ProductListProvider } from './context/productListContext'
import { CartProvider } from './context/cartContext'
import { AccountProvider } from './context/accountContext'

import './App.scss'

function App () {
  return (
    <main className='main'>
      <AccountProvider>
        <ProductListProvider>
          <CartProvider>
            <Header />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route
                path='/account' element={
                  <ProtectedRoute>
                    <AccountPage />
                  </ProtectedRoute>
              }
              />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/products' element={<ProductListingPage />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/products/:sku' element={<ProductDetailPage />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </CartProvider>
        </ProductListProvider>
      </AccountProvider>
    </main>
  )
}

export default App
