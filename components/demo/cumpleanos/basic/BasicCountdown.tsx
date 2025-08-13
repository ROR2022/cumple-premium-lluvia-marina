"use client"

import { useState, useEffect } from 'react'

interface BasicCountdownProps {
  data?: {
    countdown?: {
      targetDate: string
      backgroundImage: string
    }
  }
}

export function BasicCountdown({ data }: BasicCountdownProps) {
  // Datos de respaldo en caso de que no se proporcionen props
  const fallbackCountdown = {
    targetDate: "2024-12-25T15:00:00",
    backgroundImage: "/images/countdown-bg.jpg"
  }

  const countdown = data?.countdown || fallbackCountdown
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date(countdown.targetDate).getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [countdown.targetDate])

  return (
    <section 
      className="py-16 px-4 relative overflow-hidden charra-bg-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('${countdown.backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Efectos de fondo elegantes */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-pulse">🌹</div>
        <div className="absolute top-20 right-16 text-4xl opacity-30 animate-bounce">💎</div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-25 animate-pulse delay-1000">🏇</div>
        <div className="absolute bottom-10 right-10 text-4xl opacity-20 animate-bounce delay-500">✨</div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Título elegante */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
            🕐 ¡CUENTA REGRESIVA!
          </h2>
          <p className="text-xl md:text-2xl text-[var(--charra-blush)] font-bold">
            ¡Faltan pocos días para la celebración de Lluvia Marina!
          </p>
        </div>

        {/* Contador elegante */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {[
            { value: timeLeft.days, label: 'Días', icon: '�' },
            { value: timeLeft.hours, label: 'Horas', icon: '🕐' },
            { value: timeLeft.minutes, label: 'Minutos', icon: '⏰' },
            { value: timeLeft.seconds, label: 'Segundos', icon: '💎' }
          ].map((item, index) => (
            <div 
              key={index}
              className="charra-bg-secondary rounded-2xl p-6 border border-[var(--charra-magenta)]/30 shadow-2xl transform hover:scale-105 transition-all duration-300 charra-shadow-primary"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="text-[var(--charra-blush)] font-bold text-lg">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje elegante motivacional */}
        <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-[var(--charra-magenta)]/30 charra-shadow-primary">
          <p className="text-2xl md:text-3xl text-[var(--charra-magenta)] font-bold mb-4">
            🌹 ¡La pequeña jinete celebra su día especial! 🏇
          </p>
          <p className="text-lg text-[var(--charra-blush)]">
            Prepárate para una celebración llena de tradición y momentos inolvidables
          </p>
        </div>
      </div>
    </section>
  )
}
