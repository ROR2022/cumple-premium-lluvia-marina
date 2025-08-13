"use client"

interface PremiumTimelineProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
}

export function PremiumTimeline({ data }: PremiumTimelineProps) {
  // Usar datos pasados o fallback elegante
  const timelineEvents = data?.timeline || [
    {
      time: "11:00 AM",
      activity: "Llegada de Invitados",
      description: "Recibimiento con música elegante",
      icon: "🐎"
    },
    {
      time: "11:30 AM",
      activity: "Ceremonial de Entrada",
      description: "La pequeña amazona hace su entrada triunfal",
      icon: "👑"
    },
    {
      time: "12:00 PM",
      activity: "Celebración Principal",
      description: "Tiempo de diversión y juegos elegantes",
      icon: "🎉"
    },
    {
      time: "1:00 PM",
      activity: "Hora del Banquete",
      description: "Deliciosos platillos para todos",
      icon: "🍽️"
    },
    {
      time: "2:00 PM",
      activity: "Momento del Pastel",
      description: "¡Cantamos Las Mañanitas!",
      icon: "🎂"
    },
    {
      time: "3:00 PM",
      activity: "Despedida Elegante",
      description: "Agradecimientos y recuerdos hermosos",
      icon: "✨"
    }
  ]

  const timelineData = {
    title: "Cronograma de la Celebración",
    subtitle: "Un día lleno de momentos especiales y elegancia",
    events: timelineEvents
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-charra-blush/20 via-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-charra-burgundy to-charra-wine rounded-full flex items-center justify-center shadow-xl">
              <span className="text-4xl">📅</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-charra-burgundy mb-4">
            {timelineData.title}
          </h2>
          <p className="text-xl text-charra-wine max-w-3xl mx-auto">
            {timelineData.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-charra-burgundy via-charra-wine to-charra-magenta rounded-full"></div>
          
          {/* Eventos */}
          <div className="space-y-8">
            {timelineData.events.map((event: { icon: string; time: string; activity: string; description: string }, index: number) => (
              <div key={index} className="relative flex items-start">
                {/* Punto en la línea */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full border-4 border-charra-burgundy shadow-lg">
                  <span className="text-2xl">{event.icon}</span>
                </div>
                
                {/* Contenido del evento */}
                <div className="ml-8 flex-1">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border-2 border-charra-burgundy/20 hover:border-charra-burgundy/40 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-black text-charra-burgundy">{event.activity}</h3>
                      <div className="bg-gradient-to-r from-charra-burgundy to-charra-wine text-white px-4 py-1 rounded-full text-sm font-bold">
                        {event.time}
                      </div>
                    </div>
                    <p className="text-charra-wine leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mensaje de cierre */}
        <div className="mt-12 bg-gradient-to-r from-charra-burgundy to-charra-wine rounded-2xl p-8 text-center shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
            ¡Un día para recordar por siempre!
          </h3>
          <p className="text-charra-blush max-w-2xl mx-auto">
            Cada momento está planeado con amor para hacer de esta celebración 
            un recuerdo hermoso e inolvidable para nuestra pequeña amazona.
          </p>
        </div>

        {/* Nota demo */}
        <div className="mt-8 bg-charra-blush/20 border border-charra-burgundy/30 rounded-lg p-4">
          <p className="text-sm text-charra-burgundy text-center">
            <strong>💡 Demo:</strong> Este cronograma premium muestra el itinerario completo del evento. 
            En tu invitación real, todos los horarios se ajustarían según tu celebración específica.
          </p>
        </div>
      </div>
    </section>
  )
}
