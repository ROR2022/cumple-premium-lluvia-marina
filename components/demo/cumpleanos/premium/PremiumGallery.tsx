"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react'

interface GalleryCategory {
  name: string
  images: string[]
}

interface PremiumGalleryProps {
  data?: {
    gallery?: {
      title: string
      description: string
      categories: GalleryCategory[]
    }
  }
}

export function PremiumGallery({ data }: PremiumGalleryProps) {
  // Datos de respaldo en caso de que no se proporcionen props
  const fallbackGallery = {
    title: "Galería de la Pequeña Jinete",
    description: "Momentos especiales de nuestra celebración ecuestre elegante",
    categories: [
      {
        name: "Tradición",
        images: [
          "/images/cumple/vaqueros/galeria1.jpg",
          "/images/cumple/vaqueros/cuenta1.png", 
          "/images/cumple/vaqueros/fondo1.jpg",
          "/images/cumple/vaqueros/music1.png"
        ]
      },
      {
        name: "Celebración",
        images: [
          "/images/cumple/vaqueros/regalos1.png",
          "/images/cumple/vaqueros/ubi1.png",
          "/images/cumple/vaqueros/whats1.jpg",
          "/images/cumple/vaqueros/galeria1.jpg"
        ]
      }
    ]
  }

  const gallery = data?.gallery || fallbackGallery
  
  // Verificar que categories sea un array válido
  if (!gallery.categories || !Array.isArray(gallery.categories)) {
    gallery.categories = fallbackGallery.categories
  }
  const [selectedCategory, setSelectedCategory] = useState(gallery.categories[0])
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeModal = () => {
    setSelectedImageIndex(null)
  }

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % selectedCategory.images.length)
    }
  }

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? selectedCategory.images.length - 1 : selectedImageIndex - 1
      )
    }
  }

  return (
    <section className="charra-bg-hero py-16">
      <div className="container mx-auto px-4">
        {/* Título elegante */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <span className="text-3xl animate-pulse">🌹</span>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              {gallery.title}
            </h2>
            <Camera className="w-8 h-8 text-[var(--charra-magenta)] animate-bounce" />
          </div>
          <p className="text-xl text-[var(--charra-blush)] max-w-2xl mx-auto font-medium">
            {gallery.description}
          </p>
        </div>

        {/* Selector de categorías elegante */}
        <div className="flex justify-center mb-8">
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-2 shadow-2xl border border-[var(--charra-magenta)]/30 charra-shadow-primary">
            {gallery.categories.map((category: GalleryCategory, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 mx-1 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory.name === category.name
                    ? 'charra-bg-primary text-white shadow-lg charra-glow-primary'
                    : 'text-[var(--charra-blush)] hover:bg-[var(--charra-magenta)]/20'
                }`}
              >
                {category.name === 'Tradición' ? '🏇' : '🌹'} {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de imágenes elegante */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {selectedCategory.images.map((image: string, index: number) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl transform hover:scale-105 transition-all duration-300 border border-[var(--charra-magenta)]/20 hover:border-[var(--charra-magenta)]/60 charra-shadow-primary"
              onClick={() => openModal(index)}
            >
              <Image
                src={image}
                alt={`${selectedCategory.name} ${index + 1}`}
                width={300}
                height={200}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay elegante */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-sm">
                    {selectedCategory.name} #{index + 1}
                  </p>
                </div>
                
                {/* Icono de zoom */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-[var(--charra-magenta)]/40 backdrop-blur-sm rounded-full flex items-center justify-center charra-glow-primary">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Efectos elegantes */}
              <div className="absolute top-2 right-2 text-[var(--charra-magenta)] animate-pulse">
                🌹
              </div>
            </div>
          ))}
        </div>

        {/* Información adicional elegante */}
        <div className="mt-12 text-center">
          <div className="charra-bg-secondary rounded-2xl p-8 text-white max-w-3xl mx-auto charra-shadow-primary">
            <h3 className="text-2xl font-black mb-4 flex items-center justify-center text-[var(--charra-magenta)]">
              <span className="text-3xl mr-3">📸</span>
              ¡Momentos Inolvidables de Lluvia Marina!
            </h3>
            <p className="text-lg mb-4 text-[var(--charra-blush)]">
              Cada recuerdo especial de nuestra celebración ecuestre elegante
            </p>
            <div className="flex justify-center space-x-4 text-2xl">
              🌹 🏇 � ✨ 🌟
            </div>
          </div>
        </div>
      </div>

      {/* Modal de imagen */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-[var(--charra-magenta)]/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[var(--charra-magenta)]/60 transition-colors charra-glow-primary"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navegación anterior */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-[var(--charra-emerald)]/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[var(--charra-emerald)]/60 transition-colors charra-glow-secondary"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Navegación siguiente */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-[var(--charra-emerald)]/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[var(--charra-emerald)]/60 transition-colors charra-glow-secondary"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Imagen principal */}
            <Image
              src={selectedCategory.images[selectedImageIndex]}
              alt={`${selectedCategory.name} ${selectedImageIndex + 1}`}
              width={800}
              height={600}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg border border-[var(--charra-magenta)]/30 charra-shadow-primary"
            />

            {/* Información de la imagen */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white border border-[var(--charra-magenta)]/30">
              <p className="font-bold text-lg text-[var(--charra-magenta)]">
                {selectedCategory.name} - Imagen {selectedImageIndex + 1} de {selectedCategory.images.length}
              </p>
              <p className="text-sm opacity-80 text-[var(--charra-blush)]">
                Momentos elegantes de la tradición ecuestre
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
