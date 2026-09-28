import { ArrowRight, MapPin, Clock, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '@/src/data/restaurantData';
import heroImage from '@/src/assets/images/hero_oregano_sea_view_1790590030478.jpg';

interface HeroProps {
  onOpenReservation: () => void;
}

export default function Hero({ onOpenReservation }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#16261F]">
      {/* Background Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Oregano Resto-Café seaside terrace overlooking the Mediterranean sea in Tyre, Lebanon"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse/10"
        />
        {/* Measured dark scrim for 4.5:1 text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/30 to-black/75" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Quiet Location Tagline without static pill enclosure */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-widest text-[#E3D9C9] uppercase mb-4">
          <MapPin className="w-3.5 h-3.5 text-[#D49D5A]" />
          <span>Tyre (Sour), Lebanon</span>
          <span aria-hidden="true" className="text-[#C88A42]">·</span>
          <span>Palazzo Hotel, Corniche</span>
        </div>

        {/* Primary Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto text-balance">
          Savor the Mediterranean by the Tyre Coastline
        </h1>

        {/* Brand Narrative / Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-[#E8E2D9] max-w-2xl mx-auto font-normal leading-relaxed mb-10 text-balance">
          Welcome to <span className="font-semibold text-white">Oregano Resto-Café</span>. Experience a calm, cozy atmosphere with panoramic sea views, authentic breakfast mezza, gourmet burgers, wood-fired pizzas, and seaside shisha.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm bg-[#D49D5A] hover:bg-[#C08743] text-[#1A1917] font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-xs font-semibold text-sm transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 text-[#73D194]" />
            <span>Reserve a Table</span>
          </button>
        </div>

        {/* Discreet verified service markers */}
        <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#DDD5C9] max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[#D49D5A] shrink-0" />
            <span>Open Daily: 9:00 AM – 1:00 AM</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#73D194] shrink-0" />
            <span>Mediterranean & Lebanese Cuisine</span>
          </div>
          <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D49D5A] shrink-0" />
            <span>Seaside Shisha & Match Screenings</span>
          </div>
        </div>
      </div>
    </section>
  );
}
