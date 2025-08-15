import { MusicProvider } from '@/context/music-context'
import { PremiumHero } from '@/components/demo/cumpleanos/premium/PremiumHero'
import { PremiumInvitation } from '@/components/demo/cumpleanos/premium/PremiumInvitation'
import { PremiumInfo } from '@/components/demo/cumpleanos/premium/PremiumInfo'
import { PremiumMusicPlayer } from '@/components/demo/cumpleanos/premium/PremiumMusicPlayer'
import { BasicCountdown } from '@/components/demo/cumpleanos/basic/BasicCountdown'
//import { PremiumTimeline } from '@/components/demo/cumpleanos/premium/PremiumTimeline'
import { PremiumGallery } from '@/components/demo/cumpleanos/premium/PremiumGallery'
import { BasicAttendance } from '@/components/demo/cumpleanos/basic/BasicAttendance'
import { PremiumThankYou } from '@/components/demo/cumpleanos/premium/PremiumThankYou'
import { lluviaMariaEscaramuzaData } from '@/components/demo/cumpleanos/premium/data/lluvia-marina-escaramuza-data'
import { Heart } from 'lucide-react'
import { FloatingLluviaDecoration } from '@/components/demo/cumpleanos/premium/LluviaDecoration'
import { premiumDemoData } from '@/components/demo/cumpleanos/premium/data/premium-demo-data'


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <MusicProvider>
        {/* Hero escaramuza charra */}
        <PremiumHero data={lluviaMariaEscaramuzaData} />

        {/* Invitación premium escaramuza */}
        <PremiumInvitation data={lluviaMariaEscaramuzaData} />

        {/* Información del evento */}
        <PremiumInfo data={lluviaMariaEscaramuzaData} />
        
        {/* Cuenta regresiva elegante */}
        <BasicCountdown data={lluviaMariaEscaramuzaData} />
        
        {/* Cronograma escaramuza elegante */}
        {/* <PremiumTimeline data={lluviaMariaEscaramuzaData} /> */}

        {/* Lista de invitados escaramuza */}
        {/* <PremiumInvitados data={lluviaMariaEscaramuzaData} /> */}

        {/* Galería premium escaramuza */}
        <PremiumGallery data={lluviaMariaEscaramuzaData} />

        

        {/* Opciones de regalo */}
        {/* <BasicGiftOptions gifts={lluviaMariaEscaramuzaData.gifts} /> */}

        {/* Reproductor de música */}
        <PremiumMusicPlayer data={lluviaMariaEscaramuzaData} />

        {/* Mensaje de agradecimiento escaramuza */}
        <PremiumThankYou data={lluviaMariaEscaramuzaData} />

        {/* Confirmación de asistencia */}
        <BasicAttendance attendance={lluviaMariaEscaramuzaData.attendance} />

         {/* CTA - Sección de llamada a la acción premium */}
        <div className="mt-8 relative overflow-hidden bg-pink-500 bg-opacity-45 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl">
          {/* Efectos de fondo decorativos */}
          <div className="absolute inset-0 opacity-10">
            <FloatingLluviaDecoration 
              type="rueda1" 
              size="xxl" 
              animation="pulse" 
              position="top-4 right-4"
              opacity="opacity-20"
            />
            <FloatingLluviaDecoration 
              type="vineta2" 
              size="xl" 
              animation="bounce" 
              position="bottom-4 left-4"
              opacity="opacity-30"
            />
            <FloatingLluviaDecoration 
              type="rueda2" 
              size="xxl" 
              animation="pulse" 
              position="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              opacity="opacity-10"
            />
          </div>
          
          {/* Contenido principal */}
          <div className="relative z-10 text-center text-white">
            {/* Icono principal */}
            <div 
            style={{display:'none'}}
            className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border-2 border-white/30">
                <Heart className="w-8 h-8 text-pink-100" />
              </div>
            </div>
            
            {/* Título principal */}
            <h3 className="font-normal text-xl md:text-xl  mb-4 text-pink-50">
              {premiumDemoData.thankYou.footer.cta.question}
            </h3>
            
            {/* Descripción */}
            <p className="font-playfair text-normal mb-8 text-pink-100 leading-relaxed max-w-2xl mx-auto">
              {premiumDemoData.thankYou.footer.cta.action}
            </p>
            
            {/* Botón CTA principal */}
            <div className="space-y-4">
              <a
                href={premiumDemoData.thankYou.footer.cta.link}
                className="group inline-flex items-center gap-3 bg-white text-pink-300 px-8 py-4 rounded-2xl font-bold text-sm shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-pink-50"
              >
                <span>{premiumDemoData.thankYou.footer.cta.linkText}</span>
                <Heart className="w-5 h-5 group-hover:animate-pulse" />
              </a>
              
              
            </div>
          </div>
          
          {/* Brillo decorativo animado */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </MusicProvider>
    </div>
  )
}
