import "./Portfolio.css";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../i18n/translations";

const portfolioData = [
  {
    id: "ux-ui",
    title: "Diseño UX/UI",
    title_en: "UX/UI Design",
    description:
      "En esta sección encontrarás una selección de proyectos digitales de extremo a extremo: desde landing pages y portales web hasta aplicaciones móviles nativas. Cada proyecto fue pensado para resolver un problema real de negocio, combinando investigación de usuario, arquitectura de información y diseño visual, con foco en la experiencia y en resultados medibles como conversión, retención y satisfacción del usuario.",
    description_en:
      "In this section you'll find a selection of end-to-end digital projects: from landing pages and web portals to native mobile apps. Each project was designed to solve a real business problem, combining user research, information architecture, and visual design, with a focus on experience and measurable results like conversion, retention, and user satisfaction.",
    items: [
      {
        slug: "sistema-de-landings",
        title: "Sistema de Landings",
        title_en: "Landing Page System",
        image:
          "../images/Diseno-UX-UI/Sistema-de-Landings/Diseno UX UI-Sistema de Landings.jpg",
        image_en:
          "../images/Diseno-UX-UI/Sistema-de-Landings/en/Sistema-de-Landings-en-01.webp",
      },
      {
        slug: "work-with-us",
        title: "Work With US",
        title_en: "Work With US",
        image:
          "../images/Diseno-UX-UI/Work-With-US/Diseno UX UI-Work With US.jpg",
      },
      {
        slug: "medical-films-solutions",
        title: "Medical Films Solutions",
        title_en: "Medical Films Solutions",
        image:
          "../images/Diseno-UX-UI/Medical-Films-Solutions/Diseno UX UI-Medical Films Solutions.jpg",
      },
      {
        slug: "becapp",
        title: "BecApp",
        title_en: "BecApp",
        image:
          "../images/Diseno-UX-UI/BecApp/Diseno UX UI-BecApp.jpg",
      },
    ],
  },
  {
    id: "redes-sociales",
    title: "Redes Sociales",
    title_en: "Social Media",
    description:
      "En esta sección encontrarás una selección de piezas gráficas y contenido visual creado para redes sociales: campañas, carruseles, y comunicación de marca digital. Cada pieza fue diseñada para captar la atención en el feed, comunicar de forma clara y mantener consistencia visual con la identidad de cada marca.",
    description_en:
      "In this section you'll find a selection of graphic pieces and visual content created for social media: campaigns, carousels, and digital brand communication. Each piece was designed to capture attention in the feed, communicate clearly, and maintain visual consistency with each brand's identity.",
    items: [
      {
        slug: "corre-la-serie-corre-sopo",
        title: "Corre la Serie – Corre Sopó",
        title_en: "Corre la Serie – Corre Sopó",
        image:
          "../images/Redes-sociales/Corre-la-Serie/RedesSociales-CorreSopo.jpg",
      },
      {
        slug: "merrell-actividades",
        title: "Merrell Actividades",
        title_en: "Merrell Activities",
        image:
          "../images/Redes-sociales/Merrell-Actividades/MerrellActividades-01.jpg",
      },
      {
        slug: "injoy-app",
        title: "InJoy App",
        title_en: "InJoy App",
        image: "../images/Redes-sociales/InJoy-App/InJoyApp-01.png",
      },
      {
        slug: "lucro-app",
        title: "Lucro App",
        title_en: "Lucro App",
        image: "../images/Redes-sociales/Lucro-App/LucroApp-01.jpg",
      },
      {
        slug: "newbody-redes",
        title: "NewBody",
        title_en: "NewBody",
        image:
          "../images/Redes-sociales/NewBody/NewBody-01.jpg",
      },
    ],
  },
  {
    id: "impresion",
    title: "Diseño para impresión",
    title_en: "Print Design",
    description:
      "En esta sección encontrarás una recopilación de piezas diseñadas para espacios físicos y comunicación visual impresa. Desde murales hasta señalética y elementos de gran formato, cada diseño fue pensado para captar la atención, comunicar con claridad y reforzar la identidad visual de las marcas en contextos reales.",
    description_en:
      "In this section you'll find a collection of pieces designed for physical spaces and printed visual communication. From murals to signage and large-format pieces, each design was created to capture attention, communicate clearly, and reinforce brand identity in real-world contexts.",
    items: [
      {
        slug: "merrell-impresion",
        title: "Merrell",
        title_en: "Merrell",
        image:
          "../images/Diseno-impresion/Merrell/Merrell-01.jpg",
      },
      {
        slug: "newbody-impresion",
        title: "NewBody",
        title_en: "NewBody",
        image:
          "../images/Diseno-impresion/NewBody/NewBody-01.png",
      },
    ],
  },
];

export default function Portfolio() {
  const { lang } = useLanguage();
  const tr = t(lang);
  return (
    <section className="portfolio-page">
      {portfolioData.map((section) => (
        <div key={section.id} id={section.id} className="portfolio-block">
          <header className="portfolio-block__header">
            <h2 className="portfolio-block__title">{lang === "en" ? section.title_en : section.title}</h2>
            <p className="portfolio-block__description">
              {lang === "en" ? section.description_en : section.description}
            </p>
          </header>

          <div className="portfolio-grid">
            {section.items.map((item) => (
              <article key={item.slug} className="portfolio-card">
                <div className="portfolio-image">
                  <img src={lang === "en" && item.image_en ? item.image_en : item.image} alt={lang === "en" ? item.title_en : item.title} />
                </div>

                <div className="portfolio-card-content">
                  <h3 className="portfolio-card-title">{lang === "en" ? item.title_en : item.title}</h3>
                  <a
                    href={`${section.id}/${item.slug}`}
                    className="portfolio-link"
                  >
                    {tr.section.viewProject} →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
