import { createContext, useState, useEffect } from 'react'
import { apiLogin, apiGetAccount } from '../api'

export const AccountContext = createContext()

export const AccountProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [login, setLogin] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsloading] = useState(false)
  const [hasError, setHasError] = useState()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await apiLogin(login)
        setUser(res)
        setIsLoggedIn(true)
      } catch (error) {
        setHasError(error)
      } finally {
        setIsloading(false)
      }
    }

    const fetchUserbyToken = async (token) => {
      try {
        const res = await apiGetAccount(token)
        setUser(res)
        setIsLoggedIn(true)
      } catch (error) {
        setHasError(error)
      } finally {
        setIsloading(false)
      }
    }

    if (Object.keys(login).length > 0) {
      setIsloading(true)
      fetchUser()
    }

    if ('authToken' in window.localStorage) {
      const LSAuthToken = window.localStorage.getItem('authToken')
      setIsloading(true)
      fetchUserbyToken(LSAuthToken)
    }
  }, [login, user])

  return (
    <AccountContext.Provider value={{ user, login, setLogin, isLoggedIn, setIsLoggedIn, isLoading, hasError, setHasError }}>
      {children}
    </AccountContext.Provider>
  )
}
