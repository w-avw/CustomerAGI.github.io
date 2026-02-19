import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Bot,
    MessageSquare,
    Send,
    Database,
    Plus,
    ArrowUpRight,
    TrendingUp,
    TrendingDown,
    Eye
} from 'lucide-react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, PieChart, Pie, Cell, Area, AreaChart, Legend
} from 'recharts';

// ─── Mock Data ───────────────────────────────────────────────

const conversationTrendData = [
    { day: 'Mon', conversations: 124 },
    { day: 'Tue', conversations: 145 },
    { day: 'Wed', conversations: 132 },
    { day: 'Thu', conversations: 178 },
    { day: 'Fri', conversations: 165 },
    { day: 'Sat', conversations: 89 },
    { day: 'Sun', conversations: 112 },
];

const messagesBarData = [
    { day: 'Mon', sent: 420, received: 380 },
    { day: 'Tue', sent: 510, received: 460 },
    { day: 'Wed', sent: 390, received: 410 },
    { day: 'Thu', sent: 580, received: 520 },
    { day: 'Fri', sent: 490, received: 470 },
    { day: 'Sat', sent: 210, received: 190 },
    { day: 'Sun', sent: 280, received: 250 },
];

const conversationStatusData = [
    { name: 'Resolved', value: 612, color: '#55b7e0' },
    { name: 'Escalated', value: 143, color: '#fab728' },
    { name: 'Ongoing', value: 92, color: '#94a3b8' },
];

const agents = ['Support Bot', 'Sales Agent', 'Onboarding AI', 'Billing Bot', 'FAQ Helper'];
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const agentHeatmapData = agents.map(agent => ({
    agent,
    data: daysOfWeek.map(day => ({
        day,
        value: Math.floor(Math.random() * 100),
    })),
}));

const statCards: { label: string; value: string; change: string; trending: 'up' | 'down' | 'neutral'; icon: any; path: string; storagePercent?: number }[] = [
    {
        label: 'Total Agents',
        value: '12',
        change: '+2 this week',
        trending: 'up',
        icon: Bot,
        path: '/agents',
    },
    {
        label: 'Active Conversations',
        value: '847',
        change: '+12.4% from last week',
        trending: 'up',
        icon: MessageSquare,
        path: '/conversations',
    },
    {
        label: 'Messages Sent Today',
        value: '3,291',
        change: '+8.3% from yesterday',
        trending: 'up',
        icon: Send,
        path: '/conversations',
    },
    {
        label: 'Knowledge Sources',
        value: '7',
        change: '2.4 GB / 10 GB',
        trending: 'neutral',
        icon: Database,
        path: '/knowledge',
        storagePercent: 24,
    },
];

const quickActions = [
    { label: 'Create New Agent', icon: Plus, path: '/agents', description: 'Build and configure a new AI agent' },
    { label: 'Add Knowledge Source', icon: Database, path: '/knowledge', description: 'Upload PDFs or crawl websites' },
    { label: 'View Latest Conversations', icon: Eye, path: '/conversations', description: 'Review recent interactions' },
];

// ─── Helpers ─────────────────────────────────────────────────

const getHeatmapColor = (value: number): string => {
    if (value < 15) return '#f1f5f9';
    if (value < 30) return '#d4eef8';
    if (value < 50) return '#a0d8ed';
    if (value < 70) return '#6ec4e2';
    if (value < 85) return '#55b7e0';
    return '#3a9cc4';
};

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white border border-slate-200 rounded-lg shadow-lg px-3 py-2 text-xs">
                <p className="font-bold text-slate-700">{label}</p>
                {payload.map((entry: any, i: number) => (
                    <p key={i} style={{ color: entry.color }} className="font-medium">
                        {entry.name}: {entry.value}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

// ─── Component ───────────────────────────────────────────────

export const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const totalConversations = conversationStatusData.reduce((sum, d) => sum + d.value, 0);

    return (
        <div className="flex-1 overflow-y-auto bg-[#f5f6f8] dark:bg-[#0a0d18] custom-scrollbar">
            <div className="max-w-7xl mx-auto px-8 py-8 space-y-8 pb-20">

                {/* ── Welcome Header ─────────────────────── */}
                <section>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                        Welcome, Alex <span className="inline-block animate-[wave_2s_ease-in-out_infinite]">👋</span>
                    </h1>
                    <p className="text-slate-500 mt-1 text-base">
                        Here's what's happening across your AI team today.
                    </p>
                </section>

                {/* ── Stat Cards ──────────────────────────── */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {statCards.map((card) => (
                        <div
                            key={card.label}
                            onClick={() => navigate(card.path)}
                            className="group bg-white dark:bg-[#161b2e] rounded-xl border border-slate-200 dark:border-slate-800 p-5 cursor-pointer hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="size-10 rounded-xl bg-sky-50 dark:bg-sky-900/20 text-[#55b7e0] flex items-center justify-center">
                                    <card.icon size={20} strokeWidth={2} />
                                </div>
                                <button className="text-[10px] font-bold text-slate-400 uppercase tracking-wider hover:text-[#55b7e0] transition-colors flex items-center gap-0.5">
                                    View all <ArrowUpRight size={10} />
                                </button>
                            </div>
                            <p className="text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                                {card.value}
                            </p>
                            <p className="text-sm text-slate-500 mt-1 font-medium">{card.label}</p>
                            <div className="mt-3 flex items-center gap-1.5">
                                {card.trending === 'up' && <TrendingUp size={14} className="text-[#55b7e0]" />}
                                {card.trending === 'down' && <TrendingDown size={14} className="text-[#fab728]" />}
                                <span className={`text-xs font-semibold ${card.trending === 'up' ? 'text-[#55b7e0]' : card.trending === 'down' ? 'text-[#fab728]' : 'text-slate-400'}`}>
                                    {card.change}
                                </span>
                            </div>
                            {card.storagePercent !== undefined && (
                                <div className="mt-2 w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#55b7e0] rounded-full" style={{ width: `${card.storagePercent}%` }} />
                                </div>
                            )}
                        </div>
                    ))}
                </section>

                {/* ── Charts Row 1 ────────────────────────── */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {/* Conversations Over Time — Area/Line Chart */}
                    <div className="lg:col-span-2 bg-white dark:bg-[#161b2e] rounded-xl border border-slate-200 dark:border-slate-800 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Conversations Over Time</h3>
                                <p className="text-xs text-slate-400 mt-0.5">Last 7 days</p>
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full">Weekly</span>
                        </div>
                        <ResponsiveContainer width="100%" height={240}>
                            <AreaChart data={conversationTrendData}>
                                <defs>
                                    <linearGradient id="colorConversations" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#55b7e0" stopOpacity={0.25} />
                                        <stop offset="95%" stopColor="#55b7e0" stopOpacity={0.02} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 500 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 500 }} />
                                <Tooltip content={<CustomTooltip />} />
                                <Area
                                    type="monotone"
                                    dataKey="conversations"
                                    stroke="#55b7e0"
                                    strokeWidth={2.5}
                                    fill="url(#colorConversations)"
                                    dot={{ fill: '#55b7e0', strokeWidth: 2, r: 4, stroke: '#fff' }}
                                    activeDot={{ r: 6, fill: '#55b7e0', stroke: '#fff', strokeWidth: 2 }}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Conversation Status — Donut Chart */}
                    <div className="bg-white dark:bg-[#161b2e] rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-slate-900 dark:text-white">Status Breakdown</h3>
                        </div>
                        <div className="flex-1 flex items-center justify-center relative">
                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie
                                        data={conversationStatusData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={85}
                                        paddingAngle={4}
                                        dataKey="value"
                                        strokeWidth={0}
                                    >
                                        {conversationStatusData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip content={<CustomTooltip />} />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                <p className="text-2xl font-black text-slate-900 dark:text-white">{totalConversations}</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Total</p>
                            </div>
                        </div>
                        <div className="mt-4 space-y-2">
                            {conversationStatusData.map((item) => (
                                <div key={item.name} className="flex items-center justify-between text-xs">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                                        <span className="text-slate-600 dark:text-slate-400 font-medium">{item.name}</span>
                                    </div>
                                    <span className="font-bold text-slate-700 dark:text-slate-300">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Charts Row 2 ────────────────────────── */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* Messages Sent vs Received — Bar Chart */}
                    <div className="bg-white dark:bg-[#161b2e] rounded-xl border border-slate-200 dark:border-slate-800 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Messages Sent vs Received</h3>
                                <p className="text-xs text-slate-400 mt-0.5">Daily comparison this week</p>
                            </div>
                        </div>
                        <ResponsiveContainer width="100%" height={240}>
                            <BarChart data={messagesBarData} barGap={3}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 500 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 500 }} />
                                <Tooltip content={<CustomTooltip />} />
                                <Legend
                                    iconType="circle"
                                    iconSize={8}
                                    wrapperStyle={{ fontSize: '11px', fontWeight: 600, color: '#64748b' }}
                                />
                                <Bar dataKey="sent" name="Sent" fill="#55b7e0" radius={[4, 4, 0, 0]} barSize={16} />
                                <Bar dataKey="received" name="Received" fill="#a0d8ed" radius={[4, 4, 0, 0]} barSize={16} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Agent Usage — Heatmap */}
                    <div className="bg-white dark:bg-[#161b2e] rounded-xl border border-slate-200 dark:border-slate-800 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Agent Usage Heatmap</h3>
                                <p className="text-xs text-slate-400 mt-0.5">Interactions per agent per day</p>
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium">
                                <span>Low</span>
                                <div className="flex gap-0.5">
                                    {['#f1f5f9', '#d4eef8', '#a0d8ed', '#6ec4e2', '#55b7e0', '#3a9cc4'].map((c) => (
                                        <div key={c} className="w-3 h-3 rounded-sm" style={{ backgroundColor: c }} />
                                    ))}
                                </div>
                                <span>High</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            {/* Column headers */}
                            <div className="flex items-center">
                                <div className="w-28 shrink-0" />
                                {daysOfWeek.map((day) => (
                                    <div key={day} className="flex-1 text-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                        {day}
                                    </div>
                                ))}
                            </div>
                            {/* Rows */}
                            {agentHeatmapData.map((row) => (
                                <div key={row.agent} className="flex items-center gap-1">
                                    <div className="w-28 shrink-0 text-xs font-semibold text-slate-600 dark:text-slate-400 truncate pr-2">
                                        {row.agent}
                                    </div>
                                    {row.data.map((cell) => (
                                        <div
                                            key={cell.day}
                                            className="flex-1 aspect-[2/1] rounded-md transition-colors"
                                            style={{ backgroundColor: getHeatmapColor(cell.value) }}
                                            title={`${row.agent} — ${cell.day}: ${cell.value} interactions`}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Quick Actions ────────────────────────── */}
                <section>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {quickActions.map((action) => (
                            <button
                                key={action.label}
                                onClick={() => navigate(action.path)}
                                className="group flex items-center gap-4 bg-white dark:bg-[#161b2e] border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-5 hover:border-[#55b7e0] hover:bg-sky-50/50 dark:hover:bg-sky-900/10 transition-all duration-200 text-left"
                            >
                                <div className="size-10 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:bg-[#55b7e0] group-hover:text-white flex items-center justify-center transition-all duration-200 shrink-0">
                                    <action.icon size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-[#55b7e0] transition-colors">
                                        {action.label}
                                    </p>
                                    <p className="text-xs text-slate-400 mt-0.5">{action.description}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};
