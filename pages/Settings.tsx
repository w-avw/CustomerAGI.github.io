import React from 'react';
import { 
    CreditCard, 
    Shield, 
    Users, 
    Building, 
    Image as ImageIcon,
    Download,
    MoreHorizontal
} from 'lucide-react';

export const Settings: React.FC = () => {
    return (
        <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-[#0a0d18] p-8">
            <div className="max-w-5xl mx-auto">
                <header className="mb-8">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Settings</h2>
                    <p className="text-slate-500 mt-2">Manage your workspace configuration, security keys, and team members.</p>
                </header>

                {/* Tabs */}
                <div className="border-b border-slate-200 dark:border-slate-800 mb-8">
                    <nav className="flex gap-8">
                        <button className="pb-4 text-sm font-bold border-b-2 border-primary-600 text-primary-600 flex items-center gap-2">
                            <Building size={18} /> General
                        </button>
                        <button className="pb-4 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-2 transition-colors">
                            <Users size={18} /> Workspace
                        </button>
                        <button className="pb-4 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-2 transition-colors">
                            <CreditCard size={18} /> Billing
                        </button>
                        <button className="pb-4 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-2 transition-colors">
                            <Shield size={18} /> Security & API
                        </button>
                    </nav>
                </div>

                <div className="space-y-12 pb-20">
                    {/* General */}
                    <section className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">General Settings</h3>
                            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors shadow-md shadow-primary-500/20">Save Changes</button>
                        </div>
                        
                        <div className="bg-white dark:bg-[#161b2e] rounded-xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Workspace Branding</h4>
                                    <p className="text-sm text-slate-500 mt-1">This will be visible to your team and customers.</p>
                                </div>
                                <div className="md:col-span-2 space-y-6">
                                    <div className="flex items-center gap-6">
                                        <div className="size-24 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700 text-slate-400 hover:border-primary-500 hover:text-primary-500 transition-all cursor-pointer">
                                            <ImageIcon size={32} />
                                        </div>
                                        <div className="space-y-2">
                                            <button className="text-sm font-bold text-primary-600 hover:underline">Upload new logo</button>
                                            <p className="text-xs text-slate-500">Recommended size: 512x512px (PNG, SVG)</p>
                                        </div>
                                    </div>
                                    <div className="max-w-md">
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Workspace Name</label>
                                        <input type="text" defaultValue="BotNexus Main" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent px-4 py-2 text-sm dark:text-white outline-none transition-all" />
                                    </div>
                                </div>
                            </div>

                            <div className="h-px bg-slate-100 dark:bg-slate-800 my-8"></div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Localization</h4>
                                    <p className="text-sm text-slate-500 mt-1">Set your default language and time settings.</p>
                                </div>
                                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Default Language</label>
                                        <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-4 py-2 text-sm dark:text-white outline-none">
                                            <option>English (US)</option>
                                            <option>Spanish</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Timezone</label>
                                        <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-4 py-2 text-sm dark:text-white outline-none">
                                            <option>(GMT-08:00) Pacific Time</option>
                                            <option>(GMT+00:00) UTC</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Team */}
                    <section className="space-y-6">
                         <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Team Management</h3>
                            <button className="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors">
                                Invite Member
                            </button>
                        </div>
                        <div className="bg-white dark:bg-[#161b2e] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                    <tr>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Name</th>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Role</th>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Status</th>
                                        <th className="px-6 py-4 text-right"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    <tr>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">AR</div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white">Alex Rivera (You)</p>
                                                    <p className="text-xs text-slate-500">alex@botnexus.ai</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Owner</td>
                                        <td className="px-6 py-4"><span className="px-2 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-[10px] font-bold rounded-full uppercase">Active</span></td>
                                        <td className="px-6 py-4 text-right"><MoreHorizontal className="inline text-slate-400 cursor-pointer" size={18}/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};