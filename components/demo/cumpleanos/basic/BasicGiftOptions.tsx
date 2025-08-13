"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Copy, Check } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

/* interface GiftOption {
  icon: string
  title: string
  description: string
  details: string
} */

interface BasicGiftOptionsProps {
  gifts: {
    title: string;
    message: string;
    options: Array<{
      icon: string;
      title: string;
      description: string;
      details: string;
    }>;
  };
}

export function BasicGiftOptions({ gifts }: BasicGiftOptionsProps) {
  const { toast } = useToast()
  const [copiedStates, setCopiedStates] = useState<{ [key: number]: boolean }>({})

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedStates(prev => ({ ...prev, [index]: true }))
      
      toast({
        title: "¡Copiado al portapapeles!",
        description: "La información ha sido copiada exitosamente",
        duration: 2000,
      })

      // Reset estado después de 2 segundos
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [index]: false }))
      }, 2000)
    } catch {
      toast({
        title: "Error al copiar",
        description: "No se pudo copiar la información",
        variant: "destructive",
        duration: 2000,
      })
    }
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado elegante */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <span className="text-4xl animate-bounce">🎁</span>
            <h2 className="text-4xl md:text-5xl font-black text-pink-800">
              {gifts.title}
            </h2>
            <span className="text-4xl animate-bounce delay-300">🌹</span>
          </div>
          
          <p className="text-xl text-pink-700 max-w-3xl mx-auto leading-relaxed">
            {gifts.message}
          </p>
        </div>

        {/* Grid de opciones de regalo */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {gifts.options.map((option, index: number) => (
            <Card 
              key={index} 
              className="bg-white/90 backdrop-blur-lg border border-pink-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <CardHeader className="bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="text-xl font-bold flex items-center gap-3">
                  <span className="text-3xl">{option.icon}</span>
                  {option.title}
                </CardTitle>
                <CardDescription className="text-pink-100 text-base">
                  {option.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
                  <pre className="text-pink-800 text-sm whitespace-pre-wrap font-mono leading-relaxed">
                    {option.details}
                  </pre>
                </div>
                
                <div className="flex gap-3 mt-4">
                  <Button
                    onClick={() => copyToClipboard(option.details, index)}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-pink-300 text-pink-700 hover:bg-pink-100"
                  >
                    {copiedStates[index] ? (
                      <>
                        <Check className="w-4 h-4" />
                        ¡Copiado!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copiar info
                      </>
                    )}
                  </Button>
                  
                  {/* Botón de acción específico por tipo */}
                  {option.title.includes('Ecuestres') && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 border-pink-300 text-pink-700 hover:bg-pink-100"
                      onClick={() => window.open('https://www.google.com/search?q=tienda+juguetes+caballos+niños', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Buscar tiendas
                    </Button>
                  )}
                  
                  {option.title.includes('Elegantes') && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 border-pink-300 text-pink-700 hover:bg-pink-100"
                      onClick={() => window.open('https://www.google.com/search?q=accesorios+elegantes+niña+3+años', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Buscar tiendas
                    </Button>
                  )}
                  
                  {option.title.includes('Libros') && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 border-pink-300 text-pink-700 hover:bg-pink-100"
                      onClick={() => window.open('https://www.google.com/search?q=libros+cuentos+caballos+tradición+mexicana+niños', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver libros
                    </Button>
                  )}

                  {option.title.includes('Contribución') && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 border-pink-300 text-pink-700 hover:bg-pink-100"
                      onClick={() => copyToClipboard('Sobre para: Lluvia Marina Rodríguez\nTipo: Contribución elegante para su cofre del tesoro\nOcasión: Celebración de cumpleaños ecuestre', index + 100)}
                    >
                      <Copy className="w-4 h-4" />
                      Copiar para sobre
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mensaje final Escaramuza */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center shadow-2xl">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-4xl">🐎</span>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              ¡Lo más importante es su presencia, querida familia!
            </h3>
            <span className="text-4xl">✨</span>
          </div>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Lluvia Marina está emocionada de compartir su elegante celebración contigo. 
            Los regalos son un detalle hermoso, ¡pero tu compañía es el verdadero regalo!
          </p>
        </div>

        {/* Nota informativa */}
        <div 
        style={{display: 'none'}}
        className="mt-8 bg-pink-100 border border-pink-300 rounded-lg p-4">
          <p className="text-sm text-pink-800 text-center">
            <strong>📝 Nota:</strong> Esta es una demostración. En la invitación real, 
            esta información se personalizaría según las preferencias reales de los padres.
          </p>
        </div>
      </div>
    </section>
  )
}
