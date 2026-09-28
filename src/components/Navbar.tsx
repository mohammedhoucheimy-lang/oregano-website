import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '@/src/data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
}

export default function Navbar({ onOpenReservation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Instagram', href: '#instagram' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs py-3.5 border-b border-[#2D4A3E]/10'
            : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: 3 zones */}
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element Brand Zone */}
            <a
              href="#"
              className={`font-display text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-200 ${
                isScrolled ? 'text-[#1D3528]' : 'text-white'
              }`}
            >
              Oregano <span className="font-sans text-xs tracking-wider uppercase font-semibold opacity-85 ml-1">Resto-Café</span>
            </a>

            {/* Zone 2: 4-6 clean text navigation links */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#C88A42] ${
                    isScrolled ? 'text-[#3E3D3A]' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#menu"
                className={`text-xs font-semibold px-4 py-2.5 rounded-sm transition-all whitespace-nowrap ${
                  isScrolled
                    ? 'border border-[#2D4A3E]/30 text-[#1D3528] hover:bg-[#2D4A3E]/5'
                    : 'border border-white/40 text-white hover:bg-white/10'
                }`}
              >
                View Menu
              </a>
              <button
                onClick={onOpenReservation}
                className="text-xs font-semibold px-4 py-2.5 rounded-sm bg-[#2D4A3E] text-white hover:bg-[#22392F] shadow-xs transition-all whitespace-nowrap"
              >
                Reserve Table
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className={`p-2 rounded-sm transition-colors ${
                  isScrolled ? 'text-[#1D3528] hover:bg-[#EAE4DC]' : 'text-white hover:bg-white/10'
                }`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/50 backdrop-blur-xs flex flex-col justify-end">
          <div className="bg-[#FAF8F5] border-t border-[#DED7CE] rounded-t-2xl p-6 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E2D9]">
              <div>
                <span className="font-display text-xl font-bold text-[#1D3528]">Oregano</span>
                <span className="text-xs text-[#7A756D] ml-2">Tyre, Lebanon</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="p-1.5 text-[#5C564D] hover:text-[#1D3528] rounded-full hover:bg-[#EAE4DC]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 text-base font-medium text-[#2E2B27] hover:text-[#2D4A3E] hover:bg-[#EFEAE2] rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-[#E8E2D9] space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 bg-[#2D4A3E] text-white rounded-md text-sm font-semibold hover:bg-[#22392F] transition-colors"
              >
                Reserve a Table
              </button>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${RESTAURANT_INFO.phones[0].clean}`}
                  className="flex items-center justify-center gap-2 py-2.5 border border-[#D5CEC4] text-[#2E2B27] rounded-md text-xs font-semibold hover:bg-[#EFEAE2]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#2D4A3E]" /> Call Us
                </a>
                <a
                  href={RESTAURANT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#128C7E] rounded-md text-xs font-semibold hover:bg-[#25D366]/20"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
