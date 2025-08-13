"use client"

import { useEffect, useRef, useMemo } from "react"
import { useMusicContext } from "@/context/music-context"

interface PremiumMusicPlayerProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
}

export function PremiumMusicPlayer({ data }: PremiumMusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const { isPlaying, setIsPlaying, togglePlay, isClient } = useMusicContext()

  // Usar datos de escaramuza o fallback
  const musicData = useMemo(() => data?.music || {
    title: "Serenata para la Pequeña Jinete",
    tracks: [
      {
        name: "Vals de las Rosas",
        artist: "Mariachi Infantil de Lluvia Marina",
        file: "/music/feel-good1.mp3"
      }
    ]
  }, [data?.music])

  // Inicializar audio y event listeners solo en cliente
  useEffect(() => {
    if (!isClient) return

    // Usar la primera canción de la lista de escaramuza
    const firstTrack = musicData.tracks[0]?.file || "/music/feel-good1.mp3"
    audioRef.current = new Audio(firstTrack)
    audioRef.current.loop = true

    const handleUserInteraction = () => {
      if (audioRef.current && !audioRef.current.paused) return

      audioRef.current
        ?.play()
        .then(() => {
          setIsPlaying(true)
          console.log("🌹 Música elegante iniciada correctamente:", firstTrack)
        })
        .catch((error) => {
          console.error("❌ Error playing elegant audio:", error)
        })

      // Remove event listeners after first interaction
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("touchstart", handleUserInteraction)
    }

    // Auto-iniciar música está deshabilitado por defecto
    // if (autoplay) {
    //   document.addEventListener("click", handleUserInteraction)
    //   document.addEventListener("touchstart", handleUserInteraction)
    // }

    return () => {
      audioRef.current?.pause()
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("touchstart", handleUserInteraction)
    }
  }, [setIsPlaying, isClient, musicData])

  // Control de reproducción solo en cliente
  useEffect(() => {
    if (!isClient || !audioRef.current) return

    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error("❌ Error playing elegant audio:", error)
        setIsPlaying(false) // Reset state if play fails
      })
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying, isClient, setIsPlaying])

  // Para simplificar, asumimos que si está reproduciendo es el track elegante
  const isElegantTrack = isPlaying

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Controles de música flotantes */}
      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border charra-border-primary">
        <button
          onClick={togglePlay}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            isPlaying && isElegantTrack
              ? 'charra-bg-primary text-white'
              : 'bg-[var(--charra-blush)] charra-text-primary hover:bg-[var(--charra-magenta)]/20'
          }`}
          title={isPlaying && isElegantTrack ? 'Pausar serenata elegante' : 'Reproducir serenata elegante'}
        >
          {isPlaying && isElegantTrack ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Indicador de música activa */}
      {isPlaying && isElegantTrack && (
        <div className="absolute -top-2 -right-2 w-4 h-4 charra-bg-primary rounded-full animate-pulse"></div>
      )}
      
      {/* Tooltip informativo */}
      {isPlaying && isElegantTrack && (
        <div className="absolute bottom-16 right-0 bg-[var(--charra-burgundy)] text-white px-3 py-1 rounded-lg text-xs whitespace-nowrap">
          🌹 Serenata Elegante - Lluvia Marina
        </div>
      )}
    </div>
  )
}
