import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

const NAV_ITEMS = [
  { label: 'Beranda', path: '/' },
  { label: 'Terbaru', path: '/kategori/terbaru' },
  { label: 'Hiburan', path: '/kategori/hiburan' },
  { label: 'Gaya Hidup', path: '/kategori/gaya-hidup' },
  { label: 'Olahraga', path: '/kategori/olahraga' },
  { label: 'Nasional', path: '/kategori/nasional' },
  { label: 'Internasional', path: '/kategori/internasional' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        isScrolled
          ? "bg-primary-500 shadow-md border-transparent"
          : "bg-white border-b border-neutral-100"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img 
              src="/Standard Collection 10.svg" 
              alt="BeritaKini Logo" 
              className="w-8 h-8 transition-all duration-300" 
              style={{ filter: isScrolled ? 'brightness(0) invert(1)' : 'invert(32%) sepia(93%) saturate(4000%) hue-rotate(198deg) brightness(100%) contrast(104%)' }} 
            />
            <span className={cn(
              "text-xl font-bold transition-colors duration-300",
              isScrolled ? "text-white" : "text-neutral-900"
            )}>
              Berita Kini
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" id="desktop-nav">
            {NAV_ITEMS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  cn(
                    'px-3 py-2 text-caption transition-colors duration-300',
                    isScrolled
                      ? (isActive ? 'text-white font-bold' : 'text-white/90 hover:text-white font-medium')
                      : (isActive ? 'text-primary-500 font-bold' : 'text-neutral-500 hover:text-primary-500 font-medium')
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors duration-300 cursor-pointer",
              isScrolled ? "text-white hover:bg-white/10" : "text-neutral-600 hover:bg-neutral-100"
            )}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={cn(
          "lg:hidden border-t animate-slide-down",
          isScrolled ? "bg-primary-500 border-primary-400" : "bg-white border-neutral-100"
        )} id="mobile-menu">
          <div className="container-custom py-4 space-y-2">
            {NAV_ITEMS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'block px-4 py-2.5 rounded-xl text-caption transition-base',
                    isScrolled
                      ? (isActive ? 'bg-white text-primary-500 font-bold' : 'text-white hover:bg-white/10 font-medium')
                      : (isActive ? 'bg-primary-50 text-primary-500 font-bold' : 'text-neutral-500 hover:text-primary-500 hover:bg-neutral-50 font-medium')
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
