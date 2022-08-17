import { useContext } from 'react'
import { Nav } from './Nav'
import { Logout } from './logout'
import { CartContext } from '../context/cartContext'
import { AccountContext } from '../context/accountContext'

export function Header () {
  const { cartItems } = useContext(CartContext)
  const { isLoggedIn } = useContext(AccountContext)

  return (
    <header>
      <Nav />
      <div>Cart: {cartItems.length} </div>
      {isLoggedIn && <Logout />}
    </header>
  )
}
