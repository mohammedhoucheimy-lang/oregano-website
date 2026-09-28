import { Waves, UtensilsCrossed, Tv, CreditCard, Instagram } from 'lucide-react';
import { RESTAURANT_INFO } from '@/src/data/restaurantData';
import fattehImage from '@/src/assets/images/dish_lebanese_breakfast_fatteh_1790590071276.jpg';

export default function About() {
  const pillars = [
    {
      icon: Waves,
      title: 'Seaside Mediterranean Terrace',
      description: 'Nestled along Nabih Berri Street inside the Palazzo Hotel, our open-air terrace offers scenic views over the Mediterranean coast of Tyre.',
    },
    {
      icon: UtensilsCrossed,
      title: 'From Breakfast to Midnight',
      description: 'Start your morning with warm chickpea fatteh and whipped hummus, followed by handcrafted crispy chicken burgers, wood-fired pizzas, and artisan coffee.',
    },
    {
      icon: Tv,
      title: 'Weekend Sports & Live Match Screenings',
      description: 'Join local fans on game nights to watch major football leagues and tournaments on large high-definition screens with friends.',
    },
    {
      icon: CreditCard,
      title: 'Modern Payment Options',
      description: 'We welcome Lebanese Pounds, US Dollars, international bank cards, and select cryptocurrency payments for your convenience.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#2D4A3E] mb-2">
            About Oregano
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D3528] tracking-tight leading-tight text-balance">
            A Calm, Coastal Haven in the Ancient City of Tyre
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5E5950] leading-relaxed">
            Situated within the Palazzo Hotel on Tyre’s lively Corniche road, <span className="font-medium text-[#1D3528]">Oregano Resto-Café</span> was crafted as an inviting destination for families and friends. Whether catching the morning sea breeze with authentic Lebanese mezza or gathering for evening shisha and football, we bring together fresh ingredients, warm hospitality, and timeless coastal views.
          </p>
        </div>

        {/* Content Grid: Photo + Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Photo column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden shadow-md border border-[#E2DBD1] bg-white">
              <img
                src={fattehImage}
                alt="Oregano Resto-Café morning breakfast mezza in Tyre Lebanon"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs uppercase tracking-wider text-[#D49D5A] font-medium">Daily Service</p>
                <p className="font-display text-lg font-bold">Authentic Flavors, Fresh Ingredients</p>
                <p className="text-xs text-white/80">Breakfast served daily starting at 9:00 AM</p>
              </div>
            </div>

            {/* Quick Instagram link chip */}
            <a
              href={RESTAURANT_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-[#2D4A3E] hover:text-[#1D3528] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#D49D5A]" />
              <span>Connect with us @oregano_tyre on Instagram</span>
            </a>
          </div>

          {/* Pillars column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-md border border-[#E8E2D9] shadow-2xs hover:border-[#2D4A3E]/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-sm bg-[#2D4A3E]/10 flex items-center justify-center text-[#2D4A3E] mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#1D3528] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#615C53] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
