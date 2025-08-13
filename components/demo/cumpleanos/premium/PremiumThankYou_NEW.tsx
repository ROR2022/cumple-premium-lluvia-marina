"use client"

import { Heart } from 'lucide-react'

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

interface PremiumThankYouProps {
  data?: InvitationData
}

export function PremiumThankYou({ data }: PremiumThankYouProps) {
  // Usar datos de la prop o datos demo como fallback
  const eventData = data?.event || {
    celebrant: {
      name: "Lluvia Marina"
    },
    parents: {
      father: "Papá Charro",
      mother: "Mamá Escaramuza"
    }
  }
  
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-pink-50 via-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        {/* Header principal */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-pink-800 to-pink-700 rounded-full flex items-center justify-center shadow-xl animate-pulse">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-pink-800 mb-4">
            ✨ ¡GRACIAS INFINITAS! ✨
          </h2>
          <p className="text-xl text-pink-700 max-w-3xl mx-auto">
            Desde el corazón de nuestra pequeña amazona y toda la familia escaramuza
          </p>
        </div>

        {/* Mensaje principal de agradecimiento */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border-4 border-pink-800/30 mb-12">
          <div className="text-center">
            {/* Título emocional */}
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-black text-pink-800 mb-4">
                🐎 ¡Un millón de gracias elegantes! 🐎
              </h3>
              <div className="flex justify-center gap-4 mb-6">
                <span className="text-4xl animate-bounce">✨</span>
                <span className="text-4xl animate-bounce delay-100">💖</span>
                <span className="text-4xl animate-bounce delay-200">🎉</span>
              </div>
            </div>

            {/* Mensaje de Lluvia Marina */}
            <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl p-8 mb-8 border-2 border-pink-800/20">
              <div className="text-5xl mb-4">👑</div>
              <h4 className="text-2xl font-bold text-pink-800 mb-4">
                Mensaje directo de la pequeña {eventData.celebrant?.name || "Lluvia Marina"}:
              </h4>
              <p className="text-lg text-pink-700 italic leading-relaxed mb-4">
                &ldquo;¡Hola, mis queridos invitados elegantes! 🐎 
                Ha sido la celebración más hermosa de mi vida compartir mis 3 añitos con todos ustedes. 
                Cada abrazo, cada sonrisa, cada momento de alegría... ¡todo fue perfecto! 
                Gracias por hacer de mi día el más especial con tanta elegancia y amor. 
                ¡Los amo con todo mi corazoncito de pequeña amazona! 💖✨&rdquo;
              </p>
              <div className="text-2xl">🐎💕🎂</div>
            </div>

            {/* Agradecimientos específicos */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-pink-50 to-pink-50 rounded-xl p-6 border-2 border-pink-800/20">
                <div className="text-3xl mb-3">🎁</div>
                <h5 className="text-xl font-bold text-pink-800 mb-3">Por los regalos hermosos</h5>
                <p className="text-pink-700 text-sm">
                  Cada detalle fue elegido con tanto amor. Los juguetes elegantes, la ropa preciosa, 
                  los libros... ¡todo perfecto para nuestra pequeña amazona!
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-50 rounded-xl p-6 border-2 border-green-800/20">
                <div className="text-3xl mb-3">👥</div>
                <h5 className="text-xl font-bold text-green-800 mb-3">Por su hermosa presencia</h5>
                <p className="text-green-700 text-sm">
                  Ver a todos nuestros seres queridos reunidos para celebrar a Lluvia Marina 
                  fue el regalo más grande que pudimos recibir.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-800/20">
                <div className="text-3xl mb-3">📸</div>
                <h5 className="text-xl font-bold text-purple-800 mb-3">Por los momentos capturados</h5>
                <p className="text-purple-700 text-sm">
                  Las fotos, los videos, las risas compartidas... cada recuerdo quedó 
                  guardado para siempre en nuestros corazones.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border-2 border-pink-700/20">
                <div className="text-3xl mb-3">🎉</div>
                <h5 className="text-xl font-bold text-pink-700 mb-3">Por la alegría compartida</h5>
                <p className="text-pink-600 text-sm">
                  Los juegos, los bailes, la diversión elegante... ¡todos se divirtieron 
                  tanto como nuestra pequeña cumpleañera!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mensaje de los padres */}
        <div className="bg-gradient-to-r from-pink-800 to-pink-700 rounded-2xl p-8 text-white text-center mb-12">
          <h4 className="text-3xl font-bold mb-6">💌 Palabras de los padres</h4>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-pink-100 leading-relaxed mb-6">
              Como padres, vemos en los ojos de {eventData.celebrant?.name || "Lluvia Marina"} la felicidad pura que ustedes 
              le regalaron en este día tan especial. Cada sonrisa, cada momento de asombro, 
              cada &ldquo;¡wow!&rdquo; de emoción... todo fue posible gracias a su amor y presencia.
            </p>
            <div className="bg-white/20 rounded-xl p-6">
              <p className="text-pink-100 italic">
                &ldquo;Gracias por ser parte de la historia de nuestra pequeña amazona, 
                por amarla como nosotros la amamos, y por hacer que sus primeros años 
                estén llenos de personas maravillosas como ustedes.&rdquo;
              </p>
              <div className="mt-4 text-xl">
                ❤️ {eventData.parents?.father || "Papá Charro"} y {eventData.parents?.mother || "Mamá Escaramuza"} ❤️
              </div>
            </div>
          </div>
        </div>

        {/* Hasta la próxima celebración */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-4 border-pink-800/30 text-center">
          <h4 className="text-3xl font-black text-pink-800 mb-6">
            ✨ ¡Hasta la próxima elegante celebración! ✨
          </h4>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-pink-50 rounded-lg p-4">
              <div className="text-3xl mb-2">🎂</div>
              <h5 className="font-bold text-pink-800">Los 4 años</h5>
              <p className="text-sm text-pink-700">¡Nos vemos el próximo año!</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-3xl mb-2">🤝</div>
              <h5 className="font-bold text-green-800">Siempre unidos</h5>
              <p className="text-sm text-green-700">¡La familia escaramuza crece!</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-3xl mb-2">💝</div>
              <h5 className="font-bold text-purple-800">Con todo nuestro amor</h5>
              <p className="text-sm text-purple-700">¡Gracias por todo!</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl p-6">
            <p className="text-xl font-bold text-pink-800 mb-2">
              🐎 &ldquo;En la elegante tradición de Lluvia Marina, 
            </p>
            <p className="text-xl font-bold text-pink-800">
              los amigos como ustedes son tesoros para toda la vida&rdquo; ✨
            </p>
          </div>
        </div>

        {/* Nota demo */}
        <div className="mt-8 bg-pink-50 border border-pink-800/30 rounded-lg p-4">
          <p className="text-sm text-pink-800 text-center">
            <strong>💡 Demo:</strong> Esta sección premium cierra la invitación con un mensaje emotivo de agradecimiento. 
            Perfecto para mostrar el aprecio hacia todos los invitados especiales.
          </p>
        </div>
      </div>
    </section>
  )
}
