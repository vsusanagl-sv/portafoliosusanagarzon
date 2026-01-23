import { useState } from "react"
import { navData } from "../data/navData.ts"
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setActiveSubmenu(null)
  }

  const toggleSubmenu = (itemId) => {
    setActiveSubmenu(activeSubmenu === itemId ? null : itemId)
  }

  const handleNavClick = (path) => {
    if (path.includes("#")) {
      const sectionId = path.replace("/#", "")
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ block: "center", behavior: "smooth" })
      }
    } else {
      window.location.href = path
    }
    closeMenu()
  }

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <button className="header__logo" onClick={() => handleNavClick("/")} title="Ir a inicio">
          <img src="/logo.svg" alt="Susana Garzón UX/UI Designer" className="logo-image" />
        </button>

        {/* Botón del menú hamburguesa (móvil) */}
        <button
          className={`header__toggle ${isMenuOpen ? "header__toggle--active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <img src="/iconoMenu.png" alt="Menú" className="header__toggle-icon" />
        </button>

        {/* Navegación central */}
        <nav className={`navbar ${isMenuOpen ? "navbar--open" : ""}`}>
          <ul className="navbar__list">
            {navData.map((item) => (
              <li key={item.id} className="navbar__item">
                {item.items && item.items.length > 0 ? (
                  <>
                    <button
                      className="navbar__link"
                      onClick={() => toggleSubmenu(item.id)}
                    >
                      {item.title}
                      <span className="navbar__arrow">▾</span>
                    </button>

                    {/* Submenú desplegable */}
                    <ul className={`submenu ${activeSubmenu === item.id ? "submenu--open" : ""}`}>
                      {item.items.map((subitem) => (
                        <li key={subitem.slug} className="submenu__item">
                          <button
                            className="submenu__link"
                            onClick={() => handleNavClick(`/${subitem.slug}`)}
                          >
                            {subitem.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  item.id === "sobre-mi" ? (
                    <Link to="/#sobre-mi" onClick={() => handleNavClick(`/#sobre-mi`)} className="navbar__link">{item.title}</Link>
                  ) : (
                    <button
                      className="navbar__link"
                      onClick={() => handleNavClick(item.path)}
                    >
                      {item.title}
                    </button>
                  )
                )}
              </li>
            ))}
          </ul>

          {/* Botón CTA dentro del menú móvil */}
          <Link to="/#trabajemos-juntos" onClick={() => handleNavClick(`/#trabajemos-juntos`)} className="navbar__cta-button navbar__cta-button--desktop"  >Trabajemos juntos</Link>
        </nav>

        {/* Botón CTA desktop (a la derecha) */}
        <Link to="/#trabajemos-juntos" className="navbar__cta-button navbar__cta-button--desktop"  >Trabajemos juntos</Link>
      </div>
    </header>
  )
}

export default Header
