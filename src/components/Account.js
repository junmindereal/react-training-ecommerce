import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AccountContext } from '../context/accountContext'

export function Account () {
  const navigate = useNavigate()
  const { user, isLoggedIn, isLoading } = useContext(AccountContext)

  if (isLoading) return <p>loading...</p>

  if (isLoggedIn) {
    return (
      <ul>
        <li><p>Email: {user.email}</p></li>
        <li><p>First Name: {user.firstName}</p></li>
        <li><p>Last Name: {user.lastName}</p></li>
      </ul>
    )
  }

  if (!user) {
    return navigate('/login')
  }
}
