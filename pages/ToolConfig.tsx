import React from 'react';
import { ArrowLeft, Trash2, Link as LinkIcon, Code, PlusCircle, X, Play } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

export const ToolConfig: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <div className="flex flex-col h-full bg-slate-50 dark:bg-[#0a0d18]">
            {/* Header */}
            <header className="px-8 pt-6 pb-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#161b2e]">
                <div className="flex items-center gap-2 text-sm font-medium text-primary-600 mb-2 cursor-pointer hover:underline" onClick={() => navigate('/knowledge')}>
                    <ArrowLeft size={16} />
                    <span>Back to Knowledge & Tools</span>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Configure Customer CRM API</h2>
                        <p className="text-slate-500 text-sm mt-1 font-normal">Connect your customer database to provide real-time agent insights.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
                            Active
                        </span>
                        <div className="h-8 w-px bg-slate-200 dark:bg-slate-800"></div>
                        <button className="text-slate-400 hover:text-red-500 transition-colors">
                            <Trash2 size={20} />
                        </button>
                    </div>
                </div>
                <div className="mt-8 flex border-b border-slate-200 dark:border-slate-800 gap-6">
                    <button className="px-2 py-3 border-b-2 border-primary-600 text-primary-600 text-sm font-bold flex items-center gap-2">
                        <LinkIcon size={18} />
                        API Connection
                    </button>
                    <button className="px-2 py-3 border-b-2 border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm font-medium flex items-center gap-2 transition-colors">
                        <Code size={18} />
                        Custom JS Code
                    </button>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
                {/* Configuration Form */}
                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    <div className="max-w-3xl space-y-10">
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Request Configuration</h3>
                            <div className="flex gap-4">
                                <div className="w-32">
                                    <label className="block text-xs font-bold text-slate-500 mb-1.5">Method</label>
                                    <select className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold px-3 py-2 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500/20 outline-none">
                                        <option>GET</option>
                                        <option>POST</option>
                                        <option>PUT</option>
                                        <option>DELETE</option>
                                    </select>
                                </div>
                                <div className="flex-1">
                                    <label className="block text-xs font-bold text-slate-500 mb-1.5">API Endpoint URL</label>
                                    <input 
                                        type="text" 
                                        defaultValue="https://api.crm-connector.io/v1/customer/lookup"
                                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm px-4 py-2 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500/20 outline-none font-mono"
                                    />
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Headers</h3>
                                <button className="text-primary-600 text-xs font-bold flex items-center gap-1 hover:underline">
                                    <PlusCircle size={14} />
                                    Add Header
                                </button>
                            </div>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <input defaultValue="Content-Type" className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm px-3 py-2 font-mono text-slate-700 dark:text-slate-300" />
                                    <input defaultValue="application/json" className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm px-3 py-2 font-mono text-slate-700 dark:text-slate-300" />
                                    <button className="text-slate-300 hover:text-slate-500"><X size={18}/></button>
                                </div>
                                <div className="flex gap-3">
                                    <input placeholder="Key" className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm px-3 py-2 font-mono text-slate-700 dark:text-slate-300" />
                                    <input placeholder="Value" className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm px-3 py-2 font-mono text-slate-700 dark:text-slate-300" />
                                    <button className="text-slate-300 hover:text-slate-500"><X size={18}/></button>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Request Body (JSON)</h3>
                                <div className="flex gap-2">
                                    <button className="text-[10px] font-bold text-slate-400 hover:text-primary-600 transition-colors">Beautify</button>
                                    <button className="text-[10px] font-bold text-slate-400 hover:text-primary-600 transition-colors">Copy</button>
                                </div>
                            </div>
                            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-[#1e2337] p-4 font-mono text-sm overflow-hidden text-blue-300 shadow-inner">
<pre>
<span className="text-slate-500 select-none mr-3">1</span>{"{"}
<span className="text-slate-500 select-none mr-3">2</span>  <span className="text-pink-400">"customer_id"</span>: <span className="text-emerald-400">"{"{{user_id}}"}</span>,
<span className="text-slate-500 select-none mr-3">3</span>  <span className="text-pink-400">"lookup_fields"</span>: [<span className="text-emerald-400">"email"</span>, <span className="text-emerald-400">"name"</span>, <span className="text-emerald-400">"tier"</span>]
<span className="text-slate-500 select-none mr-3">4</span>{"}"}
</pre>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Test Panel */}
                <div className="w-[400px] border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0a0d18] flex flex-col shrink-0">
                    <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-[#161b2e]">
                        <div className="flex items-center gap-2">
                            <Play size={20} className="text-primary-600" />
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Test Tool</h4>
                        </div>
                        <button className="bg-primary-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-primary-700 transition-all flex items-center gap-1.5 shadow-md shadow-primary-500/20">
                            <Play size={14} fill="currentColor" />
                            Run Test
                        </button>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                        <div>
                            <label className="block text-[10px] font-bold uppercase text-slate-400 mb-3 tracking-widest">Input Data (Mock)</label>
                            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-3">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-mono text-primary-600">user_id</span>
                                    <input type="text" defaultValue="USR-99021" className="text-xs bg-transparent border-none text-right font-medium focus:ring-0 text-slate-600 dark:text-slate-300 p-0" />
                                </div>
                                <div className="h-px bg-slate-200 dark:bg-slate-800 my-2"></div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-mono text-primary-600">context</span>
                                    <input type="text" defaultValue="premium_support" className="text-xs bg-transparent border-none text-right font-medium focus:ring-0 text-slate-600 dark:text-slate-300 p-0" />
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col min-h-0">
                            <label className="block text-[10px] font-bold uppercase text-slate-400 mb-3 tracking-widest">Output Console</label>
                            <div className="flex-1 bg-[#0d111c] rounded-xl p-4 font-mono text-[12px] leading-relaxed overflow-hidden border border-slate-800 shadow-inner">
                                <div className="flex items-center gap-2 text-emerald-400 mb-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                    <span>Status 200 OK - 142ms</span>
                                </div>
                                <div className="text-slate-400">
                                    <span className="text-blue-400">{"{"}</span><br/>
                                    &nbsp;&nbsp;<span className="text-pink-400">"status"</span>: <span className="text-emerald-400">"success"</span>,<br/>
                                    &nbsp;&nbsp;<span className="text-pink-400">"data"</span>: <span className="text-blue-400">{"{"}</span><br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"id"</span>: <span className="text-orange-300">"USR-99021"</span>,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"name"</span>: <span className="text-orange-300">"Alex Rivera"</span>,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"tier"</span>: <span className="text-orange-300">"Gold"</span>,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"email"</span>: <span className="text-orange-300">"alex@example.com"</span><br/>
                                    &nbsp;&nbsp;<span className="text-blue-400">{"}"}</span><br/>
                                    <span className="text-blue-400">{"}"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};