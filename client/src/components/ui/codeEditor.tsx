
export const CodePane = ({ code }: { code: string }) => {
  return (
    <div className="h-full flex flex-col bg-[#0f172a]">
      <div className="flex items-center justify-between px-4 py-2 bg-[#1e293b] border-b border-slate-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
        </div>
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">generated_ui.tsx</span>
      </div>
      <div className="flex-1 p-6 font-mono text-sm overflow-auto text-blue-300">
        <pre>
          <code>{code || "// AI will generate code here..."}</code>
        </pre>
      </div>
    </div>
  );
};