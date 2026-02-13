import React from 'react';

interface MainLayoutProps {
  chatSlot: React.ReactNode;
  codeSlot: React.ReactNode;
  previewSlot: React.ReactNode;
}

export const MainLayout = ({ chatSlot, codeSlot, previewSlot }: MainLayoutProps) => {
  return (
    // The h-screen and overflow-hidden ensures it feels like a real desktop app
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden font-sans">
      
      {/* LEFT: CHAT SIDEBAR (Fixed Width) */}
      <aside className="w-[320px] h-full border-r border-slate-200 bg-white flex flex-col shadow-sm">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h1 className="font-bold text-slate-800 tracking-tight">Ryze Studio</h1>
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        </div>
        <div className="flex-1 overflow-hidden">
          {chatSlot}
        </div>
      </aside>

      {/* RIGHT AREA: SPLIT BETWEEN CODE AND PREVIEW */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* TOP TOOLBAR */}
        <header className="h-14 border-b border-slate-200 bg-white flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Workspace</span>
            <div className="h-4 w-px bg-slate-200" />
            <button className="text-xs font-medium text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-md transition-all">
              ↺ Rollback Version
            </button>
          </div>
        </header>

        {/* CONTENT SPLIT */}
        <div className="flex-1 flex overflow-hidden">
          {/* MIDDLE: CODE EDITOR */}
          <section className="w-1/2 border-r border-slate-200 overflow-hidden">
            {codeSlot}
          </section>

          {/* RIGHT: LIVE PREVIEW */}
          <section className="w-1/2 bg-slate-50 overflow-auto relative">
            {previewSlot}
          </section>
        </div>
      </main>
    </div>
  );
};