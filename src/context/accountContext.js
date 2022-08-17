import { createContext, useState, useEffect } from 'react'
import { apiGetAccount } from '../api'

export const AccountContext = createContext()

export const AccountProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [isLoading, setIsloading] = useState(false)
  const [hasError, setHasError] = useState()
  const lsAuthToken = window.localStorage.getItem('authToken')

  const logout = () => {
    window.localStorage.removeItem('authToken')
    setUser(null)
  }

  useEffect(() => {
    const fetchUserbyToken = async (token) => {
      try {
        const res = await apiGetAccount(token)
        setUser(res)
      } catch (error) {
        setHasError(error)
      } finally {
        setIsloading(false)
      }
    }

    if ('authToken' in window.localStorage) {
      setIsloading(true)
      fetchUserbyToken(lsAuthToken)
    }
  }, [lsAuthToken])

  return (
    <AccountContext.Provider value={{ user, setUser, isLoading, setIsloading, hasError, setHasError, logout }}>
      {children}
    </AccountContext.Provider>
  )
}
