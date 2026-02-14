// components/library/Hero.tsx
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode; // Correct way to type children
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, children }) => {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-black flex flex-col items-center text-center">
      {/* Subtle Radial Gradient for Depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8 max-w-5xl leading-[0.9] antialiased">
        {title}
      </h1>
      
      <p className="text-slate-400 text-base md:text-lg max-w-2xl mb-12 leading-relaxed">
        {subtitle}
      </p>

      <div className="flex items-center justify-center gap-4 relative z-10">
        {children}
      </div>
    </section>
  );
};