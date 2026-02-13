interface NavbarProps {
  brand: string;
  links: { label: string; href: string }[];
}

export const Navbar = ({ brand, links }: NavbarProps) => {
  return (
    <nav className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50 px-8 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {brand}
        </span>
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300" />
    </nav>
  );
};