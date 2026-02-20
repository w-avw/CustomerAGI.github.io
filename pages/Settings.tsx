import React, { useState } from 'react';
import {
    CreditCard as CreditCardIcon,
    Users,
    Building,
    Image as ImageIcon,
    MoreHorizontal,
    Moon,
    Sun,
    Monitor,
    Palette,
    AlertTriangle,
    Plus,
    Trash2,
    Edit2
} from 'lucide-react';
import AnimatedCreditCard from '../components/ui/credit-card-1';

export const Settings: React.FC = () => {
    // Theme State
    const [themeMode, setThemeMode] = useState<'light' | 'dark' | 'system'>('system');
    const [primaryColor, setPrimaryColor] = useState('#55b7e0');

    // Smooth scroll handler
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const colorPresets = [
        { label: 'CustomerAGI Options', hex: '#55b7e0' },
        { label: 'Ocean Blue', hex: '#0ea5e9' },
        { label: 'Royal Purple', hex: '#8b5cf6' },
        { label: 'Emerald Green', hex: '#10b981' },
        { label: 'Rose Pink', hex: '#f43f5e' }
    ];

    return (
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-slate-50 dark:bg-[#0a0d18] scroll-smooth">
            {/* Sticky Header Nav */}
            <div className="sticky top-0 z-20 bg-slate-50/80 dark:bg-[#0a0d18]/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-8 py-6">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Settings</h2>
                        <p className="text-slate-500 mt-2">Manage your workspace configuration, team members, and billing.</p>
                    </div>

                    <nav className="flex items-center gap-1 bg-white/50 dark:bg-slate-900/50 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <button onClick={() => scrollToSection('general')} className="px-5 py-2 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2">
                            <Building size={16} /> General
                        </button>
                        <button onClick={() => scrollToSection('workspace')} className="px-5 py-2 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2">
                            <Users size={16} /> Workspace
                        </button>
                        <button onClick={() => scrollToSection('billing')} className="px-5 py-2 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2">
                            <CreditCardIcon size={16} /> Billing
                        </button>
                    </nav>
                </div>
            </div>

            <div className="max-w-5xl mx-auto p-8 space-y-16 pb-32">

                {/* General Settings */}
                <section id="general" className="space-y-6 pt-4 scroll-mt-32">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">General Settings</h3>
                        <button className="bg-primary-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-primary-700 transition-colors shadow-md shadow-primary-500/20 active:scale-95">
                            Save Changes
                        </button>
                    </div>

                    <div className="bg-white dark:bg-[#161b2e] rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm space-y-12">
                        {/* Branding */}
                        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white">Workspace Branding</h4>
                                <p className="text-sm text-slate-500 mt-1 leading-relaxed">This will be visible to your team and customers across the platform.</p>
                            </div>
                            <div className="space-y-6 max-w-lg">
                                <div className="flex items-center gap-6">
                                    <div className="size-20 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700 text-slate-400 hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-900/10 hover:text-primary-500 transition-all cursor-pointer group">
                                        <ImageIcon size={28} className="group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <button className="text-sm font-bold text-slate-900 dark:text-white hover:text-primary-500 transition-colors">Upload Custom Logo</button>
                                        <p className="text-[13px] text-slate-500">SVG, PNG, or JPG. Max file size 2MB.</p>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Workspace Name</label>
                                    <input type="text" defaultValue="BotNexus Main" className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary-500 focus:border-transparent px-4 py-2.5 text-sm dark:text-white outline-none transition-all shadow-sm" />
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-slate-100 dark:bg-slate-800/50"></div>

                        {/* Theme & Colors */}
                        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                    <Palette size={18} className="text-primary-500" />
                                    Theme & Appearance
                                </h4>
                                <p className="text-sm text-slate-500 mt-1 leading-relaxed">Customize how the dashboard looks and feels to match your brand.</p>
                            </div>
                            <div className="space-y-8 max-w-lg">
                                {/* Mode Toggle */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">Interface Mode</label>
                                    <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                                        {[
                                            { id: 'light', icon: Sun, label: 'Light' },
                                            { id: 'dark', icon: Moon, label: 'Dark' },
                                            { id: 'system', icon: Monitor, label: 'System' }
                                        ].map((mode) => (
                                            <button
                                                key={mode.id}
                                                onClick={() => setThemeMode(mode.id as any)}
                                                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold transition-all ${themeMode === mode.id
                                                    ? 'bg-white dark:bg-[#161b2e] text-primary-600 dark:text-primary-400 shadow-sm'
                                                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                                                    }`}
                                            >
                                                <mode.icon size={16} />
                                                {mode.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Color Palette */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">Primary Brand Color</label>
                                    <div className="flex flex-wrap gap-3">
                                        {colorPresets.map((color) => (
                                            <button
                                                key={color.hex}
                                                onClick={() => setPrimaryColor(color.hex)}
                                                title={color.label}
                                                className={`size-10 rounded-full flex items-center justify-center transition-all ${primaryColor === color.hex
                                                    ? 'ring-2 ring-offset-2 ring-slate-400 dark:ring-slate-500 scale-110'
                                                    : 'hover:scale-110 shadow-sm'
                                                    }`}
                                                style={{ backgroundColor: color.hex }}
                                            />
                                        ))}
                                        <div className="flex items-center gap-2 px-3 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" title="Custom Hex">
                                            <span className="text-slate-400 font-mono text-sm">#</span>
                                            <input
                                                type="text"
                                                value={primaryColor.replace('#', '')}
                                                onChange={(e) => setPrimaryColor(`#${e.target.value}`)}
                                                className="w-16 bg-transparent outline-none text-sm font-mono dark:text-white uppercase"
                                                maxLength={6}
                                            />
                                        </div>
                                    </div>
                                    <p className="text-[13px] text-slate-500 mt-2">Currently using: <span className="font-bold">{colorPresets.find(c => c.hex === primaryColor)?.label || 'Custom'}</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-slate-100 dark:bg-slate-800/50"></div>

                        {/* Localization */}
                        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white">Localization</h4>
                                <p className="text-sm text-slate-500 mt-1 leading-relaxed">Language and date formatting preferences.</p>
                            </div>
                            <div className="space-y-4 max-w-lg">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Default Language</label>
                                    <select className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 py-2.5 text-sm dark:text-white outline-none focus:ring-2 focus:ring-primary-500 transition-shadow">
                                        <option>English (US)</option>
                                        <option>Spanish (ES)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Timezone</label>
                                    <select className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 py-2.5 text-sm dark:text-white outline-none focus:ring-2 focus:ring-primary-500 transition-shadow">
                                        <option>(GMT-08:00) Pacific Time</option>
                                        <option>(GMT+00:00) UTC Standard</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Workspace / Team Management */}
                <section id="workspace" className="space-y-6 pt-4 scroll-mt-32">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Workspace Team</h3>
                            <p className="text-sm text-slate-500 mt-1">Manage members and configure access permissions.</p>
                        </div>
                        <button className="bg-primary-50 hover:bg-primary-100 dark:bg-primary-500/10 dark:hover:bg-primary-500/20 text-primary-600 dark:text-primary-400 px-4 py-2.5 rounded-lg text-sm font-bold transition-colors flex items-center gap-2">
                            <Plus size={18} /> Invite Member
                        </button>
                    </div>

                    <div className="bg-white dark:bg-[#161b2e] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50/50 dark:bg-slate-800/20 border-b border-slate-200 dark:border-slate-800 text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                                <tr>
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Role</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="size-9 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center font-bold text-sm border border-primary-200 dark:border-primary-800">AR</div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-900 dark:text-white">Alex Rivera <span className="text-slate-400 font-medium ml-1">(You)</span></p>
                                                <p className="text-xs text-slate-500">alex@botnexus.ai</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <select className="bg-transparent border-0 text-sm font-medium text-slate-700 dark:text-slate-300 focus:ring-0 cursor-pointer outline-none">
                                            <option>Owner</option>
                                            <option>Admin</option>
                                            <option>Member</option>
                                        </select>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 text-[11px] font-bold rounded-full">Active</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-colors" title="Edit Permissions">
                                                <Edit2 size={16} />
                                            </button>
                                            <button className="p-2 text-slate-400 hover:text-red-600 dark:hover:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors" title="Remove Member">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="size-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center font-bold text-sm border border-slate-200 dark:border-slate-700">SJ</div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-900 dark:text-white">Sarah Jenkins</p>
                                                <p className="text-xs text-slate-500">sarah@botnexus.ai</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <select className="bg-transparent border-0 text-sm font-medium text-slate-700 dark:text-slate-300 focus:ring-0 cursor-pointer outline-none" defaultValue="Member">
                                            <option>Owner</option>
                                            <option>Admin</option>
                                            <option>Member</option>
                                        </select>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-2.5 py-1 bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20 text-[11px] font-bold rounded-full">Invited</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-colors" title="Edit Permissions">
                                                <Edit2 size={16} />
                                            </button>
                                            <button className="p-2 text-slate-400 hover:text-red-600 dark:hover:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors" title="Remove Member">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Billing & Plans */}
                <section id="billing" className="space-y-6 pt-4 scroll-mt-32">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Billing & Plan</h3>
                            <p className="text-sm text-slate-500 mt-1">Manage your subscription, credits, and payment methods.</p>
                        </div>
                        <button className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-white px-4 py-2.5 rounded-lg text-sm font-bold transition-colors">
                            View Invoices
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Plan Details Card */}
                        <div className="col-span-1 lg:col-span-2 bg-white dark:bg-[#161b2e] rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <span className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-500/20 dark:text-primary-400 border border-primary-200 dark:border-primary-500/30 text-[11px] font-bold rounded-full uppercase tracking-wider mb-3 inline-block">Pro Tier</span>
                                        <h4 className="text-3xl font-black text-slate-900 dark:text-white">$49.00 <span className="text-base font-medium text-slate-500">/ month</span></h4>
                                    </div>
                                    <button className="text-sm font-bold text-primary-600 dark:text-primary-400 hover:underline">Change Plan</button>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-2 font-bold text-slate-700 dark:text-slate-300">
                                            <span>AI Operations</span>
                                            <span>4,250 / 10,000</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary-500 rounded-full" style={{ width: '42.5%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-2 font-bold text-slate-700 dark:text-slate-300">
                                            <span>Active Agents</span>
                                            <span>3 / 5</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary-500 rounded-full" style={{ width: '60%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 mt-8 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800/80">
                                Your next billing cycle occurs on <span className="font-bold text-slate-700 dark:text-slate-300">Mar 24, 2026</span>.
                            </p>
                        </div>

                        {/* Credit Card Container Shell */}
                        <div className="col-span-1 bg-white dark:bg-[#161b2e] rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm relative overflow-hidden backdrop-blur-md">
                            <div className="flex items-center justify-between p-6 pb-2 z-10 relative">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-2">Payment Method</span>
                                <button className="text-xs font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 transition-colors bg-slate-50 dark:bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 backdrop-blur-sm">
                                    Update
                                </button>
                            </div>
                            <div className="flex-1 flex items-center justify-center p-2">
                                <AnimatedCreditCard
                                    cardNumber="4242 4242 4242 4242"
                                    cardHolder="ALEX RIVERA"
                                    expiryDate="08/25"
                                    cvv="***"
                                    variant="dark"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Danger Zone */}
                    <div className="mt-12 border border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-500/5 rounded-2xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h4 className="text-lg font-bold text-red-600 dark:text-red-400 flex items-center gap-2">
                                    <AlertTriangle size={20} />
                                    Danger Zone
                                </h4>
                                <p className="text-sm text-red-700/70 dark:text-red-300/70 mt-1 max-w-xl leading-relaxed">
                                    Canceling your subscription will immediately pause all active Agents and revoke API access. Your data will be held for 30 days before permanent deletion.
                                </p>
                            </div>
                            <button className="whitespace-nowrap bg-white dark:bg-[#161b2e] border-2 border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 px-6 py-2.5 rounded-lg text-sm font-bold transition-colors">
                                Cancel Subscription
                            </button>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};