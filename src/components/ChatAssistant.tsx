
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/gemini';
import { ChatMessage } from '../types';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm the VetBridge Discovery Assistant. \n\nHow can I help optimize your **practice operations** today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getGeminiResponse([...messages, userMsg]);
    
    setMessages(prev => [...prev, { role: 'model', text: response || "I apologize, I encountered an error. Please try again or book a call!" }]);
    setIsLoading(false);
  };

  const renderFormattedText = (text: string) => {
    return text.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line.split(/(\*\*.*?\*\*|https?:\/\/\S+)/g).map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j} className="font-black text-navy">{part.slice(2, -2)}</strong>;
          }
          if (part.match(/^https?:\/\/\S+$/)) {
            // Remove trailing punctuation from URLs if any
            const url = part.replace(/[.,;!?]$/, '');
            return (
              <a 
                key={j} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-accent-orange font-bold underline break-all hover:text-navy transition-colors"
              >
                {url}
              </a>
            );
          }
          return part;
        })}
        {i !== text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="flex flex-col items-end">
      {isOpen && (
        <div className="w-[380px] h-[600px] bg-white rounded-[2.5rem] shadow-4xl border border-slate-100 mb-6 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-500">
          <div className="bg-navy p-6 text-white flex justify-between items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-10 h-10 bg-accent-orange rounded-2xl flex items-center justify-center text-navy font-black text-lg">V</div>
              <div>
                <h4 className="font-black text-sm uppercase tracking-widest">Discovery Bot</h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Online Analysis</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-accent-orange transition-colors relative z-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6 bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[90%] p-4 px-5 rounded-3xl text-sm leading-relaxed whitespace-pre-wrap ${m.role === 'user' ? 'bg-navy text-white font-medium rounded-tr-none shadow-xl shadow-navy/10' : 'bg-white text-slate-700 shadow-md border border-slate-100 rounded-tl-none'}`}>
                  {m.role === 'model' ? renderFormattedText(m.text) : m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-in fade-in duration-300">
                <div className="bg-white p-4 px-5 rounded-3xl rounded-tl-none border border-slate-100 shadow-md">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-accent-orange rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-accent-orange rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-accent-orange rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-6 border-t bg-white">
            <div className="flex gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-100 focus-within:border-accent-orange focus-within:ring-2 focus-within:ring-accent-orange/10 transition-all">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask our AI expert..."
                className="flex-grow text-sm bg-transparent px-3 py-2 focus:outline-none font-medium"
              />
              <button 
                onClick={handleSend} 
                disabled={!input.trim() || isLoading}
                className="bg-navy text-white p-3 rounded-xl hover:bg-accent-orange hover:text-navy transition-all shadow-lg active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
            <p className="text-[9px] text-center text-slate-400 mt-4 font-bold uppercase tracking-[0.2em]">VetBridge Operational Intelligence</p>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chat"
        className="w-20 h-20 bg-accent-orange text-navy rounded-full shadow-[0_20px_50px_rgba(245,158,11,0.3)] flex items-center justify-center hover:scale-105 hover:-translate-y-1 active:scale-90 transition-all group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
        {isOpen ? (
          <svg className="w-10 h-10 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
        ) : (
          <div className="relative z-10">
             <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
             <span className="absolute -top-1 -right-1 w-4 h-4 bg-navy rounded-full border-2 border-accent-orange animate-pulse"></span>
          </div>
        )}
      </button>
    </div>
  );
};

export default ChatAssistant;
