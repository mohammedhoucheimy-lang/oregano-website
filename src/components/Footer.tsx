import { Instagram, Phone, MapPin, Mail, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '@/src/data/restaurantData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#192B22] text-[#D7CEBF] pt-16 pb-24 md:pb-16 border-t border-[#294235]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#294235]">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="inline-block">
              <span className="font-display text-2xl font-bold text-white tracking-tight">
                Oregano
              </span>
              <span className="font-sans text-xs tracking-wider uppercase font-semibold text-[#D49D5A] ml-2">
                Resto-Café
              </span>
            </a>
            <p className="text-xs sm:text-sm text-[#AFA595] max-w-md leading-relaxed">
              Modern Mediterranean dining and open-air seaside lounge located along the Corniche in Tyre, Lebanon. Join us at Palazzo Hotel for breakfast, gourmet burgers, pizza, shisha, and live match screenings.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={RESTAURANT_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Oregano Tyre Instagram"
                className="w-9 h-9 rounded-sm bg-white/10 hover:bg-[#D49D5A] hover:text-[#192B22] text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <span className="text-xs font-medium text-[#C88A42]">@oregano_tyre</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">Our Menu</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-white transition-colors">Instagram Feed</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Find Location</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact & Reservations</a>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-4">
              Tyre Location
            </h4>
            <div className="space-y-2.5 text-xs text-[#AFA595]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D49D5A] shrink-0 mt-0.5" />
                <span>Palazzo Hotel, Nabih Berri St, Tyre, Lebanon</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D49D5A] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phones[0].clean}`} className="hover:text-white">
                  +961 81 045 065
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D49D5A] shrink-0" />
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:text-white truncate">
                  {RESTAURANT_INFO.email}
                </a>
              </div>
              <p className="text-[11px] text-[#8C8476] pt-1">
                Open Daily: 9:00 AM – 1:00 AM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C8476] gap-4">
          <p>© {new Date().getFullYear()} Oregano Resto-Café. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#AFA595]">Tyre (Sour), South Lebanon</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-xs text-[#D49D5A] hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
