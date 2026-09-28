import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Instagram, Send, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '@/src/data/restaurantData';

interface ContactSectionProps {
  onOpenReservation: () => void;
}

export default function ContactSection({ onOpenReservation }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2 Guests',
    date: '',
    time: '20:00',
    notes: '',
  });
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const message = encodeURIComponent(
      `Hello Oregano Resto-Café!\n\n` +
      `Table Reservation Request:\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone || 'Provided via WhatsApp'}\n` +
      `• Party Size: ${formData.guests}\n` +
      `• Date: ${formData.date || 'Today / Upcoming'}\n` +
      `• Time: ${formData.time}\n` +
      (formData.notes ? `• Special Notes: ${formData.notes}\n` : '') +
      `\nLooking forward to your confirmation. Thank you!`
    );

    // Open WhatsApp with prefilled message
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
    setSentSuccess(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F5F1EB] border-b border-[#E6DFD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#2D4A3E] mb-2">
            Get in Touch
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D3528] tracking-tight">
            Reserve Your Table or Inquire
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#68635B]">
            Planning a gathering with family or friends? Contact us directly via WhatsApp or phone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct verified contact cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-display text-xl font-bold text-[#1D3528] mb-4">
              Direct Contact Channels
            </h3>

            {/* Phone numbers card */}
            <div className="bg-white p-5 rounded-md border border-[#E3DBD0] shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-sm bg-[#2D4A3E]/10 flex items-center justify-center text-[#2D4A3E]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1D3528]">Telephone & Mobile</h4>
                  <p className="text-[11px] text-[#7A746B]">Tap to call directly</p>
                </div>
              </div>
              <div className="space-y-2 pt-2 border-t border-[#F2ECE3]">
                {RESTAURANT_INFO.phones.map((phone) => (
                  <div key={phone.clean} className="flex items-center justify-between">
                    <span className="text-xs text-[#635D54]">{phone.label}:</span>
                    <a
                      href={`tel:${phone.clean}`}
                      className="text-xs font-bold text-[#1D3528] hover:text-[#C88A42] tracking-wider"
                    >
                      {phone.number}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white p-5 rounded-md border border-[#25D366]/30 shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-sm bg-[#25D366]/15 flex items-center justify-center text-[#128C7E]">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1D3528]">Official WhatsApp</h4>
                    <p className="text-[11px] text-[#7A746B]">+961 81 045 065</p>
                  </div>
                </div>
                <a
                  href={RESTAURANT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-sm bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold transition-colors shadow-2xs"
                >
                  Chat Now
                </a>
              </div>
            </div>

            {/* Email & Instagram Card */}
            <div className="bg-white p-5 rounded-md border border-[#E3DBD0] shadow-2xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm bg-[#2D4A3E]/10 flex items-center justify-center text-[#2D4A3E]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1D3528]">Email Inquiries</h4>
                  <a
                    href={`mailto:${RESTAURANT_INFO.email}`}
                    className="text-xs text-[#2D4A3E] hover:underline"
                  >
                    {RESTAURANT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-[#F2ECE3] flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm bg-[#2D4A3E]/10 flex items-center justify-center text-[#2D4A3E]">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1D3528]">Instagram</h4>
                  <a
                    href={RESTAURANT_INFO.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#2D4A3E] hover:underline"
                  >
                    {RESTAURANT_INFO.instagram.handle}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Instant WhatsApp Reservation Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg border border-[#E3DBD0] shadow-2xs">
            <h3 className="font-display text-xl font-bold text-[#1D3528] mb-1">
              Table Reservation Form
            </h3>
            <p className="text-xs sm:text-sm text-[#666056] mb-6">
              Fill in your party details below and we will automatically open your reservation request in WhatsApp for instant confirmation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2E2B27] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Karim / Sarah"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DDD6CB] rounded-sm text-xs text-[#2E2B27] focus:outline-hidden focus:border-[#2D4A3E] focus:ring-1 focus:ring-[#2D4A3E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2E2B27] mb-1">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+961..."
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DDD6CB] rounded-sm text-xs text-[#2E2B27] focus:outline-hidden focus:border-[#2D4A3E] focus:ring-1 focus:ring-[#2D4A3E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2E2B27] mb-1">
                    Party Size
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DDD6CB] rounded-sm text-xs text-[#2E2B27] focus:outline-hidden focus:border-[#2D4A3E]"
                  >
                    <option>1 Person</option>
                    <option>2 Guests</option>
                    <option>3 - 4 Guests</option>
                    <option>5 - 8 Guests</option>
                    <option>Large Group (8+)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2E2B27] mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DDD6CB] rounded-sm text-xs text-[#2E2B27] focus:outline-hidden focus:border-[#2D4A3E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2E2B27] mb-1">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DDD6CB] rounded-sm text-xs text-[#2E2B27] focus:outline-hidden focus:border-[#2D4A3E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2E2B27] mb-1">
                  Seating Preferences & Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Sea view terrace table, football match viewing, shisha preference..."
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DDD6CB] rounded-sm text-xs text-[#2E2B27] focus:outline-hidden focus:border-[#2D4A3E]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#2D4A3E] text-white rounded-sm text-xs font-semibold hover:bg-[#20372B] transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Reservation via WhatsApp</span>
                </button>
              </div>

              {sentSuccess && (
                <div className="p-3 bg-[#EAF7EE] border border-[#BCE4C7] rounded-sm flex items-center gap-2 text-xs text-[#1E743F]">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Opening WhatsApp with your reservation details...</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
