import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiLogin } from '../../api'
import { Button } from '../../components/Button'
import { AccountContext } from '../../context/accountContext'
import { fetchUser } from '../../utils/fetchUser'
import { validateEmail } from '../../utils/validateEmail'
import { toast } from 'react-toastify'

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
      toast.success('Login Successful!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1500
      })
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
    <section className='login-form-container'>
      <article className='login-form-wrapper'>
        <h1 className='login-form-title'>Login</h1>
        <form className='login-form' onSubmit={handleSubmit}>
          <label className='login-form-label'> Email
            <input
              className='login-form-input'
              type='text'
              required
              name='email'
              value={credentials.email}
              onChange={onChange}
            />
          </label>
          <label className='login-form-label'> Password
            <input
              className='login-form-input'
              type='password'
              required
              name='password'
              value={credentials.password}
              onChange={onChange}
            />
          </label>
          <Button className='btn btn-primary btn-full'>Login</Button>
          {isLoading && <p className='form-message notice'>Loading...</p>}
          {hasError && <p className='form-message error'>{hasError.message}</p>}
          {!isValidEmail && <p className='form-message error'>Please Enter Valid Email Address</p>}
        </form>
      </article>
    </section>
  )
}
