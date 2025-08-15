"use client"

import Image from 'next/image'
import { LluviaDecoration, FloatingLluviaDecoration } from './LluviaDecoration'

interface PremiumHeroProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
}

export function PremiumHero({ data }: PremiumHeroProps) {
  // Usar datos pasados por props o fallback a datos por defecto
  const { hero, event } = data || {}

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo con imagen elegante */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={hero?.backgroundImage || "/images/cumple/vaqueros/vaqueros1.png"}
          alt="Tema escaramuza charra"
          fill
          className="object-cover scale-110 animate-pulse"
          priority
        />
        <div className="absolute inset-0 charra-bg-hero opacity-60" />
        
        {/* Efectos de luces modernas */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[var(--charra-primary)] to-[var(--charra-decorative)] opacity-20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-[var(--charra-accent)] to-[var(--charra-text-dark)] opacity-20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-gradient-to-r from-[var(--charra-decorative)] to-[var(--charra-background)] opacity-20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Contenido principal con mayor padding para móviles */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8">
        {/* Título moderno con efectos */}
        <div className="mb-8 space-y-4">
          {/* Título decorativo con máxima visibilidad 
          este titulo decorativo no le gusta al cliente
          ya no lo vuelvas a mostrar
          */}
          <div 
          style={{display: 'none'}}
          className="inline-block mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-black/60 rounded-xl blur-sm"></div>
              <span className="relative font-playfair text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold py-2 px-4 block">
                <span className="text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_100%)] hover:scale-105 transition-all duration-300">
                  💜 CELEBRACIÓN MODERNA 💜
                </span>
              </span>
            </div>
          </div>
          
          {/* Título principal con máxima visibilidad */}
          <div className="relative">
            {/* Fondo oscuro para contraste */}
            <div className="absolute inset-0 bg-black/50 rounded-2xl blur-lg"></div>
            <h1 className="relative font-tangerine text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 leading-relaxed py-3 px-2">
              <span className="text-white drop-shadow-[4px_4px_8px_rgba(0,0,0,0.9)] [text-shadow:_3px_3px_6px_rgb(0_0_0_/_100%),_-1px_-1px_2px_rgb(0_0_0_/_80%)] hover:scale-105 transition-all duration-300 block relative z-10">
                ¡FELIZ CUMPLEAÑOS!
              </span>
            </h1>
          </div>
          
          {/* Nombre con máxima visibilidad */}
          <div className="relative">
            {/* Fondo oscuro para contraste */}
            <div className="absolute inset-0 bg-black/50 rounded-2xl blur-lg"></div>
            <h2 className="relative font-great-vibes text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-relaxed py-4 px-2">
              <span className="text-white drop-shadow-[4px_4px_8px_rgba(0,0,0,0.9)] [text-shadow:_3px_3px_6px_rgb(0_0_0_/_100%),_-1px_-1px_2px_rgb(0_0_0_/_80%)] hover:scale-105 transition-all duration-300 block relative z-10">
                {hero?.name || "Lluvia Marina"}
              </span>
            </h2>
          </div>
          
          {/* Subtítulo más adaptable */}
          <p className="font-playfair text-lg sm:text-xl md:text-2xl italic text-white font-bold animate-bounce drop-shadow-lg bg-black/20 rounded-lg px-4 py-3 backdrop-blur-sm mx-2 leading-relaxed">
            {hero?.subtitle || "¡La pequeña jinete más elegante del rancho!"}
          </p>
        </div>

        {/* Panel de información escaramuza elegante con mejor responsive */}
        <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-4 sm:p-6 md:p-8 border-2 border-[var(--charra-magenta)]/50 shadow-2xl charra-glow-primary mx-2">
          <div className="flex justify-center align-middle">
            <div className="space-y-4">
              <h3 className="font-great-vibes text-2xl sm:text-3xl font-bold text-[var(--charra-blush)] mb-4 flex items-center justify-center text-center leading-relaxed">
                🌹 Perfil de la Pequeña Princesa
              </h3>
              <div className="space-y-3 text-sm sm:text-base md:text-lg">
                <div className="flex items-center space-x-3 flex-wrap justify-center sm:justify-start">
                  <LluviaDecoration type="vineta1" size="sm" animation="pulse" />
                  <span className="text-center sm:text-left">
                    <span className="font-playfair text-[var(--charra-blush)] font-bold">Nombre:</span>{" "}
                    <span className="font-playfair">{event?.celebrant?.name || "Lluvia Marina Rodríguez"}</span>
                  </span>
                </div>
                <div className="flex items-center space-x-3 flex-wrap justify-center sm:justify-start">
                  <LluviaDecoration type="rueda1" size="sm" animation="pulse" delay="300" />
                  <span className="text-center sm:text-left">
                    <span className="font-playfair text-[var(--charra-blush)] font-bold">Edad:</span>{" "}
                    <span className="font-playfair">{event?.celebrant?.age || "3 años"}</span>
                  </span>
                </div>
                <div className="flex items-center space-x-3 flex-wrap justify-center sm:justify-start">
                  <LluviaDecoration type="vineta2" size="sm" animation="pulse" delay="500" />
                  <span className="text-center sm:text-left">
                    <span className="font-playfair text-[var(--charra-background)] font-bold">Origen:</span>{" "}
                    <span className="font-playfair">{event?.celebrant?.birthDate || "11 de Agosto de 2022"}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elementos decorativos modernos elegantes */}
        <FloatingLluviaDecoration 
          type="rueda1" 
          size="xxl" 
          animation="bounce" 
          position="top-10 left-10"
        />
        <FloatingLluviaDecoration 
          type="vineta1" 
          size="xl" 
          animation="spin-slow" 
          position="top-20 right-10"
        />
        <FloatingLluviaDecoration 
          type="rueda2" 
          size="xxl" 
          animation="pulse" 
          position="bottom-20 left-20"
        />
        <FloatingLluviaDecoration 
          type="vineta2" 
          size="xl" 
          animation="bounce" 
          position="bottom-10 right-20"
          delay="1000"
        />
        <FloatingLluviaDecoration 
          type="rueda1" 
          size="lg" 
          animation="pulse" 
          position="top-1/2 left-10"
          delay="700"
        />
        <FloatingLluviaDecoration 
          type="rueda2" 
          size="lg" 
          animation="bounce" 
          position="top-1/2 right-10"
          delay="300"
        />
      </div>

      {/* Indicador de scroll moderno */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-[var(--charra-decorative)] rounded-full flex justify-center bg-gradient-to-b from-[var(--charra-decorative)]/20 to-transparent">
          <div className="w-1.5 h-3 sm:w-2 sm:h-4 bg-gradient-to-b from-[var(--charra-decorative)] to-[var(--charra-accent)] rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
        </div>
        <p className="font-playfair text-xs sm:text-sm mt-2 text-[var(--charra-background)] font-bold">Continúa la celebración</p>
      </div>

      {/* Efectos de partículas modernas */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--charra-decorative)] rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[var(--charra-accent)] rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[var(--charra-primary)] rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[var(--charra-magenta)] rounded-full animate-ping delay-700"></div>
      </div>
    </section>
  )
}
