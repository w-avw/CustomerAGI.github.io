import React from 'react';
import { Search, Bell, ChevronDown, Info, ArrowUpRight, HelpCircle } from 'lucide-react';

export const DashboardStyle: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0d1017] text-white font-sans p-6 overflow-x-hidden">
            {/* Top Header */}
            <header className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2 cursor-pointer">
                    <h1 className="text-xl font-medium tracking-wide">Dashboard</h1>
                    <ChevronDown size={16} className="text-slate-400" />
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                            type="text"
                            placeholder="STOMina campaign"
                            className="bg-[#1c212c] text-sm rounded-full py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-1 focus:ring-white/20 border-none text-slate-200 placeholder:text-slate-500"
                        />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#2d3342] rounded-full p-1 cursor-pointer hover:bg-[#383f52]">
                            <ArrowUpRight size={12} className="text-slate-300" />
                        </div>
                    </div>

                    <button className="flex items-center gap-2 bg-[#1c212c] hover:bg-[#2d3342] transition-colors rounded-full py-2 px-4 shadow-sm">
                        <div className="relative">
                            <Bell size={16} className="text-slate-300" />
                            <div className="absolute top-0 right-0 size-1.5 bg-red-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">2 new</span>
                    </button>
                </div>
            </header>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Left Column: My Campaigns */}
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-end mb-2">
                        <div>
                            <h2 className="text-2xl font-semibold">My Campaigns</h2>
                            <p className="text-slate-400 text-sm mt-1">
                                3 persons and <span className="text-slate-300">@yerimaldo</span> have access.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 bg-[#1c212c] px-4 py-2 rounded-xl cursor-pointer hover:bg-[#252b38] border border-white/5">
                            <span className="text-sm font-medium">Finance</span>
                            <ChevronDown size={16} className="text-slate-400" />
                        </div>
                    </div>

                    {/* Overview Card */}
                    <div className="bg-[#121620] rounded-3xl p-6 border border-white/5 shadow-2xl relative overflow-hidden">
                        {/* Soft Glow Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-lg font-medium">Overview</h3>
                            <Info size={18} className="text-slate-500 cursor-pointer hover:text-slate-300" />
                        </div>

                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Max records</span>
                                <span className="font-medium">2 times increase to the last month</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Comparative rates</span>
                                <span className="font-medium text-blue-400">+ 12.83 %</span>
                            </div>
                        </div>

                        {/* Time Toggles */}
                        <div className="flex bg-[#0a0d14] p-1 rounded-2xl mb-8 border border-white/5 w-max">
                            <button className="px-6 py-2 text-sm text-slate-400 font-medium rounded-xl hover:text-slate-200 transition-colors">24h</button>
                            <button className="px-6 py-2 text-sm text-slate-400 font-medium rounded-xl hover:text-slate-200 transition-colors">Week</button>
                            <button className="px-6 py-2 text-sm text-white font-medium bg-[#212b40] rounded-xl shadow-md border border-white/10">Month</button>
                        </div>

                        {/* Mock Chart Area */}
                        <div className="relative h-48 w-full mt-10 mb-6 group">
                            {/* Grid Lines */}
                            <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none">
                                <div className="border-b border-dashed border-white w-full h-0"></div>
                                <div className="border-b border-dashed border-white w-full h-0"></div>
                                <div className="border-b border-dashed border-white w-full h-0"></div>
                                <div className="border-b border-dashed border-white w-full h-0"></div>
                            </div>

                            {/* Fake SVG Chart Line */}
                            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                <defs>
                                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                                        <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
                                    </linearGradient>

                                    {/* Subtle drop shadow under the line */}
                                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur stdDeviation="2" result="blur" />
                                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                    </filter>
                                </defs>

                                <path
                                    d="M0 80 Q10 75 20 60 T40 50 T55 30 T70 35 T85 10 T100 30"
                                    fill="none"
                                    stroke="url(#lineGrad)"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    filter="url(#glow)"
                                />

                                {/* Active Point (Mar 29) */}
                                <circle cx="55" cy="30" r="4" fill="#1e293b" stroke="#60a5fa" strokeWidth="2.5" />

                                {/* Dashed vertical line down from active point */}
                                <line x1="55" y1="30" x2="55" y2="100" stroke="#60a5fa" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
                            </svg>

                            {/* Tooltip (Mock) */}
                            <div className="absolute left-[45%] top-[35%] bg-[#1a2333] border border-blue-500/20 shadow-2xl rounded-2xl p-4 w-32 backdrop-blur-md transform transition-transform group-hover:scale-105 z-10">
                                <p className="text-blue-400 text-xs mb-1 font-medium">Mar 29</p>
                                <p className="text-white text-base font-bold mb-0.5">$ 5,538.65</p>
                                <p className="text-blue-400 text-xs font-medium">+ 9.41 %</p>
                            </div>
                        </div>

                        {/* X Axis Labels */}
                        <div className="flex justify-between text-xs text-slate-500 mt-2 px-2">
                            <span>Mar 8</span>
                            <span>Mar 18</span>
                            <span>Mar 28</span>
                            <span>Apr 8</span>
                        </div>

                        {/* Bottom Stats */}
                        <div className="mt-8 flex justify-between items-end border-t border-white/5 pt-6">
                            <div className="flex items-baseline gap-1">
                                <span className="text-blue-500 text-3xl font-light">+</span>
                                <span className="text-4xl font-semibold tracking-tight">19.23</span>
                                <span className="text-2xl text-slate-400">%</span>
                            </div>
                            <div className="text-right">
                                <p className="text-slate-500 text-xs mb-1">Last updated</p>
                                <p className="text-sm font-medium">Today, 06:49 AM</p>
                            </div>
                        </div>
                    </div>

                    {/* Further items in left column (e.g. My Top Campaigns header) */}
                    <div className="flex justify-between items-center mt-6 px-1">
                        <h2 className="text-xl font-semibold text-slate-100">My Top Campaigns</h2>
                        <div className="flex items-center gap-4 text-sm">
                            <span className="text-slate-500">02 of 5</span>
                            <div className="flex gap-2">
                                <button className="size-8 bg-[#1c212c] rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#2d3342] transition-colors"><span className="text-lg leading-none">&larr;</span></button>
                                <button className="size-8 bg-[#2d3342] rounded-full flex items-center justify-center text-white hover:bg-[#383f52] transition-colors"><span className="text-lg leading-none">&rarr;</span></button>
                            </div>
                        </div>
                    </div>
                    {/* Mock bottom cards could go here */}

                </div>

                {/* Right Column: Total Balance */}
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-end mb-2">
                        <div>
                            <h2 className="text-2xl font-semibold">Total Balance</h2>
                            <p className="text-slate-400 text-sm mt-1">
                                The sum of all amounts on <span className="text-slate-300 font-medium">my wallet</span>
                            </p>
                        </div>
                        <div className="flex items-center gap-2 bg-[#1c212c] px-4 py-2 rounded-xl cursor-pointer hover:bg-[#252b38] border border-white/5">
                            <span className="text-sm font-medium">US Dollar</span>
                            <ChevronDown size={16} className="text-slate-400" />
                        </div>
                    </div>

                    <div className="bg-[#0f131a] rounded-[2rem] p-8 border border-white/5 shadow-2xl">
                        {/* Balance Top */}
                        <div className="flex justify-between items-start mb-8">
                            <div className="flex items-baseline gap-2">
                                <span className="text-blue-500 text-4xl font-light">$</span>
                                <span className="text-5xl font-semibold tracking-tight">23,094.57</span>
                            </div>
                            <div className="text-right mt-2 text-sm">
                                <p className="text-slate-400 mb-1">Compared to last month</p>
                                <p className="text-red-400 font-medium">- 37.16 %</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-8 pb-8 border-b border-white/5">
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-slate-500">Yearly avg:</span>
                                <span className="font-medium">$ 34,502.19</span>
                                <ArrowUpRight size={14} className="text-blue-500" />
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer hover:text-white transition-colors">
                                <HelpCircle size={16} />
                                <span className="font-medium border-b border-dashed border-slate-500 pb-0.5">How it works?</span>
                            </div>
                        </div>

                        {/* AI Assistant Card */}
                        <div className="bg-gradient-to-br from-[#131c31] to-[#0e1628] rounded-3xl p-6 border border-blue-500/20 overflow-hidden relative min-h-[220px]">
                            {/* Background Stars / Dust */}
                            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 40%, white 1px, transparent 1px), radial-gradient(circle at 40% 80%, white 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>

                            <div className="relative z-10 flex flex-col items-center justify-center text-center mt-2 h-full">
                                <h4 className="text-blue-400 font-medium text-lg mb-2 tracking-wide">Ai Assistant</h4>
                                <div className="flex items-center gap-3 text-sm text-slate-300 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                                    <div className="size-3.5 border-2 border-slate-400 border-t-white rounded-full animate-spin"></div>
                                    <span>is updating the balance amount now...</span>
                                </div>
                            </div>

                            {/* Decorative Blue Swirl at bottom */}
                            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-600 rounded-full blur-[80px] opacity-40 mix-blend-screen"></div>

                            {/* Fake 3D flower/swirl using CSS shapes & gradients for a quick mock */}
                            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 h-48 opacity-90">
                                {/* This represents the blue wavy orb at the bottom */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-900 via-blue-600 to-blue-400 shadow-[0_0_50px_rgba(37,99,235,0.6)] mix-blend-plus-lighter" style={{ clipPath: 'polygon(50% 10%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', transform: 'rotate(15deg) scale(1.5)', opacity: 0.8 }}></div>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-800 via-blue-500 to-blue-300" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', transform: 'rotate(45deg) scale(1.2)' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Popular Campaigns Table Area */}
                    <div className="bg-[#0f131a] rounded-[2rem] p-6 border border-white/5 shadow-2xl mt-4">
                        <h3 className="text-lg font-medium mb-6 px-2">Popular Campaigns</h3>

                        <div className="w-full overflow-x-auto">
                            <table className="w-full text-left text-sm whitespace-nowrap">
                                <thead>
                                    <tr className="text-slate-500 border-b border-slate-800/50">
                                        <th className="pb-4 font-normal px-2">Rank</th>
                                        <th className="pb-4 font-normal px-2">Name</th>
                                        <th className="pb-4 font-normal px-2">Admin</th>
                                        <th className="pb-4 font-normal px-2">Date Added</th>
                                        <th className="pb-4 font-normal px-2">Business</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-white/5 transition-colors group cursor-pointer">
                                        <td className="py-4 px-2 text-slate-400 font-medium">#1</td>
                                        <td className="py-4 px-2 font-medium">IBO Adve...</td>
                                        <td className="py-4 px-2">
                                            <div className="flex items-center gap-2">
                                                <img src="https://picsum.photos/seed/samuel/32/32" alt="Samuel" className="size-6 rounded-full" />
                                                <span className="text-slate-300">Samuel</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-2 text-slate-400">02/14/2019</td>
                                        <td className="py-4 px-2 text-slate-400">Advertisi...</td>
                                    </tr>
                                    {/* Add more mock rows if desired */}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};
