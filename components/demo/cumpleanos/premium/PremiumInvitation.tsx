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
    <section className="py-16 px-4" style={{ background: 'var(--charra-gradient-background)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header Moderno */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl" style={{ background: 'var(--charra-gradient-primary)' }}>
              <span className="text-4xl">�</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--charra-primary)' }}>
            ✨ INVITACIÓN ✨
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--charra-secondary)' }}>
            Con gran honor y alegría, les extendemos esta invitación especial para celebrar
          </p>
        </div>

        {/* Contenido principal */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border-4" style={{ borderColor: 'var(--charra-accent)' }}>
          {/* Título principal */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-5xl animate-bounce">🎂</span>
              <h3 className="text-4xl md:text-6xl font-black" style={{ color: 'var(--charra-primary)' }}>
                ¡LOS 3 AÑOS!
              </h3>
              <span className="text-5xl animate-bounce delay-300">🦄</span>
            </div>
            <p className="text-2xl font-bold" style={{ color: 'var(--charra-secondary)' }}>
              de nuestra pequeña
            </p>
          </div>

          {/* Información de la celebrante */}
          <div 
          style={{display: 'none'}}
          className="text-center mb-10">
            <div className="rounded-xl p-8 mb-8 border-2" style={{ 
              background: 'var(--charra-gradient-background)',
              borderColor: 'var(--charra-accent)'
            }}>
              <h4 className="text-3xl md:text-4xl font-black mb-4" style={{ color: 'var(--charra-primary)' }}>
                ✨ {(eventData.celebrant?.name || "Lluvia Marina").toUpperCase()} ✨
              </h4>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-xl" style={{ color: 'var(--charra-secondary)' }}>
                <div className="bg-white rounded-lg px-4 py-2 shadow-md border" style={{ borderColor: 'var(--charra-accent)' }}>
                  <span className="font-bold">🎂 Edad:</span> {eventData.celebrant?.age || "3 años"}
                </div>
                <div className="bg-white rounded-lg px-4 py-2 shadow-md border" style={{ borderColor: 'var(--charra-accent)' }}>
                  <span className="font-bold">📅 Nació el:</span> {eventData.celebrant?.birthDate || "11 de Agosto, 2022"}
                </div>
              </div>
            </div>
          </div>

          {/* Padres organizadores */}
          <div className="text-center mb-10">
            <h5 className="text-2xl font-bold mb-6" style={{ color: 'var(--charra-primary)' }}>
              👨‍👩‍👧 Con el cariño y organización de sus padres:
            </h5>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 border-2" style={{ 
                background: 'var(--charra-gradient-background)',
                borderColor: 'var(--charra-accent)'
              }}>
                <div className="text-4xl mb-3">👨</div>
                <h6 className="text-xl font-bold" style={{ color: 'var(--charra-primary)' }}>{eventData.parents?.father || "Papá"}</h6>
                <p style={{ color: 'var(--charra-secondary)' }}>Papá</p>
              </div>
              <div className="rounded-xl p-6 border-2" style={{ 
                background: 'var(--charra-gradient-background)',
                borderColor: 'var(--charra-accent)'
              }}>
                <div className="text-4xl mb-3">👩</div>
                <h6 className="text-xl font-bold" style={{ color: 'var(--charra-primary)' }}>{eventData.parents?.mother || "Mamá"}</h6>
                <p style={{ color: 'var(--charra-secondary)' }}>Mamá</p>
              </div>
            </div>
          </div>

          {/* Padrinos especiales */}
          {eventData.padrinos && (
            <div className="text-center mb-10">
              <h5 className="text-2xl font-bold mb-6" style={{ color: 'var(--charra-primary)' }}>
                ✨ Padrinos especiales de esta moderna celebración:
              </h5>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 border-2" style={{ 
                  background: 'var(--charra-gradient-accent)',
                  borderColor: 'var(--charra-highlight)'
                }}>
                  <div className="text-4xl mb-3">🎩</div>
                  <h6 className="text-xl font-bold" style={{ color: 'var(--charra-primary)' }}>{eventData.padrinos.padrino}</h6>
                  <p style={{ color: 'var(--charra-secondary)' }}>Padrino</p>
                </div>
                <div className="rounded-xl p-6 border-2" style={{ 
                  background: 'var(--charra-gradient-background)',
                  borderColor: 'var(--charra-accent)'
                }}>
                  <div className="text-4xl mb-3">👸</div>
                  <h6 className="text-xl font-bold" style={{ color: 'var(--charra-primary)' }}>{eventData.padrinos.madrina}</h6>
                  <p style={{ color: 'var(--charra-secondary)' }}>Madrina</p>
                </div>
              </div>
            </div>
          )}

          {/* Detalles del evento */}
          <div 
          
          className="rounded-2xl p-8 text-white text-center mb-8" 
          style={{display:'none', background: 'var(--charra-gradient-primary)' }}>
            <h5 className="text-3xl font-black mb-6">📍 DETALLES DE LA CELEBRACIÓN</h5>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Ceremonia */}
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <h6 className="text-2xl font-bold mb-4 text-white/90">� CEREMONIA</h6>
                <div className="space-y-3 text-left">
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <p className="text-white/90"><strong className="text-white">📅 Fecha:</strong> {eventData.ceremony?.date || "Sábado 15 de Marzo, 2025"}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <p className="text-white/90"><strong className="text-white">🕐 Hora:</strong> {eventData.ceremony?.time || "11:00 AM"}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <p className="text-white/90"><strong className="text-white">📍 Lugar:</strong> {eventData.ceremony?.location || "Salón Moderno"}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <p className="text-white/90"><strong className="text-white">🗺️ Dirección:</strong> {eventData.ceremony?.address || "Calle de la Modernidad #123"}</p>
                  </div>
                </div>
              </div>
              
              {/* Celebración */}
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <h6 className="text-2xl font-bold mb-4 text-white/90">✨ FIESTA</h6>
                <div className="space-y-3 text-left">
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <p className="text-white/90"><strong className="text-white">📅 Fecha:</strong> {eventData.celebration?.date || "Sábado 15 de Marzo, 2025"}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <p className="text-white/90"><strong className="text-white">🕐 Hora:</strong> {eventData.celebration?.time || "1:00 PM"}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <p className="text-white/90"><strong className="text-white">📍 Lugar:</strong> {eventData.celebration?.location || "Salón Moderno Elegante"}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <p className="text-white/90"><strong className="text-white">🗺️ Dirección:</strong> {eventData.celebration?.address || "Avenida Contemporánea #456"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>

        {/* Nota demo */}
        <div 
        style={{
          display: "none",
          backgroundColor: 'var(--charra-background)', 
          borderColor: 'var(--charra-accent)' 
        }}
        className="mt-8 rounded-lg p-4 border">
          <p className="text-sm text-center" style={{ color: 'var(--charra-primary)' }}>
            <strong>💡 Demo:</strong> Esta sección premium incluye la invitación formal completa. 
            En tu invitación real, toda la información se personalizaría según tus datos específicos.
          </p>
        </div>
      </div>
    </section>
  )
}
