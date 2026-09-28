import { Instagram, Heart, ExternalLink } from 'lucide-react';
import { INSTAGRAM_HIGHLIGHTS, RESTAURANT_INFO } from '@/src/data/restaurantData';

export default function InstagramFeed() {
  return (
    <section id="instagram" className="py-20 sm:py-28 bg-[#F5F1EB] border-b border-[#E6DFD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Verified Handle */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2D4A3E] mb-2">
              <Instagram className="w-3.5 h-3.5 text-[#C88A42]" />
              <span>Social Spotlight</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D3528] tracking-tight">
              Follow Oregano on Instagram
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#68635B]">
              Discover daily vibes, specials, and sea view sunsets at{' '}
              <a
                href={RESTAURANT_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#1D3528] hover:text-[#C88A42] underline underline-offset-2"
              >
                {RESTAURANT_INFO.instagram.handle}
              </a>
            </p>
          </div>

          <div className="mt-6 sm:mt-0">
            <a
              href={RESTAURANT_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#2D4A3E] text-white hover:bg-[#1F362B] text-xs font-semibold transition-colors shadow-xs"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow us on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_HIGHLIGHTS.map((post) => (
            <a
              key={post.id}
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-md border border-[#E3DBD0] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#2D4A3E]/30 transition-all duration-200"
            >
              {/* Photo */}
              <div className="relative aspect-square overflow-hidden bg-[#EAE4DC]">
                <img
                  src={post.image}
                  alt={post.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold">
                    <Heart className="w-4 h-4 fill-white text-white" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Caption & Metadata */}
              <div className="p-4">
                <div className="flex items-center justify-between text-[11px] text-[#8C867C] mb-1.5">
                  <span className="font-semibold text-[#1D3528]">{post.tag}</span>
                  <span>{post.date}</span>
                </div>
                <p className="text-xs text-[#524D45] line-clamp-3 leading-relaxed">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Direct Link Banner */}
        <div className="mt-10 p-5 bg-white rounded-md border border-[#E4DCD0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white shrink-0">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1D3528]">Tag us in your Tyre memories</p>
              <p className="text-xs text-[#736D64]">Use #OreganoTyre to be featured on our official Instagram story.</p>
            </div>
          </div>
          <a
            href={RESTAURANT_INFO.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#2D4A3E] hover:text-[#1D3528] flex items-center gap-1 whitespace-nowrap"
          >
            <span>Visit @oregano_tyre</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
