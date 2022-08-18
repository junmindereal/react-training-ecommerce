import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { AccountContext } from '../../context/accountContext'
import { Logout } from '../logout'

export const HeaderSidebar = () => {
  const { cartItems } = useContext(CartContext)
  const { user } = useContext(AccountContext)

  return (
    <div>
      <div>Cart: {cartItems.length} </div>
      {user && <Logout />}
    </div>
  )
}
