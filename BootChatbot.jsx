import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  MessageCircle, 
  Calendar, 
  RotateCcw,
  Check,
  ChevronRight
} from 'lucide-react';
import { BOOT_CHAT_SCENARIOS, BRAND_INFO } from '../data/numerologyData';

export default function BootChatbot({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [chatStage, setChatStage] = useState('category1'); // 'category1', 'category2', 'category3', 'completed', 'freeform'
  const [messages, setMessages] = useState([
    {
      id: 'init-1',
      sender: 'bot',
      text: "Namaste! Welcome to Naganiaka, Nakuli Numerology. I am BOOT Chat, your analytical numerology assistant.",
      time: 'Just now'
    },
    {
      id: 'init-2',
      sender: 'bot',
      text: BOOT_CHAT_SCENARIOS.problemDiagnosis.question,
      time: 'Just now',
      stage: 'category1'
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      scrollToBottom();
    }
  }, [isOpen, messages, isTyping]);

  // Handle Decision-Tree selection from user
  const handleOptionSelect = (option, stage) => {
    // Add user message
    const userMsg = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: option.label,
      time: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      if (stage === 'category1') {
        // Response to Category 1
        const botAnswer = {
          id: 'bot-' + Date.now(),
          sender: 'bot',
          text: BOOT_CHAT_SCENARIOS.problemDiagnosis.botResponse,
          time: 'Just now'
        };
        // Next Question: Category 2
        const nextQ = {
          id: 'bot-q2-' + Date.now(),
          sender: 'bot',
          text: BOOT_CHAT_SCENARIOS.solutionRecommendation.question,
          time: 'Just now',
          stage: 'category2'
        };
        setMessages((prev) => [...prev, botAnswer, nextQ]);
        setChatStage('category2');

      } else if (stage === 'category2') {
        // Response to Category 2
        const botAnswer = {
          id: 'bot-' + Date.now(),
          sender: 'bot',
          text: BOOT_CHAT_SCENARIOS.solutionRecommendation.botResponse,
          time: 'Just now'
        };
        // Next Question: Category 3
        const nextQ = {
          id: 'bot-q3-' + Date.now(),
          sender: 'bot',
          text: BOOT_CHAT_SCENARIOS.serviceQueries.question,
          time: 'Just now',
          stage: 'category3'
        };
        setMessages((prev) => [...prev, botAnswer, nextQ]);
        setChatStage('category3');

      } else if (stage === 'category3') {
        // Response to Category 3
        const botAnswer = {
          id: 'bot-' + Date.now(),
          sender: 'bot',
          text: BOOT_CHAT_SCENARIOS.serviceQueries.botResponse,
          time: 'Just now'
        };
        const actionPrompt = {
          id: 'bot-final-' + Date.now(),
          sender: 'bot',
          text: "Would you like me to open our calendar to reserve your preferred consultation slot, or connect you directly with a senior numerologist on WhatsApp?",
          time: 'Just now',
          isFinalAction: true
        };
        setMessages((prev) => [...prev, botAnswer, actionPrompt]);
        setChatStage('completed');
      }
    }, 700);
  };

  // Free-form message input handler
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage.trim();
    setInputMessage('');

    setMessages((prev) => [
      ...prev,
      {
        id: 'user-' + Date.now(),
        sender: 'user',
        text: userText,
        time: 'Just now'
      }
    ]);

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let reply = "Thank you for sharing your inquiry. In Vedic numerology, every concern is connected to planetary transits and numerical frequencies. You can book a direct session or leave your details in our Contact form for an in-depth chart review.";

      const lower = userText.toLowerCase();
      if (lower.includes('marriage') || lower.includes('kundli') || lower.includes('compatibility')) {
        reply = "Marriage harmony is calculated by evaluating Ashtakoota compatibility and your mutual birth dates (Mulank & Bhagyank). We invite you to book our 'Marriage Horoscope & Compatibility' session.";
      } else if (lower.includes('career') || lower.includes('job') || lower.includes('promotion')) {
        reply = "Career breakthroughs correlate directly with your Personal Year vibrations and core Driver Number. We help you time interviews and contract signings to maximize success.";
      } else if (lower.includes('business') || lower.includes('corporate') || lower.includes('company') || lower.includes('name')) {
        reply = "A corporate brand name that vibrates to harmonic numbers (such as 1, 3, 5, or 6) attracts continuous customer trust and sustainable revenue. Our B2B specialists can review your brand name.";
      } else if (lower.includes('free') || lower.includes('hardship') || lower.includes('money')) {
        reply = "We offer compassion-led, zero-fee consultations for anyone facing severe personal or financial hardship. Simply select 'Free Consultation for People in Need' when booking.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: 'bot-' + Date.now(),
          sender: 'bot',
          text: reply,
          time: 'Just now'
        }
      ]);
    }, 900);
  };

  const handleRestart = () => {
    setChatStage('category1');
    setMessages([
      {
        id: 'init-1',
        sender: 'bot',
        text: "Namaste! Welcome back to BOOT Chat.",
        time: 'Just now'
      },
      {
        id: 'init-2',
        sender: 'bot',
        text: BOOT_CHAT_SCENARIOS.problemDiagnosis.question,
        time: 'Just now',
        stage: 'category1'
      }
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group p-3.5 rounded-full bg-gradient-to-tr from-crimson-800 via-crimson-700 to-saffron-600 text-white shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-saffron-400"
          title="Open BOOT Chat Assistant"
        >
          <div className="relative">
            <Bot className="w-7 h-7" />
            <Sparkles className="w-3.5 h-3.5 text-saffron-300 absolute -top-1.5 -right-1.5 animate-spin-slow" />
          </div>

          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-saffron-500 text-slate-950 font-bold text-[10px] flex items-center justify-center border-2 border-white animate-bounce">
              {unreadCount}
            </span>
          )}

          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Chat with BOOT AI Advisor
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[550px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-saffron-300 flex flex-col overflow-hidden animate-fadeIn">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-crimson-900 via-crimson-800 to-saffron-800 text-white p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-white/10 border border-saffron-400/50 flex items-center justify-center">
                <Bot className="w-6 h-6 text-saffron-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-slate-900 absolute bottom-0 right-0"></span>
              </div>
              <div>
                <h4 className="font-serif font-black text-sm text-white">
                  BOOT Chat
                </h4>
                <span className="text-[10px] text-saffron-200 block">
                  Automated Numerology Assistant
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleRestart}
                className="p-1.5 text-saffron-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                title="Restart conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-saffron-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-vedic-parchment/40 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 shadow-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-crimson-800 text-white rounded-br-xs'
                      : 'bg-white text-slate-800 border border-saffron-200/80 rounded-bl-xs'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* If message has Decision-Tree Options */}
                  {msg.stage === 'category1' && chatStage === 'category1' && (
                    <div className="mt-3 space-y-1.5 pt-2 border-t border-saffron-100">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-saffron-800 mb-1">
                        Select Your Challenge:
                      </span>
                      {BOOT_CHAT_SCENARIOS.problemDiagnosis.options.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => handleOptionSelect(opt, 'category1')}
                          className="w-full text-left p-2 rounded-xl bg-saffron-50 hover:bg-saffron-100 text-slate-800 font-medium text-xs border border-saffron-200 transition-colors flex items-center justify-between group"
                        >
                          <span>{opt.label}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-saffron-600 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      ))}
                    </div>
                  )}

                  {msg.stage === 'category2' && chatStage === 'category2' && (
                    <div className="mt-3 space-y-1.5 pt-2 border-t border-saffron-100">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-saffron-800 mb-1">
                        Preferred Assistance Mode:
                      </span>
                      {BOOT_CHAT_SCENARIOS.solutionRecommendation.options.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => handleOptionSelect(opt, 'category2')}
                          className="w-full text-left p-2 rounded-xl bg-saffron-50 hover:bg-saffron-100 text-slate-800 font-medium text-xs border border-saffron-200 transition-colors flex items-center justify-between group"
                        >
                          <span>{opt.label}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-saffron-600 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      ))}
                    </div>
                  )}

                  {msg.stage === 'category3' && chatStage === 'category3' && (
                    <div className="mt-3 space-y-1.5 pt-2 border-t border-saffron-100">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-saffron-800 mb-1">
                        Specific Focus Area:
                      </span>
                      {BOOT_CHAT_SCENARIOS.serviceQueries.options.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => handleOptionSelect(opt, 'category3')}
                          className="w-full text-left p-2 rounded-xl bg-saffron-50 hover:bg-saffron-100 text-slate-800 font-medium text-xs border border-saffron-200 transition-colors flex items-center justify-between group"
                        >
                          <span>{opt.label}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-saffron-600 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Final Actions after decision tree */}
                  {msg.isFinalAction && (
                    <div className="mt-3 space-y-2 pt-2 border-t border-saffron-100">
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          onOpenBooking(null);
                        }}
                        className="w-full py-2.5 px-3 rounded-xl bg-crimson-800 hover:bg-crimson-900 text-white font-serif font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
                      >
                        <Calendar className="w-3.5 h-3.5 text-saffron-300" />
                        <span>Book an Appointment Now</span>
                      </button>

                      <a
                        href={BRAND_INFO.whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Continue on WhatsApp</span>
                      </a>
                    </div>
                  )}
                </div>

                <span className="text-[9px] text-slate-400 mt-0.5 px-1">
                  {msg.time}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-white border border-saffron-200 text-slate-500 w-24">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron-600 animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-saffron-600 animate-bounce delay-100"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-saffron-600 animate-bounce delay-200"></span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-saffron-200 flex items-center gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask BOOT Chat a question..."
              className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-saffron-500"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2 rounded-xl bg-crimson-800 text-white hover:bg-crimson-900 disabled:opacity-40 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
}
