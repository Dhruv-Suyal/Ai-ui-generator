interface InputProps {
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  value?: string;
  onChange?: (val: string) => void;
}

export const Input = ({ label, placeholder, type = 'text', value, onChange }: InputProps) => {
  return (
    <div className="space-y-1.5 w-full">
      <label className="text-sm font-medium text-slate-700 ml-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
      />
    </div>
  );
};