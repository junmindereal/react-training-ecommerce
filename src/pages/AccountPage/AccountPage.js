import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { AccountContext } from '../../context/accountContext'

export const AccountPage = () => {
  const navigate = useNavigate()
  const { user, isLoading, logout } = useContext(AccountContext)

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  if (isLoading) return <p>loading...</p>

  if (user) {
    return (
      <div>
        <p>{`Welcome, ${user.firstName} ${user.lastName}`}</p>
        <Button onClick={handleLogout} className='btn btn-primary btn-small'>Logout</Button>
      </div>
    )
  } else if (!user) {
    return navigate('/login')
  }
}
