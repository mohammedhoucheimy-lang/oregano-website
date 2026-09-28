import { Phone, MessageCircle, Utensils, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '@/src/data/restaurantData';

interface MobileQuickBarProps {
  onOpenReservation: () => void;
}

export default function MobileQuickBar({ onOpenReservation }: MobileQuickBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#DED7CD] px-3 py-2 shadow-lg h-14 flex items-center justify-between">
      <a
        href="#menu"
        className="flex-1 flex flex-col items-center justify-center text-[#2E2B27] hover:text-[#2D4A3E] transition-colors"
      >
        <Utensils className="w-4 h-4 text-[#2D4A3E]" />
        <span className="text-[10px] font-semibold mt-0.5">Menu</span>
      </a>

      <a
        href={`tel:${RESTAURANT_INFO.phones[0].clean}`}
        className="flex-1 flex flex-col items-center justify-center text-[#2E2B27] hover:text-[#2D4A3E] transition-colors"
      >
        <Phone className="w-4 h-4 text-[#2D4A3E]" />
        <span className="text-[10px] font-semibold mt-0.5">Call</span>
      </a>

      <a
        href={RESTAURANT_INFO.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center text-[#2E2B27] hover:text-[#2D4A3E] transition-colors"
      >
        <MapPin className="w-4 h-4 text-[#C88A42]" />
        <span className="text-[10px] font-semibold mt-0.5">Location</span>
      </a>

      <a
        href={RESTAURANT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[1.3] flex items-center justify-center gap-1.5 py-1.5 px-2.5 bg-[#25D366] text-white rounded-md text-[11px] font-semibold shadow-xs"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
