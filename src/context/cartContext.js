import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [isAlreadyAddedToCart, setIsAlreadyAddedToCart] = useState(false)

  const removeFromCart = (sku) => {
    const newCartItems = cartItems.filter(product => sku !== product.sku)
    setCartItems(newCartItems)
  }

  const addToCart = (product) => {
    if (cartItems.some(item => item.sku === product.sku)) {
      setIsAlreadyAddedToCart(true)
    } else {
      setCartItems(prev => [...prev, product])
    }
  }

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, removeFromCart, addToCart, isAlreadyAddedToCart }}>
      {children}
    </CartContext.Provider>
  )
}
