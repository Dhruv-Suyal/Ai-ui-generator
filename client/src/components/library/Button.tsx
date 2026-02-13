

interface ButtonProps {
  label: string;
  /** The visual style of the button */
  variant?: 'primary' | 'secondary' | 'danger';
  /** Optional click handler */
  onClick?: () => void;
  /** Whether the button is in a loading state */
  isLoading?: boolean;
}

export const Button = ({ 
  label, 
  variant = 'primary', 
  onClick, 
  isLoading = false 
}: ButtonProps) => {
  
  // 1. FIXED BASE STYLES: The AI cannot change these.
  const baseStyles = "inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm";

  // 2. FIXED VARIANTS: The AI only chooses the key (e.g., 'primary').
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 border border-transparent",
    secondary: "bg-white text-slate-700 hover:bg-slate-50 focus:ring-slate-200 border border-slate-300",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 border border-transparent",
  };

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Processing...
        </>
      ) : (
        label
      )}
    </button>
  );
};