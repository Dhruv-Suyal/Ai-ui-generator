
import { LiveRunner } from './liveRunner';

export const PreviewPane = ({ code }: { code: string }) => {
  return (
    <div className="flex flex-col h-full bg-slate-50">
      {/* Browser Chrome Header */}
      <div className="h-12 bg-white border-b border-slate-200 flex items-center px-4 justify-between">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-slate-200" />
          <div className="w-3 h-3 rounded-full bg-slate-200" />
          <div className="w-3 h-3 rounded-full bg-slate-200" />
        </div>
        <div className="bg-slate-100 rounded-md px-10 py-1 text-[10px] text-slate-400 font-medium">
          preview.design-engine.ai
        </div>
        <div className="flex gap-4">
           <div className="w-4 h-4 bg-slate-100 rounded" />
        </div>
      </div>

      {/* The Actual Render Area */}
      <div className="flex-1 overflow-hidden relative">
        {code ? (
          <LiveRunner code={code} />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-300">
             <div className="w-16 h-16 border-2 border-dashed border-slate-200 rounded-full mb-4 animate-spin-slow" />
             <p className="text-sm font-medium">Waiting for your instructions...</p>
          </div>
        )}
      </div>
    </div>
  );
};