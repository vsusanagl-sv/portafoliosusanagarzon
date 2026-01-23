import { useNavigate, useLocation } from "react-router-dom"

const navigate = useNavigate()
const location = useLocation()

const handleNavClick = (path) => {
  if (path.includes("#")) {
    const sectionId = path.split("#")[1]

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } })
    } else {
      scrollToSection(sectionId)
    }
  } else {
    navigate(path)
  }

  closeMenu()
}

const scrollToSection = (id) => {
  setTimeout(() => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, 100)
}
