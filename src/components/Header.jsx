import { useState } from "react"
import { navData } from "../data/navData.ts"
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../i18n/translations";
import "./Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)
  const { lang, toggleLang, setLang } = useLanguage()
  const tr = t(lang)

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

        {/* Acciones móviles: switch corto + hamburguesa, agrupados a la derecha */}
        <div className="header__mobile-actions">
          <button
            className="header__lang-switch header__lang-switch--mobile"
            onClick={toggleLang}
            aria-label="Switch language"
            title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          <button
            className={`header__toggle ${isMenuOpen ? "header__toggle--active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <img src="/iconoMenu.png" alt="Menú" className="header__toggle-icon" />
          </button>
        </div>

        {/* Navegación central */}
        <nav className={`navbar ${isMenuOpen ? "navbar--open" : ""}`}>
          {/* Selector de idioma con palabras completas, solo visible en mobile, arriba del menú */}
          <div className="navbar__lang-select">
            <button
              className={`navbar__lang-option ${lang === "es" ? "navbar__lang-option--active" : ""}`}
              onClick={() => setLang("es")}
            >
              Español
            </button>
            <button
              className={`navbar__lang-option ${lang === "en" ? "navbar__lang-option--active" : ""}`}
              onClick={() => setLang("en")}
            >
              English
            </button>
          </div>

          <ul className="navbar__list">
            {navData.map((item) => (
              <li key={item.id} className="navbar__item">
                {item.items && item.items.length > 0 ? (
                  <>
                    <button
                      className="navbar__link"
                      onClick={() => toggleSubmenu(item.id)}
                    >
                      {lang === "en" && item.title_en ? item.title_en : item.title}
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
                            {lang === "en" && subitem.title_en ? subitem.title_en : subitem.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  item.id === "sobre-mi" ? (
                    <Link to="/#sobre-mi" onClick={() => handleNavClick(`/#sobre-mi`)} className="navbar__link">{lang === "en" && item.title_en ? item.title_en : item.title}</Link>
                  ) : (
                    <button
                      className="navbar__link"
                      onClick={() => handleNavClick(item.path)}
                    >
                      {lang === "en" && item.title_en ? item.title_en : item.title}
                    </button>
                  )
                )}
              </li>
            ))}
          </ul>

          {/* Botón CTA dentro del menú móvil */}
          <Link to="/#trabajemos-juntos" onClick={() => handleNavClick(`/#trabajemos-juntos`)} className="navbar__cta-button navbar__cta-button--desktop"  >{tr.nav.trabajemos}</Link>
        </nav>

        {/* Switch de idioma */}
        <button
          className="header__lang-switch"
          onClick={toggleLang}
          aria-label="Switch language"
          title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
        >
          {lang === "es" ? "EN" : "ES"}
        </button>

        {/* Botón CTA desktop (a la derecha) */}
        <Link to="/#trabajemos-juntos" className="navbar__cta-button navbar__cta-button--desktop"  >{tr.nav.trabajemos}</Link>
      </div>
    </header>
  )
}

export default Header
