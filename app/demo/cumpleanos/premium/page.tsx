"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Star } from 'lucide-react'
import { PremiumHero } from '@/components/demo/cumpleanos/premium/PremiumHero'
import { PremiumInfo } from '@/components/demo/cumpleanos/premium/PremiumInfo'
import { PremiumGallery } from '@/components/demo/cumpleanos/premium/PremiumGallery'
import { PremiumMusicPlayer } from '@/components/demo/cumpleanos/premium/PremiumMusicPlayer'
import { premiumDemoData } from '@/components/demo/cumpleanos/premium/data/premium-demo-data'
import { useState } from 'react'
import { ContactModal } from '@/components/landing/ContactModal'

export default function PremiumCumpleanosDemoPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleModalContact = () => {
    setIsContactModalOpen(true)
  }

  return (
    <main className="min-h-screen">
      {/* Hero western */}
      <PremiumHero />
      
      {/* Información del evento */}
      <PremiumInfo />
      
      {/* Galería premium */}
      <PremiumGallery />
      
      {/* Reproductor de música */}
      <PremiumMusicPlayer />
      
      {/* Cronograma del evento */}
      {/* <PremiumTimeline /> */}
      
      {/* Call to Action final */}
      <section className="py-16 bg-gradient-to-br from-amber-600 via-orange-600 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              ¿Te gusta este diseño western? �
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-amber-100">
              Perfecto para celebraciones épicas del Viejo Oeste
            </p>
            
            {/* Características incluidas */}
            <div className="grid md:grid-cols-2 gap-6 mb-10 text-left max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-xl mb-4 flex items-center">
                  <Check className="w-6 h-6 mr-2 text-green-300" />
                  ✅ Incluido en el Paquete Premium:
                </h3>
                <ul className="space-y-2 text-amber-100">
                  {premiumDemoData.demo.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-amber-300 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-xl mb-4 flex items-center">
                  <Star className="w-6 h-6 mr-2 text-yellow-300" />
                  � Personalización Western:
                </h3>
                <ul className="space-y-2 text-orange-100">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                    Cambiar nombre del sheriff
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-300 rounded-full mr-3"></span>
                    Personalizar rancho western
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-300 rounded-full mr-3"></span>
                    Adaptar aventuras vaqueras
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                    Agregar fotos propias a la galería
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-300 rounded-full mr-3"></span>
                    Personalizar música western
                  </li>
                </ul>
              </div>
            </div>

            {/* Comparación con básico */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/10">
              <h3 className="font-bold text-lg mb-4 text-yellow-300">
                🤠 ¿Por qué elegir Premium sobre Básico?
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-amber-200">
                  <span className="font-bold">🖼️ Galería:</span> Fotos organizadas por aventuras
                </div>
                <div className="text-orange-200">
                  <span className="font-bold">🎵 Música:</span> 3 tracks western incluidos
                </div>
                <div className="text-yellow-200">
                  <span className="font-bold">✨ Efectos:</span> Animaciones y efectos avanzados
                </div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleModalContact}
                size="lg"
                className="bg-white text-amber-600 hover:bg-amber-50 font-black px-8 py-4 text-lg shadow-xl"
              >
                Contratar Paquete Premium - $499
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Link href="/catalog">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 font-medium px-6 py-4"
                >
                  Ver Otros Diseños
                </Button>
              </Link>
            </div>

            {/* Información adicional */}
            <div className="mt-8 text-amber-100 text-sm">
              <p>💬 WhatsApp: +52 777 793 7484 • ⏱️ Entrega en 24-48 horas • 🎵 Música incluida</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de contacto */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </main>
  )
}
