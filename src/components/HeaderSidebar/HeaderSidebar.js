import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import { AccountContext } from '../../context/accountContext'

export const HeaderSidebar = () => {
  const navigate = useNavigate()
  const { cartItems } = useContext(CartContext)
  const { user, logout } = useContext(AccountContext)

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div>
      <div>Cart: {cartItems.length} </div>
      {user &&
        <>
          <p>{`${user.firstName.charAt(0)} ${user.lastName.charAt(0)}`}</p>
          <button onClick={handleLogout}>Logout</button>
        </>}
    </div>
  )
}
