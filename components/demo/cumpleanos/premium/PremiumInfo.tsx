"use client";

import {
  MapPin,
  Clock,
  Users,
  Shirt,
  AlertCircle,
  Star,
  Crown,
} from "lucide-react";
import { LluviaDecoration, FloatingLluviaDecoration } from "./LluviaDecoration";

interface PremiumInfoProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}

export function PremiumInfo({ data }: PremiumInfoProps) {
  // Usar datos pasados por props o fallback a datos por defecto
  const eventData = data?.event || {
    ceremony: {
      date: "Sábado 11 de Enero, 2025",
      time: "2:00 PM - Ceremonia de Bienvenida",
      location: "Hacienda de las Rosas",
      address: "Camino de las Flores Km 12, Valle Encantado",
    },
    celebration: {
      date: "Sábado 11 de Enero, 2025",
      time: "3:00 PM - Celebración Elegante",
      location: "Salón de Gala Esmeralda",
      address: "Jardines de la Hacienda, Sector Elegante",
    },
    parents: {
      father: "Roberto Rodríguez",
      mother: "Carmen Marina López",
    },
    padrinos: {
      padrino: "Miguel Ángel Torres",
      madrina: "Ana Isabel Martínez",
    },
    dressCode:
      "Vestidos elegantes con vuelo, faldas coloridas, accesorios florales y zapatos cómodos. Inspiración escaramuza charra adaptada para niños.",
    restrictions:
      "Ambiente familiar - ropa cómoda recomendada para actividades ecuestres de los pequeños",
  };

  const handleGoMaps = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/images/custom/lluvia_botas_sinfondo1.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Efectos de fondo modernos */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: "var(--charra-primary)" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full blur-2xl animate-pulse delay-1000"
          style={{ backgroundColor: "var(--charra-accent)" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-28 h-28 rounded-full blur-3xl animate-pulse delay-500"
          style={{ backgroundColor: "var(--charra-highlight)" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Título moderno */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <Crown
              className="w-8 h-8 animate-pulse"
              style={{ color: "var(--charra-accent)" }}
            />
            <h2
              className="font-tangerine drop-shadow-[4px_4px_8px_rgba(0,0,0,0.9)] [text-shadow:_3px_3px_6px_rgb(0_0_0_/_100%),_-1px_-1px_2px_rgb(0_0_0_/_80%)] text-5xl md:text-6xl font-bold"
              style={{ color: "var(--charra-primary)" }}
            >
              💜 Información de la Celebración
            </h2>
            <Star
              className="w-8 h-8 animate-bounce"
              style={{ color: "var(--charra-accent)" }}
            />
          </div>
          <p className="font-playfair text-white text-xl max-w-2xl mx-auto font-medium">
            Todo lo que necesitas saber para unirte a la celebración de
            nuestra pequeña Lluvia Marina
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de la ceremonia moderna */}
          <div
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-l-4 transform hover:scale-105 transition-all duration-300"
            style={{ borderLeftColor: "var(--charra-accent)" }}
          >
            <h3
              className="font-great-vibes text-3xl md:text-4xl font-bold mb-6 flex items-center"
              style={{ color: "var(--charra-primary)" }}
            >
              💜 Ceremonia
              <div
                className="ml-2 w-3 h-3 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--charra-accent)" }}
              ></div>
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock
                  className="w-5 h-5 mt-1 flex-shrink-0 animate-pulse"
                  style={{ color: "var(--charra-accent)" }}
                />
                <div>
                  <p className="font-playfair font-semibold text-gray-800">
                    Presentación como Pequeña Princesa
                  </p>
                  <p className="font-playfair text-gray-600">
                    {eventData.ceremony.date}
                  </p>
                  <p
                    className="font-playfair font-medium"
                    style={{ color: "var(--charra-secondary)" }}
                  >
                    {eventData.ceremony.time}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin
                  className="w-5 h-5 mt-1 flex-shrink-0 animate-bounce"
                  style={{ color: "var(--charra-accent)" }}
                />
                <div>
                  <p className="font-playfair font-semibold text-gray-800">
                    {eventData.ceremony.location}
                  </p>
                  <p className="font-playfair text-gray-600">
                    {eventData.ceremony.address}
                  </p>
                  <div
                    onClick={()=>handleGoMaps(eventData.ceremony.locationLink)}
                    className="mt-2 inline-flex items-center space-x-2 rounded-lg px-3 py-1"
                    style={{
                      cursor: 'pointer', 
                      backgroundColor: "var(--charra-background)" }}
                  >
                    <Star
                      className="w-4 h-4"
                      style={{ color: "var(--charra-accent)" }}
                    />
                    <span
                      className="font-playfair text-sm font-medium"
                      style={{ color: "var(--charra-secondary)" }}
                    >
                      Ver en Google Maps
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Información de la celebración moderna */}
          <div
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-l-4 transform hover:scale-105 transition-all duration-300"
            style={{ borderLeftColor: "var(--charra-primary)" }}
          >
            <h3
              className="font-great-vibes text-3xl md:text-4xl font-bold mb-6 flex items-center"
              style={{ color: "var(--charra-primary)" }}
            >
              ✨ Fiesta
              <div
                className="ml-2 w-3 h-3 rounded-full animate-pulse delay-300"
                style={{ backgroundColor: "var(--charra-primary)" }}
              ></div>
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock
                  className="w-5 h-5 mt-1 flex-shrink-0 animate-pulse"
                  style={{ color: "var(--charra-primary)" }}
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    Gran Celebración
                  </p>
                  <p className="text-gray-600">{eventData.celebration.date}</p>
                  <p
                    className="font-medium"
                    style={{ color: "var(--charra-secondary)" }}
                  >
                    {eventData.celebration.time}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin
                  className="w-5 h-5 mt-1 flex-shrink-0 animate-bounce"
                  style={{ color: "var(--charra-primary)" }}
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {eventData.celebration.location}
                  </p>
                  <p className="text-gray-600">
                    {eventData.celebration.address}
                  </p>
                  <div
                  onClick={()=>handleGoMaps(eventData.celebration.locationLink)}
                    className="mt-2 inline-flex items-center space-x-2 rounded-lg px-3 py-1"
                    style={{
                      cursor: 'pointer',
                      backgroundColor: "var(--charra-background)"
                    }}
                  >
                    <Crown
                      className="w-4 h-4"
                      style={{ color: "var(--charra-primary)" }}
                    />
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--charra-secondary)" }}
                    >
                      Ver en Google Maps
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Información de la familia moderna */}
          <div
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-l-4 transform hover:scale-105 transition-all duration-300"
            style={{
              display: "none",
              borderLeftColor: "var(--charra-highlight)",
            }}
          >
            <h3
              className="text-2xl font-bold mb-6 flex items-center"
              style={{ color: "var(--charra-primary)" }}
            >
              👨‍👩‍👦 Familia
              <div
                className="ml-2 w-3 h-3 rounded-full animate-pulse delay-500"
                style={{ backgroundColor: "var(--charra-highlight)" }}
              ></div>
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Users
                  className="w-5 h-5 mt-1 flex-shrink-0 animate-pulse"
                  style={{ color: "var(--charra-highlight)" }}
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    Organizadores de la Celebración
                  </p>
                  <div className="space-y-1">
                    <p className="text-gray-600 flex items-center">
                      <span
                        className="w-2 h-2 rounded-full mr-2"
                        style={{ backgroundColor: "var(--charra-accent)" }}
                      ></span>
                      {eventData.parents.father}
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <span
                        className="w-2 h-2 rounded-full mr-2"
                        style={{ backgroundColor: "var(--charra-primary)" }}
                      ></span>
                      {eventData.parents.mother}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Crown
                  className="w-5 h-5 mt-1 flex-shrink-0 animate-bounce"
                  style={{ color: "var(--charra-highlight)" }}
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    Padrinos de Honor
                  </p>
                  <div className="space-y-1">
                    <p className="text-gray-600 flex items-center">
                      <span
                        className="w-2 h-2 rounded-full mr-2"
                        style={{ backgroundColor: "var(--charra-highlight)" }}
                      ></span>
                      {eventData.padrinos.padrino}
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <span
                        className="w-2 h-2 rounded-full mr-2"
                        style={{ backgroundColor: "var(--charra-accent)" }}
                      ></span>
                      {eventData.padrinos.madrina}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Código de vestimenta escaramuza */}
          <div
            style={{ display: "none" }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-l-4 border-pink-500 transform hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-pink-800 mb-6 flex items-center">
              � Protocolo
              <div className="ml-2 w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-700"></div>
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Shirt
                  className="w-5 h-5 mt-1 flex-shrink-0 animate-pulse"
                  style={{ color: "var(--charra-accent)" }}
                />
                <div>
                  <p className="font-semibold text-gray-800">Vestimenta</p>
                  <p className="text-gray-600">{eventData.dressCode}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded-lg text-xs font-medium">
                      🌹 Vestidos Elegantes
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-lg text-xs font-medium">
                      � Accesorios Florales
                    </span>
                    <span className="bg-rose-100 text-rose-700 px-2 py-1 rounded-lg text-xs font-medium">
                      ✨ Zapatos Cómodos
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0 animate-bounce" />
                <div>
                  <p className="font-semibold text-gray-800">
                    Reglas de la Hacienda
                  </p>
                  <p className="text-gray-600">{eventData.restrictions}</p>
                  <div className="mt-2 bg-pink-50 border-l-4 border-pink-400 p-3 rounded">
                    <p className="text-sm text-pink-700">
                      ✨ Ambiente familiar, diversión garantizada para todas las
                      pequeñas jinetes y amazonas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mensaje especial */}
        <div className="text-center mt-16">
          <div
            className="rounded-xl p-8 border-2"
            style={{
              background: "var(--charra-gradient-background)",
              borderColor: "var(--charra-accent)",
            }}
          >
            <h5
              className="font-great-vibes text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "var(--charra-primary)" }}
            >
              💌 Mensaje especial de la pequeña Lluvia Marina:
            </h5>
            <p
              className="font-playfair text-lg italic leading-relaxed"
              style={{ color: "var(--charra-secondary)" }}
            >
              &ldquo;¡Hola, queridos invitados! � Esta pequeña princesa está muy 
              emocionada de compartir 
              su celebración del tercer año con todos ustedes. 
              ¡Vengan y prepárense para una fiesta llena de diversión! 
              ¡Los esperamos con mucho cariño! ✨🦄&rdquo;
            </p>
          </div>
        </div>

        {/* Call to action moderno */}
        <div style={{ display: "none" }} className="text-center mt-12">
          <div
            className="rounded-3xl p-8 text-white max-w-4xl mx-auto relative overflow-hidden"
            style={{ background: "var(--charra-gradient-primary)" }}
          >
            {/* Efectos de fondo modernos */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <FloatingLluviaDecoration
                type="rueda1"
                size="lg"
                animation="ping"
                position="top-4 left-4"
                opacity="opacity-60"
              />
              <FloatingLluviaDecoration
                type="vineta1"
                size="md"
                animation="bounce"
                position="top-6 right-8"
                opacity="opacity-50"
              />
              <FloatingLluviaDecoration
                type="rueda2"
                size="lg"
                animation="pulse"
                position="bottom-4 left-8"
                opacity="opacity-60"
              />
              <FloatingLluviaDecoration
                type="vineta2"
                size="md"
                animation="spin-slow"
                position="bottom-6 right-4"
                opacity="opacity-50"
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4 flex items-center justify-center">
                <LluviaDecoration
                  type="rueda1"
                  size="lg"
                  animation="bounce"
                  className="mr-3"
                />
                ¡Únete a la Celebración de Lluvia Marina!
                <LluviaDecoration
                  type="vineta1"
                  size="lg"
                  animation="pulse"
                  className="ml-3"
                />
              </h3>
              <p className="text-xl mb-6">
                Una celebración llena de estilo moderno y diversión.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center">
                    <Crown className="w-5 h-5 mr-2" />
                    Actividades incluidas:
                  </h4>
                  <ul className="space-y-1 text-white/90">
                    <li>• Búsqueda del tesoro mágico</li>
                    <li>• Juegos de pequeñas princesas</li>
                    <li>• Danza moderna infantil</li>
                    <li>• Ceremonia de coronación</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center">
                    <Star className="w-5 h-5 mr-2" />
                    Experiencias especiales:
                  </h4>
                  <ul className="space-y-1 text-white/90">
                    <li>• Decoración moderna mágica</li>
                    <li>• Pastel temático contemporáneo</li>
                    <li>• Sesión de fotos estilo princesa</li>
                    <li>• Regalos sorpresa especiales</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
