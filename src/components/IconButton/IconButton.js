import { NavLink } from 'react-router-dom'

export const IconButton = ({ to, className, children }) => {
  return (
    <NavLink to={to} className={className}>{children}</NavLink>
  )
}
