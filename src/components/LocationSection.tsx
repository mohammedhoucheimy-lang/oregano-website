import { MapPin, Navigation, Phone, MessageCircle, Clock, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '@/src/data/restaurantData';

export default function LocationSection() {
  return (
    <section id="location" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Information Column */}
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#2D4A3E] mb-2">
              Find Us
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D3528] tracking-tight mb-4">
              Prime Seaside Location in Tyre
            </h2>
            <p className="text-sm sm:text-base text-[#615C53] leading-relaxed mb-8">
              We are located along Nabih Berri Street inside the Palazzo Hotel on the historic coastal Corniche of Tyre (Sour), South Lebanon. Enjoy unobstructed views of the Mediterranean right by the road.
            </p>

            {/* Address Details Box */}
            <div className="bg-white p-6 rounded-md border border-[#E4DDD2] shadow-2xs space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2D4A3E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#1D3528]">Physical Address</h4>
                  <p className="text-xs text-[#524D45] mt-0.5 leading-relaxed">
                    {RESTAURANT_INFO.address.building}, {RESTAURANT_INFO.address.street}
                  </p>
                  <p className="text-xs text-[#7A746B]">
                    {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.governorate}, {RESTAURANT_INFO.address.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#F0EAE2]">
                <Clock className="w-5 h-5 text-[#2D4A3E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#1D3528]">Opening Schedule</h4>
                  <p className="text-xs text-[#524D45] mt-0.5">
                    {RESTAURANT_INFO.hours}
                  </p>
                  <p className="text-[11px] text-[#7A746B]">
                    Breakfast: 9:00 AM – 1:00 PM · Lunch, Dinner & Lounge until 1:00 AM
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-[#2D4A3E] text-white hover:bg-[#20372B] text-xs font-semibold transition-colors shadow-xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-[#25D366]/15 border border-[#25D366]/40 text-[#128C7E] hover:bg-[#25D366]/25 text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#128C7E]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-7">
            <div className="relative rounded-lg overflow-hidden border border-[#DDD6CC] shadow-sm bg-[#EFEAE2] h-[380px] sm:h-[450px]">
              {/* Google Maps Embed iframe focusing on Palazzo Hotel Tyre Corniche */}
              <iframe
                title="Oregano Resto-Café Palazzo Hotel Tyre Location Map"
                src="https://maps.google.com/maps?q=Palazzo+Hotel+Tyre+Lebanon&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Map floating card overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-xs p-3.5 rounded-md shadow-md border border-[#E2DAD0]">
                <p className="text-xs font-bold text-[#1D3528]">Oregano Resto-Café</p>
                <p className="text-[11px] text-[#635D54]">Palazzo Hotel · Tyre Corniche</p>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-[#C88A42] hover:text-[#9B6425]"
                >
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
