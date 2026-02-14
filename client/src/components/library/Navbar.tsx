import { useState } from 'react';

interface NavbarProps {
  logo?: string;
  links?: { label: string; href: string }[];
}

export const Navbar = ({ 
  logo = "DESIGN.AI", 
  links 
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // If links is missing or empty, use these defaults to keep the UI "Beautiful"
  const finalLinks = links && links.length > 0 ? links : [
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Company', href: '#' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-100 bg-white/90 backdrop-blur-md border-b border-slate-200 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo - Indigo color makes it visible even if background is bright */}
          <div className="text-2xl font-black text-indigo-600 tracking-tighter">
            {logo}
          </div>

          {/* Desktop Links - Using finalLinks ensures this is NEVER empty */}
          <div className="hidden md:flex items-center gap-10">
            {finalLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.href} 
                className="text-sm font-bold text-slate-800 hover:text-indigo-600 transition-colors uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-xs font-black hover:bg-indigo-600 transition-all">
              GET STARTED
            </button>
          </div>
          
          {/* Mobile Toggle Button */}
          <button className="md:hidden p-2 text-slate-900" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16m-7 6h7" />}
            </svg>
          </button>
        </div>
      </nav>
      {/* Spacer to prevent Hero overlap */}
      <div className="h-20 w-full" />
    </>
  );
};