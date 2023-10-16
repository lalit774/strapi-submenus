import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
import { NavLinks } from './NavLinks'
export const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext()
  const handleSubMenu = (e) => {
    if (e.target.classList.contains('nav-links')) {
      setPageId(null)
    }
  }
  return (
    <nav onMouseOver={handleSubMenu}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  )
}
