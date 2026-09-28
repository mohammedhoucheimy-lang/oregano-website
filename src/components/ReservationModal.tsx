import { useState } from 'react';
import { X, MessageCircle, Phone, Clock, Calendar, Users, Send } from 'lucide-react';
import { RESTAURANT_INFO } from '@/src/data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [time, setTime] = useState('20:00');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleQuickWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hello Oregano Resto-Café!\n` +
      `Table Reservation Request:\n` +
      `• Name: ${name || 'Guest'}\n` +
      `• Party Size: ${guests}\n` +
      `• Time: ${time}\n` +
      (notes ? `• Notes: ${notes}\n` : '') +
      `Please let me know if a table is available. Thank you!`
    );
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-[#FAF8F5] rounded-lg shadow-2xl border border-[#DED7CE] overflow-hidden">
        {/* Header */}
        <div className="p-5 bg-[#2D4A3E] text-white flex items-center justify-between">
          <div>
            <h3 className="font-display text-lg font-bold">Reserve a Table</h3>
            <p className="text-xs text-white/80">Oregano Resto-Café · Palazzo Hotel, Tyre</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close reservation modal"
            className="p-1 rounded-sm text-white/80 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {/* 1-Tap Quick Action Bars */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white rounded-sm text-xs font-semibold hover:bg-[#1EBE5D] transition-colors shadow-2xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant WhatsApp</span>
            </a>
            <a
              href={`tel:${RESTAURANT_INFO.phones[0].clean}`}
              className="flex items-center justify-center gap-2 py-3 bg-[#1D3528] text-white rounded-sm text-xs font-semibold hover:bg-[#15271E] transition-colors shadow-2xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us Direct</span>
            </a>
          </div>

          <div className="relative flex py-1 items-center">
            <div className="grow border-t border-[#DDD6CB]"></div>
            <span className="shrink-0 mx-3 text-[11px] text-[#8C867C] uppercase font-semibold">Or Specify Details</span>
            <div className="grow border-t border-[#DDD6CB]"></div>
          </div>

          {/* Quick Details Form */}
          <form onSubmit={handleQuickWhatsApp} className="space-y-3.5">
            <div>
              <label className="block text-xs font-medium text-[#2E2B27] mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-3 py-2 bg-white border border-[#DDD6CB] rounded-sm text-xs text-[#2E2B27] focus:outline-hidden focus:border-[#2D4A3E]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-[#2E2B27] mb-1">
                  Party Size
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#DDD6CB] rounded-sm text-xs text-[#2E2B27] focus:outline-hidden focus:border-[#2D4A3E]"
                >
                  <option>1 Person</option>
                  <option>2 Guests</option>
                  <option>3 - 4 Guests</option>
                  <option>5 - 8 Guests</option>
                  <option>8+ Group</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#2E2B27] mb-1">
                  Preferred Time
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#DDD6CB] rounded-sm text-xs text-[#2E2B27] focus:outline-hidden focus:border-[#2D4A3E]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#2E2B27] mb-1">
                Notes (Optional)
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Sea view table, shisha"
                className="w-full px-3 py-2 bg-white border border-[#DDD6CB] rounded-sm text-xs text-[#2E2B27] focus:outline-hidden focus:border-[#2D4A3E]"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3 bg-[#2D4A3E] hover:bg-[#20372B] text-white rounded-sm text-xs font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Request Table on WhatsApp</span>
            </button>
          </form>

          {/* Schedule Footer */}
          <div className="pt-3 border-t border-[#E8E2D9] text-center text-[11px] text-[#7A746B]">
            <p>Open daily from 9:00 AM to 1:00 AM at Palazzo Hotel, Tyre.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
