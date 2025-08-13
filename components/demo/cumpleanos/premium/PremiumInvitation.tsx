"use client"

interface InvitationData {
  event?: {
    celebrant?: {
      name?: string
      age?: string
      birthDate?: string
    }
    parents?: {
      father?: string
      mother?: string
    }
    padrinos?: {
      padrino?: string
      madrina?: string
    }
    ceremony?: {
      date?: string
      time?: string
      location?: string
      address?: string
    }
    celebration?: {
      date?: string
      time?: string
      location?: string
      address?: string
    }
  }
}

interface PremiumInvitationProps {
  data?: InvitationData
}

export function PremiumInvitation({ data }: PremiumInvitationProps) {
  // Usar datos de la prop o datos demo como fallback
  const eventData = data?.event || {
    celebrant: {
      name: "Lluvia Marina",
      age: "3 años",
      birthDate: "11 de Agosto, 2022"
    },
    parents: {
      father: "Papá",
      mother: "Mamá"
    },
    padrinos: {
      padrino: "Padrino",
      madrina: "Madrina"
    },
    ceremony: {
      date: "Sábado 15 de Marzo, 2025",
      time: "11:00 AM",
      location: "Hacienda Los Caballitos",
      address: "Calle de la Tradición #123"
    },
    celebration: {
      date: "Sábado 15 de Marzo, 2025", 
      time: "1:00 PM",
      location: "Salón Escaramuza",
      address: "Avenida Ecuestre #456"
    }
  }
  
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
      <div className="max-w-4xl mx-auto">
        {/* Header Escaramuza */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-800 to-purple-800 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-4xl">🐎</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-pink-800 mb-4">
            ✨ INVITACIÓN ELEGANTE ✨
          </h2>
          <p className="text-xl text-pink-700 max-w-2xl mx-auto">
            Con gran honor y alegría, les extendemos esta invitación especial para celebrar
          </p>
        </div>

        {/* Contenido principal */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border-4 border-pink-200">
          {/* Título principal */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-5xl animate-bounce">🎂</span>
              <h3 className="text-4xl md:text-6xl font-black text-pink-800">
                ¡LOS 3 AÑOS!
              </h3>
              <span className="text-5xl animate-bounce delay-300">🐎</span>
            </div>
            <p className="text-2xl text-pink-700 font-bold">
              de nuestra pequeña
            </p>
          </div>

          {/* Información de la celebrante */}
          <div className="text-center mb-10">
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-8 mb-8 border-2 border-pink-300">
              <h4 className="text-3xl md:text-4xl font-black text-pink-800 mb-4">
                ✨ {(eventData.celebrant?.name || "Lluvia Marina").toUpperCase()} ✨
              </h4>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-xl text-pink-700">
                <div className="bg-white rounded-lg px-4 py-2 shadow-md border border-pink-200">
                  <span className="font-bold">🎂 Edad:</span> {eventData.celebrant?.age || "3 años"}
                </div>
                <div className="bg-white rounded-lg px-4 py-2 shadow-md border border-pink-200">
                  <span className="font-bold">📅 Nació el:</span> {eventData.celebrant?.birthDate || "11 de Agosto, 2022"}
                </div>
              </div>
            </div>
          </div>

          {/* Padres organizadores */}
          <div className="text-center mb-10">
            <h5 className="text-2xl font-bold text-pink-800 mb-6">
              👨‍👩‍👧 Con el cariño y organización de sus padres:
            </h5>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl p-6 border-2 border-pink-300">
                <div className="text-4xl mb-3">👨</div>
                <h6 className="text-xl font-bold text-pink-800">{eventData.parents?.father || "Papá Charro"}</h6>
                <p className="text-pink-700">Papá</p>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl p-6 border-2 border-pink-300">
                <div className="text-4xl mb-3">👩</div>
                <h6 className="text-xl font-bold text-pink-800">{eventData.parents?.mother || "Mamá Escaramuza"}</h6>
                <p className="text-pink-700">Mamá</p>
              </div>
            </div>
          </div>

          {/* Padrinos especiales */}
          {eventData.padrinos && (
            <div className="text-center mb-10">
              <h5 className="text-2xl font-bold text-pink-800 mb-6">
                ✨ Padrinos especiales de esta elegante celebración:
              </h5>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 border-2 border-green-300">
                  <div className="text-4xl mb-3">🎩</div>
                  <h6 className="text-xl font-bold text-green-800">{eventData.padrinos.padrino}</h6>
                  <p className="text-green-700">Padrino</p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 border-2 border-purple-300">
                  <div className="text-4xl mb-3">👸</div>
                  <h6 className="text-xl font-bold text-purple-800">{eventData.padrinos.madrina}</h6>
                  <p className="text-purple-700">Madrina</p>
                </div>
              </div>
            </div>
          )}

          {/* Detalles del evento */}
          <div className="bg-gradient-to-r from-pink-800 to-purple-800 rounded-2xl p-8 text-white text-center mb-8">
            <h5 className="text-3xl font-black mb-6">📍 DETALLES DE LA CELEBRACIÓN</h5>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Ceremonia */}
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <h6 className="text-2xl font-bold mb-4 text-pink-100">🐎 CEREMONIA</h6>
                <div className="space-y-3 text-left">
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <p className="text-pink-100"><strong className="text-white">📅 Fecha:</strong> {eventData.ceremony?.date || "Sábado 15 de Marzo, 2025"}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <p className="text-pink-100"><strong className="text-white">🕐 Hora:</strong> {eventData.ceremony?.time || "11:00 AM"}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <p className="text-pink-100"><strong className="text-white">📍 Lugar:</strong> {eventData.ceremony?.location || "Hacienda Los Caballitos"}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <p className="text-pink-100"><strong className="text-white">🗺️ Dirección:</strong> {eventData.ceremony?.address || "Calle de la Tradición #123"}</p>
                  </div>
                </div>
              </div>
              
              {/* Celebración */}
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <h6 className="text-2xl font-bold mb-4 text-pink-100">✨ FIESTA</h6>
                <div className="space-y-3 text-left">
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <p className="text-pink-100"><strong className="text-white">📅 Fecha:</strong> {eventData.celebration?.date || "Sábado 15 de Marzo, 2025"}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <p className="text-pink-100"><strong className="text-white">🕐 Hora:</strong> {eventData.celebration?.time || "1:00 PM"}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <p className="text-pink-100"><strong className="text-white">📍 Lugar:</strong> {eventData.celebration?.location || "Salón Escaramuza Elegante"}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <p className="text-pink-100"><strong className="text-white">🗺️ Dirección:</strong> {eventData.celebration?.address || "Avenida Ecuestre #456"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mensaje especial */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-8 border-2 border-pink-300">
              <h5 className="text-2xl font-bold text-pink-800 mb-4">
                💌 Mensaje especial de la pequeña Lluvia Marina:
              </h5>
              <p className="text-lg text-pink-700 italic leading-relaxed">
                &ldquo;¡Hola, queridos invitados! 🐎 Esta pequeña amazona está muy emocionada de compartir 
                su elegante celebración del tercer año con todos ustedes. ¡Vengan con sus mejores galas 
                y prepárense para una fiesta llena de elegancia y diversión! 
                ¡Los esperamos con mucho cariño! ✨🌹&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Nota demo */}
        <div 
        style={{display: "none"}}
        className="mt-8 bg-pink-100 border border-pink-300 rounded-lg p-4">
          <p className="text-sm text-pink-800 text-center">
            <strong>💡 Demo:</strong> Esta sección premium incluye la invitación formal completa. 
            En tu invitación real, toda la información se personalizaría según tus datos específicos.
          </p>
        </div>
      </div>
    </section>
  )
}
