
interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
}

export const Button = ({ label, variant = 'primary', onClick }: ButtonProps) => {
  const baseClasses = "px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 active:scale-95 flex items-center justify-center min-w-[140px]";
  const responsiveClasses = "w-full sm:w-auto";

  const variants = {
    primary: "bg-slate-900 text-white hover:bg-indigo-600 shadow-lg shadow-indigo-100 border border-transparent",
    secondary: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm",
    danger: "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-100 border border-transparent"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseClasses} ${responsiveClasses} ${variants[variant]}`}
    >
      {label}
    </button>
  );
};