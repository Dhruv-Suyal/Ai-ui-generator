import { useState } from 'react';
import { MainLayout } from './components/ui/MainLayout';
import { ChatPanel } from './components/ui/chatPanel'; // Ensure casing matches filename
import { CodePane } from './components/ui/codeEditor';     // Ensure casing matches filename
import { PreviewPane } from './components/ui/livePreview'; // Ensure casing matches filename

// 1. Updated Type to include 'id' and 'reasoning' (for the AI Explainer requirement)
type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  reasoning?: string; 
};

export default function App() {
  // 2. Added missing state for 'messages' and 'code'
  const [messages, setMessages] = useState<Message[]>([]);
  const [code, setCode] = useState<string>("// Describe a UI to generate code...");

  const handleSendMessage = (text: string) => {
    // 3. Create the user message object with the correct type
    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text
    };

    setMessages(prev => [...prev, newUserMessage]);

    // This is where you'll trigger your Agent (Planner -> Generator -> Explainer)
    console.log("User sent:", text);
  };

  return (
    <MainLayout
      chatSlot={
        <ChatPanel 
          messages={messages} 
          onSendMessage={handleSendMessage} 
        />
      }
      codeSlot={
        <CodePane code={code} />
      }
      previewSlot={
        <PreviewPane>
          <div className="text-center p-20 text-slate-400 italic">
            Describe a component in the chat to see it rendered here.
          </div>
        </PreviewPane>
      }
    />
  );
}