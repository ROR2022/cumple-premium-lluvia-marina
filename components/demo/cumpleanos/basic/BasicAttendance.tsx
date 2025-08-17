'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface BasicAttendanceProps {
  attendance: {
    title: string;
    message: string;
    subtitle: string;
    fields: {
      name: string;
      response: string;
      companions: string;
      phone: string;
      responseOptions: {
        yes: string;
        no: string;
      };
    };
  };
}

// Datos del evento (hardcodeados para este componente)
const eventInfo = {
  date: "Sábado 20 de Septiembre, 2025",
  time: "12:00 PM",
  location: {
    name: "Parroquia de San Juan Bautista",
    address: "Manzana 006, 54274 San Juan Acazuchitlán, Méx.",
    locationLink: "https://maps.app.goo.gl/SDH5H4cSwJondd7p6"
  }
};

const contactInfo = {
  phone: "7731288298",
  whatsapp: "527731288298", // +52 (México) + número sin el primer 0
  deadline: "19 de Septiembre, 2025"
};

export function BasicAttendance({ attendance }: BasicAttendanceProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attendance: '',
    message: '',
    companions: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.attendance) {
      toast.error('Por favor completa todos los campos obligatorios');
      return;
    }

    // Crear mensaje para WhatsApp
    const whatsappMessage = `🎊 *Confirmación de Asistencia - Lluvia Marina* 🎊
    
🧾 *Datos del invitado:*
👤 Nombre: ${formData.name}
📱 Teléfono: ${formData.phone}
✅ Asistencia: ${formData.attendance}

💌 *Mensaje especial:*
${formData.message || 'Sin mensaje adicional'}

🗓️ *Evento:* ${eventInfo.date} - ${eventInfo.time}
📍 *Lugar:* ${eventInfo.location.name}

¡Gracias por confirmar tu asistencia! 🎉`;

    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast.success('¡Confirmación enviada! Te redirigimos a WhatsApp');
    
    // Limpiar formulario
    setFormData({
      name: '',
      phone: '',
      attendance: '',
      message: '',
      companions: ''
    });
  };

  const handleMaps = () => {
    window.open(eventInfo.location.locationLink, '_blank');
  };

  return (
    <section 
    style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/images/custom/lluvia_horse3_sinfondo1.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    className="py-16 px-4 bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50 overflow-x-hidden">
      <div className="max-w-4xl mx-auto overflow-x-hidden">
        {/* Header elegante */}
        <div className="text-center mb-12 px-2">
          <div className="flex justify-center items-center gap-2 sm:gap-4 mb-6 flex-wrap">
            <h2 className="font-tangerine drop-shadow-[4px_4px_8px_rgba(0,0,0,0.9)] [text-shadow:_3px_3px_6px_rgb(0_0_0_/_100%),_-1px_-1px_2px_rgb(0_0_0_/_80%)] text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-pink-300 leading-tight">
              {attendance.title}
            </h2>
            <span className="text-2xl sm:text-3xl md:text-4xl animate-bounce delay-300">📝</span>
          </div>
          
          <p className="font-great-vibes drop-shadow-[4px_4px_8px_rgba(0,0,0,0.9)] [text-shadow:_3px_3px_6px_rgb(0_0_0_/_100%),_-1px_-1px_2px_rgb(0_0_0_/_80%)] text-lg xs:text-xl sm:text-2xl md:text-3xl text-pink-400 mb-4 leading-relaxed px-2">
            {attendance.message}
          </p>
          <p className="font-playfair drop-shadow-[4px_4px_8px_rgba(0,0,0,0.9)] [text-shadow:_3px_3px_6px_rgb(0_0_0_/_100%),_-1px_-1px_2px_rgb(0_0_0_/_80%)] text-base sm:text-lg md:text-xl text-pink-600 px-2 leading-relaxed">
            {attendance.subtitle}
          </p>
        </div>

        {/* Formulario elegante */}
        <Card className="bg-white/90 backdrop-blur-lg border border-pink-200 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-t-lg px-4 sm:px-6">
            <CardTitle className="font-great-vibes text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold flex items-center gap-2 leading-tight">
              🎯 Confirma tu asistencia
            </CardTitle>
            <CardDescription className="font-playfair text-base sm:text-lg text-pink-100 leading-relaxed">
              ¡Lluvia Marina quiere saber quiénes vendrán a su celebración!
            </CardDescription>
          </CardHeader>

          <CardContent className="p-4 sm:p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre completo */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base sm:text-lg font-semibold text-pink-800 flex items-center gap-2 flex-wrap">
                  👤 {attendance.fields.name} *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Escribe tu nombre completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="text-base sm:text-lg h-10 sm:h-12 border-pink-300 focus:border-pink-500 bg-white/90"
                  required
                />
              </div>

              {/* Teléfono */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base sm:text-lg font-semibold text-pink-800 flex items-center gap-2 flex-wrap">
                  📱 {attendance.fields.phone} *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Tu número de teléfono"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="text-base sm:text-lg h-10 sm:h-12 border-pink-300 focus:border-pink-500 bg-white/90"
                  required
                />
              </div>

              {/* Confirmación de asistencia */}
              <div className="space-y-4">
                <Label className="text-base sm:text-lg font-semibold text-pink-800 flex items-center gap-2 flex-wrap">
                  ✅ {attendance.fields.response} *
                </Label>
                <RadioGroup
                  value={formData.attendance}
                  onValueChange={(value) => setFormData({ ...formData, attendance: value })}
                  className="grid grid-cols-1 gap-4"
                >
                  <div className="flex items-center space-x-3 p-3 sm:p-4 rounded-lg border border-pink-200 bg-pink-50/50 hover:bg-pink-100/80 transition-colors">
                    <RadioGroupItem value={attendance.fields.responseOptions.yes} id="si" className="text-pink-600" />
                    <Label htmlFor="si" className="text-base sm:text-lg font-medium text-pink-800 cursor-pointer flex items-center gap-2 leading-tight">
                      🎉 {attendance.fields.responseOptions.yes}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 sm:p-4 rounded-lg border border-pink-200 bg-pink-50/50 hover:bg-pink-100/80 transition-colors">
                    <RadioGroupItem value={attendance.fields.responseOptions.no} id="no" className="text-pink-600" />
                    <Label htmlFor="no" className="text-base sm:text-lg font-medium text-pink-800 cursor-pointer flex items-center gap-2 leading-tight">
                      😔 {attendance.fields.responseOptions.no}
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Acompañantes */}
              <div 
              style={{display:'none'}}
              className="space-y-2">
                <Label htmlFor="companions" className="text-base sm:text-lg font-semibold text-pink-800 flex items-center gap-2 flex-wrap">
                  👥 {attendance.fields.companions} (opcional)
                </Label>
                <Input
                  id="companions"
                  type="text"
                  placeholder="¿Vienes con alguien más? Escribe sus nombres"
                  value={formData.companions}
                  onChange={(e) => setFormData({ ...formData, companions: e.target.value })}
                  className="text-base sm:text-lg h-10 sm:h-12 border-pink-300 focus:border-pink-500 bg-white/90"
                />
              </div>

              {/* Mensaje especial */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-base sm:text-lg font-semibold text-pink-800 flex items-center gap-2 flex-wrap">
                  💌 Mensaje especial para Lluvia Marina (opcional)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Escribe un mensaje especial para la festejada..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="text-base sm:text-lg min-h-[100px] sm:min-h-[120px] border-pink-300 focus:border-pink-500 bg-white/90 resize-none"
                />
              </div>

              {/* Información del evento */}
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 sm:p-6 rounded-lg border border-pink-300">
                <h3 className="font-great-vibes text-xl xs:text-2xl sm:text-2xl md:text-3xl font-bold text-pink-800 mb-4 flex items-center gap-2 leading-tight">
                  ℹ️ Información del evento
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:gap-4 text-pink-700 text-sm sm:text-base">
                  <div>
                    <strong>📅 Fecha:</strong> {eventInfo.date}
                  </div>
                  <div>
                    <strong>⏰ Hora:</strong> {eventInfo.time}
                  </div>
                  <div
                    onClick={handleMaps}
                    className="cursor-pointer"
                  >
                    <strong>📍 Lugar:</strong> {eventInfo.location.name}
                    <br />
                    <span className="text-xs sm:text-sm break-words">{eventInfo.location.address}</span>
                  </div>
                </div>
              </div>

              {/* Botón de envío */}
              <Button
                type="submit"
                className="w-full h-12 sm:h-14 text-lg sm:text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                🎊 Confirmar Asistencia
              </Button>

              {/* Información de contacto */}
              <div className="text-center pt-4 border-t border-pink-200">
                <p className="text-pink-600 mb-2 text-sm sm:text-base">
                  <strong>📞 Contacto:</strong> {contactInfo.phone}
                </p>
                <p className="text-xs sm:text-sm text-pink-500">
                  <strong>⏰ Confirma antes del:</strong> {contactInfo.deadline}
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
