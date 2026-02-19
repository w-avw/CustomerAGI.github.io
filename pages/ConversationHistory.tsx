import React, { useState } from 'react';
import { 
    Search, 
    Filter, 
    Download, 
    Tag, 
    Sparkles, 
    Bot, 
    User, 
    Headphones,
    MoreHorizontal
} from 'lucide-react';
import { analyzeConversation } from '../services/geminiService';
import { Message } from '../types';

export const ConversationHistory: React.FC = () => {
    // Mock Data for UI
    const mockMessages: Message[] = [
        { id: '1', role: 'model', text: "Hello! I'm your virtual assistant. How can I help you today?", timestamp: new Date() },
        { id: '2', role: 'user', text: "How do I reset my password? I've tried the email link but it says it's expired.", timestamp: new Date() },
        { id: '3', role: 'model', text: "I'm sorry to hear that. Usually, links expire after 30 minutes. Would you like me to trigger a new reset email for you now?", timestamp: new Date() },
        { id: '4', role: 'user', text: "Yes, please. But I also need to update the email address on file because I no longer have access to the primary one.", timestamp: new Date() },
    ];

    const [aiSummary, setAiSummary] = useState<string>("User is unable to access primary email for password reset. Escalated for identity verification.");
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const handleAnalyze = async () => {
        setIsAnalyzing(true);
        const summary = await analyzeConversation(mockMessages);
        setAiSummary(summary);
        setIsAnalyzing(false);
    };

    return (
        <div className="flex h-full bg-slate-50 dark:bg-[#0a0d18] overflow-hidden">
            {/* List Sidebar */}
            <aside className="w-[400px] border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#161b2e] flex flex-col z-10">
                <div className="p-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-xl font-bold text-slate-900 dark:text-white">History</h1>
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-primary-600 text-white rounded-lg text-xs font-bold hover:bg-primary-700 transition-all">
                            <Sparkles size={14} /> Analyze Bulk
                        </button>
                    </div>
                    <div className="relative mb-3">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input 
                            className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary-500/20 transition-all placeholder:text-slate-400 dark:text-white" 
                            placeholder="Search User ID or message..." 
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {/* Selected Item */}
                    <div className="p-4 bg-primary-50 dark:bg-primary-900/10 border-l-4 border-primary-600 cursor-pointer">
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-bold text-slate-900 dark:text-white">User #12940</span>
                            <span className="text-[10px] font-medium text-slate-400 uppercase">10:45 AM</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1">How do I reset my password? I've tried the email link...</p>
                        <div className="mt-2 flex items-center justify-between">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 uppercase tracking-wider">Escalated</span>
                            <span className="text-[10px] text-slate-400 italic">Agent: Sarah M.</span>
                        </div>
                    </div>
                    
                    {/* Other Items */}
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-4 border-b border-slate-50 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-bold text-slate-900 dark:text-white">User #1300{i}</span>
                                <span className="text-[10px] font-medium text-slate-400 uppercase">Yesterday</span>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1">Billing inquiry regarding invoice #4421...</p>
                            <div className="mt-2 flex items-center justify-between">
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 uppercase tracking-wider">Resolved</span>
                                <span className="text-[10px] text-slate-400 italic">Agent: Bot</span>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>

            {/* Reading Pane */}
            <div className="flex-1 flex flex-col min-w-0">
                <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-[#161b2e] border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-4">
                        <div className="size-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-primary-600">
                            <User size={20} />
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-slate-900 dark:text-white leading-none">User #12940</h3>
                            <p className="text-xs text-slate-500 mt-1">ID: session_88294a · Started 10:42 AM</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                            <Tag size={16} /> Tag
                        </button>
                        <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                            <Download size={16} /> Export
                        </button>
                        <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-1"></div>
                        <button 
                            onClick={handleAnalyze}
                            className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/40 rounded-lg transition-colors"
                        >
                            {isAnalyzing ? <span className="animate-spin">⟳</span> : <Sparkles size={16} />}
                            Analyze Flow
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
                     <div className="flex justify-center">
                        <span className="text-[10px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full uppercase tracking-widest">October 25, 2023</span>
                    </div>

                    {/* Messages */}
                    {mockMessages.map((msg) => (
                        <div key={msg.id} className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                            <div className={`size-8 rounded-lg flex items-center justify-center shrink-0 ${msg.role === 'model' ? 'bg-primary-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                                {msg.role === 'model' ? <Bot size={18} /> : <User size={18} />}
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className={`p-4 rounded-xl shadow-sm ${msg.role === 'user' ? 'bg-primary-600 text-white rounded-tr-none' : 'bg-white dark:bg-[#161b2e] border border-slate-100 dark:border-slate-800 rounded-tl-none text-slate-700 dark:text-slate-300'}`}>
                                    <p className="text-sm leading-relaxed">{msg.text}</p>
                                </div>
                                <span className={`text-[10px] text-slate-400 px-1 ${msg.role === 'user' ? 'text-right' : ''}`}>
                                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </div>
                    ))}
                    
                    {/* Escalation Divider */}
                    <div className="flex items-center gap-4 py-2">
                        <div className="h-px flex-1 bg-amber-200 dark:bg-amber-900/50"></div>
                        <div className="flex items-center gap-2 text-amber-600 dark:text-amber-500 font-bold text-[10px] uppercase tracking-widest px-2">
                            <Headphones size={14} /> Escalated to Agent Sarah Miller
                        </div>
                        <div className="h-px flex-1 bg-amber-200 dark:bg-amber-900/50"></div>
                    </div>

                    {/* Human Agent Msg */}
                    <div className="flex gap-3 max-w-[80%]">
                        <div className="size-8 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0">
                            <Headphones size={18} />
                        </div>
                        <div className="flex flex-col gap-1">
                             <div className="bg-white dark:bg-[#161b2e] border border-slate-100 dark:border-slate-800 rounded-xl rounded-tl-none p-4 shadow-sm text-slate-700 dark:text-slate-300">
                                <p className="text-sm leading-relaxed">Hi User #12940, I'm Sarah. I can help with that. To update your email without access to the original, I'll need to verify some details first.</p>
                             </div>
                             <span className="text-[10px] text-slate-400 px-1">10:45 AM · Sarah Miller</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-[#161b2e] border-t border-slate-200 dark:border-slate-800 p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Applied Tags</p>
                        <div className="flex flex-wrap gap-2">
                            {['Account Security', 'Billing'].map(tag => (
                                <span key={tag} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px] font-medium rounded-lg border border-slate-200 dark:border-slate-700 flex items-center gap-1">
                                    {tag} <button className="hover:text-red-500"><XIcon /></button>
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="border-l border-slate-100 dark:border-slate-800 pl-4">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                            AI Summary {isAnalyzing && <span className="animate-pulse w-2 h-2 rounded-full bg-primary-500"></span>}
                        </p>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 italic leading-relaxed">
                            "{aiSummary}"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const XIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
)
