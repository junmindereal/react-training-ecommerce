import { useContext } from 'react'
import { Nav } from './Nav'
import { CartContext } from '../context/cartContext'

export function Header () {
  const { cartItems } = useContext(CartContext)

  return (
    <header>
      <Nav />
      <div>Cart: {cartItems.length}
      </div>
    </header>
  )
}
