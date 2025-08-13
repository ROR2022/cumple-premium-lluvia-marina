"use client"

import { MapPin, Clock, Users, Shirt, AlertCircle, Star, Crown } from 'lucide-react'

interface PremiumInfoProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
}

export function PremiumInfo({ data }: PremiumInfoProps) {
  // Usar datos pasados por props o fallback a datos por defecto
  const eventData = data?.event || {
    ceremony: {
      date: "Sábado 11 de Enero, 2025",
      time: "2:00 PM - Ceremonia de Bienvenida",
      location: "Hacienda de las Rosas",
      address: "Camino de las Flores Km 12, Valle Encantado"
    },
    celebration: {
      date: "Sábado 11 de Enero, 2025", 
      time: "3:00 PM - Celebración Elegante",
      location: "Salón de Gala Esmeralda",
      address: "Jardines de la Hacienda, Sector Elegante"
    },
    parents: {
      father: "Roberto Rodríguez",
      mother: "Carmen Marina López"
    },
    padrinos: {
      padrino: "Miguel Ángel Torres",
      madrina: "Ana Isabel Martínez"
    },
    dressCode: "Vestidos elegantes con vuelo, faldas coloridas, accesorios florales y zapatos cómodos. Inspiración escaramuza charra adaptada para niños.",
    restrictions: "Ambiente familiar - ropa cómoda recomendada para actividades ecuestres de los pequeños"
  }

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 relative overflow-hidden">
      {/* Efectos de fondo escaramuza */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-rose-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Título escaramuza elegante */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <Crown className="w-8 h-8 text-pink-600 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-black text-pink-800">
              🌹 Información de la Celebración
            </h2>
            <Star className="w-8 h-8 text-purple-600 animate-bounce" />
          </div>
          <p className="text-xl text-pink-700 max-w-2xl mx-auto font-medium">
            Todo lo que necesitas saber para unirte a la celebración de nuestra pequeña Lluvia Marina
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de la ceremonia escaramuza */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-l-4 border-pink-500 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-pink-800 mb-6 flex items-center">
              🌹 Ceremonia de Bienvenida
              <div className="ml-2 w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0 animate-pulse" />
                <div>
                  <p className="font-semibold text-gray-800">Presentación como Pequeña Jinete</p>
                  <p className="text-gray-600">{eventData.ceremony.date}</p>
                  <p className="text-pink-700 font-medium">{eventData.ceremony.time}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0 animate-bounce" />
                <div>
                  <p className="font-semibold text-gray-800">{eventData.ceremony.location}</p>
                  <p className="text-gray-600">{eventData.ceremony.address}</p>
                  <div className="mt-2 inline-flex items-center space-x-2 bg-pink-100 rounded-lg px-3 py-1">
                    <Star className="w-4 h-4 text-pink-600" />
                    <span className="text-sm text-pink-700 font-medium">Jardín de Rosas Elegante</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Información de la celebración escaramuza */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-l-4 border-purple-500 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
              ✨ Fiesta 
              <div className="ml-2 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-300"></div>
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0 animate-pulse" />
                <div>
                  <p className="font-semibold text-gray-800">Gran Celebración</p>
                  <p className="text-gray-600">{eventData.celebration.date}</p>
                  <p className="text-purple-700 font-medium">{eventData.celebration.time}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0 animate-bounce" />
                <div>
                  <p className="font-semibold text-gray-800">{eventData.celebration.location}</p>
                  <p className="text-gray-600">{eventData.celebration.address}</p>
                  <div className="mt-2 inline-flex items-center space-x-2 bg-purple-100 rounded-lg px-3 py-1">
                    <Crown className="w-4 h-4 text-purple-600" />
                    <span className="text-sm text-purple-700 font-medium">Salón de Gala Elegante</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Información de la familia escaramuza */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-l-4 border-rose-500 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-rose-800 mb-6 flex items-center">
              👨‍👩‍👦 Familia
              <div className="ml-2 w-3 h-3 bg-rose-500 rounded-full animate-pulse delay-500"></div>
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0 animate-pulse" />
                <div>
                  <p className="font-semibold text-gray-800">Organizadores de la Celebración</p>
                  <div className="space-y-1">
                    <p className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                      {eventData.parents.father}
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                      {eventData.parents.mother}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Crown className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0 animate-bounce" />
                <div>
                  <p className="font-semibold text-gray-800">Padrinos de Honor</p>
                  <div className="space-y-1">
                    <p className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-rose-400 rounded-full mr-2"></span>
                      {eventData.padrinos.padrino}
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                      {eventData.padrinos.madrina}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Código de vestimenta escaramuza */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-l-4 border-pink-500 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-pink-800 mb-6 flex items-center">
              � Protocolo
              <div className="ml-2 w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-700"></div>
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Shirt className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0 animate-pulse" />
                <div>
                  <p className="font-semibold text-gray-800">Vestimenta</p>
                  <p className="text-gray-600">{eventData.dressCode}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded-lg text-xs font-medium">🌹 Vestidos Elegantes</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-lg text-xs font-medium">� Accesorios Florales</span>
                    <span className="bg-rose-100 text-rose-700 px-2 py-1 rounded-lg text-xs font-medium">✨ Zapatos Cómodos</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0 animate-bounce" />
                <div>
                  <p className="font-semibold text-gray-800">Reglas de la Hacienda</p>
                  <p className="text-gray-600">{eventData.restrictions}</p>
                  <div className="mt-2 bg-pink-50 border-l-4 border-pink-400 p-3 rounded">
                    <p className="text-sm text-pink-700">
                      ✨ Ambiente familiar, diversión garantizada para todas las pequeñas jinetes y amazonas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action escaramuza */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 rounded-3xl p-8 text-white max-w-4xl mx-auto relative overflow-hidden">
            {/* Efectos de fondo escaramuza */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-4 left-4 text-pink-200 text-2xl animate-ping">🌹</div>
              <div className="absolute top-6 right-8 text-purple-200 text-xl animate-bounce">🐎</div>
              <div className="absolute bottom-4 left-8 text-rose-200 text-2xl animate-pulse">✨</div>
              <div className="absolute bottom-6 right-4 text-pink-200 text-xl animate-spin-slow">💐</div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4 flex items-center justify-center">
                <span className="text-4xl mr-3">🐎</span>
                ¡Únete a la Celebración de Lluvia Marina!
                <span className="text-4xl ml-3">🌹</span>
              </h3>
              <p className="text-xl mb-6">
                Una celebración llena de tradición y diversión.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center">
                    <Crown className="w-5 h-5 mr-2" />
                    Actividades incluidas:
                  </h4>
                  <ul className="space-y-1 text-pink-100">
                    <li>• Búsqueda del tesoro floral</li>
                    <li>• Juegos de pequeñas jinetes</li>
                    <li>• Danza escaramuza infantil</li>
                    <li>• Ceremonia de presentación</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center">
                    <Star className="w-5 h-5 mr-2" />
                    Experiencias especiales:
                  </h4>
                  <ul className="space-y-1 text-purple-100">
                    <li>• Decoración floral mágica</li>
                    <li>• Pastel temático elegante</li>
                    <li>• Sesión de fotos ecuestres</li>
                    <li>• Regalos sorpresa especiales</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}