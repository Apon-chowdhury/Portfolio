
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Terminal, Flame } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { PROFILE_DATA } from '../constants';

interface ChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatDrawer: React.FC<ChatDrawerProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `GGMU! 🔴 I'm Apon's digital assistant. Ask me about his tactics in Product Management, his SQL formation, or his transfer history at Barikoi.`,
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const responseText = await sendMessageToGemini(userMsg.text, history);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm">
      <div className="w-full md:w-[400px] h-full bg-[#050505] border-l border-[#DA291C] shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="p-4 border-b border-[#DA291C] flex items-center justify-between bg-[#0a0a0a] z-10">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-[#DA291C] rounded-md flex items-center justify-center text-white shadow-lg">
                <Flame size={20} fill="#FBE122" className="text-[#FBE122]" />
             </div>
             <div>
                <h3 className="font-bold text-sm text-white uppercase tracking-wider">Red Devil AI</h3>
                <p className="text-xs text-[#DA291C] font-mono">Online • Ready</p>
             </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-[#DA291C] rounded-md transition text-gray-500 hover:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-[#050505]">
          {messages.map((msg) => (
            <div 
                key={msg.id} 
                className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
                <div 
                    className={`max-w-[85%] rounded-none px-4 py-3 text-sm font-mono shadow-sm border
                    ${msg.role === 'user' 
                        ? 'bg-[#DA291C] text-white border-[#DA291C]' 
                        : 'bg-[#111] text-gray-300 border-[#333]'
                    }`}
                >
                    {msg.text}
                </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex justify-start">
                 <div className="bg-[#111] border border-[#333] rounded-none px-4 py-3 flex items-center gap-1">
                    <span className="w-2 h-2 bg-[#DA291C] rounded-full animate-pulse"></span>
                    <span className="w-2 h-2 bg-[#DA291C] rounded-full animate-pulse delay-100"></span>
                    <span className="w-2 h-2 bg-[#DA291C] rounded-full animate-pulse delay-200"></span>
                 </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-[#0a0a0a] border-t border-[#333]">
            <div className="relative flex items-center">
                <span className="absolute left-3 text-[#DA291C] font-mono">{'>'}</span>
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Ask about tactics..."
                    className="w-full bg-[#111] border border-[#333] rounded-sm pl-8 pr-12 py-3 text-sm text-white font-mono focus:outline-none focus:border-[#DA291C] focus:ring-1 focus:ring-[#DA291C] placeholder-gray-600"
                />
                <button 
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className={`absolute right-2 p-2 rounded-sm ${input.trim() ? 'text-[#DA291C] hover:bg-[#DA291C] hover:text-white' : 'text-gray-700'} transition-colors`}
                >
                    <Send size={18} />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDrawer;