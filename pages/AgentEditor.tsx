import React, { useState, useRef, useEffect } from 'react';
import { Save, Play, RefreshCw, Send, Sparkles, User, Bot as BotIcon, MoreHorizontal, ChevronDown, CheckCircle, AlertTriangle, Copy } from 'lucide-react';
import { AgentConfig, Message } from '../types';
import { createAgentChat, sendMessageToAgent } from '../services/geminiService';
import { Chat } from '@google/genai';
import { motion, AnimatePresence } from 'framer-motion';

export const AgentEditor: React.FC = () => {
    const [config, setConfig] = useState<AgentConfig>({
        id: '1',
        name: 'Customer Support Bot',
        description: 'Handles general inquiries and troubleshooting.',
        role: 'You are an expert technical support specialist for a SaaS company. Your tone is helpful, patient, and precise. You focus on troubleshooting API integrations and dashboard settings. Always verify user identity before providing sensitive data.',
        type: 'goal-driven',
        tone: 'professional'
    });

    const [status, setStatus] = useState<'pending' | 'active'>('pending');
    const [showToast, setShowToast] = useState(false);

    // Chat State
    const [chatInstance, setChatInstance] = useState<Chat | null>(null);
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', role: 'model', text: "Hello! I'm your Customer Support Bot. How can I help you today?", timestamp: new Date() }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);
    const [mobileTab, setMobileTab] = useState<'config' | 'testing'>('config');

    // Initialize Chat
    useEffect(() => {
        try {
            const chat = createAgentChat(config);
            setChatInstance(chat);
        } catch (e) {
            console.error("Error creating chat:", e);
        }
    }, []); // Run once on mount

    const handleRestartChat = () => {
        const chat = createAgentChat(config);
        setChatInstance(chat);
        setMessages([{ id: Date.now().toString(), role: 'model', text: "Hello! I'm your Customer Support Bot. How can I help you today?", timestamp: new Date() }]);
    };

    const handleSendMessage = async () => {
        if (!inputText.trim()) return;

        if (!chatInstance) {
            // Show "No AI Connected" toast
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        }

        const userMsg: Message = { id: Date.now().toString(), role: 'user', text: inputText, timestamp: new Date() };
        setMessages(prev => [...prev, userMsg]);
        setInputText('');
        setIsTyping(true);

        const responseText = await sendMessageToAgent(chatInstance, inputText);

        setIsTyping(false);
        const botMsg: Message = { id: (Date.now() + 1).toString(), role: 'model', text: responseText, timestamp: new Date() };
        setMessages(prev => [...prev, botMsg]);
    };

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    return (
        <div className="flex h-full relative">
            {/* Toast Notification */}
            {showToast && (
                <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="bg-slate-900 text-white px-4 py-2 rounded-lg shadow-xl flex items-center gap-2 text-sm font-medium border border-slate-700">
                        <AlertTriangle size={16} className="text-[#fab728]" />
                        No AI Connected yet
                    </div>
                </div>
            )}

            {/* Main Config Area */}
            <div className="flex-1 flex flex-col min-w-0 bg-slate-50 dark:bg-[#0a0d18] overflow-hidden">
                <header className="h-16 px-8 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#161b2e] shrink-0">
                    <div className="flex items-center gap-2">
                        <span className="text-slate-500 text-sm font-medium">AI Team</span>
                        <span className="text-slate-300">/</span>
                        <h2 className="text-slate-900 dark:text-white font-bold">{config.name}</h2>
                    </div>
                    <div className="flex gap-3">
                        {/* Duplicate Button */}
                        <button className="px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium">
                            <Copy size={16} />
                            Duplicate into Team
                            <ChevronDown size={14} className="text-slate-400" />
                        </button>

                        {/* Save Draft Button -> Pending Badge */}
                        <button
                            onClick={() => setStatus('pending')}
                            className={`px-4 py-2 text-sm font-bold rounded-lg border transition-all flex items-center gap-2
                                ${status === 'pending'
                                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700 cursor-default'
                                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                                }
                            `}
                        >
                            {status === 'pending' && <AlertTriangle size={14} />}
                            {status === 'pending' ? 'Unsaved' : 'Save Draft'}
                        </button>

                        {/* Publish Button -> Active Badge */}
                        <button
                            onClick={() => setStatus('active')}
                            className={`px-4 py-2 text-sm font-bold rounded-lg shadow-md transition-all flex items-center gap-2
                                ${status === 'active'
                                    ? 'bg-primary-500 text-white shadow-primary-500/20 cursor-default'
                                    : 'bg-primary-500 hover:bg-primary-400 text-white shadow-primary-500/20'
                                }
                            `}
                        >
                            {status === 'active' ? <CheckCircle size={16} /> : <Save size={16} />}
                            {status === 'active' ? 'Published' : 'Publish Agent'}
                        </button>
                    </div>
                </header>

                {/* Mobile Tabs */}
                <div className="md:hidden flex border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#161b2e] shrink-0 sticky top-0 z-20">
                    <button
                        className={`flex-1 py-3 text-sm font-bold border-b-2 transition-colors ${mobileTab === 'config' ? 'border-primary-500 text-primary-500' : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                        onClick={() => setMobileTab('config')}
                    >
                        Configuration
                    </button>
                    <button
                        className={`flex-1 py-3 text-sm font-bold border-b-2 transition-colors ${mobileTab === 'testing' ? 'border-primary-500 text-primary-500' : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                        onClick={() => setMobileTab('testing')}
                    >
                        Testing
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar relative">
                    <div className="max-w-3xl mx-auto space-y-8 pb-12">
                        <section>
                            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Agent Configuration</h1>
                            <p className="text-slate-500 mt-1">Define your agent's identity, behavior, and specialized knowledge.</p>
                        </section>

                        <div className="bg-white dark:bg-[#161b2e] rounded-xl border border-slate-200 dark:border-slate-800 p-6 space-y-6 shadow-sm">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Agent Name</label>
                                    <input
                                        type="text"
                                        value={config.name}
                                        onChange={(e) => setConfig({ ...config, name: e.target.value })}
                                        className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#55b7e0] focus:border-[#55b7e0] outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Agent Type</label>
                                    <select
                                        value={config.type}
                                        onChange={(e) => setConfig({ ...config, type: e.target.value as any })}
                                        className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#55b7e0] focus:border-[#55b7e0] outline-none transition-all"
                                    >
                                        <option value="goal-driven">Single Objective (Goal-driven)</option>
                                        <option value="script-based">Script-based (Linear flow)</option>
                                        <option value="hybrid">Hybrid (Mixed architecture)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Description</label>
                                <textarea
                                    value={config.description}
                                    onChange={(e) => setConfig({ ...config, description: e.target.value })}
                                    rows={2}
                                    className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#55b7e0] focus:border-[#55b7e0] outline-none transition-all resize-none"
                                />
                            </div>
                        </div>

                        <div className="bg-white dark:bg-[#161b2e] rounded-xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-sm">
                            <div className="flex items-center gap-2 mb-2 text-[#55b7e0]">
                                <Sparkles size={20} />
                                <h3 className="font-bold text-slate-900 dark:text-white">AI Role & Instructions</h3>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">System Prompt</label>
                                <textarea
                                    value={config.role}
                                    onChange={(e) => setConfig({ ...config, role: e.target.value })}
                                    rows={8}
                                    className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-sm font-mono text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-[#55b7e0] focus:border-[#55b7e0] outline-none transition-all leading-relaxed"
                                    placeholder="You are an AI assistant..."
                                />
                                <p className="text-xs text-slate-400">Changes here will affect the preview after you click Refresh.</p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-[#161b2e] rounded-xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-sm">
                            <h3 className="font-bold text-slate-900 dark:text-white">Tone & Style</h3>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                                {['Professional', 'Friendly', 'Concise', 'Empathetic', 'Custom'].map((toneLabel) => {
                                    const toneValue = toneLabel.toLowerCase();
                                    const isSelected = config.tone === toneValue;
                                    return (
                                        <button
                                            key={toneValue}
                                            onClick={() => setConfig({ ...config, tone: toneValue as any })}
                                            className={`
                                                relative flex flex-col items-center justify-center p-3 border-2 rounded-xl transition-all
                                                ${isSelected
                                                    ? 'border-[#55b7e0] bg-sky-50 dark:bg-sky-900/20 text-[#55b7e0]'
                                                    : 'border-slate-100 dark:border-slate-800 hover:border-sky-200 dark:hover:border-slate-600 text-slate-600 dark:text-slate-400'
                                                }
                                            `}
                                        >
                                            <span className="text-sm font-bold">{toneLabel}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Custom Tone Input */}
                            {config.tone === 'custom' && (
                                <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Custom Tone Description</label>
                                    <input
                                        type="text"
                                        value={config.customTone || ''}
                                        onChange={(e) => setConfig({ ...config, customTone: e.target.value })}
                                        placeholder="e.g., Witty, Sarcastic, Pirate-themed..."
                                        className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#55b7e0] focus:border-[#55b7e0] outline-none transition-all"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Preview Panel (Sliding on Mobile, Static on Desktop) */}
            <AnimatePresence>
                {(mobileTab === 'testing' || window.innerWidth >= 768) && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                        className={`
                            absolute inset-0 z-30 md:static md:w-[400px] md:z-auto
                            md:!transform-none 
                            border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0a0d18] flex flex-col shrink-0
                        `}
                    >
                        <div className="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 shrink-0 bg-white dark:bg-[#161b2e] sticky top-0 hidden md:flex">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                <h3 className="font-bold text-sm text-slate-900 dark:text-white">Agent Preview</h3>
                            </div>
                            <button
                                onClick={handleRestartChat}
                                className="p-2 text-slate-400 hover:text-primary-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                                title="Restart Chat with new settings"
                            >
                                <RefreshCw size={18} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50 dark:bg-[#0a0d18] custom-scrollbar">
                            <div className="flex justify-center">
                                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                    Session Started
                                </span>
                            </div>

                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex gap-3 max-w-[90%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                                    <div className={`
                                size-8 rounded-lg flex items-center justify-center shrink-0
                                ${msg.role === 'user' ? 'bg-slate-200 dark:bg-slate-800 text-slate-500' : 'bg-primary-100 dark:bg-primary-900/30 text-primary-500'}
                            `}>
                                        {msg.role === 'user' ? <User size={16} /> : <BotIcon size={16} />}
                                    </div>
                                    <div className={`
                                p-3 rounded-2xl text-sm leading-relaxed shadow-sm
                                ${msg.role === 'user'
                                            ? 'bg-primary-500 text-white rounded-tr-none'
                                            : 'bg-white dark:bg-[#161b2e] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-tl-none'
                                        }
                            `}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex gap-3 max-w-[90%]">
                                    <div className="size-8 rounded-lg bg-sky-100 dark:bg-sky-900/30 text-[#55b7e0] flex items-center justify-center shrink-0">
                                        <BotIcon size={16} />
                                    </div>
                                    <div className="bg-white dark:bg-[#161b2e] p-4 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-800 flex gap-1 items-center shadow-sm">
                                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={chatEndRef} />
                        </div>

                        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#161b2e]">
                            <div className="relative">
                                <textarea
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handleSendMessage();
                                        }
                                    }}
                                    className="w-full pr-12 pl-4 py-3 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-[#55b7e0] focus:border-transparent text-sm resize-none custom-scrollbar outline-none transition-all dark:text-white"
                                    placeholder="Type a message to test..."
                                    rows={1}
                                />
                                <button
                                    onClick={handleSendMessage}
                                    disabled={!inputText.trim() || isTyping}
                                    className="absolute right-2 top-2 size-8 bg-primary-500 text-white rounded-lg flex items-center justify-center hover:bg-primary-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                            <div className="flex items-center justify-between mt-3 px-1">
                                <p className="text-[10px] text-slate-400 font-medium">Testing as: <span className="underline">Standard User</span></p>
                                <button
                                    onClick={() => setMessages([])}
                                    className="text-[10px] text-primary-500 font-bold hover:underline"
                                >
                                    Clear History
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};