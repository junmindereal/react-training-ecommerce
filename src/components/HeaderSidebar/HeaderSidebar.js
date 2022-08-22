import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { IconButton } from '../IconButton/IconButton'
import { CartContext } from '../../context/cartContext'
import { AccountContext } from '../../context/accountContext'
import { ReactComponent as SearchIcon } from '../../static/svg/search-icon.svg'
import { ReactComponent as CartIcon } from '../../static/svg/cart-icon.svg'

export const HeaderSidebar = () => {
  const { cartItems } = useContext(CartContext)
  const { user } = useContext(AccountContext)

  return (
    <ul className='header-sidebar'>
      {user
        ? <li className='header-sidebar-item'><NavLink className='header-account-link' to='/account'>{`${user.firstName.charAt(0)} ${user.lastName.charAt(0)}`}</NavLink></li>
        : <li className='header-sidebar-item'><NavLink className='btn btn-primary btn-small' to='/login'>login</NavLink></li>}
      <li className='header-sidebar-item'>
        <IconButton to='/search' className='link-icon link-icon-search'>
          <SearchIcon className='link-icon-svg' />
          <span className='link-icon-label'>Search</span>
        </IconButton>
      </li>
      <li className='header-sidebar-item'>
        <IconButton to='/cart' className='link-icon link-icon-cart'>
          {cartItems.length > 0 ? <span className='link-icon-count'>{cartItems.length} </span> : null}
          <CartIcon className='link-icon-svg' />
          <span className='link-icon-label'>Cart</span>
        </IconButton>
      </li>
    </ul>
  )
}
