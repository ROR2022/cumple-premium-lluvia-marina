"use client"

import { Heart } from 'lucide-react'
import { premiumDemoData } from './data/premium-demo-data'
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
    <section className="py-16 px-4" style={{ background: 'var(--charra-gradient-background)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header principal */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-xl animate-pulse" style={{ background: 'var(--charra-gradient-primary)' }}>
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="font-tangerine text-5xl md:text-7xl font-bold mb-4" style={{ color: 'var(--charra-primary)' }}>
            ✨ ¡GRACIAS INFINITAS! ✨
          </h2>
          <p className="font-playfair text-xl max-w-3xl mx-auto" style={{ color: 'var(--charra-secondary)' }}>
            Desde el corazón de nuestra pequeña princesa y toda la familia moderna
          </p>
        </div>

        {/* Mensaje principal de agradecimiento */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border-4 mb-12" style={{ borderColor: 'var(--charra-accent)' }}>
          <div className="text-center">
            {/* Título emocional */}
            <div className="mb-8">
              <h3 className="font-great-vibes text-4xl md:text-5xl mb-4" style={{ color: 'var(--charra-primary)' }}>
                � ¡Un millón de gracias! �
              </h3>
              <div className="flex justify-center gap-2 md:gap-4 mb-6">
                <LluviaDecoration type="vineta1" size="md" animation="bounce" className="md:w-12 md:h-12" />
                <LluviaDecoration type="rueda1" size="md" animation="bounce" delay="100" className="md:w-12 md:h-12" />
                <LluviaDecoration type="vineta2" size="md" animation="bounce" delay="200" className="md:w-12 md:h-12" />
              </div>
            </div>

            {/* Mensaje de Lluvia Marina */}
            <div className="rounded-xl p-8 mb-8 border-2" style={{ 
              background: 'var(--charra-gradient-background)', 
              borderColor: 'var(--charra-accent)' 
            }}>
              <div className="text-5xl mb-4">👑</div>
              <h4 className="font-great-vibes text-2xl font-bold mb-4" style={{ color: 'var(--charra-primary)' }}>
                Mensaje directo de la pequeña {eventData.celebrant?.name || "Lluvia Marina"}:
              </h4>
              <p className="font-playfair text-lg italic leading-relaxed mb-4" style={{ color: 'var(--charra-secondary)' }}>
                &ldquo;¡Hola, mis queridos invitados elegantes! � 
                Ha sido la celebración más hermosa de mi vida compartir mis 3 añitos con todos ustedes. 
                Cada abrazo, cada sonrisa, cada momento de alegría... ¡todo fue perfecto! 
                Gracias por hacer de mi día el más especial con tanto estilo y amor. 
                ¡Los amo con todo mi corazoncito de pequeña princesa! 💖✨&rdquo;
              </p>
              <div className="text-2xl">🦄💕🎂</div>
            </div>

            {/* Agradecimientos específicos */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="rounded-xl p-6 border-2" 
              style={{ 
                display: 'none',
                background: 'var(--charra-background)', 
                borderColor: 'var(--charra-accent)' 
              }}>
                <div className="flex justify-center mb-3">
                  <LluviaDecoration type="rueda1" size="md" animation="pulse" />
                </div>
                <h5 className="text-xl font-bold mb-3" style={{ color: 'var(--charra-primary)' }}>Por los regalos hermosos</h5>
                <p className="text-sm" style={{ color: 'var(--charra-secondary)' }}>
                  Cada detalle fue elegido con tanto amor. Los juguetes modernos, la ropa preciosa, 
                  los libros... ¡todo perfecto para nuestra pequeña princesa!
                </p>
              </div>
              
              <div className="rounded-xl p-6 border-2" style={{
                maxWidth: '250px',
                background: 'var(--charra-gradient-accent)', 
                borderColor: 'var(--charra-highlight)' 
              }}>
                <div className="flex justify-center mb-3">
                  <LluviaDecoration type="vineta1" size="md" animation="pulse" />
                </div>
                <h5 className="font-great-vibes text-xl md:text-2xl font-bold mb-3" style={{ color: 'var(--charra-primary)' }}>Por su hermosa presencia</h5>
                <p className="font-playfair text-sm" style={{ color: 'var(--charra-secondary)' }}>
                  Ver a todos nuestros seres queridos reunidos para celebrar a Lluvia Marina 
                  fue el regalo más grande que pudimos recibir.
                </p>
              </div>
              
              <div className="rounded-xl p-6 border-2" style={{ 
                maxWidth: '250px',
                background: 'var(--charra-gradient-background)', 
                borderColor: 'var(--charra-accent)' 
              }}>
                <div className="flex justify-center mb-3">
                  <LluviaDecoration type="rueda2" size="md" animation="pulse" />
                </div>
                <h5 className="font-great-vibes text-xl md:text-2xl font-bold mb-3" style={{ color: 'var(--charra-primary)' }}>Por los momentos capturados</h5>
                <p className="font-playfair text-sm" style={{ color: 'var(--charra-secondary)' }}>
                  Las fotos, los videos, las risas compartidas... cada recuerdo quedó 
                  guardado para siempre en nuestros corazones.
                </p>
              </div>
              
              <div className="rounded-xl p-6 border-2" style={{ 
                maxWidth: '250px',
                background: 'var(--charra-background)', 
                borderColor: 'var(--charra-accent)' 
              }}>
                <div className="flex justify-center mb-3">
                  <LluviaDecoration type="vineta2" size="md" animation="pulse" />
                </div>
                <h5 className="font-great-vibes text-xl md:text-2xl font-bold mb-3" style={{ color: 'var(--charra-primary)' }}>Por la alegría compartida</h5>
                <p className="font-playfair text-sm" style={{ color: 'var(--charra-secondary)' }}>
                  Los juegos, los bailes, la diversión moderna... ¡todos se divirtieron 
                  tanto como nuestra pequeña cumpleañera!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mensaje de los padres */}
        <div className="rounded-2xl p-8 text-white text-center mb-12" style={{ background: 'var(--charra-gradient-primary)' }}>
          <h4 className="font-tangerine text-4xl md:text-5xl font-bold mb-6">💌 Palabras de los padres</h4>
          <div className="max-w-3xl mx-auto">
            <p className="font-playfair text-lg text-pink-100 leading-relaxed mb-6">
              Como padres, vemos en los ojos de {eventData.celebrant?.name || "Lluvia Marina"} la felicidad pura que ustedes 
              le regalaron en este día tan especial. Cada sonrisa, cada momento de asombro, 
              cada &ldquo;¡wow!&rdquo; de emoción... todo fue posible gracias a su amor y presencia.
            </p>
            <div className="bg-white/20 rounded-xl p-6">
              <p className="font-playfair text-pink-100 italic">
                &ldquo;Gracias por ser parte de la historia de nuestra pequeña amazona, 
                por amarla como nosotros la amamos, y por hacer que sus primeros años 
                estén llenos de personas maravillosas como ustedes.&rdquo;
              </p>
              <div className="font-great-vibes mt-4 text-xl">
                ❤️ {eventData.parents?.father || "Papá Charro"} y {eventData.parents?.mother || "Mamá Escaramuza"} ❤️
              </div>
            </div>
          </div>
        </div>

        {/* Hasta la próxima celebración */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-4 border-pink-800/30 text-center">
          <h4 className="font-tangerine text-4xl md:text-5xl font-bold text-pink-800 mb-6">
            ✨ ¡Hasta la próxima celebración! ✨
          </h4>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-pink-50 rounded-lg p-4">
              <div className="flex justify-center mb-2">
                <LluviaDecoration type="rueda1" size="md" animation="bounce" />
              </div>
              <h5 className="font-great-vibes font-bold text-pink-800">Los 4 años</h5>
              <p className="font-playfair text-sm text-pink-700">¡Nos vemos el próximo año!</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex justify-center mb-2">
                <LluviaDecoration type="vineta1" size="md" animation="bounce" />
              </div>
              <h5 className="font-great-vibes font-bold text-green-800">Siempre unidos</h5>
              <p className="font-playfair text-sm text-green-700">¡La familia Marmolejo Quintanar crece!</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex justify-center mb-2">
                <LluviaDecoration type="rueda2" size="md" animation="bounce" />
              </div>
              <h5 className="font-great-vibes font-bold text-purple-800">Con todo nuestro amor</h5>
              <p className="font-playfair text-sm text-purple-700">¡Gracias por todo!</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl p-6">
            <p className="font-playfair text-xl font-bold text-pink-800 mb-2">
              🐎 &ldquo;En la elegante tradición de Lluvia Marina, 
            </p>
            <p className="font-playfair text-xl font-bold text-pink-800">
              los amigos como ustedes son tesoros para toda la vida&rdquo; ✨
            </p>
          </div>
        </div>

       

        
      </div>
    </section>
  )
}
