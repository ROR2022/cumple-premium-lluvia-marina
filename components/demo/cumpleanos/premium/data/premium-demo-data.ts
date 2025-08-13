export const premiumDemoData = {
  // Información del celebrante
  hero: {
    name: "Sheriff Lluvia Marina",
    subtitle: "¡La nueva sheriff del Viejo Oeste!",
    backgroundImage: "/images/cumple/western/western1.png"
  },

  // Información del evento
  event: {
    celebrant: {
      name: "Lluvia Marina",
      age: "3 años",
      birthDate: "15 de Marzo de 2022"
    },
    parents: {
      father: "Papá Sheriff",
      mother: "Mamá Vaquera"
    },
    padrinos: {
      padrino: "Padrino Western",
      madrina: "Madrina Sheriff"
    },
    ceremony: {
      date: "Sábado 15 de Marzo, 2025",
      time: "11:00 AM",
      location: "Rancho Western Kids",
      address: "Calle del Viejo Oeste #123, Ciudad Vaquera"
    },
    celebration: {
      date: "Sábado 15 de Marzo, 2025",
      time: "1:00 PM", 
      location: "Salón Sheriff Party",
      address: "Avenida Vaquera #456, Pueblo Western"
    },
    dressCode: "Vestimenta western: sombreros vaqueros, botas, pañuelos y ropa del viejo oeste",
    restrictions: "Evento familiar western, sin caballos reales por seguridad"
  },

  // Cronograma del evento
  timeline: [
    {
      time: "11:00 AM",
      activity: "Llegada de vaqueros",
      description: "Registro en el rancho western",
      icon: "�"
    },
    {
      time: "11:30 AM",
      activity: "Entrenamiento vaquero", 
      description: "Aprender a ser un verdadero sheriff",
      icon: "⭐"
    },
    {
      time: "12:30 PM",
      activity: "Búsqueda del tesoro",
      description: "Aventura por el viejo oeste",
      icon: "🗺️"
    },
    {
      time: "1:30 PM",
      activity: "Ceremonia sheriff",
      description: "Nombramiento oficial como sheriff junior",
      icon: "🏆"
    },
    {
      time: "2:00 PM",
      activity: "Banquete western",
      description: "Comida especial del rancho",
      icon: "🍕"
    },
    {
      time: "3:00 PM",
      activity: "Baile del salón",
      description: "Música western y bailes vaqueros",
      icon: "🎵"
    }
  ],

  // Galería de fotos
  gallery: {
    title: "Galería Western",
    description: "Momentos especiales de la aventura vaquera",
    categories: [
      {
        name: "Entrenamiento Vaquero",
        images: [
          "/images/cumple/western/western1.png",
          "/images/cumple/western/western2.png"
        ]
      },
      {
        name: "Aventura Western",
        images: [
          "/images/cumple/western/western3.png",
          "/images/cumple/western/western4.png"
        ]
      }
    ]
  },

  // Música western personalizada
  music: {
    title: "Música Western",
    track: "/music/bikina.mp3",
    autoplay: false,
    loop: true,
    description: "Música especial para Sheriff Lluvia Marina"
  },

  // Colores y tema western
  theme: {
    primary: "from-amber-600 to-orange-600",
    secondary: "from-orange-500 to-yellow-500",
    accent: "from-yellow-400 to-amber-500", 
    background: "bg-gradient-to-br from-amber-50 to-orange-100",
    text: "text-amber-900"
  },

  // Color para badges premium
  premium: {
    color: "from-amber-600 to-orange-600"
  },

  // Información del demo
  demo: {
    badge: "� DEMO - Paquete Premium ($499)",
    description: "Esta es una demostración del paquete premium para cumpleaños western",
    features: [
      "Todo del Básico",
      "Galería de fotos interactiva",
      "Música western personalizada",
      "Cronograma avanzado",
      "Diseño premium con animaciones",
      "Efectos visuales especiales"
    ],
    cta: {
      title: "¿Te gusta el paquete Premium?",
      subtitle: "Incluye características western para una celebración épica del viejo oeste",
      buttonText: "Contratar Paquete Premium - $499",
      link: "/#pricing"
    }
  },

  // Mensaje final personalizado (característica premium)
  thankYou: {
    title: "¡Gracias por ser parte de uno de los mejores días de mi vida!",
    personalMessage: "Cada uno de ustedes tiene un lugar especial en mi corazón, y no puedo imaginar esta celebración sin su presencia.",
    message: "Con todo mi cariño:",
    signature: "Pamela Kitana",
    footer: {
      year: "2025",
      name: "PAMELA KITANA XV",
      company: "BY INVITACIONES WEB MX",
      rights: "ALL RIGHTS RESERVED",
      cta: {
        question: "¿TIENES UN EVENTO EN PUERTA?",
        action: "DISEÑA CON NOSOTROS TU INVITACIÓN WEB DIGITAL.",
        linkText: "AQUÍ",
        link: "https://www.invitacionesweb.lat/"
      }
    }
  },
}
