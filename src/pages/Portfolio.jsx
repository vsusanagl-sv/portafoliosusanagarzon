import "./Portfolio.css";

const portfolioData = [
  {
    id: "ux-ui",
    title: "Diseño UX/UI",
    description:
      "En esta sección encontrarás una recopilación de piezas diseñadas para espacios físicos y comunicación visual impresa. Desde murales hasta señalética y elementos de gran formato, cada diseño fue pensado para captar la atención, comunicar con claridad y reforzar la identidad visual de las marcas en contextos reales.\nEstas piezas son una muestra del diseño llevado más allá de la pantalla, adaptado a entornos comerciales, vitrinas, puntos de venta y espacios institucionales.",
    items: [
      {
        slug: "sistema-de-landings",
        title: "Sistema de Landings",
        image:
          "../images/Diseño-UX-UI/Sistema-de-Landings/Diseño UX UI-Sistema de Landings.jpg",
      },
      {
        slug: "work-with-us",
        title: "Work With US",
        image:
          "../images/Diseño-UX-UI/Work-With-US/Diseño UX UI-Work With US.jpg",
      },
      {
        slug: "medical-films-solutions",
        title: "Medical Films Solutions",
        image:
          "../images/Diseño-UX-UI/Medical-Films-Solutions/Diseño UX UI-Medical Films Solutions.jpg",
      },
      {
        slug: "becapp",
        title: "BecApp",
        image:
          "../images/Diseño-UX-UI/BecApp/Diseño UX UI-BecApp.jpg",
      },
    ],
  },
  {
    id: "redes-sociales",
    title: "Redes Sociales",
    description:
      "En esta sección encontrarás una recopilación de piezas diseñadas para espacios físicos y comunicación visual impresa. Desde murales hasta señalética y elementos de gran formato, cada diseño fue pensado para captar la atención, comunicar con claridad y reforzar la identidad visual de las marcas en contextos reales.",
    items: [
      {
        slug: "corre-la-serie-corre-sopo",
        title: "Corre la Serie – Corre Sopó",
        image:
          "../images/Redes-sociales/Corre-la-Serie/RedesSociales-CorreSopo.jpg",
      },
      {
        slug: "merrell-actividades",
        title: "Merrell Actividades",
        image:
          "../images/Redes-sociales/Merrell-Actividades/MerrellActividades-01.jpg",
      },
      {
        slug: "injoy-app",
        title: "InJoy App",
        image: "../images/Redes-sociales/InJoy-App/InJoyApp-01.png",
      },
      {
        slug: "lucro-app",
        title: "Lucro App",
        image: "../images/Redes-sociales/Lucro-App/LucroApp-01.jpg",
      },
      {
        slug: "newbody-redes",
        title: "NewBody",
        image:
          "../images/Redes-sociales/NewBody/NewBody-01.jpg",
      },
    ],
  },
  {
    id: "impresion",
    title: "Diseño para impresión",
    description:
      "En esta sección encontrarás una recopilación de piezas diseñadas para espacios físicos y comunicación visual impresa. Desde murales hasta señalética y elementos de gran formato, cada diseño fue pensado para captar la atención, comunicar con claridad y reforzar la identidad visual de las marcas en contextos reales.",
    items: [
      {
        slug: "merrell-impresion",
        title: "Merrell",
        image:
          "../images/Diseño-impresión/Merrell/Merrell-01.jpg",
      },
      {
        slug: "newbody-impresion",
        title: "NewBody",
        image:
          "../images/Diseño-impresión/NewBody/NewBody-01.png",
      },
    ],
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio-page">
      {portfolioData.map((section) => (
        <div key={section.id} id={section.id} className="portfolio-block">
          <header className="portfolio-block__header">
            <h2 className="portfolio-block__title">{section.title}</h2>
            <p className="portfolio-block__description">
              {section.description}
            </p>
          </header>

          <div className="portfolio-grid">
            {section.items.map((item) => (
              <article key={item.slug} className="portfolio-card">
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="portfolio-card-content">
                  <h3 className="portfolio-card-title">{item.title}</h3>
                  <a
                    href={`${section.id}/${item.slug}`}
                    className="portfolio-link"
                  >
                    Ver proyecto →
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
