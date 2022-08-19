import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AccountContext } from '../../context/accountContext'

export const AccountPage = () => {
  const navigate = useNavigate()
  const { user, isLoading } = useContext(AccountContext)
  const { email, firstName, lastName } = user

  if (isLoading) return <p>loading...</p>

  if (user) {
    return (
      <ul>
        <li><p>Email: {email}</p></li>
        <li><p>First Name: {firstName}</p></li>
        <li><p>Last Name: {lastName}</p></li>
      </ul>
    )
  } else if (!user) {
    return navigate('/login')
  }
}
