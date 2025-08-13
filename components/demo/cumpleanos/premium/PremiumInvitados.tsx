"use client"

import { Crown, Heart } from 'lucide-react'

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
    <section className="py-16 px-4 bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-800 to-purple-800 rounded-full flex items-center justify-center shadow-xl">
              <Crown className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-pink-800 mb-4">
            ✨ INVITADOS VIP ✨
          </h2>
          <p className="text-xl text-pink-700 max-w-3xl mx-auto">
            Personas especiales que harán de esta elegante celebración un día inolvidable para la pequeña {celebrantName.split(' ')[0]}
          </p>
        </div>

        {/* Grid de invitados VIP */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {vipGuests.map((guest, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 hover:shadow-2xl group"
            >
              {/* Icono y badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {guest.icon}
                </div>
                <div className="bg-gradient-to-r from-pink-800 to-purple-800 text-white px-3 py-1 rounded-full text-sm font-bold">
                  VIP
                </div>
              </div>

              {/* Información del invitado */}
              <h3 className="text-xl font-black text-pink-800 mb-2">
                {guest.name}
              </h3>
              
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-3 mb-3">
                <p className="text-pink-800 font-bold text-sm">
                  🐎 {guest.role}
                </p>
              </div>

              <p className="text-pink-700 text-sm mb-3 leading-relaxed">
                {guest.description}
              </p>

              <div className="flex items-center gap-2 text-xs text-pink-600">
                <Heart className="w-3 h-3" />
                <span className="font-medium">{guest.relationship}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje especial para todos los invitados */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border-4 border-pink-300">
          <div className="text-center">
            <h3 className="text-3xl font-black text-pink-800 mb-6">
              💌 Para todos nuestros queridos invitados
            </h3>
            
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-6 mb-6">
              <p className="text-lg text-pink-700 leading-relaxed">
                Cada uno de ustedes tiene un lugar especial en el corazón de nuestra pequeña amazona. 
                Su presencia hará que este día sea realmente mágico y lleno de amor. 
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-pink-100 rounded-lg p-4 border-2 border-pink-300">
                <div className="text-3xl mb-2">👥</div>
                <h4 className="font-bold text-pink-800 mb-1">Familia Especial</h4>
                <p className="text-sm text-pink-700">Los que siempre están ahí</p>
              </div>
              
              <div className="bg-green-100 rounded-lg p-4 border-2 border-green-300">
                <div className="text-3xl mb-2">💝</div>
                <h4 className="font-bold text-green-800 mb-1">Amigos del Alma</h4>
                <p className="text-sm text-green-700">Los que hacen reír siempre</p>
              </div>
              
              <div className="bg-purple-100 rounded-lg p-4 border-2 border-purple-300">
                <div className="text-3xl mb-2">🌟</div>
                <h4 className="font-bold text-purple-800 mb-1">Padrinos Queridos</h4>
                <p className="text-sm text-purple-700">Los guías de esta celebración</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-800 to-purple-800 rounded-xl p-6 text-white">
              <h4 className="text-2xl font-bold mb-3">🐎 Código de Honor</h4>
              <p className="text-pink-100 text-sm">
                &ldquo;En la elegante tradición de la pequeña {celebrantName.split(' ')[0]}, todos los invitados son tratados 
                con el máximo respeto y cariño. Porque en esta familia escaramuza, 
                ¡todos somos parte de la misma hermosa tradición! ✨&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Nota demo */}
        <div 
        style={{display: 'none'}}
        className="mt-8 bg-pink-100 border border-pink-300 rounded-lg p-4">
          <p className="text-sm text-pink-800 text-center">
            <strong>💡 Demo:</strong> Esta sección premium destaca a los invitados más especiales. 
            En tu invitación real, puedes personalizar la lista VIP con las personas más importantes para tu celebración.
          </p>
        </div>
      </div>
    </section>
  )
}
