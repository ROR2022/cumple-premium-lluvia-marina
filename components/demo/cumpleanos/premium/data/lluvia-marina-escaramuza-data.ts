export const lluviaMariaEscaramuzaData = {
  // Hero section elegante
  hero: {
    name: "Lluvia Marina",
    subtitle: "¡La pequeña princesa más elegante del rancho!",
    backgroundImage: "/images/custom/lluvia_portada2.png" // Temporal, cambiar después
  },

  // Event information refinada
  event: {
    celebrant: {
      name: "Lluvia Marina Marmolejo Quintanar",
      age: "3 años",
      birthDate: "19 de Septiembre de 2022"
    },
    parents: {
      father: "Adelaido Marmolejo Trejo",
      mother: "Karina Quintanar Jimenez"  
    },
    padrinos: {
      padrino: "Donovan Macías Santos",
      madrina: "Edith Quijada Pérez"
    },
    ceremony: {
      date: "Sábado 20 de Septiembre, 2025",
      time: "12:00 PM",
      location: "Parroquia de San Juan Bautista",
      address: "Manzana 006, 54274 San Juan Acazuchitlán, Méx.",
      locationLink: "https://maps.app.goo.gl/SDH5H4cSwJondd7p6"
    },
    celebration: {
      date: "Sábado 20 de Septiembre, 2025",
      time: "2:00 PM",
      location: "Finca Marmolejo Quintanar",
      address: "Loma del Progreso, Nopala de Villagrán",
      locationLink: "https://maps.app.goo.gl/SNWa1YtWhwV7RjoG6"
    },
    dressCode: "Vestidos con vuelo, faldas coloridas, accesorios florales y zapatos cómodos.",
    restrictions: "Ambiente familiar - ropa cómoda recomendada para actividades de los pequeños"
  },

  // Cronograma escaramuza elegante
  timeline: [
    {
      time: "2:00 PM",
      activity: "Llegada a la hacienda",
      description: "Recepción en el jardín de rosas",
      icon: "🌹"
    },
    {
      time: "2:30 PM",
      activity: "Ceremonia de bienvenida", 
      description: "Presentación como pequeña jinete",
      icon: "👗"
    },
    {
      time: "3:00 PM",
      activity: "Búsqueda del tesoro floral",
      description: "Aventura elegante en los jardines", 
      icon: "🌸"
    },
    {
      time: "3:45 PM",
      activity: "Competencia de anillos",
      description: "Juego ecuestre simplificado y divertido",
      icon: "🏆"
    },
    {
      time: "4:30 PM",
      activity: "Paseo en caballitos decorados",
      description: "Actividad ecuestre para pequeños jinetes",
      icon: "🐎"
    },
    {
      time: "5:00 PM",
      activity: "Ceremonia del pastel",
      description: "Celebración en el salón de gala",
      icon: "🎂"
    },
    {
      time: "5:30 PM",
      activity: "Cena elegante mexicana",
      description: "Banquete familiar refinado con sabores tradicionales",
      icon: "🍽️"
    },
    {
      time: "6:30 PM",
      activity: "Baile de gala",
      description: "Música y baile familiar en el jardín",
      icon: "💃"
    }
  ],

  // Galería escaramuza elegante
  gallery: {
    title: "Galería de la Pequeña Princesa",
    description: "Algunos Momentos Fotogénicos",
    categories: [
      {
        name: "Aventuras",
        images: [
          "/images/custom/festejada_1.jpg",
          "/images/custom/festejada_2.jpg",
          "/images/custom/festejada_3.jpg",
          "/images/custom/festejada_4.jpg",
          "/images/custom/festejada_5.jpg",
          "/images/custom/festejada_6.jpg",
          "/images/custom/festejada_7.jpg",
          "/images/custom/festejada_8.jpg",
          "/images/custom/festejada_9.jpg",
          "/images/custom/festejada_10.jpg"
        ]
      }
    ]
  },

  // Música escaramuza (mariachi suave)
  music: {
    title: "Serenata para la Pequeña Jinete",
    tracks: [
      {
        name: "La Bikina",
        artist: "Mariachi Tradicional de Lluvia Marina",
        duration: "3:30",
        file: "/music/bikina.mp3"
      },
      {
        name: "Canción de la Pequeña Escaramuza",
        artist: "Cuerdas Mexicanas", 
        duration: "4:15",
        file: "/music/stomp-clapping1.mp3"
      },
      {
        name: "Serenata del Jardín Encantado",
        artist: "Mariachi Elegante",
        duration: "3:45",
        file: "/music/summer-upbeat-motivational1.mp3"
      }
    ]
  },

  // Tema de colores moderno
  theme: {
    primary: "var(--charra-primary)",
    secondary: "var(--charra-gradient-secondary)",
    accent: "var(--charra-accent)", 
    background: "var(--charra-gradient-background)",
    text: "var(--charra-text-primary)"
  },

  // Cuenta regresiva elegante
  countdown: {
    targetDate: "September 20, 2025 12:00:00",
    backgroundImage: "/images/custom/lluvia_horse1.jpg"
  },

  // Confirmación de asistencia elegante
  attendance: {
    title: "CONFIRMACIÓN DE ASISTENCIA",
    message: "¡Esperamos a toda la familia en nuestra celebración!",
    subtitle: "Los pequeños son especialmente bienvenidos",
    fields: {
      name: "Nombre",
      response: "¿Vendrán a la celebración?",
      companions: "¿Traerán más niños contigo?",
      phone: "Número de contacto para coordinación",
      responseOptions: {
        yes: "¡Por supuesto, ahí estaremos!",
        no: "Lo siento, no podremos llegar."
      }
    }
  },

  // Opciones de regalo refinadas
  gifts: {
    title: "REGALOS PARA LA PEQUEÑA JINETE",
    message: "Su presencia es nuestro mayor tesoro, pero si desean traer algo especial para Lluvia Marina:",
    options: [
      {
        icon: "🌹",
        title: "Accesorios Elegantes",
        description: "Diademas florales, pulseras, collares delicados",
        details: "Talla: 3 años\nEstilo: Elegante y delicado\nColores: Rosa, magenta, verde"
      },
      {
        icon: "🐎", 
        title: "Juguetes Ecuestres",
        description: "Caballitos elegantes, figuras de jinetes",
        details: "Edad: 3+ años\nTipo: Juguetes seguros y elegantes\nTema: Ecuestre/Escaramuza"
      },
      {
        icon: "📚",
        title: "Libros de Princesas Jinetes",
        description: "Cuentos de princesas ecuestres y aventuras",
        details: "Edad recomendada: 2-5 años\nTema: Princesas, caballos, aventuras elegantes\nFormato: Libros ilustrados con colores vibrantes"
      },
      {
        icon: "💎",
        title: "Contribución Elegante",
        description: "Para el cofre del tesoro de Lluvia Marina",
        details: "Para sus futuros accesorios y aventuras\nSe agradece cualquier cantidad\nEntrega: En sobre elegante durante la celebración"
      }
    ]
  },

  // Premium badge moderno
  premium: {
    color: "var(--charra-gradient-primary)"
  },

  // Demo information elegante moderna
  demo: {
    badge: "💜 CELEBRACIÓN MODERNA PREMIUM - Lluvia Marina ($499)",
    description: "Invitación personalizada moderna premium para Lluvia Marina",
    features: [
      "Todo del Básico",
      "Galería interactiva moderna",
      "Música personalizada", 
      "Cronograma elegante completo",
      "Diseño premium con paleta moderna",
      "Efectos visuales sofisticados",
      "Personalización temática contemporánea"
    ],
    cta: {
      title: "¡Celebración Moderna Lista!",
      subtitle: "Una celebración elegante y contemporánea para nuestra pequeña Lluvia Marina",
      buttonText: "Confirmar Invitación Moderna - $499",
      link: "/#contact"
    }
  }
}
