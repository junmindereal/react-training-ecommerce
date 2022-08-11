import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const removeFromCart = (sku) => {
    const newCartItems = cartItems.filter(product => sku !== product.sku)
    setCartItems(newCartItems)
  }

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product])
  }

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, removeFromCart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
