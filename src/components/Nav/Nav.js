import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/'>Home</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/products'>Products</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/clothes'>Clothes</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/bag'>Bag</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/shoes'>Shoes</NavLink>
        </li>
      </ul>
    </nav>
  )
}
