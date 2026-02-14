import { LiveProvider, LiveEditor } from 'react-live';
import { themes } from 'prism-react-renderer'; // Usually comes with react-live

interface CodePaneProps {
  code: string;
}

export const CodePane = ({ code }: CodePaneProps) => {
  return (
    <div className="flex flex-col h-full bg-[#0D0F12] overflow-hidden">
      {/* Tab Header Metadata */}
      <div className="h-12 flex items-center px-6 bg-[#080A0C] border-b border-white/5 justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          </div>
          <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest ml-2">
            main.tsx
          </span>
        </div>
        <span className="text-[10px] text-slate-600 font-mono italic">ReadOnly Mode</span>
      </div>

      {/* The Editor Window */}
      <div className="flex-1 overflow-auto custom-scrollbar">
        {/* Note: We use LiveProvider here ONLY for the theme/highlighting context */}
        <LiveProvider code={code} theme={themes.vsDark}>
          <LiveEditor 
            disabled 
            className="font-mono text-[13px] leading-relaxed min-h-full"
            style={{
              fontFamily: '"Fira Code", "JetBrains Mono", monospace',
              backgroundColor: 'transparent',
            }}
          />
        </LiveProvider>
      </div>

      {/* Bottom Status Bar */}
      <div className="h-8 bg-[#080A0C] border-t border-white/5 flex items-center px-4 justify-between text-[10px] text-slate-500 font-mono">
        <div className="flex gap-4">
          <span>Ln 1, Col 1</span>
          <span>Spaces: 2</span>
        </div>
        <div className="flex gap-4">
          <span>UTF-8</span>
          <span className="text-indigo-400 font-bold">JSX</span>
        </div>
      </div>
    </div>
  );
};