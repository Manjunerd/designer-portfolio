import { Mail, ArrowUpRight, Sparkles, MapPin, Globe } from 'lucide-react';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function Footer({ data }) {
  const {
    instagram = { handle: "@alexrivers.design", url: "https://instagram.com" },
    email = { address: "alex.rivers.design@example.com", mailto: "mailto:alex.rivers.design@example.com" },
    location = "TOKYO / NEW YORK",
    status = "OPEN FOR COMMISSIONS Q3/Q4 2026",
    copyright = "© 2026 ALEX RIVERS. ALL RIGHTS RESERVED. RISOGRAPH CANVAS EDITION."
  } = data || {};

  return (
    <footer id="contact" className="section-container border-t-4 border-[#0c0c0c] pt-16 pb-12">
      {/* Poster Colophon Main Card */}
      <div className="bg-[#0c0c0c] text-[#f8f5ee] border-3 border-[#f8f5ee] shadow-[12px_12px_0px_#f8f5ee] p-8 md:p-14 relative overflow-hidden">
        {/* Decorative Watermark Stamp */}
        <div className="absolute -right-12 -bottom-12 opacity-10 pointer-events-none select-none">
          <span className="font-display text-[180px] font-black text-[#f8f5ee] leading-none">
            END
          </span>
        </div>

        {/* Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b-2 border-dashed border-[#f8f5ee]/40 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#ffd000] inline-block"></span>
            <span className="font-mono text-xs font-bold text-[#ffd000] tracking-widest uppercase">
              POSTER COLOPHON // CONTACT &amp; INQUIRIES
            </span>
          </div>

          <div className="font-mono text-xs text-[#f8f5ee] bg-[#d32222] px-3 py-1 border border-[#f8f5ee] font-bold">
            {status}
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-[#f8f5ee] tracking-tight leading-[0.9] mb-4">
            LET'S CREATE SOMETHING <span className="text-[#ffd000]">UNFORGETTABLE.</span>
          </h2>
          <p className="font-sans text-base md:text-xl text-[#f8f5ee]/80 font-medium">
            Available for brand design, editorial publications, poster series, and creative direction worldwide.
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Instagram Handle Box */}
          <a
            href={instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#f8f5ee] text-[#0c0c0c] p-6 border-3 border-[#0c0c0c] shadow-[6px_6px_0px_#ffd000] hover:bg-[#ffd000] transition-all duration-200 text-decoration-none"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold tracking-wider text-[#d32222] flex items-center gap-1.5">
                <InstagramIcon className="w-4 h-4 text-[#0c0c0c]" /> INSTAGRAM
              </span>
              <ArrowUpRight className="w-5 h-5 text-[#0c0c0c] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <div className="font-display text-2xl md:text-3xl font-black tracking-tight">
              {instagram.handle}
            </div>
            <p className="font-mono text-xs text-[#0c0c0c]/70 mt-1">
              Daily poster design process, zine previews &amp; visual experiments
            </p>
          </a>

          {/* Email Mailto Box */}
          <a
            href={email.mailto}
            className="group bg-[#f8f5ee] text-[#0c0c0c] p-6 border-3 border-[#0c0c0c] shadow-[6px_6px_0px_#d32222] hover:bg-[#d32222] hover:text-[#f8f5ee] transition-all duration-200 text-decoration-none"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold tracking-wider text-[#0c0c0c] group-hover:text-[#ffd000] flex items-center gap-1.5">
                <Mail className="w-4 h-4" /> DIRECT EMAIL
              </span>
              <ArrowUpRight className="w-5 h-5 text-[#0c0c0c] group-hover:text-[#f8f5ee] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <div className="font-display text-xl sm:text-2xl md:text-3xl font-black tracking-tight break-all">
              {email.address}
            </div>
            <p className="font-mono text-xs text-[#0c0c0c]/70 group-hover:text-[#f8f5ee]/80 mt-1">
              Click to send direct email inquiry via default mail client
            </p>
          </a>
        </div>

        {/* Footer Meta Row */}
        <div className="pt-6 border-t-2 border-[#f8f5ee]/30 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-[#f8f5ee]/80">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#ffd000]" />
            <span>STUDIO LOCATIONS: {location}</span>
          </div>

          <div className="text-center md:text-right text-[11px]">
            {copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}
