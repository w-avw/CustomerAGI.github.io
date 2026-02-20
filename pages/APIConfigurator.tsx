import React from 'react';
import { ArrowLeft, Trash2, Link as LinkIcon, Save, PlusCircle, X, Play } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

export const APIConfigurator: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditing = !!id;

    return (
        <div className="flex flex-col h-full bg-[#f8f9fa] dark:bg-[#0a0d18] overflow-hidden">
            {/* Header */}
            <header className="px-8 pt-6 pb-0 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#161b2e] shrink-0">
                <div
                    className="flex items-center gap-2 text-xs font-bold text-primary-500 uppercase tracking-widest mb-4 cursor-pointer hover:opacity-80 transition-opacity w-fit"
                    onClick={() => navigate('/knowledge')}
                >
                    <ArrowLeft size={14} strokeWidth={3} />
                    <span>Back to Knowledge</span>
                </div>
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                                {isEditing ? 'Configure Customer CRM API' : 'New API Connection'}
                            </h2>
                            {isEditing && (
                                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></span>
                                    Active
                                </span>
                            )}
                        </div>
                        <p className="text-slate-500 text-sm font-medium">Connect external RESTful APIs to provide real-time agent insights.</p>
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
                    <button className="px-1 py-4 border-b-2 border-primary-500 text-primary-500 text-sm font-bold flex items-center gap-2">
                        <LinkIcon size={18} />
                        API Connection
                    </button>
                </div>
            </header>

            <div className="flex-1 flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden custom-scrollbar">
                {/* Configuration Form */}
                <div className="flex-1 shrink-0 overflow-visible lg:overflow-y-auto p-6 lg:p-10 custom-scrollbar">
                    <div className="max-w-3xl space-y-12 pb-24">
                        {/* Tool Identity (for new tools) */}
                        {!isEditing && (
                            <section className="space-y-6">
                                <div className="flex items-center gap-2 text-slate-400">
                                    <LinkIcon size={16} className="text-primary-500" />
                                    <h3 className="text-xs font-bold uppercase tracking-[0.2em]">Tool Identity</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="block text-xs font-bold text-slate-500 ml-1">Tool Name</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Customer CRM API"
                                            className="w-full bg-white dark:bg-[#161b2e] border border-slate-200 dark:border-slate-800 rounded-xl text-sm px-4 py-3 text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all shadow-sm font-bold"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-xs font-bold text-slate-500 ml-1">Capability Description</label>
                                        <textarea
                                            placeholder="Describe what this API does so the agent knows when to use it..."
                                            rows={2}
                                            className="w-full bg-white dark:bg-[#161b2e] border border-slate-200 dark:border-slate-800 rounded-xl text-sm px-4 py-3 text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all shadow-sm"
                                        />
                                    </div>
                                </div>
                            </section>
                        )}

                        <section className="space-y-6">
                            <div className="flex items-center gap-2 text-slate-400">
                                <LinkIcon size={16} className="text-primary-500" />
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em]">Request Configuration</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="md:col-span-1 space-y-2">
                                    <label className="block text-xs font-bold text-slate-500 ml-1">HTTP Method</label>
                                    <select className="w-full bg-white dark:bg-[#161b2e] border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all cursor-pointer shadow-sm">
                                        <option>GET</option>
                                        <option>POST</option>
                                        <option>PUT</option>
                                        <option>DELETE</option>
                                    </select>
                                </div>
                                <div className="md:col-span-3 space-y-2">
                                    <label className="block text-xs font-bold text-slate-500 ml-1">Endpoint URL</label>
                                    <input
                                        type="text"
                                        defaultValue={isEditing ? "https://api.crm-connector.io/v1/customer/lookup" : ""}
                                        placeholder="https://api.example.com/v1/resource"
                                        className="w-full bg-white dark:bg-[#161b2e] border border-slate-200 dark:border-slate-800 rounded-xl text-sm px-4 py-3 text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none font-mono shadow-sm transition-all"
                                    />
                                </div>
                            </div>
                        </section>

                        <section className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-slate-400">
                                    <LinkIcon size={16} className="text-primary-500" />
                                    <h3 className="text-xs font-bold uppercase tracking-[0.2em]">Auth Headers</h3>
                                </div>
                                <button className="text-primary-500 text-xs font-bold flex items-center gap-1.5 hover:opacity-80 transition-opacity bg-primary-50 dark:bg-primary-900/20 px-3 py-1.5 rounded-lg border border-primary-100 dark:border-primary-900/30">
                                    <PlusCircle size={14} strokeWidth={2.5} />
                                    Add Header
                                </button>
                            </div>
                            <div className="space-y-3">
                                <div className="flex gap-3 group animate-in fade-in slide-in-from-top-2 duration-300">
                                    <input defaultValue="Content-Type" className="flex-1 bg-white dark:bg-[#161b2e] border border-slate-200 dark:border-slate-800 rounded-xl text-sm px-4 py-3 font-mono text-slate-600 dark:text-slate-400 shadow-sm" />
                                    <input defaultValue="application/json" className="flex-1 bg-white dark:bg-[#161b2e] border border-slate-200 dark:border-slate-800 rounded-xl text-sm px-4 py-3 font-mono text-slate-600 dark:text-slate-400 shadow-sm" />
                                    <button className="p-3 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><X size={18} /></button>
                                </div>
                                <div className="flex gap-3 animate-in fade-in slide-in-from-top-2 duration-300 delay-75">
                                    <input placeholder="Key" className="flex-1 bg-white dark:bg-[#161b2e] border border-slate-200 dark:border-slate-800 rounded-xl text-sm px-4 py-3 font-mono text-slate-700 dark:text-slate-300 shadow-sm" />
                                    <input placeholder="Value" className="flex-1 bg-white dark:bg-[#161b2e] border border-slate-200 dark:border-slate-800 rounded-xl text-sm px-4 py-3 font-mono text-slate-700 dark:text-slate-300 shadow-sm" />
                                    <button className="p-3 text-slate-300 hover:text-slate-500 transition-colors"><X size={18} /></button>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-6">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2 text-slate-400">
                                    <LinkIcon size={16} className="text-[#55b7e0]" />
                                    <h3 className="text-xs font-bold uppercase tracking-[0.2em]">Request Body (JSON)</h3>
                                </div>
                                <div className="flex gap-4">
                                    <button className="text-[10px] font-bold text-slate-400 hover:text-[#55b7e0] tracking-widest uppercase transition-colors">Beautify</button>
                                    <button className="text-[10px] font-bold text-slate-400 hover:text-[#55b7e0] tracking-widest uppercase transition-colors">Copy Body</button>
                                </div>
                            </div>
                            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-[#0d121f] p-6 font-mono text-sm overflow-hidden text-[#55b7e0]/80 shadow-2xl relative">
                                <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-700 uppercase tracking-widest select-none">Editor</div>
                                <pre className="leading-relaxed">
                                    <span className="text-slate-600 select-none mr-4">1</span>{"{"}
                                    <span className="text-slate-600 select-none mr-4">2</span>  <span className="text-pink-400">"customer_id"</span>: <span className="text-[#fab728]">"{"{{user_id}}"}"</span>,
                                    <span className="text-slate-600 select-none mr-4">3</span>  <span className="text-pink-400">"lookup_fields"</span>: [<span className="text-emerald-400">"email"</span>, <span className="text-emerald-400">"name"</span>, <span className="text-emerald-400">"tier"</span>]
                                    <span className="text-slate-600 select-none mr-4">4</span>{"}"}
                                </pre>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Test Panel */}
                <div className="w-full lg:w-[420px] border-t lg:border-t-0 border-l-0 lg:border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0a0d18] flex flex-col shrink-0 min-h-[600px] lg:min-h-0">
                    <div className="p-6 h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-[#161b2e] shrink-0">
                        <div className="flex items-center gap-2">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">Simulator</h4>
                        </div>
                        <button className="bg-primary-500 text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-primary-400 transition-all flex items-center gap-2 shadow-lg shadow-primary-500/20 active:scale-95">
                            <Play size={14} fill="currentColor" />
                            Run Action
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar bg-[#fcfdfe] dark:bg-[#0a0d18]">
                        <div className="space-y-6">
                            <label className="block text-[10px] font-bold uppercase text-slate-400 tracking-[0.2em] ml-1">Variable Mock Data</label>
                            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#161b2e] p-5 space-y-4 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">user_id</span>
                                    <input type="text" defaultValue="USR-99021" className="text-xs bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg px-3 py-1.5 min-w-[120px] text-right font-bold text-primary-500 focus:ring-1 focus:ring-primary-500 outline-none" />
                                </div>
                                <div className="h-px bg-slate-100 dark:bg-slate-800"></div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">context</span>
                                    <input type="text" defaultValue="premium_support" className="text-xs bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg px-3 py-1.5 min-w-[120px] text-right font-bold text-slate-600 dark:text-slate-300 focus:ring-1 focus:ring-primary-500 outline-none" />
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col min-h-0 space-y-6">
                            <label className="block text-[10px] font-bold uppercase text-slate-400 tracking-[0.2em] ml-1">Response Output</label>
                            <div className="flex-1 bg-[#0d121f] rounded-2xl p-6 font-mono text-[12px] leading-relaxed border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col">
                                <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800/50">
                                    <div className="flex items-center gap-2 text-emerald-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                                        <span className="font-bold">200 OK</span>
                                    </div>
                                    <span className="text-slate-500 font-bold">142ms</span>
                                </div>
                                <div className="text-slate-300 flex-1 overflow-y-auto custom-scrollbar">
                                    <div className="flex items-start">
                                        <span className="text-blue-400">{"{"}</span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-pink-400">"status"</span>: <span className="text-emerald-400">"success"</span>,<br />
                                        <span className="text-pink-400">"data"</span>: <span className="text-blue-400">{"{"}</span><br />
                                        <div className="pl-4">
                                            <span className="text-pink-400">"id"</span>: <span className="text-[#fab728]">"USR-99021"</span>,<br />
                                            <span className="text-pink-400">"name"</span>: <span className="text-[#fab728]">"Alex Rivera"</span>,<br />
                                            <span className="text-pink-400">"tier"</span>: <span className="text-[#fab728]">"Gold"</span>,<br />
                                            <span className="text-pink-400">"email"</span>: <span className="text-[#fab728]">"alex@example.com"</span>
                                        </div>
                                        <span className="text-blue-400">{"}"}</span>
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
