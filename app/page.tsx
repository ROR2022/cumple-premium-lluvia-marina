import { MusicProvider } from '@/context/music-context'
import { PremiumHero } from '@/components/demo/cumpleanos/premium/PremiumHero'
import { PremiumInvitation } from '@/components/demo/cumpleanos/premium/PremiumInvitation'
import { PremiumInfo } from '@/components/demo/cumpleanos/premium/PremiumInfo'
import { PremiumMusicPlayer } from '@/components/demo/cumpleanos/premium/PremiumMusicPlayer'
import { BasicCountdown } from '@/components/demo/cumpleanos/basic/BasicCountdown'
//import { PremiumTimeline } from '@/components/demo/cumpleanos/premium/PremiumTimeline'
import { PremiumInvitados } from '@/components/demo/cumpleanos/premium/PremiumInvitados'
import { PremiumGallery } from '@/components/demo/cumpleanos/premium/PremiumGallery'
import { BasicAttendance } from '@/components/demo/cumpleanos/basic/BasicAttendance'
import { BasicGiftOptions } from '@/components/demo/cumpleanos/basic/BasicGiftOptions'
import { PremiumThankYou } from '@/components/demo/cumpleanos/premium/PremiumThankYou'
import { lluviaMariaEscaramuzaData } from '@/components/demo/cumpleanos/premium/data/lluvia-marina-escaramuza-data'


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
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
        <PremiumInvitados data={lluviaMariaEscaramuzaData} />

        {/* Galería premium escaramuza */}
        <PremiumGallery data={lluviaMariaEscaramuzaData} />

        {/* Confirmación de asistencia */}
        <BasicAttendance attendance={lluviaMariaEscaramuzaData.attendance} />

        {/* Opciones de regalo */}
        <BasicGiftOptions gifts={lluviaMariaEscaramuzaData.gifts} />

        {/* Reproductor de música */}
        <PremiumMusicPlayer data={lluviaMariaEscaramuzaData} />

        {/* Mensaje de agradecimiento escaramuza */}
        <PremiumThankYou data={lluviaMariaEscaramuzaData} />
      </MusicProvider>
    </div>
  )
}
