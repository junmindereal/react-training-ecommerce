import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const removeFromCart = (id) => {
    const newCartItems = cartItems.filter(product => id !== product.id)
    setCartItems(newCartItems)
  }

  const addToCart = (product) => {
    const tempProduct = cartItems.find(p => product.id === p.id)

    if (tempProduct) {
      const updatedCartItems = cartItems.filter(p => product.id !== p.id)
      tempProduct.qty += product.qty
      tempProduct.subtotal = tempProduct.price * tempProduct.qty
      setCartItems([...updatedCartItems, tempProduct])
    } else {
      setCartItems(prev => [...prev, { ...product }])
    }

    console.log({ cartItems })
  }

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, removeFromCart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
