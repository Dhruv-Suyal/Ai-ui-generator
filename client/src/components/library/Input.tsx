import React from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ label, placeholder, type = "text", value, onChange }) => (
  /* Added mb-6 for consistent spacing between stacked inputs */
  <div className="w-full flex flex-col gap-1.5 mb-6 last:mb-0">
    {label && (
      <label className="text-[11px] font-black text-slate-500 ml-1 tracking-widest uppercase">
        {label}
      </label>
    )}
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm 
                 transition-all duration-200 placeholder:text-slate-400 
                 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none
                 hover:border-slate-300"
    />
  </div>
);