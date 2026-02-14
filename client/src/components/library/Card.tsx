interface CardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, description, children }) => (
  <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm 
                  transition-all duration-300 ease-out
                  /* HOVER EFFECTS: Lifts up, deepens shadow, tints border */
                  hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-200 
                  cursor-pointer group">
    
    <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2 group-hover:text-indigo-600 transition-colors">
      {title}
    </h3>
    
    {description && (
      <p className="text-sm text-slate-500 leading-relaxed mb-4">
        {description}
      </p>
    )}
    
    <div className="mt-2">
      {children}
    </div>
  </div>
);