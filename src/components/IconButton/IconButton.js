import { NavLink } from 'react-router-dom'
import { Button } from '../Button'

export const IconButton = ({ to = false, className, onClick, children }) => {
  if (to) {
    return (
      <NavLink to={to} className={className}>{children}</NavLink>
    )
  }

  return <Button onClick={onClick} className={className}>{children}</Button>
}
