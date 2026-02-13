import React from 'react';

export const PreviewPane = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full bg-slate-50 flex flex-col p-8 overflow-auto">
      <div className="flex items-center gap-2 mb-6">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Viewport Preview</span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>
      
      {/* The Actual Rendered Content */}
      <div className="w-full max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
        {children || (
          <div className="border-2 border-dashed border-slate-200 rounded-3xl h-64 flex items-center justify-center text-slate-400">
            Waiting for AI to generate components...
          </div>
        )}
      </div>
    </div>
  );
};