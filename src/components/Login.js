import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AccountContext } from '../context/accountContext'
import { apiLogin } from '../api'

export function Login () {
  const navigate = useNavigate()
  const {
    isLoading,
    setIsloading,
    hasError,
    setHasError,
    user,
    setUser
  } = useContext(AccountContext)
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (user) {
      window.localStorage.setItem('authToken', user.authToken)
      return navigate('/account')
    }
  }, [user])

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const onChange = (event) => {
    const { name, value } = event.target

    setCredentials({
      ...credentials,
      [name]: value
    })
  }

  const fetchUser = async (login) => {
    try {
      const res = await apiLogin(login)
      setUser(res)
    } catch (error) {
      setHasError(error)
    } finally {
      setIsloading(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsloading(true)

    if (hasError) {
      setHasError(null)
    }

    if (validateEmail(credentials.email)) {
      fetchUser(credentials)
    } else {
      setIsValidEmail(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label> Email
        <input
          type='text'
          required
          name='email'
          value={credentials.email}
          onChange={onChange}
        />
      </label>
      <label> Password
        <input
          type='password'
          required
          name='password'
          value={credentials.password}
          onChange={onChange}
        />
      </label>
      <button>Login</button>
      {isLoading && <p>Loading...</p>}
      {hasError && <p>{hasError.message}</p>}
      {!isValidEmail && <p>Please Enter Valid Email Address</p>}
    </form>
  )
}
