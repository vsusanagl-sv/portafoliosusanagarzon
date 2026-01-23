import { useState } from "react"
import "./Home.css"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/document/Susana_Garzon_CV.pdf"
    link.download = "Susana_Garzon_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Estados del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Manejadores del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '10a22d86-67ae-4839-b5dc-6c41cafa922f');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('subject', 'Nuevo mensaje de contacto desde tu portfolio');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setFormData({ name: '', email: '', message: '' });
        setShowToast(true);

        // Ocultar el toast después de 5 segundos
        setTimeout(() => {
          setShowToast(false);
        }, 5000);
      } else {
        console.error('Error al enviar el formulario:', data);
        alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-greeting">Hola, soy Susana</p>
            <h1 className="hero-title">
              <span className="hero-title-purple">Diseñadora UX/UI,</span>
              <br />
              Creadora de
              <br />
              experiencias digitales
            </h1>
            <p className="hero-description">
              Creo experiencias digitales basadas en investigación, usabilidad y diseño visual. Cada proyecto combina
              estrategia, creatividad y validación con usuarios para generar soluciones funcionales y estéticas.
            </p>
            <div className="hero-buttons">
              <Link to="/portfolio" className="btn-primary">
                Ver portafolio
                <img src="/images/home/arrow_right_alt.png" alt="arrow" />
              </Link>
              <button className="btn-secondary" onClick={handleDownloadCV}>
                <img src="/images/home/download.png" alt="download-icon" />
                Descargar CV
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/home/image1.png" alt="Susana Garzón" className='presentation-home' />
          </div>
        </div>
      </section>

      {/* Mi Expertise Section */}
      <section className="expertise-section">
        <div className="expertise-container">
          <p className="section-label">Mis habilidades</p>
          <h2 className="section-title">Mi Expertise</h2>

          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-icon">
                <img src="/images/home/Strategy&Direction.png" alt="Strategy icon" />
              </div>
              <h3 className="expertise-card-title">Estrategia y Dirección UX</h3>
              <p className="expertise-card-description">
                Creo estrategias digitales centradas en el usuario, integrando principios de UX y Design Thinking para
                definir objetivos, mapear flujos y guiar proyectos hacia soluciones efectivas y validadas.
              </p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon">
                <img src="/images/home/Branding&Logo.png" alt="Branding icon" />
              </div>
              <h3 className="expertise-card-title">Branding e Identidad Visual</h3>
              <p className="expertise-card-description">
                Desarrollo identidades visuales coherentes y funcionales, creando piezas gráficas estratégicas que
                fortalecen la comunicación y elevan la experiencia de marca.
              </p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon">
                <img src="/images/home/UI&UXDesign.png" alt="Product Design icon" />
              </div>
              <h3 className="expertise-card-title">Diseño de Producto Digital (UI/UX)</h3>
              <p className="expertise-card-description">
                Diseño interfaces intuitivas y accesibles para web y mobile bajo un enfoque Mobile First. Domino
                wireframes, prototipos, arquitectura de información y pruebas con usuarios para optimizar navegación y
                usabilidad.
              </p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon">
                <img src="/images/home/WebflowDevelopment.png" alt="Visual Design icon" />
              </div>
              <h3 className="expertise-card-title">Diseño Visual y Prototipado</h3>
              <p className="expertise-card-description">
                Desarrollo soluciones digitales desde la idea hasta el prototipo final, integrando investigación,
                arquitectura de información, diseño visual y usabilidad para crear productos funcionales y escalables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí Section */}
      <section id="sobre-mi" className="about-section">
        <div className="about-container">
          <div className="about-content">
            <div className="about-image-wrapper">
              <img src="/images/home/sobremi.png" alt="Sobre mí" className='imagen-sobremi' />
            </div>
            <div className="about-text">
              <p className="section-label-center">Conoce</p>
              <h2 className="section-title-center">Sobre mí</h2>
              <p>
                Soy una diseñadora UX/UI con más de siete años de experiencia en diseño visual y dos años creando productos digitales para sectores como salud, educación, estética, deportes y contract. Me caracterizo por unir sensibilidad estética con pensamiento estructurado: diseño interfaces funcionales, intuitivas y con intención.
              </p>
              <p>
                A lo largo de mi experiencia, he trabajado en proyectos que requieren investigación, conceptualización, arquitectura de información, prototipado y validación con usuarios. Me gusta entender cómo piensan las personas, qué necesitan y cómo puedo traducir eso en productos claros, útiles y visualmente coherentes.
              </p>
              <p>
                Trabajo con herramientas como Figma, Adobe XD, Illustrator y Photoshop, y tengo conocimientos base en HTML, CSS y JavaScript, lo que me permite diseñar pensando en la implementación real.
              </p>
              <p>
                Soy una persona curiosa, detallista y creativa. Me inspiran los colores, las texturas, las personas y las buenas historias. Me gusta diseñar experiencias que no solo funcionen, sino que también transmitan algo lindo y humano.
              </p>
              <p>
                Actualmente me enfoco en crecer como diseñadora de producto digital, fortaleciendo mis habilidades en UX, UI y validación con usuarios, mientras sigo explorando nuevas formas de crear experiencias significativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mi Portafolio Section */}
      <section className="portfolio-section">
        <div className="portfolio-container">
          <div className="portfolio-header">
            <div className="fportfolio-header-pro">
              <div>
                <p className="section-label2">Proyectos recientes de</p>
                <h2 className="section-title2">Mi Portafolio</h2>
              </div>
              <a
                href="https://www.linkedin.com/in/susanagarzon-uxuidesign/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-linkedin"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <img src="/images/home/Group.png" alt="linkedin" />
                Visita mi LinkedIn
              </a>
            </div>
          </div>

          <div className="portfolio-grid">
            <div className="portfolio-card">
              <div className="portfolio-image">
                <img src="../images/Diseño-UX-UI/Sistema-de-Landings/Diseño UX UI-Sistema de Landings.jpg" alt="Ahuse project" />
              </div>
              <h3 className="portfolio-card-title">Sistema de landings</h3>
              <p className="portfolio-card-description">
                Lo que comenzó como una landing puntual se convirtió en un sistema UX/UI escalable para gestionar ...
              </p>
              <a href="/ux-ui/sistema-de-landings" className="portfolio-link">
                Explorar proyecto <img src="/images/home/Vector.png" alt="Vector" className="Vector" />
              </a>
            </div>

            <div className="portfolio-card">
              <div className="portfolio-image">
                <img src="../images/Diseño-UX-UI/Work-With-US/Diseño UX UI-Work With US.jpg" alt="App Dashboard project" />
              </div>
              <h3 className="portfolio-card-title">Work With US</h3>
              <p className="portfolio-card-description">
                Work With Us es el portal oficial de empleo para Proquinal, miembro de Spradling Group, creado para ...
              </p>
              <a href="/ux-ui/work-with-us" className="portfolio-link">
                Explorar proyecto <img src="/images/home/Vector.png" alt="Vector" className="Vector" />
              </a>
            </div>

            <div className="portfolio-card">
              <div className="portfolio-image">
                <img src="../images/Diseño-UX-UI/Medical-Films-Solutions/Diseño UX UI-Medical Films Solutions.jpg" alt="Easy Rent project" />
              </div>
              <h3 className="portfolio-card-title">Medical Films Solutions</h3>
              <p className="portfolio-card-description">
                En este proyecto desarrollé una landing page estratégica para el lanzamiento de Medical Films Solutions ...
              </p>
              <a href="#" className="portfolio-link">
                Explorar proyecto <img src="/images/home/Vector.png" alt="Vector" className="Vector" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trabajemos juntos Section */}
      <article id="trabajemos-juntos" className="contact-section">

        {/* Imagen decorativa izquierda */}
        <div className="contact-decoration-left">
          <img src="/images/home/contacto1.png" alt="" />
        </div>

        {/* Imagen decorativa derecha */}
        <div className="contact-decoration-right">
          <img src="/images/home/contacto4.png" alt="" />
        </div>

        {/* Imagen decorativa de arriba */}
        <div className="contact-decoration-top">
          <img src="/images/home/contac33.png" alt="" />
        </div>

        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="contact-title">¿Trabajamos juntos?</h2>
              <p className="contact-description">
                Estoy abierta a nuevas oportunidades, proyectos freelance o colaboraciones. Si quieres crear algo
                increíble, puedes escribirme aquí:
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <img src="/images/home/Phone.png" alt="phone" />
                  <span>+57 300 500 3863</span>
                </div>
                <div className="contact-item">
                  <img src="/images/home/Email.png" alt="phone" />
                  <span>vsusanagl@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h3 className="form-title">Enviar un mensaje</h3>

              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
                <textarea
                  name="message"
                  placeholder="Tu mensaje"
                  rows={6}
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                ></textarea>
                <button
                  type="submit"
                  className="form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>

              {/* Toast de confirmación */}
              {showToast && (
                <div className="toast">
                  <div className="toast-content">
                    <span className="toast-icon">✓</span>
                    <div className="toast-text">
                      <strong>¡Gracias por tu mensaje!</strong>
                      <p>Me pondré en contacto contigo pronto.</p>
                    </div>
                    <button
                      className="toast-close"
                      onClick={() => setShowToast(false)}
                      aria-label="Cerrar"
                    >
                      ×
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}