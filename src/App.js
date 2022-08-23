import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { HomePage } from './pages/HomePage'
import { Header } from './components/Header'
import { ProductListingPage } from './pages/ProductListingPage'
import { ClothesPage } from './pages/ClothesPage'
import { BagPage } from './pages/BagPage'
import { ShoesPage } from './pages/ShoesPage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { NotFound } from './components/NotFound'
import { CartPage } from './pages/CartPage'
import { LoginPage } from './pages/LoginPage'
import { AccountPage } from './pages/AccountPage'
import { SearchPage } from './pages/SearchPage'
import { ProtectedRoute } from './components/ProtectedRoute'

import { ProductListProvider } from './context/productListContext'
import { CartProvider } from './context/cartContext'
import { AccountProvider } from './context/accountContext'

import './App.scss'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  return (
    <main className='main'>
      <ToastContainer />
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
              <Route path='/clothes' element={<ClothesPage />} />
              <Route path='/bag' element={<BagPage />} />
              <Route path='/shoes' element={<ShoesPage />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/search' element={<SearchPage />} />
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
