"use client";

import { useState, useEffect } from "react";

interface BasicCountdownProps {
  data?: {
    countdown?: {
      targetDate: string;
      backgroundImage: string;
    };
  };
}

export function BasicCountdown({ data }: BasicCountdownProps) {
  // Datos de respaldo en caso de que no se proporcionen props
  const fallbackCountdown = {
    targetDate: "2025-12-25T15:00:00",
    backgroundImage: "/images/custom/lluvia_horse1_sinfondo1.png",
  };

  const countdown = data?.countdown || fallbackCountdown;

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(countdown.targetDate).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown.targetDate]);

  return (
    <section className="py-16 px-4 relative overflow-hidden min-h-screen">
      {/* Capa 1: Background sólido de fallback */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900"
        style={{ zIndex: -3 }}
      />
      
      {/* Capa 2: Imagen de fondo del usuario 
      la imagen del usuario es:
      /images/custom/lluvia_horse1_sinfondo1.png
      no la cambies xfavor 
      esto es lo mas importante
      */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/custom/lluvia_horse1_sinfondo1.png')`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          
          zIndex: 10
        }}
      />
      
      {/* Capa 3: Overlay gradient más suave para mostrar la imagen */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))",
          zIndex: -1
        }}
      />

      {/* Efectos de fondo elegantes */}
      <div className="absolute inset-0 opacity-30" style={{ zIndex: 1 }}>
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-pulse">
          🌹
        </div>
        <div className="absolute top-20 right-16 text-4xl opacity-30 animate-bounce">
          💎
        </div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-25 animate-pulse delay-1000">
          🏇
        </div>
        <div className="absolute bottom-10 right-10 text-4xl opacity-20 animate-bounce delay-500">
          ✨
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Título elegante */}
        <div className="mb-12 px-2">
          <h2 className="font-tangerine drop-shadow-[4px_4px_8px_rgba(0,0,0,0.9)] [text-shadow:_3px_3px_6px_rgb(0_0_0_/_100%),_-1px_-1px_2px_rgb(0_0_0_/_80%)] text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            🕐 ¡CUENTA REGRESIVA!
          </h2>
          <p className="font-great-vibes drop-shadow-[4px_4px_8px_rgba(0,0,0,0.9)] [text-shadow:_3px_3px_6px_rgb(0_0_0_/_100%),_-1px_-1px_2px_rgb(0_0_0_/_80%)] text-xl xs:text-2xl sm:text-2xl md:text-3xl text-[var(--charra-blush)] font-bold leading-relaxed px-2">
            ¡Prepárate para una celebración llena de momentos inolvidables!
          </p>
        </div>

        {/* Contador elegante */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 px-2">
          {[
            { value: timeLeft.days, label: "Días", icon: "📅" },
            { value: timeLeft.hours, label: "Horas", icon: "🕐" },
            { value: timeLeft.minutes, label: "Minutos", icon: "⏰" },
            { value: timeLeft.seconds, label: "Segundos", icon: "💎" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-black/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-[var(--charra-magenta)]/30 shadow-2xl transform hover:scale-105 transition-all duration-300 charra-shadow-primary"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2">{item.icon}</div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 leading-tight">
                {item.value.toString().padStart(2, "0")}
              </div>
              <div className="font-playfair text-[var(--charra-blush)] font-bold text-sm sm:text-base md:text-lg leading-tight">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje elegante motivacional */}
        <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[var(--charra-magenta)]/30 charra-shadow-primary mx-2">
          <p className="font-great-vibes text-2xl xs:text-3xl sm:text-3xl md:text-4xl text-[var(--charra-magenta)] font-bold mb-4 leading-relaxed">
            🌹 ¡La pequeña princesa celebra su día especial! 🏇
          </p>
          <p className="font-playfair text-lg sm:text-xl text-[var(--charra-blush)] leading-relaxed">
            Prepárate para una celebración llena de tradición y momentos
            inolvidables
          </p>
        </div>
      </div>
    </section>
  );
}
