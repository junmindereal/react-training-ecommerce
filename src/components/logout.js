import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AccountContext } from '../context/accountContext'

export const Logout = () => {
  const navigate = useNavigate()
  const { logout, user } = useContext(AccountContext)

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <>
      <p>{`${user.firstName.charAt(0)} ${user.lastName.charAt(0)}`}</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}
