import { Nav } from '../Nav'
import { HeaderSidebar } from '../HeaderSidebar'

export const Header = () => {
  return (
    <header className='header'>
      <Nav />
      <HeaderSidebar />
    </header>
  )
}
