import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AccountContext } from '../../context/accountContext'

export const ProtectedRoute = ({ redirectPath = '/login', children }) => {
  const { user } = useContext(AccountContext)

  if (!user) {
    return <Navigate to={redirectPath} replace />
  }

  return children
}
