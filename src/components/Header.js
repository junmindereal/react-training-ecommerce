import { useContext } from 'react'
import { Nav } from './Nav'
import { CartContext } from '../context/cartContext'
import { AccountContext } from '../context/accountContext'
import { useNavigate } from 'react-router-dom'

export function Header () {
  const { cartItems } = useContext(CartContext)
  const { user, isLoggedIn, setIsLoggedIn } = useContext(AccountContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    window.localStorage.removeItem('authToken')
    setIsLoggedIn(false)
    navigate('/login')
  }

  return (
    <header>
      <Nav />
      <div>Cart: {cartItems.length} </div>
      {isLoggedIn &&
        <>
          <p>{`${user.firstName.charAt(0)} ${user.lastName.charAt(0)}`}</p>
          <button onClick={handleLogout}>Logout</button>
        </>}
    </header>
  )
}
