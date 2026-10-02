import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar({ heroName = "ALEX RIVERS" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ['about', 'casual', 'professional', 'featured', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'CASUAL WORK', href: '#casual', id: 'casual' },
    { label: 'PRO WORK', href: '#professional', id: 'professional' },
    { label: 'FEATURED', href: '#featured', id: 'featured' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 px-4 py-3 md:py-4">
      <div className="max-w-[1400px] mx-auto">
        <div
          className={`flex items-center justify-between px-6 py-3 bg-[#f8f5ee] border-3 border-[#0c0c0c] transition-all duration-300 ${
            scrolled ? 'shadow-[6px_6px_0px_#0c0c0c]' : 'shadow-[4px_4px_0px_#0c0c0c]'
          }`}
        >
          {/* Logo / Name */}
          <a
            href="#about"
            className="flex items-center gap-2 group text-decoration-none"
          >
            <div className="w-8 h-8 bg-[#d32222] border-2 border-[#0c0c0c] flex items-center justify-center text-[#ffd000] font-black text-sm group-hover:rotate-12 transition-transform">
              <Sparkles className="w-4 h-4 text-[#ffd000]" />
            </div>
            <div>
              <span className="font-display font-black text-lg md:text-xl tracking-tight text-[#0c0c0c] block leading-none">
                {heroName}
              </span>
              <span className="font-mono text-[10px] text-[#0c0c0c] opacity-80 block tracking-widest mt-0.5">
                VISUAL ARTIST &amp; DESIGNER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 font-mono text-xs font-bold tracking-wider transition-all border-2 border-transparent ${
                    isActive
                      ? 'bg-[#0c0c0c] text-[#ffd000] border-[#0c0c0c] shadow-[2px_2px_0px_#d32222]'
                      : 'text-[#0c0c0c] hover:bg-[#ffd000] hover:border-[#0c0c0c]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Contact Button / Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-1 px-4 py-2 bg-[#ffd000] text-[#0c0c0c] font-display font-black text-xs tracking-wider border-2 border-[#0c0c0c] shadow-[3px_3px_0px_#0c0c0c] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#0c0c0c] transition-all"
            >
              GET IN TOUCH <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 bg-[#ffd000] border-2 border-[#0c0c0c] text-[#0c0c0c] shadow-[2px_2px_0px_#0c0c0c] hover:bg-[#0c0c0c] hover:text-[#ffd000] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 bg-[#f8f5ee] border-3 border-[#0c0c0c] shadow-[6px_6px_0px_#0c0c0c] flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 bg-[#0c0c0c] text-[#f8f5ee] font-display font-black text-sm tracking-wider border-2 border-[#0c0c0c] hover:bg-[#ffd000] hover:text-[#0c0c0c] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
