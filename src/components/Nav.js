import { NavLink } from 'react-router-dom'

export function Nav () {
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
      </ul>
    </nav>
  )
}
