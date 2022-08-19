import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiLogin } from '../../api'
import { AccountContext } from '../../context/accountContext'
import { fetchUser } from '../../utils/fetchUser'
import { validateEmail } from '../../utils/validateEmail'

export const LoginPage = () => {
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

  const onChange = (event) => {
    const { name, value } = event.target

    setCredentials({
      ...credentials,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsloading(true)

    if (hasError) {
      setHasError(null)
    }

    if (validateEmail(credentials.email)) {
      fetchUser(credentials, apiLogin, setUser, setHasError, setIsloading)
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
