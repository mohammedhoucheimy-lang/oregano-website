import { useState, useMemo } from 'react';
import { Search, MessageCircle, Utensils, Sparkles } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO, MenuItem } from '@/src/data/restaurantData';

type CategoryFilter = 'All' | 'Breakfast' | 'Burgers' | 'Pizza & Pasta' | 'Starters & Salads' | 'Desserts' | 'Drinks & Coffee' | 'Shisha';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: CategoryFilter[] = [
    'All',
    'Breakfast',
    'Burgers',
    'Pizza & Pasta',
    'Starters & Salads',
    'Desserts',
    'Drinks & Coffee',
    'Shisha',
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleWhatsAppInquiry = (item: MenuItem) => {
    const message = encodeURIComponent(
      `Hello Oregano Resto-Café! I would like to inquire about ordering / reserving: ${item.name} (${item.category}).`
    );
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#F5F1EB] border-b border-[#E6DFD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#2D4A3E] mb-2">
            Oregano Resto-Café Menu
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D3528] tracking-tight leading-tight">
            Mediterranean Craft & Culinary Favorites
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#68635B]">
            From morning authentic Lebanese breakfast to gourmet evening burgers, pizzas, and artisan drinks overlooking the Mediterranean sea in Tyre.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none max-w-full">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-sm transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#2D4A3E] text-white shadow-xs'
                      : 'bg-white text-[#4A463F] border border-[#DDD6CB] hover:bg-[#EBE5DC] hover:text-[#1D3528]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] md:w-64">
            <Search className="w-4 h-4 text-[#8C867C] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, drinks..."
              aria-label="Search menu items"
              className="w-full pl-9 pr-4 py-2 bg-white border border-[#DDD6CB] rounded-sm text-xs text-[#2E2B27] placeholder:text-[#8C867C] focus:outline-hidden focus:border-[#2D4A3E] focus:ring-1 focus:ring-[#2D4A3E]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#8C867C] hover:text-[#2E2B27]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-md border border-[#E3DBD0]">
            <Utensils className="w-8 h-8 text-[#A8A196] mx-auto mb-2" />
            <p className="text-base font-medium text-[#2E2B27]">No dishes found</p>
            <p className="text-xs text-[#7A746B] mt-1">Try another keyword or select "All" categories.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between bg-white rounded-md border border-[#E4DDD2] overflow-hidden shadow-2xs hover:shadow-sm hover:border-[#2D4A3E]/30 transition-all duration-200"
              >
                <div>
                  {/* Item Image if available */}
                  {item.image ? (
                    <div className="relative h-48 w-full overflow-hidden bg-[#EFEAE2]">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
                      />
                      {item.highlight && (
                        <div className="absolute top-2.5 right-2.5 bg-black/75 backdrop-blur-xs text-[#E3D9C9] text-[11px] font-medium px-2 py-0.5 rounded-xs flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#D49D5A]" />
                          <span>{item.highlight}</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="h-2.5 bg-[#2D4A3E]/10" />
                  )}

                  <div className="p-5">
                    {/* Category Label without pill enclosure */}
                    <div className="text-[11px] font-semibold text-[#8C857A] uppercase tracking-wider mb-1">
                      {item.category}
                    </div>

                    {/* Dish Title */}
                    <h3 className="font-display text-lg font-bold text-[#1D3528] mb-2 leading-snug">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#5E5950] leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: WhatsApp Order / Inquire Button */}
                <div className="p-5 pt-0 mt-3 border-t border-[#F2ECE4] flex items-center justify-between">
                  <span className="text-[11px] text-[#7A746A]">
                    Served fresh daily
                  </span>
                  <button
                    onClick={() => handleWhatsAppInquiry(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F6E43] hover:text-[#134D2E] transition-colors py-1.5 px-2.5 rounded-sm hover:bg-[#25D366]/10"
                    title="Inquire or order this item on WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Inquire / Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pricing & Availability Disclaimer */}
        <div className="mt-12 text-center text-xs text-[#7A746B] max-w-xl mx-auto">
          <p>
            Menu items and seasonal specialties are prepared daily at Palazzo Hotel, Tyre. Inquire with our staff via WhatsApp or call for seasonal prices and current daily chef specials.
          </p>
        </div>
      </div>
    </section>
  );
}
