"use client"

import { Crown, Heart } from 'lucide-react'
import { LluviaDecoration, FloatingLluviaDecoration } from './LluviaDecoration'

interface InvitationData {
  event?: {
    celebrant?: {
      name?: string
    }
    parents?: {
      father?: string
      mother?: string
    }
  }
}

interface PremiumInvitadosProps {
  data?: InvitationData
}

export function PremiumInvitados({ data }: PremiumInvitadosProps) {
  // Extraer datos para personalización
  const celebrantName = data?.event?.celebrant?.name || "Lluvia Marina"
  const fatherName = data?.event?.parents?.father || "Papá Charro"
  const motherName = data?.event?.parents?.mother || "Mamá Escaramuza"

  // Lista VIP de invitados especiales (adaptado a tema Escaramuza Charra)
  const vipGuests = [
    {
      name: "Abuelita Rosa",
      role: "Dama de Honor",
      description: "La abuela más elegante, guardiana de las tradiciones familiares",
      icon: "👵",
      relationship: "Abuela paterna"
    },
    {
      name: "Abuelito Carlos",
      role: "Caballero Mayor",
      description: "El abuelo más distinguido, narrador de historias de tradición",
      icon: "👴",
      relationship: "Abuelo paterno"
    },
    {
      name: `Papá ${fatherName.split(' ')[0]}`,
      role: "Anfitrión Principal",
      description: "El papá organizador de esta hermosa celebración",
      icon: "👨",
      relationship: "Padre"
    },
    {
      name: `Mamá ${motherName.split(' ')[0]}`,
      role: "Anfitriona Elegante",
      description: "La mamá que hace posible cada detalle especial",
      icon: "👩",
      relationship: "Madre"
    },
    {
      name: "Tía María",
      role: "Escaramuza Especial",
      description: "La tía más cariñosa, maestra de elegancia y protocolo",
      icon: "👩",
      relationship: "Hermana de mamá"
    },
    {
      name: "Tío Luis",
      role: "Charro Distinguido",
      description: "El tío más caballeroso, siempre trae las mejores sorpresas",
      icon: "👨",
      relationship: "Hermano de papá"
    },
    {
      name: "Prima Sofía",
      role: "Dama Junior",
      description: "La prima favorita, compañera de elegantes aventuras",
      icon: "👧",
      relationship: "Prima mayor"
    },
    {
      name: "Amiguita Luna",
      role: "Pequeña Amazona",
      description: "La mejor amiga del parque, compañera de juegos y risas",
      icon: "👶",
      relationship: "Mejor amiga"
    }
  ]

  return (
    <section className="py-16 px-4" style={{ background: 'var(--charra-gradient-background)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl" style={{ background: 'var(--charra-gradient-primary)' }}>
              <Crown className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--charra-primary)' }}>
            ✨ INVITADOS VIP ✨
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--charra-secondary)' }}>
            Personas especiales que harán de esta moderna celebración un día inolvidable para la pequeña {celebrantName.split(' ')[0]}
          </p>
        </div>

        {/* Grid de invitados VIP */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {vipGuests.map((guest, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 hover:shadow-2xl group transition-all duration-300"
              style={{ borderColor: 'var(--charra-accent)' }}
            >
              {/* Icono y badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {guest.icon}
                </div>
                <div className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: 'var(--charra-gradient-primary)' }}>
                  VIP
                </div>
              </div>

              {/* Información del invitado */}
              <h3 className="text-xl font-black mb-2" style={{ color: 'var(--charra-primary)' }}>
                {guest.name}
              </h3>
              
              <div className="rounded-lg p-3 mb-3" style={{ background: 'var(--charra-gradient-background)' }}>
                <p className="font-bold text-sm" style={{ color: 'var(--charra-primary)' }}>
                  � {guest.role}
                </p>
              </div>

              <p className="text-sm mb-3 leading-relaxed" style={{ color: 'var(--charra-secondary)' }}>
                {guest.description}
              </p>

              <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--charra-accent)' }}>
                <Heart className="w-3 h-3" />
                <span className="font-medium">{guest.relationship}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje especial para todos los invitados */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border-4" style={{ borderColor: 'var(--charra-accent)' }}>
          <div className="text-center">
            <h3 className="text-3xl font-black mb-6" style={{ color: 'var(--charra-primary)' }}>
              💌 Para todos nuestros queridos invitados
            </h3>
            
            <div className="rounded-xl p-6 mb-6" style={{ background: 'var(--charra-gradient-background)' }}>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--charra-secondary)' }}>
                Cada uno de ustedes tiene un lugar especial en el corazón de nuestra pequeña princesa. 
                Su presencia hará que este día sea realmente mágico y lleno de amor. 
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="rounded-lg p-4 border-2" style={{ 
                background: 'var(--charra-background)', 
                borderColor: 'var(--charra-accent)' 
              }}>
                <div className="flex justify-center mb-2">
                  <LluviaDecoration type="vineta1" size="md" animation="pulse" />
                </div>
                <h4 className="font-bold mb-1" style={{ color: 'var(--charra-primary)' }}>Familia Especial</h4>
                <p className="text-sm" style={{ color: 'var(--charra-secondary)' }}>Los que siempre están ahí</p>
              </div>
              
              <div className="rounded-lg p-4 border-2" style={{ 
                background: 'var(--charra-gradient-accent)', 
                borderColor: 'var(--charra-highlight)' 
              }}>
                <div className="flex justify-center mb-2">
                  <LluviaDecoration type="rueda1" size="md" animation="bounce" />
                </div>
                <h4 className="font-bold mb-1" style={{ color: 'var(--charra-primary)' }}>Amigos del Alma</h4>
                <p className="text-sm" style={{ color: 'var(--charra-secondary)' }}>Los que hacen reír siempre</p>
              </div>
              
              <div className="rounded-lg p-4 border-2" style={{ 
                background: 'var(--charra-background)', 
                borderColor: 'var(--charra-accent)' 
              }}>
                <div className="flex justify-center mb-2">
                  <LluviaDecoration type="vineta2" size="md" animation="spin-slow" />
                </div>
                <h4 className="font-bold mb-1" style={{ color: 'var(--charra-primary)' }}>Padrinos Queridos</h4>
                <p className="text-sm" style={{ color: 'var(--charra-secondary)' }}>Los guías de esta celebración</p>
              </div>
            </div>

            <div className="rounded-xl p-6 text-white" style={{ background: 'var(--charra-gradient-primary)' }}>
              <h4 className="text-2xl font-bold mb-3">� Código Moderno</h4>
              <p className="text-white/90 text-sm">
                &ldquo;En la moderna tradición de la pequeña {celebrantName.split(' ')[0]}, todos los invitados son tratados 
                con el máximo respeto y cariño. Porque en esta familia contemporánea, 
                ¡todos somos parte de la misma hermosa celebración! ✨&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Nota demo */}
        <div 
        style={{
          display: 'none',
          backgroundColor: 'var(--charra-background)', 
          borderColor: 'var(--charra-accent)' 
        }}
        className="mt-8 border rounded-lg p-4">
          <p className="text-sm text-center" style={{ color: 'var(--charra-primary)' }}>
            <strong>💡 Demo:</strong> Esta sección premium destaca a los invitados más especiales. 
            En tu invitación real, puedes personalizar la lista VIP con las personas más importantes para tu celebración.
          </p>
        </div>
      </div>
    </section>
  )
}
