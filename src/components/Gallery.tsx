import { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '@/src/data/restaurantData';

type GalleryFilter = 'All' | 'Atmosphere' | 'Food' | 'Drinks';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filterTabs: GalleryFilter[] = ['All', 'Atmosphere', 'Food', 'Drinks'];

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    activeFilter === 'All' ? true : item.category === activeFilter
  );

  const openLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
    setActiveLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_ITEMS.length);
  };

  const prevImage = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex(
      (activeLightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
    );
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#2D4A3E] mb-2">
              Visual Atmosphere
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D3528] tracking-tight">
              Life at Oregano Resto-Café
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#68635B] max-w-xl">
              Glimpse our Mediterranean terrace, vibrant artisanal dishes, and refreshing coastal drinks in Tyre.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 mt-6 md:mt-0">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-sm transition-colors ${
                  activeFilter === tab
                    ? 'bg-[#2D4A3E] text-white'
                    : 'bg-white text-[#575249] border border-[#DDD6CB] hover:bg-[#EAE4DC]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative cursor-pointer overflow-hidden rounded-md bg-[#EBE5DC] border border-[#E3DBD0] shadow-2xs aspect-4/3"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3 right-3 p-1.5 bg-black/40 text-white rounded-xs opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-medium text-[#D49D5A] uppercase tracking-wider block mb-0.5">
                  {item.category}
                </span>
                <h3 className="font-display text-base font-bold leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-1 mt-0.5">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            aria-label="Close photo view"
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 z-10"
          >
            <X className="w-7 h-7" />
          </button>

          <button
            onClick={prevImage}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 z-10 rounded-full hover:bg-white/10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextImage}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 z-10 rounded-full hover:bg-white/10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={GALLERY_ITEMS[activeLightboxIndex].image}
              alt={GALLERY_ITEMS[activeLightboxIndex].title}
              referrerPolicy="no-referrer"
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-md shadow-2xl"
            />
            <div className="mt-4 text-center text-white max-w-lg">
              <span className="text-xs uppercase tracking-wider text-[#D49D5A]">
                {GALLERY_ITEMS[activeLightboxIndex].category}
              </span>
              <h4 className="font-display text-lg font-bold">
                {GALLERY_ITEMS[activeLightboxIndex].title}
              </h4>
              <p className="text-xs text-white/80 mt-1">
                {GALLERY_ITEMS[activeLightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
