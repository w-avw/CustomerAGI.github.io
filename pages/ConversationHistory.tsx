import React, { useState } from 'react';
import {
    Search,
    Download,
    Tag,
    Bot,
    User,
    Headphones,
    MoreHorizontal,
    Send,
    Trash2,
    RefreshCw,
    ChevronDown
} from 'lucide-react';
import { Message } from '../types';

export const ConversationHistory: React.FC = () => {
    // Mock Data for UI
    const mockMessages: Message[] = [
        { id: '1', role: 'model', text: "Hello! I'm your virtual assistant. How can I help you today?", timestamp: new Date() },
        { id: '2', role: 'user', text: "How do I reset my password? I've tried the email link but it says it's expired.", timestamp: new Date() },
        { id: '3', role: 'model', text: "I'm sorry to hear that. Usually, links expire after 30 minutes. Would you like me to trigger a new reset email for you now?", timestamp: new Date() },
        { id: '4', role: 'user', text: "Yes, please. But I also need to update the email address on file because I no longer have access to the primary one.", timestamp: new Date() },
    ];

    const [isHumanTakeover, setIsHumanTakeover] = useState(false);
    const [humanMessage, setHumanMessage] = useState("");

    return (
        <div className="flex h-full bg-slate-50 dark:bg-[#0a0d18] overflow-hidden">
            {/* List Sidebar */}
            <aside className="w-[380px] border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#161b2e] flex flex-col z-10 shrink-0">
                <div className="p-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Conversations</h1>
                    </div>

                    {/* Search Bar */}
                    <div className="relative mb-3">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                            className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-400 dark:text-white"
                            placeholder="Search messages..."
                        />
                    </div>

                    {/* Highly visible dropdown filters */}
                    <div className="flex gap-2">
                        <select className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs font-semibold px-2 py-1.5 focus:border-primary-500 text-slate-600 dark:text-slate-300 outline-none cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <option>Date: Any</option>
                            <option>Today</option>
                            <option>Yesterday</option>
                            <option>Last 7 Days</option>
                        </select>
                        <select className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs font-semibold px-2 py-1.5 focus:border-primary-500 text-slate-600 dark:text-slate-300 outline-none cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <option>Status: All</option>
                            <option>Escalated</option>
                            <option>Resolved</option>
                            <option>Active</option>
                        </select>
                        <select className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs font-semibold px-2 py-1.5 focus:border-primary-500 text-slate-600 dark:text-slate-300 outline-none cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <option>Agent: All</option>
                            <option>Support V2</option>
                            <option>Sales GPT</option>
                            <option>Unassigned</option>
                        </select>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {/* Selected Item */}
                    <div className="p-4 bg-primary-50/50 dark:bg-primary-900/10 border-l-4 border-primary-500 cursor-pointer">
                        <div className="flex items-start justify-between mb-1.5">
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-slate-900 dark:text-white">User #12940</span>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    <div className="flex items-center justify-center p-0.5 rounded bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-400">
                                        <Bot size={10} />
                                    </div>
                                    <span className="text-[11px] font-bold text-primary-600 dark:text-primary-400">Support Agent V2</span>
                                </div>
                            </div>
                            <span className="text-[10px] font-medium text-slate-400 whitespace-nowrap">10:45 AM</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                            How do I reset my password? I've tried the email link...
                        </p>
                        {/* Custom visual tags */}
                        <div className="mt-3 flex flex-wrap items-center gap-1.5">
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800 uppercase tracking-widest">
                                Escalated
                            </span>
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border border-purple-200 dark:border-purple-800 uppercase tracking-widest">
                                VIP
                            </span>
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] items-center gap-1 font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800">
                                <Tag size={10} /> Account
                            </span>
                        </div>
                    </div>

                    {/* Other Items */}
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-4 border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors border-l-4 border-transparent">
                            <div className="flex items-start justify-between mb-1.5">
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-slate-900 dark:text-white">User #1300{i}</span>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <div className="flex items-center justify-center p-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400">
                                            <Bot size={10} />
                                        </div>
                                        <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">Sales GPT</span>
                                    </div>
                                </div>
                                <span className="text-[10px] font-medium text-slate-400 whitespace-nowrap">Yesterday</span>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                                Billing inquiry regarding invoice #4421...
                            </p>
                            <div className="mt-3 flex flex-wrap items-center gap-1.5">
                                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] items-center gap-1 font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800">
                                    <Tag size={10} /> Billing
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-[#0a0d18]">
                {/* Header */}
                <header className="flex items-center justify-between px-6 h-[80px] bg-white dark:bg-[#161b2e] border-b border-slate-200 dark:border-slate-800 shrink-0">
                    <div className="flex items-center gap-6">
                        {/* User Details */}
                        <div className="flex items-center gap-3">
                            <div className="size-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 shadow-inner">
                                <User size={20} />
                            </div>
                            <div>
                                <h3 className="text-base font-extrabold text-slate-900 dark:text-white leading-none">User #12940</h3>
                                <div className="flex items-center gap-1.5 mt-1.5">
                                    <div className="size-1.5 rounded-full bg-emerald-500 shrink-0 animate-pulse"></div>
                                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Active now</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-px h-10 bg-slate-200 dark:bg-slate-800"></div>

                        {/* Highly Visual Assigned Agent Selector */}
                        <div className="flex flex-col">
                            <p className="text-[9px] uppercase font-bold text-slate-400 mb-1 tracking-widest">Active Agent Handing User</p>
                            <div className="flex items-center gap-2 bg-primary-50 dark:bg-[#1e2746] border border-primary-200 dark:border-primary-800/50 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors shadow-sm">
                                <div className="size-5 rounded bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                                    <Bot size={12} />
                                </div>
                                <span className="text-sm font-bold text-primary-700 dark:text-primary-300">Support Agent V2</span>
                                <ChevronDown size={14} className="text-primary-500 dark:text-primary-400 ml-2" />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Takeover Toggle */}
                        <button
                            onClick={() => setIsHumanTakeover(!isHumanTakeover)}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm ${isHumanTakeover
                                    ? 'bg-amber-100 text-amber-700 border border-amber-200 hover:bg-amber-200 dark:bg-amber-500/20 dark:border-amber-500/30 dark:text-amber-400 hover:dark:bg-amber-500/30'
                                    : 'bg-primary-50 text-primary-600 border border-primary-100 hover:bg-primary-100 dark:bg-primary-500/10 dark:border-primary-500/20 dark:text-primary-400 hover:dark:bg-primary-500/20'
                                }`}
                        >
                            {isHumanTakeover ? (
                                <>
                                    <Bot size={16} /> Resume AI Handover
                                </>
                            ) : (
                                <>
                                    <Headphones size={16} /> Human Take Over
                                </>
                            )}
                        </button>

                        <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-1">
                            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-300 rounded-lg transition-colors" title="Export CSV">
                                <Download size={18} />
                            </button>
                            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-300 rounded-lg transition-colors" title="Add Tag">
                                <Tag size={18} />
                            </button>
                            <button className="p-2 text-red-500/80 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors" title="Delete Conversation">
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Chat Feed */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 custom-scrollbar">
                    <div className="flex justify-center my-4">
                        <span className="text-[10px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-3 py-1 rounded-full uppercase tracking-widest">
                            Today
                        </span>
                    </div>

                    {/* Messages */}
                    {mockMessages.map((msg) => (
                        <div key={msg.id} className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                            <div className={`size-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${msg.role === 'model' ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                                {msg.role === 'model' ? <Bot size={16} /> : <User size={16} />}
                            </div>
                            <div className="flex flex-col gap-1 max-w-[100%]">
                                {msg.role === 'model' && (
                                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 ml-1 mb-0.5">
                                        Support Agent V2
                                    </span>
                                )}
                                <div className={`p-3.5 sm:p-4 rounded-2xl shadow-sm leading-relaxed text-[13px] sm:text-sm ${msg.role === 'user'
                                        ? 'bg-primary-600 text-white rounded-tr-md'
                                        : 'bg-white dark:bg-[#161b2e] border border-slate-200/50 dark:border-slate-800 rounded-tl-md text-slate-700 dark:text-slate-300'
                                    }`}>
                                    {msg.text}
                                </div>
                                <span className={`text-[10px] font-medium text-slate-400 px-1 mt-0.5 ${msg.role === 'user' ? 'text-right' : ''}`}>
                                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* Takeover Indicator Banner */}
                    {isHumanTakeover && (
                        <div className="flex items-center gap-4 py-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <div className="h-px flex-1 bg-amber-200 dark:bg-amber-900/50"></div>
                            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-500 font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 bg-amber-50 dark:bg-amber-500/10 rounded-full border border-amber-100 dark:border-amber-500/20 shadow-sm">
                                <Headphones size={14} className="animate-pulse" /> AI Paused - Human Takeover Active
                            </div>
                            <div className="h-px flex-1 bg-amber-200 dark:bg-amber-900/50"></div>
                        </div>
                    )}
                </div>

                {/* Input Area (Only active/visible during human takeover) */}
                <div className={`p-4 sm:p-6 bg-white dark:bg-[#161b2e] border-t border-slate-200 dark:border-slate-800 transition-all duration-300 ${isHumanTakeover ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute bottom-0 w-full z-[-1]'
                    }`}>
                    <div className="max-w-4xl mx-auto flex items-end gap-3 bg-slate-50 dark:bg-[#0a0d18] p-2 rounded-2xl border border-slate-200 dark:border-slate-800 focus-within:ring-2 focus-within:ring-amber-500/30 focus-within:border-amber-500 transition-all shadow-sm">
                        <textarea
                            value={humanMessage}
                            onChange={(e) => setHumanMessage(e.target.value)}
                            placeholder="Type a message to the user..."
                            className="flex-1 bg-transparent border-none text-sm text-slate-900 dark:text-white resize-none max-h-32 min-h-[44px] py-3 px-3 focus:ring-0"
                            rows={1}
                            style={{ height: 'auto' }}
                        />
                        <button
                            className={`p-3 rounded-xl flex items-center justify-center transition-all shrink-0 ${humanMessage.trim()
                                    ? 'bg-amber-500 text-white shadow-md hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/30'
                                    : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed'
                                }`}
                        >
                            <Send size={18} className={humanMessage.trim() ? 'translate-x-0.5' : ''} />
                        </button>
                    </div>
                    <div className="text-center mt-3">
                        <p className="text-[10px] text-slate-400 font-medium">Messages sent here will go directly to the user. The AI Agent will not respond while Take Over is active.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
