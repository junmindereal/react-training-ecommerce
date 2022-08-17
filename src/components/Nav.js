import { useContext } from 'react'
import { AccountContext } from '../context/accountContext'
import { NavLink } from 'react-router-dom'

export function Nav () {
  const { user } = useContext(AccountContext)
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/products'>Products</NavLink>
        </li>
        <li>
          <NavLink to='/cart'>Cart</NavLink>
        </li>
        {user
          ? <li><NavLink to='/account'>Account</NavLink></li>
          : <li><NavLink to='/login'>login</NavLink></li>}
      </ul>
    </nav>
  )
}
