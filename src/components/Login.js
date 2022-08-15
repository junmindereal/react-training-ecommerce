import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AccountContext } from '../context/accountContext'

export function Login () {
  const navigate = useNavigate()
  const { setLogin, isLoggedIn, isLoading, hasError, setHasError, user } = useContext(AccountContext)
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (isLoggedIn) {
      window.localStorage.setItem('authToken', user.authToken)
      return navigate('/account')
    }
  }, [isLoggedIn, user])

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

  const handleSubmit = (event) => {
    event.preventDefault()
    if (hasError) {
      setHasError(null)
    }

    if (validateEmail(credentials.email)) {
      setLogin(credentials)
    } else {
      setIsValidEmail(false)
    }
  }

  if (isLoading) return <p>Loading...</p>

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
      {isLoggedIn && <p>Logged In </p>}
      {hasError && <p>{hasError.message}</p>}
      {!isValidEmail && <p>Please Enter Valid Email Address</p>}
    </form>
  )
}
