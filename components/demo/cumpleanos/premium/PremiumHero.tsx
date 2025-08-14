"use client"

import Image from 'next/image'

interface PremiumHeroProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
}

export function PremiumHero({ data }: PremiumHeroProps) {
  // Usar datos pasados por props o fallback a datos por defecto
  const { hero, event } = data || {}

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con efecto parallax */}
      <div className="absolute inset-0">
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

      {/* Contenido principal */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        {/* Título moderno con efectos */}
        <div className="mb-8">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[var(--charra-decorative)] via-[var(--charra-accent)] to-[var(--charra-primary)] bg-clip-text text-transparent text-2xl md:text-3xl font-bold animate-pulse">
              💜 CELEBRACIÓN MODERNA 💜
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-4 text-shadow-2xl">
            <span className="bg-gradient-to-r from-[var(--charra-decorative)] via-[var(--charra-accent)] to-[var(--charra-background)] bg-clip-text text-transparent animate-pulse">
              ¡FELIZ CUMPLEAÑOS!
            </span>
          </h1>
          
          <h2 className="text-5xl md:text-7xl font-black mb-4 transform hover:scale-105 transition-transform duration-500">
            <span className="bg-gradient-to-r from-[var(--charra-accent)] to-[var(--charra-decorative)] bg-clip-text text-transparent">
              {hero?.name || "Lluvia Marina"}
            </span>
          </h2>
          
          <p className="text-xl md:text-3xl text-[var(--charra-blush)] font-bold animate-bounce">
            {hero?.subtitle || "¡La pequeña jinete más elegante del rancho!"}
          </p>
        </div>

        {/* Panel de información escaramuza elegante */}
        <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 border-2 border-[var(--charra-magenta)]/50 shadow-2xl charra-glow-primary">
          <div className="flex justify-center align-middle">
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-[var(--charra-blush)] mb-4 flex items-center">
                🌹 Perfil de la Pequeña Princesa
              </h3>
              <div className="space-y-3 text-lg">
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-[var(--charra-magenta)] rounded-full animate-pulse"></span>
                  <span><span className="text-[var(--charra-blush)] font-bold">Nombre:</span> {event?.celebrant?.name || "Lluvia Marina Rodríguez"}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-[var(--charra-emerald)] rounded-full animate-pulse delay-300"></span>
                  <span><span className="text-[var(--charra-blush)] font-bold">Edad:</span> {event?.celebrant?.age || "3 años"}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-[var(--charra-burgundy)] rounded-full animate-pulse delay-500"></span>
                  <span><span className="text-[var(--charra-background)] font-bold">Origen:</span> {event?.celebrant?.birthDate || "11 de Agosto de 2022"}</span>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>

        {/* Elementos decorativos modernos elegantes */}
        <div className="absolute top-10 left-10 text-6xl animate-bounce">
          💜
        </div>
        <div className="absolute top-20 right-10 text-5xl animate-spin-slow">
          💎
        </div>
        <div className="absolute bottom-20 left-20 text-6xl animate-pulse">
          🦄
        </div>
        <div className="absolute bottom-10 right-20 text-5xl animate-bounce delay-1000">
          ✨
        </div>
        <div className="absolute top-1/2 left-10 text-4xl animate-pulse delay-700">
          �
        </div>
        <div className="absolute top-1/2 right-10 text-4xl animate-bounce delay-300">
          �
        </div>
      </div>

      {/* Indicador de scroll moderno */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-8 h-12 border-2 border-[var(--charra-decorative)] rounded-full flex justify-center bg-gradient-to-b from-[var(--charra-decorative)]/20 to-transparent">
          <div className="w-2 h-4 bg-gradient-to-b from-[var(--charra-decorative)] to-[var(--charra-accent)] rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-sm mt-2 text-[var(--charra-background)] font-bold">Continúa la celebración</p>
      </div>

      {/* Efectos de partículas modernas */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[var(--charra-decorative)] rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[var(--charra-accent)] rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[var(--charra-primary)] rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[var(--charra-magenta)] rounded-full animate-ping delay-700"></div>
      </div>
    </section>
  )
}
