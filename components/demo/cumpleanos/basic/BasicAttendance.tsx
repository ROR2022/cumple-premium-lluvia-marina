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
  date: "Sábado 11 de Enero, 2025",
  time: "2:00 PM",
  location: {
    name: "Hacienda de las Rosas",
    address: "Camino de las Flores Km 12, Valle Encantado"
  }
};

const contactInfo = {
  phone: "5556789012",
  whatsapp: "5556789012",
  deadline: "8 de Enero, 2025"
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
👥 Acompañantes: ${formData.companions || 'Ninguno'}

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

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        {/* Header elegante */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <h2 className="text-4xl md:text-6xl font-black text-pink-800">
              {attendance.title}
            </h2>
            <span className="text-4xl animate-bounce delay-300">📝</span>
          </div>
          
          <p className="text-xl text-pink-700 mb-4">
            {attendance.message}
          </p>
          <p className="text-lg text-pink-600">
            {attendance.subtitle}
          </p>
        </div>

        {/* Formulario elegante */}
        <Card className="bg-white/90 backdrop-blur-lg border border-pink-200 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              🎯 Confirma tu asistencia elegante
            </CardTitle>
            <CardDescription className="text-pink-100">
              ¡Lluvia Marina quiere saber quiénes vendrán a su celebración ecuestre!
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre completo */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg font-semibold text-pink-800 flex items-center gap-2">
                  👤 {attendance.fields.name} *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Escribe tu nombre completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="text-lg h-12 border-pink-300 focus:border-pink-500 bg-white/90"
                  required
                />
              </div>

              {/* Teléfono */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-lg font-semibold text-pink-800 flex items-center gap-2">
                  📱 {attendance.fields.phone} *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Tu número de teléfono"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="text-lg h-12 border-pink-300 focus:border-pink-500 bg-white/90"
                  required
                />
              </div>

              {/* Confirmación de asistencia */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold text-pink-800 flex items-center gap-2">
                  ✅ {attendance.fields.response} *
                </Label>
                <RadioGroup
                  value={formData.attendance}
                  onValueChange={(value) => setFormData({ ...formData, attendance: value })}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-pink-200 bg-pink-50/50 hover:bg-pink-100/80 transition-colors">
                    <RadioGroupItem value={attendance.fields.responseOptions.yes} id="si" className="text-pink-600" />
                    <Label htmlFor="si" className="text-lg font-medium text-pink-800 cursor-pointer flex items-center gap-2">
                      🎉 {attendance.fields.responseOptions.yes}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-pink-200 bg-pink-50/50 hover:bg-pink-100/80 transition-colors">
                    <RadioGroupItem value={attendance.fields.responseOptions.no} id="no" className="text-pink-600" />
                    <Label htmlFor="no" className="text-lg font-medium text-pink-800 cursor-pointer flex items-center gap-2">
                      😔 {attendance.fields.responseOptions.no}
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Acompañantes */}
              <div className="space-y-2">
                <Label htmlFor="companions" className="text-lg font-semibold text-pink-800 flex items-center gap-2">
                  👥 {attendance.fields.companions} (opcional)
                </Label>
                <Input
                  id="companions"
                  type="text"
                  placeholder="¿Vienes con alguien más? Escribe sus nombres"
                  value={formData.companions}
                  onChange={(e) => setFormData({ ...formData, companions: e.target.value })}
                  className="text-lg h-12 border-pink-300 focus:border-pink-500 bg-white/90"
                />
              </div>

              {/* Mensaje especial */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-lg font-semibold text-pink-800 flex items-center gap-2">
                  💌 Mensaje especial para Lluvia Marina (opcional)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Escribe un mensaje especial para la festejada..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="text-lg min-h-[120px] border-pink-300 focus:border-pink-500 bg-white/90 resize-none"
                />
              </div>

              {/* Información del evento */}
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-lg border border-pink-300">
                <h3 className="text-xl font-bold text-pink-800 mb-4 flex items-center gap-2">
                  ℹ️ Información del evento
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-pink-700">
                  <div>
                    <strong>📅 Fecha:</strong> {eventInfo.date}
                  </div>
                  <div>
                    <strong>⏰ Hora:</strong> {eventInfo.time}
                  </div>
                  <div className="md:col-span-2">
                    <strong>📍 Lugar:</strong> {eventInfo.location.name}
                    <br />
                    <span className="text-sm">{eventInfo.location.address}</span>
                  </div>
                </div>
              </div>

              {/* Botón de envío */}
              <Button
                type="submit"
                className="w-full h-14 text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                🎊 Confirmar Asistencia via WhatsApp
              </Button>

              {/* Información de contacto */}
              <div className="text-center pt-4 border-t border-pink-200">
                <p className="text-pink-600 mb-2">
                  <strong>📞 Contacto:</strong> {contactInfo.phone}
                </p>
                <p className="text-sm text-pink-500">
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
