import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    FileText, 
    Globe, 
    Video, 
    Trash2, 
    Filter, 
    Plus, 
    Link, 
    Code2, 
    Puzzle, 
    Search, 
    Edit2, 
    Settings,
    MoreVertical,
    CheckCircle2
} from 'lucide-react';

export const KnowledgeBase: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-[#0a0d18]">
            <header className="h-16 px-8 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#161b2e] sticky top-0 z-10">
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">Knowledge & Tools</h1>
                <div className="flex items-center gap-4">
                     <span className="text-sm font-medium text-slate-500">Storage: 2.4 GB / 10 GB</span>
                    <div className="w-24 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="bg-primary-600 h-full w-[24%]"></div>
                    </div>
                </div>
            </header>

            <div className="p-8 max-w-7xl mx-auto space-y-12 pb-20">
                {/* Tabs */}
                <div className="flex border-b border-slate-200 dark:border-slate-800 gap-8">
                    <button className="pb-4 border-b-2 border-primary-600 text-primary-600 font-bold flex items-center gap-2">
                        <FileText size={18} /> Knowledge Base
                    </button>
                    <button className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-medium flex items-center gap-2 transition-colors">
                        <Puzzle size={18} /> Tools & API
                    </button>
                </div>

                {/* Data Sources */}
                <section className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Data Sources</h2>
                            <p className="text-sm text-slate-500">Manage the information your agent uses to answer queries.</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-300 shadow-sm">
                                <Filter size={16} /> Filter
                            </button>
                            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-primary-700 transition-all shadow-md shadow-primary-500/20">
                                <Plus size={16} /> Add New Source
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* PDF Card */}
                        <div className="bg-white dark:bg-[#161b2e] border border-slate-200 dark:border-slate-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="size-12 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-xl flex items-center justify-center">
                                    <FileText size={24} />
                                </div>
                                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">Indexed</span>
                            </div>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary-600 transition-colors">Company_Policy_2024.pdf</h3>
                            <p className="text-sm text-slate-500 mb-6 line-clamp-1">Internal HR guidelines and safety protocols.</p>
                            <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                                <span>1.2 MB • 42 Pages</span>
                                <span>Added 2d ago</span>
                            </div>
                            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex gap-2">
                                <button className="flex-1 py-2 text-xs font-bold bg-slate-50 dark:bg-slate-800 hover:bg-primary-600 hover:text-white rounded-lg transition-all text-slate-600 dark:text-slate-300">Manage</button>
                                <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"><Trash2 size={16}/></button>
                            </div>
                        </div>

                         {/* Web Card */}
                         <div className="bg-white dark:bg-[#161b2e] border border-slate-200 dark:border-slate-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="size-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl flex items-center justify-center">
                                    <Globe size={24} />
                                </div>
                                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800">Processing</span>
                            </div>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary-600 transition-colors">docs.product.com</h3>
                            <p className="text-sm text-slate-500 mb-6 line-clamp-1">External documentation and changelogs.</p>
                            <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                                <span>Crawl Depth: 3</span>
                                <span className="flex items-center gap-1 text-amber-600"><span className="animate-spin">⟳</span> Updating...</span>
                            </div>
                            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex gap-2">
                                <button className="flex-1 py-2 text-xs font-bold bg-slate-50 dark:bg-slate-800 hover:bg-primary-600 hover:text-white rounded-lg transition-all text-slate-600 dark:text-slate-300">Manage</button>
                                <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"><Trash2 size={16}/></button>
                            </div>
                        </div>

                         {/* Video Card */}
                         <div className="bg-white dark:bg-[#161b2e] border border-slate-200 dark:border-slate-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="size-12 bg-primary-50 dark:bg-primary-900/20 text-primary-600 rounded-xl flex items-center justify-center">
                                    <Video size={24} />
                                </div>
                                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">Indexed</span>
                            </div>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary-600 transition-colors">Onboarding_Video.mp4</h3>
                            <p className="text-sm text-slate-500 mb-6 line-clamp-1">Visual walkthrough of the platform UI.</p>
                            <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                                <span>12:45 Duration</span>
                                <span>Added 5h ago</span>
                            </div>
                            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex gap-2">
                                <button className="flex-1 py-2 text-xs font-bold bg-slate-50 dark:bg-slate-800 hover:bg-primary-600 hover:text-white rounded-lg transition-all text-slate-600 dark:text-slate-300">Manage</button>
                                <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"><Trash2 size={16}/></button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tools Section */}
                <section className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Tools & Extensions</h2>
                            <p className="text-sm text-slate-500">Connect external APIs and custom scripts to extend chatbot capabilities.</p>
                        </div>
                        <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
                            <Link size={16} /> Connect Tool
                        </button>
                    </div>

                    <div className="bg-white dark:bg-[#161b2e] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Name & Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Type</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Last Sync</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
                                            <div>
                                                <p className="font-semibold text-slate-900 dark:text-white">Customer CRM API</p>
                                                <p className="text-xs text-slate-500">Fetch user profile & history</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase tracking-tight">REST API</span>
                                    </td>
                                    <td className="px-6 py-5 text-sm text-slate-500">24 mins ago</td>
                                    <td className="px-6 py-5 text-right">
                                        <div className="flex items-center justify-end gap-3">
                                            <button 
                                                onClick={() => navigate('/tools/1')}
                                                className="bg-primary-600 text-white text-[10px] px-3 py-1.5 rounded-full font-bold uppercase hover:bg-primary-700 transition-colors"
                                            >
                                                Config
                                            </button>
                                            <button className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                                                <Settings size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                {/* Additional rows can be added here following the same pattern */}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
            
            {/* Floating Status */}
            <div className="fixed bottom-6 right-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10 z-50">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">Global Index Health</span>
                    <span className="text-sm font-semibold">98.2% Accurate</span>
                </div>
                <div className="h-8 w-px bg-white/20 dark:bg-slate-200"></div>
                <div className="flex -space-x-2">
                    <div className="size-8 rounded-full bg-emerald-500 border-2 border-slate-900 dark:border-white flex items-center justify-center text-white">
                        <CheckCircle2 size={14} />
                    </div>
                </div>
            </div>
        </div>
    );
};