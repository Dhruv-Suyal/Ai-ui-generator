import { useState } from 'react';

// 1. Define the Message type here so TypeScript doesn't complain
type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  reasoning?: string; // Optional field for AI's "Explainer" logic
};

interface ChatPanelProps {
  onSendMessage: (message: string) => void; 
  messages: Message[]; 
}

export const ChatPanel = ({ onSendMessage, messages }: ChatPanelProps) => {
  const [input, setInput] = useState<string>(''); 

  const handleSend = () => {
    if (!input.trim()) return;
    onSendMessage(input);
    setInput('');
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* 2. DYNAMIC MESSAGE HISTORY */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <p className="text-center text-slate-400 text-sm mt-10">
            No messages yet. Try asking for a "Dashboard with a table".
          </p>
        )}
        
        {messages.map((msg) => (
          <div key={msg.id} className="space-y-2">
            {/* User Message */}
            {msg.role === 'user' ? (
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 ml-4">
                <p className="text-xs font-bold text-blue-600 uppercase mb-1">You</p>
                <p className="text-sm text-slate-700">{msg.content}</p>
              </div>
            ) : (
              /* AI Assistant Message + Reasoning */
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mr-4 shadow-sm">
                <p className="text-xs font-bold text-indigo-600 uppercase mb-1">AI Assistant</p>
                <p className="text-sm text-slate-700 mb-3">{msg.content}</p>
                
                {/* AI Explainer / Reasoning Section */}
                {msg.reasoning && (
                  <div className="mt-2 pt-2 border-t border-slate-200">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Reasoning</p>
                    <p className="text-xs text-slate-500 italic">{msg.reasoning}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-slate-100">
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Describe your UI..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none h-24"
          />
          <button 
            onClick={handleSend}
            className="absolute bottom-3 right-3 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};