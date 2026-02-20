import React, { useState } from 'react';
import { ArrowLeft, Trash2, Code, Save, Play, Variable } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

export const JSConfigurator: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditing = !!id;

    const [scriptContent, setScriptContent] = useState(
        `// Write your custom JavaScript logic here
// You can use standard ES6 syntax and access platform variables
// e.g., const userId = env.user_id;

async function executeAction(data) {
    try {
        console.log("Processing input...", data);
        
        // Example logic
        if (data.points > 1000) {
            return { tier: "VIP", perks: ["free_shipping"] };
        }
        
        return { tier: "Standard", perks: [] };
    } catch (error) {
        throw new Error("Failed to process data: " + error.message);
    }
}`
    );

    return (
        <div className="flex flex-col h-full bg-[#f8f9fa] dark:bg-[#0a0d18] overflow-hidden">
            {/* Header */}
            <header className="px-8 pt-6 pb-0 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#161b2e] shrink-0">
                <div
                    className="flex items-center gap-2 text-xs font-bold text-[#55b7e0] uppercase tracking-widest mb-4 cursor-pointer hover:opacity-80 transition-opacity w-fit"
                    onClick={() => navigate('/knowledge')}
                >
                    <ArrowLeft size={14} strokeWidth={3} />
                    <span>Back to Knowledge</span>
                </div>
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                                {isEditing ? 'Configure Order Formatter Script' : 'New JS Script'}
                            </h2>
                            {isEditing && (
                                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-800">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2 shadow-[0_0_8px_rgba(245,158,11,0.4)] animate-pulse"></span>
                                    Testing
                                </span>
                            )}
                        </div>
                        <p className="text-slate-500 text-sm font-medium">Write custom JavaScript logic to process data before or after agent interactions.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm flex items-center gap-2">
                            <Save size={16} />
                            Save Changes
                        </button>
                        {isEditing && (
                            <>
                                <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-1"></div>
                                <button className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all">
                                    <Trash2 size={20} />
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <div className="flex gap-8">
                    <button className="px-1 py-4 border-b-2 border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm font-bold flex items-center gap-2 transition-all">
                        <Code size={18} />
                        Custom Logic
                    </button>
                    <button className="px-1 py-4 border-b-2 border-[#55b7e0] text-[#55b7e0] text-sm font-bold flex items-center gap-2">
                        <Code size={18} />
                        Editor
                    </button>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
                {/* Configuration Form */}
                <div className="flex-1 overflow-y-auto p-10 custom-scrollbar flex flex-col">
                    <div className="max-w-4xl space-y-8 pb-12 flex-1 flex flex-col">
                        {/* Tool Identity (for new tools) */}
                        {!isEditing && (
                            <section className="space-y-6 shrink-0">
                                <div className="flex items-center gap-2 text-slate-400">
                                    <Code size={16} className="text-[#55b7e0]" />
                                    <h3 className="text-xs font-bold uppercase tracking-[0.2em]">Script Identity</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="block text-xs font-bold text-slate-500 ml-1">Script Name</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Lead Scoring Logic"
                                            className="w-full bg-white dark:bg-[#161b2e] border border-slate-200 dark:border-slate-800 rounded-xl text-sm px-4 py-3 text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-[#55b7e0] focus:border-transparent outline-none transition-all shadow-sm font-bold"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-xs font-bold text-slate-500 ml-1">Capability Description</label>
                                        <textarea
                                            placeholder="Describe what this script achieves..."
                                            rows={2}
                                            className="w-full bg-white dark:bg-[#161b2e] border border-slate-200 dark:border-slate-800 rounded-xl text-sm px-4 py-3 text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-[#55b7e0] focus:border-transparent outline-none transition-all shadow-sm"
                                        />
                                    </div>
                                </div>
                            </section>
                        )}

                        <section className="flex-1 flex flex-col min-h-[400px]">
                            <div className="flex items-center justify-between mb-4 shrink-0">
                                <div className="flex items-center gap-2 text-slate-400">
                                    <Code size={16} className="text-[#55b7e0]" />
                                    <h3 className="text-xs font-bold uppercase tracking-[0.2em]">Code Editor (JavaScript)</h3>
                                </div>
                                <div className="flex gap-4">
                                    <button className="text-[10px] font-bold text-slate-400 hover:text-[#55b7e0] tracking-widest uppercase transition-colors">Beautify</button>
                                </div>
                            </div>

                            {/* Code Editor Area */}
                            <div className="flex-1 rounded-t-2xl border border-slate-200 dark:border-slate-800 bg-[#0d121f] focus-within:ring-2 focus-within:ring-[#55b7e0] focus-within:border-transparent p-6 shadow-xl relative transition-all group overflow-hidden flex flex-col">
                                <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-700 uppercase tracking-widest select-none pointer-events-none">JS (ES6)</div>
                                <textarea
                                    className="w-full flex-1 bg-transparent text-[#55b7e0]/90 font-mono text-[13px] leading-relaxed resize-none outline-none custom-scrollbar"
                                    value={scriptContent}
                                    onChange={(e) => setScriptContent(e.target.value)}
                                    spellCheck={false}
                                />
                            </div>

                            {/* Variables Helper Button */}
                            <button className="w-full bg-[#f1f5f9] dark:bg-[#1a2035] hover:bg-slate-200 dark:hover:bg-[#1e253c] border border-t-0 border-slate-200 dark:border-slate-800 rounded-b-2xl p-3 flex items-center justify-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300 transition-all shadow-sm">
                                <Variable size={14} className="text-[#55b7e0]" />
                                Check all the platform variables you can use
                            </button>
                        </section>
                    </div>
                </div>

                {/* Test Panel */}
                <div className="w-[420px] border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0a0d18] flex flex-col shrink-0">
                    <div className="p-6 h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-[#161b2e] shrink-0">
                        <div className="flex items-center gap-2">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">Simulator</h4>
                        </div>
                        <button className="bg-[#55b7e0] text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-[#4aa3c8] transition-all flex items-center gap-2 shadow-lg shadow-sky-500/20 active:scale-95">
                            <Play size={14} fill="currentColor" />
                            Test Script
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar bg-[#fcfdfe] dark:bg-[#0a0d18]">
                        <div className="space-y-6">
                            <label className="block text-[10px] font-bold uppercase text-slate-400 tracking-[0.2em] ml-1">Input Mock Data</label>
                            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-[#0d121f] p-5 font-mono text-[12px] text-slate-300 shadow-inner">
                                <pre className="leading-relaxed whitespace-pre-wrap">
                                    {`{
  "points": 1500,
  "history": ["purchase_a", "refund_b"]
}`}
                                </pre>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col min-h-0 space-y-6">
                            <label className="block text-[10px] font-bold uppercase text-slate-400 tracking-[0.2em] ml-1">Execution Output</label>
                            <div className="flex-1 bg-[#0d121f] rounded-2xl p-6 font-mono text-[12px] leading-relaxed border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col">
                                <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800/50">
                                    <div className="flex items-center gap-2 text-emerald-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                                        <span className="font-bold">Success</span>
                                    </div>
                                    <span className="text-slate-500 font-bold">12ms</span>
                                </div>
                                <div className="text-slate-300 flex-1 overflow-y-auto custom-scrollbar">
                                    <div className="flex items-start">
                                        <span className="text-blue-400">{"{"}</span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-pink-400">"tier"</span>: <span className="text-[#fab728]">"VIP"</span>,<br />
                                        <span className="text-pink-400">"perks"</span>: [<br />
                                        <div className="pl-4">
                                            <span className="text-[#fab728]">"free_shipping"</span>
                                        </div>
                                        ]
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400">{"}"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
