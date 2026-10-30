/**
 * Datos de navegación y proyectos.
 * Cada sección contiene una lista de elementos con su slug y título.  Estos
 * objetos se utilizan para construir el menú desplegable y las rutas.
 */
export const navData = [
  {
    id: 'ux-ui',
    title: 'Diseño UX/UI',
    title_en: 'UX/UI Design',
    description: 'En esta sección encontrarás una selección de proyectos digitales de extremo a extremo: desde landing pages y portales web hasta aplicaciones móviles nativas. Cada proyecto fue pensado para resolver un problema real de negocio, combinando investigación de usuario, arquitectura de información y diseño visual, con foco en la experiencia y en resultados medibles como conversión, retención y satisfacción del usuario.',
    description_en: 'In this section you\'ll find a selection of end-to-end digital projects: from landing pages and web portals to native mobile apps. Each project was designed to solve a real business problem, combining user research, information architecture, and visual design, with a focus on experience and measurable results like conversion, retention, and user satisfaction.',
    path: '/ux-ui',
    items: [
      { slug: 'sistema-de-landings', title: 'Sistema de Landings', title_en: 'Landing Page System', images: '/images/Diseno-UX-UI/Sistema-de-Landings/Diseno UX UI-Sistema de Landings.jpg' },
      { slug: 'work-with-us', title: 'Work With US', title_en: 'Work With US', images: '/images/Diseno-UX-UI/Work-With-US/Diseno UX UI-Work With US.jpg' },
      { slug: 'medical-films-solutions', title: 'Medical Films Solutions', title_en: 'Medical Films Solutions', images: '/images/Diseno-UX-UI/Medical-Films-Solutions/Diseno UX UI-Medical Films Solutions.jpg' },
      { slug: 'becapp', title: 'BecApp', title_en: 'BecApp', images: '/images/Diseno-UX-UI/BecApp/Diseno UX UI-BecApp.jpg' }
    ]
  },
  {
    id: 'redes-sociales',
    title: 'Redes Sociales',
    title_en: 'Social Media',
    description: 'En esta sección encontrarás una selección de piezas gráficas y contenido visual creado para redes sociales: campañas, carruseles, y comunicación de marca digital. Cada pieza fue diseñada para captar la atención en el feed, comunicar de forma clara y mantener consistencia visual con la identidad de cada marca.',
    description_en: 'In this section you\'ll find a selection of graphic pieces and visual content created for social media: campaigns, carousels, and digital brand communication. Each piece was designed to capture attention in the feed, communicate clearly, and maintain visual consistency with each brand\'s identity.',
    path: '/redes-sociales',
    items: [
      { slug: 'corre-la-serie-corre-sopo', title: 'Corre la Serie – Corre Sopó', title_en: 'Corre la Serie – Corre Sopó', images: '/images/Redes-sociales/Corre-la-Serie/RedesSociales-CorreSopo.jpg' },
      { slug: 'merrell-actividades', title: 'Merrell Actividades', title_en: 'Merrell Activities', images: '/images/Redes-sociales/Merrell-Actividades/MerrellActividades-01.jpg' },
      { slug: 'injoy-app', title: 'InJoy App', title_en: 'InJoy App', images: '/images/Redes-sociales/InJoy-App/InJoyApp-01.png' },
      { slug: 'lucro-app', title: 'Lucro App', title_en: 'Lucro App', images: '/images/Redes-sociales/Lucro-App/LucroApp-01.jpg' },
      { slug: 'newbody-redes', title: 'NewBody', title_en: 'NewBody', images: '/images/Redes-sociales/NewBody/NewBody-01.jpg' }
    ]
  },
  {
    id: 'impresion',
    title: 'Diseño para impresión',
    title_en: 'Print Design',
    description: 'En esta sección encontrarás una recopilación de piezas diseñadas para espacios físicos y comunicación visual impresa. Desde murales hasta señalética y elementos de gran formato, cada diseño fue pensado para captar la atención, comunicar con claridad y reforzar la identidad visual de las marcas en contextos reales. Estas piezas son una muestra del diseño llevado más allá de la pantalla, adaptado a entornos comerciales, vitrinas, puntos de venta y espacios institucionales.',
    description_en: 'In this section you\'ll find a collection of pieces designed for physical spaces and printed visual communication. From murals to signage and large-format pieces, each design was created to capture attention, communicate clearly, and reinforce brand identity in real-world contexts. These pieces show design taken beyond the screen, adapted to retail environments, storefronts, points of sale, and institutional spaces.',
    path: '/impresion',
    items: [
      { slug: 'merrell-impresion', title: 'Merrell', title_en: 'Merrell', images: '/images/Diseno-impresion/Merrell/Merrell-01.jpg' },
      { slug: 'newbody-impresion', title: 'NewBody', title_en: 'NewBody', images: '/images/Diseno-impresion/NewBody/NewBody-01.png' }
    ]
  }
];

/**
 * Detalles de cada proyecto.  Aquí se incluyen títulos, descripciones y
 * se podrían añadir imágenes y enlaces.  Para simplificar, las descripciones
 * son cortas; en una aplicación real pueden importarse textos completos.
 */
export const projectDetails = {
  'sistema-de-landings': {
    title: 'Sistema de Landings',
    title_en: 'Landing Page System',
    description:
      'Lo que comenzó como una landing puntual se convirtió en un sistema UX/UI escalable para gestionar más de 10 colecciones de telas en distintos mercados. Este proyecto transformó la experiencia de solicitud de muestras en Spradling Group, combinando storytelling, estructura modular, visuales impactantes y foco comercial. Cada landing fue diseñada para adaptarse a su colección, su audiencia y su contexto, sin perder consistencia ni eficiencia.',
    description_en:
      'What started as a single landing page became a scalable UX/UI system for managing 10+ fabric collections across different markets. This project transformed the sample-request experience at Spradling Group, combining storytelling, modular structure, striking visuals, and a commercial focus. Each landing page was designed to adapt to its collection, its audience, and its context, without losing consistency or efficiency.',
    images: ["/images/Diseno-UX-UI/Sistema-de-Landings/Diseno UX UI-Sistema de Landings.jpg", "/images/Diseno-UX-UI/Sistema-de-Landings/Sistema-de-Landings-1.png", "/images/Diseno-UX-UI/Sistema-de-Landings/Sistema-de-Landings-2.png", "/images/Diseno-UX-UI/Sistema-de-Landings/Sistema-de-Landings-3.png", "/images/Diseno-UX-UI/Sistema-de-Landings/Sistema-de-Landings-4.png", "/images/Diseno-UX-UI/Sistema-de-Landings/Sistema-de-Landings-5.png", "/images/Diseno-UX-UI/Sistema-de-Landings/Sistema-de-Landings-6.png", "/images/Diseno-UX-UI/Sistema-de-Landings/Sistema-de-Landings-8.png"],
    links: [],
    figmaLinks: [
      {
        title: "Valencia ™ Biosense Landing Page prototipo",
        embedUrl: "https://embed.figma.com/proto/NdmbY1BBazWnpSQUYs2arc/Valencia-BioSense?page-id=1071%3A8062&node-id=1071-8063&viewport=-185%2C390%2C0.11&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1071%3A8063&embed-host=share",
        directUrl: "https://www.figma.com/proto/NdmbY1BBazWnpSQUYs2arc/Valencia-BioSense?page-id=1071%3A8062&node-id=1071-8063&viewport=-185%2C390%2C0.11&t=etnrkqBNx8wDfIBG-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1071%3A8063",
        linkSate: "https://valenciabiosense.spradling.eu/es",
        botonNameFigma: "Valencia Biosense Prototipo",
        botonNameFigma_en: "Valencia Biosense Prototype",
        botonNameSite: "Landing page Valencia Biosense",
        botonNameSite_en: "Valencia Biosense Landing Page"
      },
      {
        title: "Kizuna USA mini site prototipo",
        embedUrl: "https://embed.figma.com/proto/bfaLlIlH4g5xtTfFewhu8o/Kizuna-USA?page-id=2%3A3&node-id=2-4&viewport=672%2C112%2C0.15&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A4&embed-host=share",
        directUrl: "https://www.figma.com/proto/bfaLlIlH4g5xtTfFewhu8o/Kizuna-USA?page-id=2%3A3&node-id=2-4&viewport=672%2C112%2C0.15&t=6hO06Q2o2DdUKQTQ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A4",
        linkSate: "https://new-landing.spradling.group/en-us/kizuna",
        botonNameFigma: "Kizuna Prototipo",
        botonNameFigma_en: "Kizuna Prototype",
        botonNameSite: "Kizuna Sitio web",
        botonNameSite_en: "Kizuna Website"
      },
      {
        title: "Vestige Landing Page prototipo",
        embedUrl: "https://embed.figma.com/proto/R9Sy4QCN46YCl007MWs0jB/Vestige-Landing-Page?page-id=0%3A1&node-id=128-1230&p=f&viewport=-1624%2C1%2C0.2&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A3&embed-host=share",
        directUrl: "https://acortar.link/jyGUR2",
        linkSate: "https://vestige.spradling.eu/es",
        botonNameFigma: "Vestige Prototipo",
        botonNameFigma_en: "Vestige Prototype",
        botonNameSite: "Vestige Landing page",
        botonNameSite_en: "Vestige Landing Page"
      },
      {
        title: "Quickship mini site prototipo",
        embedUrl: "https://embed.figma.com/proto/D6hBjmFaY2mEPXJ2hLWBA0/Quickship?page-id=1%3A3&node-id=1-4&viewport=137%2C211%2C0.11&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A4&embed-host=share",
        directUrl: "https://www.figma.com/p",
        linkSate: "https://new-landing.spradlin",
        botonNameFigma: "Quickship prototipo",
        botonNameFigma_en: "Quickship prototype",
        botonNameSite: "Quickship Sitio web",
        botonNameSite_en: "Quickship Website"
      }
    ],
  },
  'work-with-us': {
    title: 'Work With US',
    title_en: 'Work With US',
    description:
      'Work With Us es el portal oficial de empleo para Proquinal, miembro de Spradling Group, creado para conectar talento con oportunidades reales en sus plantas de Colombia y Costa Rica. Este proyecto UX/UI fue diseñado desde cero para fortalecer la presencia digital del área de Recursos Humanos, permitiendo a los candidatos conocer los beneficios, cultura y valores de cada sede, y postularse directamente sin intermediarios. A través de un diseño accesible, cálido y humano, logramos transformar el proceso de postulación en una experiencia informada, transparente y centrada en las personas.',
    description_en:
      'Work With Us is the official careers portal for Proquinal, a Spradling Group company, created to connect talent with real job openings across its Colombia and Costa Rica plants. This UX/UI project was designed from the ground up to strengthen the HR department\'s digital presence, letting candidates learn about each site\'s benefits, culture, and values, and apply directly with no intermediaries. Through an accessible, warm, and human-centered design, we turned the application process into an informed, transparent, people-focused experience.',
    images: ["/images/Diseno-UX-UI/Work-With-US/Diseno UX UI-Work With US.jpg", "/images/Diseno-UX-UI/Work-With-US/Work-With-US-1.png", "/images/Diseno-UX-UI/Work-With-US/Work-With-US-2.png", "/images/Diseno-UX-UI/Work-With-US/Work-With-US-3.png", "/images/Diseno-UX-UI/Work-With-US/Work-With-US-4.png", "/images/Diseno-UX-UI/Work-With-US/Work-With-US-5.png", "/images/Diseno-UX-UI/Work-With-US/Work-With-US-6.png", "/images/Diseno-UX-UI/Work-With-US/Work-With-US-7.png", "/images/Diseno-UX-UI/Work-With-US/Work-With-US-8.png",],
    links: [],
    figmaLinks: [
      {
        title: "Work With US",
        title_en: "Work With US",
        embedUrl: "",
        directUrl: "https://acortar.link/g2xzoH",
        linkSate: "https://vacantes.spradling.group/es",
        botonNameFigma: "Ver prototipo en Figma",
        botonNameFigma_en: "View prototype in Figma",
        botonNameSite: "Explorar el portal Work WIth Us",
        botonNameSite_en: "Explore the Work With Us portal"
      }
    ]
  },
  'medical-films-solutions': {
    title: 'Medical Films Solutions',
    title_en: 'Medical Films Solutions',
    description:
      'En este proyecto desarrollé una landing page estratégica para el lanzamiento de Medical Films Solutions, una nueva división de Spradling enfocada en el sector médico. A partir de un reto sin precedentes —crear presencia digital en una industria completamente nueva y sin marca previa— diseñé una solución UX/UI funcional, limpia y confiable, adaptada a los estándares del sector salud. Este caso de estudio muestra cómo el diseño puede ser clave para abrir nuevas oportunidades de negocio, incluso en contextos inciertos y con tiempos reducidos.',
    description_en:
      'For this project I developed a strategic landing page for the launch of Medical Films Solutions, a new Spradling division focused on the medical sector. Starting from an unprecedented challenge — building a digital presence in a brand-new industry with no prior brand — I designed a functional, clean, trustworthy UX/UI solution adapted to healthcare industry standards. This case study shows how design can be key to opening new business opportunities, even in uncertain contexts and under tight timelines.',
    images: ["/images/Diseno-UX-UI/Medical-Films-Solutions/Diseno UX UI-Medical Films Solutions.jpg", "/images/Diseno-UX-UI/Medical-Films-Solutions/Medical-Films-Solutions-1.png", "/images/Diseno-UX-UI/Medical-Films-Solutions/Medical-Films-Solutions-2.png", "/images/Diseno-UX-UI/Medical-Films-Solutions/Medical-Films-Solutions-3.png", "/images/Diseno-UX-UI/Medical-Films-Solutions/Medical-Films-Solutions-4.png", "/images/Diseno-UX-UI/Medical-Films-Solutions/Medical-Films-Solutions-5.png", "/images/Diseno-UX-UI/Medical-Films-Solutions/Medical-Films-Solutions-6.png", "/images/Diseno-UX-UI/Medical-Films-Solutions/Medical-Films-Solutions-7.png", "/images/Diseno-UX-UI/Medical-Films-Solutions/Medical-Films-Solutions-8.png", "/images/Diseno-UX-UI/Medical-Films-Solutions/Medical-Films-Solutions-9.png", "/images/Diseno-UX-UI/Medical-Films-Solutions/Medical-Films-Solutions-10.png"],
    links: [],
    figmaLinks: [
      {
        title: "Valencia ™ Biosense Landing Page prototipo",
        title_en: "Valencia ™ Biosense Landing Page prototype",
        embedUrl: "https://embed.figma.com/proto/MLGqjCbux9ab93lAWvXTc5/Medical-Devices-%F0%9F%9F%A1?page-id=0%3A1&node-id=232-2694&embed-host=share",
        directUrl: "https://acortar.link/hcTLCA",
        linkSate: "https://healthcaresolutions.spradling.group/",
        botonNameFigma: "Ver prototipo",
        botonNameFigma_en: "View prototype",
        botonNameSite: "Ver Landing page",
        botonNameSite_en: "View Landing Page"
      }
    ]
  },
  'becapp': {
    title: 'BecApp',
    title_en: 'BecApp',
    description:
      'BaeAapp es una aplicación móvil diseñada para facilitar el acceso a oportunidades educativas reales. Nació de una necesidad común: encontrar becas claras, aplicables y filtradas según el perfil de cada usuario, sin perderse entre portales dispersos ni información confusa. Este proyecto fue desarrollado end-to-end, desde la investigación hasta el diseño UI final, y reúne en un solo lugar todo lo necesario para que más personas puedan estudiar lo que quieren, donde quieren. Aquí te cuento cómo el diseño UX/UI puede ser una herramienta poderosa para democratizar el acceso a la educación.',
    description_en:
      'BecApp is a mobile app designed to make it easier to access real educational opportunities. It was born from a common need: finding scholarships that are clear, applicable, and filtered by each user\'s profile, without getting lost across scattered portals or confusing information. This project was developed end-to-end, from research to final UI design, bringing together in one place everything people need to study what they want, where they want. Here\'s how UX/UI design can be a powerful tool for democratizing access to education.',
    images: ["/images/Diseno-UX-UI/BecApp/Diseno UX UI-BecApp.jpg", "/images/Diseno-UX-UI/BecApp/BecApp-01.jpg", "/images/Diseno-UX-UI/BecApp/BecApp-02.jpg", "/images/Diseno-UX-UI/BecApp/BecApp-03.jpg", "/images/Diseno-UX-UI/BecApp/BecApp-04.jpg", "/images/Diseno-UX-UI/BecApp/BecApp-05.jpg", "/images/Diseno-UX-UI/BecApp/BecApp-06.jpg", "/images/Diseno-UX-UI/BecApp/BecApp-07.jpg", "/images/Diseno-UX-UI/BecApp/BecApp-08.jpg", "/images/Diseno-UX-UI/BecApp/BecApp-09.jpg", "/images/Diseno-UX-UI/BecApp/BecApp-10.jpg", "/images/Diseno-UX-UI/BecApp/BecApp-11.jpg", "/images/Diseno-UX-UI/BecApp/BecApp-12.jpg", "/images/Diseno-UX-UI/BecApp/BecApp-13.jpg", "/images/Diseno-UX-UI/BecApp/BecApp-14.jpg", "/images/Diseno-UX-UI/BecApp/BecApp-15.jpg", "/images/Diseno-UX-UI/BecApp/BecApp-16.jpg", "/images/Diseno-UX-UI/BecApp/BecApp-17.jpg", "/images/Diseno-UX-UI/BecApp/BecApp-18.jpg"],
    links: []
    ,
    figmaLinks: [
      {
        title: "Valencia ™ Biosense Landing Page prototipo",
        title_en: "Valencia ™ Biosense Landing Page prototype",
        embedUrl: "https://embed.figma.com/proto/PjCjnfn6ZsgpCHt7Io185K/App-Becas-WIreframes-Coderhouse?page-id=0%3A1&node-id=792-4042&p=f&viewport=-221%2C306%2C0.1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=792%3A4042&show-proto-sidebar=1&embed-host=share",
        directUrl: "https://acortar.link/aLFJNA",
        linkSate: "https://valenciabiosense.spradling.eu/es",
        botonNameFigma: "Ver prototipo",
        botonNameFigma_en: "View prototype",
        botonNameSite: ""
      }
    ]
  },
  'corre-la-serie-corre-sopo': {
    title: 'Corre la Serie – Corre Sopó',
    title_en: 'Corre la Serie – Corre Sopó',
    description:
      'Diseño gráfico integral para evento de trail running nocturno en Sopó. Realicé desde la identidad visual completa (logo, tipografía, medallas, merchandising) hasta el contenido digital: post, historias, video, y anuncios en Instagram. Objetivo: mantener informada a la comunidad y motivar la inscripción.',
    description_en:
      'Full graphic design for a nighttime trail running event in Sopó. I handled everything from the complete visual identity (logo, typography, medals, merchandise) to digital content: posts, stories, video, and Instagram ads. Goal: keep the community informed and drive sign-ups.',
    images: ["/images/Redes-sociales/Corre-la-Serie/RedesSociales-CorreSopo.jpg", "/images/Redes-sociales/Corre-la-Serie/CarreraSopo-01.png", "/images/Redes-sociales/Corre-la-Serie/CarreraSopo-02.png", "/images/Redes-sociales/Corre-la-Serie/CarreraSopo-03.png", "/images/Redes-sociales/Corre-la-Serie/CarreraSopo-04.png", "/images/Redes-sociales/Corre-la-Serie/CarreraSopo-05.jpg"],
    figmaLinks: [
      {
        title: "",
        embedUrl: "",
        directUrl: "",
        linkSate: "",
        botonNameFigma: "",
        botonNameSite: ""
      }
    ]
  },
  'merrell-actividades': {
    title: 'Merrell Actividades',
    title_en: 'Merrell Activities',
    description: 'Campañas visuales para caminatas, campamentos y eventos de marca como el Merrell Trail Tour. Se diseñaron múltiples piezas para Instagram según cada actividad, promoviendo la inscripción a través de visuales consistentes e informativos. 📍 IG – @merrell_colombia',
    description_en: 'Visual campaigns for hikes, camps, and brand events like the Merrell Trail Tour. Multiple pieces were designed for Instagram for each activity, driving sign-ups through consistent, informative visuals. 📍 IG – @merrell_colombia',
    images: ["/images/Redes-sociales/Merrell-Actividades/MerrellActividades-01.jpg", "/images/Redes-sociales/Merrell-Actividades/MerrellActividades-02.png", "/images/Redes-sociales/Merrell-Actividades/MerrellActividades-03.png", "/images/Redes-sociales/Merrell-Actividades/MerrellActividades-04.png", "/images/Redes-sociales/Merrell-Actividades/MerrellActividades-05.png", "/images/Redes-sociales/Merrell-Actividades/MerrellActividades-06.png"],
    figmaLinks: [
      {
        title: "",
        embedUrl: "",
        directUrl: "",
        linkSate: "",
        botonNameFigma: "",
        botonNameSite: ""
      }
    ]
  },
  'injoy-app': {
    title: 'InJoy App',
    title_en: 'InJoy App',
    description:
      'Campaña conceptual para el lanzamiento de una app que permite a los empleados gestionar su nómina desde el celular. Se definió el objetivo de comunicación, tono visual y estilo de contenido. Incluye storytelling, post, carruseles, historias y diseño publicitario adaptable a plataformas sociales.📍 Simulado',
    description_en:
      'Concept campaign for the launch of an app that lets employees manage their payroll from their phone. Communication goals, visual tone, and content style were defined. Includes storytelling, posts, carousels, stories, and ad design adaptable across social platforms. 📍 Simulated',
    images: ["/images/Redes-sociales/InJoy-App/InJoyApp-01.png", "/images/Redes-sociales/InJoy-App/InJoyApp-02.png", "/images/Redes-sociales/InJoy-App/InJoyApp-03.png", "/images/Redes-sociales/InJoy-App/InJoyApp-04.png", "/images/Redes-sociales/InJoy-App/InJoyApp-05.png", "/images/Redes-sociales/InJoy-App/InJoyApp-06.png", "/images/Redes-sociales/InJoy-App/InJoyApp-07.png", "/images/Redes-sociales/InJoy-App/InJoyApp-08.png", "/images/Redes-sociales/InJoy-App/InJoyApp-09.png", "/images/Redes-sociales/InJoy-App/InJoyApp-10.png", "/images/Redes-sociales/InJoy-App/InJoyApp-11.png", "/images/Redes-sociales/InJoy-App/InJoyApp-12.png", "/images/Redes-sociales/InJoy-App/InJoyApp-13.png", "/images/Redes-sociales/InJoy-App/InJoyApp-14.png"],
    figmaLinks: [
      {
        title: "",
        embedUrl: "",
        directUrl: "",
        linkSate: "",
        botonNameFigma: "",
        botonNameSite: ""
      }
    ]
  },
  'lucro-app': {
    title: 'Lucro App',
    title_en: 'Lucro App',
    description:
      'Diseño de campaña visual para anunciar promociones navideñas de una app de recompensas. Se crearon posts y carruseles informativos para Facebook, Instagram y LinkedIn, mostrando beneficios, tareas y premios disponibles para los usuarios. 📍 Simulado',
    description_en:
      'Visual campaign design to announce holiday promotions for a rewards app. Informative posts and carousels were created for Facebook, Instagram, and LinkedIn, showcasing benefits, tasks, and rewards available to users. 📍 Simulated',
    images: ["/images/Redes-sociales/Lucro-App/LucroApp-01.jpg", "/images/Redes-sociales/Lucro-App/LucroApp-02.png", "/images/Redes-sociales/Lucro-App/LucroApp-03.png", "/images/Redes-sociales/Lucro-App/LucroApp-04.png"],
    figmaLinks: [
      {
        title: "",
        embedUrl: "",
        directUrl: "",
        linkSate: "",
        botonNameFigma: "",
        botonNameSite: ""
      }
    ]
  },
  'newbody-redes': {
    title: 'NewBody',
    title_en: 'NewBody',
    description: 'Campañas promocionales para Facebook e Instagram enfocadas en destacar tratamientos estéticos no invasivos. El objetivo era posicionar la marca, mostrar beneficios reales y activar el deseo de probar los servicios. 📍 FB + IG',
    description_en: 'Promotional campaigns for Facebook and Instagram focused on highlighting non-invasive aesthetic treatments. The goal was to position the brand, show real benefits, and spark interest in trying the services. 📍 FB + IG',
    images: ["/images/Redes-sociales/NewBody/NewBody-01.jpg", "/images/Redes-sociales/NewBody/NewBody-02.png", "/images/Redes-sociales/NewBody/NewBody-03.png"],
    figmaLinks: [
      {
        title: "",
        embedUrl: "",
        directUrl: "",
        linkSate: "",
        botonNameFigma: "",
        botonNameSite: ""
      }
    ]
  },
  'merrell-impresion': {
    title: 'Merrell (Impresión)',
    title_en: 'Merrell (Print)',
    description: 'Diseño de materiales impresos para apoyar las actividades comerciales y de marca de Merrell. Se desarrolló un calendario físico de actividades y eventos, pensado para comunicar de manera clara y atractiva en entornos de tienda.',
    description_en: 'Design of printed materials to support Merrell\'s commercial and brand activities. A physical calendar of activities and events was developed, designed to communicate clearly and attractively in in-store environments.',
    images: ["/images/Diseno-impresion/Merrell/Merrell-01.jpg", "/images/Diseno-impresion/Merrell/Merrell-02.png", "/images/Diseno-impresion/Merrell/Merrell-03.png"],
    figmaLinks: [
      {
        title: "",
        embedUrl: "",
        directUrl: "",
        linkSate: "",
        botonNameFigma: "",
        botonNameSite: ""
      }
    ]
  },
  'newbody-impresion': {
    title: 'NewBody (Impresión)',
    title_en: 'NewBody (Print)',
    description: 'Proyecto de diseño visual aplicado a entornos físicos para el centro estético NewBody. Se desarrollaron murales informativos, carteles promocionales y señalética interna, con el objetivo de educar al cliente sobre los tratamientos y mejorar la experiencia en punto de contacto.',
    description_en: 'Visual design project applied to physical spaces for the NewBody aesthetic center. Informational murals, promotional posters, and interior signage were developed, aimed at educating clients about treatments and improving the experience at each touchpoint.',
    images: ["/images/Diseno-impresion/NewBody/NewBody-01.png", "/images/Diseno-impresion/NewBody/NewBody-02.png", "/images/Diseno-impresion/NewBody/NewBody-03.png", "/images/Diseno-impresion/NewBody/NewBody-04.png", "/images/Diseno-impresion/NewBody/NewBody-05.png", "/images/Diseno-impresion/NewBody/NewBody-06.jpg", "/images/Diseno-impresion/NewBody/NewBody-07.jpg", "/images/Diseno-impresion/NewBody/NewBody-08.jpg"],
    figmaLinks: [
      {
        title: "",
        embedUrl: "",
        directUrl: "",
        linkSate: "",
        botonNameFigma: "",
        botonNameSite: ""
      }
    ]
  }
};

/**
 * Devuelve una sección por su id.
 * @param {string} id Identificador de la sección
 */
export function getSectionById(id) {
  return navData.find((section) => section.id === id);
}

/**
 * Devuelve los detalles de un proyecto por su slug.
 * @param {string} slug Slug del proyecto
 */
export function getProjectBySlug(slug) {
  return projectDetails[slug];
}
