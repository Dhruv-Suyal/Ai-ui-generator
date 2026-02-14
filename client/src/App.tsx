import { useState, useEffect } from 'react';
import { MainLayout } from './components/ui/MainLayout';
import { ChatPanel } from './components/ui/chatPanel'; 
import { CodePane } from './components/ui/codeEditor';      
import { PreviewPane } from './components/ui/livePreview'; 
import { generateUI } from './services/ai';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function App() {
  // 1. LAZY INITIALIZATION: Start state with data already inside it
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem('studio_chat');
    return saved ? JSON.parse(saved) : [];
  });

  const [code, setCode] = useState<string>(() => {
    return localStorage.getItem('studio_code') || '<Hero title="Design Studio" />';
  });

  // 2. OTHER STATES
  const [input, setInput] = useState(''); 
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [historyStack, setHistoryStack] = useState<string[]>([]);

  
  useEffect(() => {
    localStorage.setItem('studio_chat', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem('studio_code', code);
  }, [code]);

  // 4. ROLLBACK LOGIC
  const handleRollback = () => {
    if (historyStack.length === 0) return;
    const newStack = [...historyStack];
    const previousCode = newStack.pop(); 
    
    if (previousCode) {
      setCode(previousCode);
      setHistoryStack(newStack);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'assistant', 
        content: "⏪ Restored the previous version." 
      }]);
    }
  };

  // 5. SEND MESSAGE LOGIC
  const handleSendMessage = async () => {
    if (!input.trim() || isGenerating) return;

    
    setHistoryStack(prev => [...prev, code]);

    const userText = input;
    setInput(''); 
    
    setMessages(prev => [...prev, { 
      id: Date.now().toString(), 
      role: 'user', 
      content: userText 
    }]);
    
    setIsGenerating(true);

    try {
      const result = await generateUI(userText);
      if (result.code) {
        setCode(result.code);
        setActiveTab('preview'); // Auto-switch to preview on success
      }
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'assistant', 
        content: "Design updated successfully." 
      }]);
    } catch (err) {
      console.error("AI Generation Error:", err);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'assistant', 
        content: "I encountered an error. Please check your API key." 
      }]);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <MainLayout
      chatSlot={
        <ChatPanel 
          messages={messages} 
          input={input}
          setInput={setInput}
          onSendMessage={handleSendMessage} 
          isLoading={isGenerating}
          onRollback={handleRollback}
          canRollback={historyStack.length > 0}
        />
      }
      workspaceSlot={
        <div className="flex flex-col h-full bg-[#0D0F12]">
          {/* Workspace Tabs */}
          <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#080A0C]">
            <div className="flex bg-[#161920] p-1 rounded-xl border border-white/5">
              <button 
                onClick={() => setActiveTab('preview')} 
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'preview' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                Preview
              </button>
              <button 
                onClick={() => setActiveTab('code')} 
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'code' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                Code
              </button>
            </div>
            <div className="text-[10px] text-slate-500 font-mono hidden md:block uppercase tracking-widest">
              {activeTab === 'preview' ? '● Live' : '○ Source'}
            </div>
          </div>

          {/* Dynamic Content Area */}
          <div className="flex-1 overflow-hidden">
            {activeTab === 'preview' ? (
              <PreviewPane code={code} />
            ) : (
              <CodePane code={code} />
            )}
          </div>
        </div>
      }
    />
  );
}