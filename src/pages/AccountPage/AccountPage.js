import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button } from '../../components/Button'
import { AccountContext } from '../../context/accountContext'

export const AccountPage = () => {
  const navigate = useNavigate()
  const { user, isLoading, logout } = useContext(AccountContext)

  const handleLogout = () => {
    logout()
    toast.success('Logout Successful!')
    navigate('/login')
  }

  if (isLoading) return <p>loading...</p>

  if (user) {
    return (
      <section className='account-section'>
        <p className='account-name'>{`Welcome, ${user.firstName} ${user.lastName}`}</p>
        <Button onClick={handleLogout} className='btn btn-primary btn-medium btn-text-black btn-uppercase'>Logout</Button>
      </section>
    )
  } else if (!user) {
    return navigate('/login')
  }
}
