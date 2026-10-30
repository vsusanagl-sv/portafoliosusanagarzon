import { useState } from "react"
import "./Home.css"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../i18n/translations";

export default function HomePage() {
  const location = useLocation();
  const { lang } = useLanguage();
  const tr = t(lang);

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
      formDataToSend.append('subject', tr.contact.emailSubject);

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
        alert(tr.contact.errorSubmit);
      }
    } catch (error) {
      console.error('Error:', error);
      alert(tr.contact.errorConnection);
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
            <p className="hero-greeting">{tr.hero.greeting}</p>
            <h1 className="hero-title">
              <span className="hero-title-purple">{tr.hero.titleLine1}</span>
              <br />
             {tr.hero.titleLine2}
              <br />
              {tr.hero.titleLine3}
            </h1>
            <p className="hero-description">
             {tr.hero.description}
            </p>
            <div className="hero-buttons">
              <Link to="/portfolio" className="btn-primary">
                {tr.hero.viewPortfolio}
                <img src="/images/home/arrow_right_alt.png" alt="arrow" />
              </Link>
              <button className="btn-secondary" onClick={handleDownloadCV}>
                <img src="/images/home/download.png" alt="download-icon" />
                {tr.hero.downloadCV}
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
          <p className="section-label">{tr.expertise.label}</p>
          <h2 className="section-title">{tr.expertise.title}</h2>

          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-icon">
                <img src="/images/home/Strategy&Direction.png" alt="Strategy icon" />
              </div>
              <h3 className="expertise-card-title">{tr.expertise.cards[0].title}</h3>
              <p className="expertise-card-description">
                {tr.expertise.cards[0].description}
              </p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon">
                <img src="/images/home/Branding&Logo.png" alt="Branding icon" />
              </div>
              <h3 className="expertise-card-title">{tr.expertise.cards[1].title}</h3>
              <p className="expertise-card-description">
                {tr.expertise.cards[1].description}
              </p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon">
                <img src="/images/home/UI&UXDesign.png" alt="Product Design icon" />
              </div>
              <h3 className="expertise-card-title">{tr.expertise.cards[2].title}</h3>
              <p className="expertise-card-description">
                {tr.expertise.cards[2].description}
              </p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon">
                <img src="/images/home/WebflowDevelopment.png" alt="Visual Design icon" />
              </div>
              <h3 className="expertise-card-title">{tr.expertise.cards[3].title}</h3>
              <p className="expertise-card-description">
                {tr.expertise.cards[3].description}
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
              <p className="section-label-center">{tr.about.label}</p>
              <h2 className="section-title-center">{tr.about.title}</h2>
              {tr.about.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
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
                <p className="section-label2">{tr.portfolioPreview.label}</p>
                <h2 className="section-title2">{tr.portfolioPreview.title}</h2>
              </div>
              <a
                href="https://www.linkedin.com/in/susanagarzon-uxuidesign/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-linkedin"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <img src="/images/home/Group.png" alt="linkedin" />
                {tr.portfolioPreview.linkedin}
              </a>
            </div>
          </div>

          <div className="portfolio-grid">
            <div className="portfolio-card">
              <div className="portfolio-image">
                <img src="/images/Diseno-UX-UI/Sistema-de-Landings/Diseno UX UI-Sistema de Landings.jpg" alt="Ahuse project" />
              </div>
              <h3 className="portfolio-card-title">{tr.portfolioPreview.cards[0].title}</h3>
              <p className="portfolio-card-description">
                {tr.portfolioPreview.cards[0].description}
              </p>
              <a href="/ux-ui/sistema-de-landings" className="portfolio-link">
                {tr.portfolioPreview.exploreProject} <img src="/images/home/Vector.png" alt="Vector" className="Vector" />
              </a>
            </div>

            <div className="portfolio-card">
              <div className="portfolio-image">
                <img src="/images/Diseno-UX-UI/Work-With-US/Diseno UX UI-Work With US.jpg" alt="App Dashboard project" />
              </div>
              <h3 className="portfolio-card-title">{tr.portfolioPreview.cards[1].title}</h3>
              <p className="portfolio-card-description">
                {tr.portfolioPreview.cards[1].description}
              </p>
              <a href="/ux-ui/work-with-us" className="portfolio-link">
                {tr.portfolioPreview.exploreProject} <img src="/images/home/Vector.png" alt="Vector" className="Vector" />
              </a>
            </div>

            <div className="portfolio-card">
              <div className="portfolio-image">
                <img src="/images/Diseno-UX-UI/Medical-Films-Solutions/Diseno UX UI-Medical Films Solutions.jpg" alt="Easy Rent project" />
              </div>
              <h3 className="portfolio-card-title">{tr.portfolioPreview.cards[2].title}</h3>
              <p className="portfolio-card-description">
                {tr.portfolioPreview.cards[2].description}
              </p>
              <a href="/ux-ui/medical-films-solutions" className="portfolio-link">
                {tr.portfolioPreview.exploreProject} <img src="/images/home/Vector.png" alt="Vector" className="Vector" />
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
              <h2 className="contact-title">{tr.contact.title}</h2>
              <p className="contact-description">
                {tr.contact.description}
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
              <h3 className="form-title">{tr.contact.formTitle}</h3>

              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder={tr.contact.namePlaceholder}
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="email"
                  name="email"
                  placeholder={tr.contact.emailPlaceholder}
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
                <textarea
                  name="message"
                  placeholder={tr.contact.messagePlaceholder}
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
                  {isSubmitting ? tr.contact.sending : tr.contact.send}
                </button>
              </form>

              {/* Toast de confirmación */}
              {showToast && (
                <div className="toast">
                  <div className="toast-content">
                    <span className="toast-icon">✓</span>
                    <div className="toast-text">
                      <strong>{tr.contact.toastTitle}</strong>
                      <p>{tr.contact.toastBody}</p>
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
