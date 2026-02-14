// components/library/Section.tsx
import React from 'react';

interface SectionProps {
  title: string;
  grid?: boolean;
  bg?: 'white' | 'slate';
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, grid = false, bg = 'slate', children }) => {
  const bgClass = bg === 'white' ? 'bg-white text-black' : 'bg-[#0D0F12] text-white';
  const gridClass = grid ? 'grid grid-cols-1 md:grid-cols-3 gap-8' : 'flex flex-col items-center';

  return (
    <section className={`py-24 px-6 border-b border-white/5 ${bgClass}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-black tracking-tighter mb-16 text-center">{title}</h2>
        <div className={gridClass}>
          {children}
        </div>
      </div>
    </section>
  );
};