import React, { useRef, useEffect } from 'react';

// Defining the shape of data to prevent TypeScript errors
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface ChatPanelProps {
  messages: Message[];
  input: string;
  setInput: (value: string) => void;
  onSendMessage: () => void;
  isLoading: boolean;
  onRollback: () => void;
  canRollback: boolean;
}

export const ChatPanel: React.FC<ChatPanelProps> = ({ 
  messages, 
  input, 
  setInput, 
  onSendMessage, 
  isLoading, 
  onRollback, 
  canRollback 
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full bg-[#0D0F12] border-r border-white/5">
      {/* Header */}
      <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#0D0F12]/80 backdrop-blur-md sticky top-0 z-10">
        <div>
          <h2 className="text-white font-black tracking-tighter text-lg uppercase">Design Engine</h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">System Online</span>
          </div>
        </div>
        
        <button 
          onClick={onRollback}
          disabled={!canRollback || isLoading}
          className="text-[10px] font-black text-indigo-400 border border-indigo-400/30 px-4 py-1.5 rounded-full hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all disabled:opacity-10 disabled:grayscale uppercase tracking-widest"
        >
          Rollback
        </button>
      </div>

      {/* Message Feed */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar"
      >
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center opacity-20 text-center px-4">
             <div className="w-12 h-12 mb-4 border border-white/20 rounded-xl rotate-45 flex items-center justify-center">
                <span className="-rotate-45 text-white">✨</span>
             </div>
             <p className="text-xs text-white uppercase tracking-widest font-bold">Awaiting Instructions</p>
          </div>
        )}

        {messages.map((msg) => (
          <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
            <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em] mb-2">
              {msg.role === 'user' ? 'Operator' : 'AI Architect'}
            </span>
            <div className={`max-w-[90%] p-4 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-900/20 rounded-tr-none' 
                : 'bg-[#161920] text-slate-300 border border-white/5 rounded-tl-none'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex flex-col items-start animate-pulse">
            <span className="text-[9px] font-black text-indigo-500 uppercase tracking-[0.2em] mb-2">Computing...</span>
            <div className="bg-[#161920] p-4 rounded-2xl border border-white/5 w-2/3 h-12" />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-6 bg-[#0D0F12] border-t border-white/5">
        <div className="relative group">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                onSendMessage();
              }
            }}
            placeholder="Describe your interface..."
            className="w-full bg-[#161920] text-white text-sm rounded-2xl p-4 pr-14 border border-white/10 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 outline-none transition-all resize-none h-25 custom-scrollbar"
          />
          <button 
            onClick={onSendMessage}
            disabled={isLoading || !input.trim()}
            className="absolute bottom-4 right-4 p-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-all disabled:opacity-20 shadow-lg shadow-indigo-600/20 active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <p className="text-[9px] text-slate-700 mt-3 text-center uppercase tracking-widest font-bold">
          Press <kbd className="bg-white/5 px-1 rounded text-slate-500">Enter</kbd> to execute
        </p>
      </div>
    </div>
  );
};