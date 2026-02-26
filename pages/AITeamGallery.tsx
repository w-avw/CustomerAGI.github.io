import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Users,
    Settings,
    Trophy,
    Handshake,
    Bot,
    Plus,
    ChevronRight,
    MoreHorizontal
} from 'lucide-react';

// ─── Mock Data ───────────────────────────────────────────────

interface Team {
    id: string;
    name: string;
    icon: any;
    agents: { id: string; name: string; role: string }[];
}

const teams: Team[] = [
    {
        id: 'team-1',
        name: 'Support Squad',
        icon: Users,
        agents: [
            { id: '1', name: 'Tier 1 Support', role: 'General Inquiries' },
            { id: '2', name: 'Technical Specialist', role: 'API Debugging' },
        ]
    },
    {
        id: 'team-2',
        name: 'Sales Force',
        icon: handShakeIconWrapper(),
        agents: [
            { id: '3', name: 'Lead Qualifier', role: 'Initial Outreach' },
            { id: '4', name: 'Closer Bot', role: 'Contract Negotiation' },
            { id: '5', name: 'Demo Assistant', role: 'Product Walkthroughs' },
        ]
    },
    {
        id: 'team-3',
        name: 'Onboarding',
        icon: trophyIconWrapper(),
        agents: [
            { id: '6', name: 'Welcome Guide', role: 'Account Setup' },
        ]
    },
    {
        id: 'team-4',
        name: 'Internal Ops',
        icon: Settings,
        agents: []
    }
];

// Wrapper functions to handle icon components if needed, or just use Lucide direct
function handShakeIconWrapper() { return Handshake; }
function trophyIconWrapper() { return Trophy; }

// ─── Component ───────────────────────────────────────────────

export const AITeamGallery: React.FC = () => {
    const navigate = useNavigate();
    const carouselRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            if (carouselRef.current) {
                setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
            }
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const TeamCard: React.FC<{ team: Team, isMobile?: boolean }> = ({ team, isMobile }) => (
        <div className={`group bg-white dark:bg-[#161b2e] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col shadow-sm dark:shadow-md hover:shadow-lg dark:hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 transition-all duration-300 ${isMobile ? 'min-w-[85vw] snap-center mr-4' : ''}`}>
            {/* Card Header */}
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                    <div className="size-14 rounded-2xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-500 shadow-inner border border-primary-100 dark:border-primary-900/50">
                        <team.icon size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{team.name}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{team.agents.length} Agent{team.agents.length !== 1 && 's'}</p>
                    </div>
                </div>
                <button className="text-slate-400 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white transition-colors p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                    <MoreHorizontal size={20} />
                </button>
            </div>

            {/* Agents List */}
            <div className="flex-1 space-y-3 mb-8">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Agents Inside</h4>
                {team.agents.length > 0 ? (
                    <div className="space-y-2">
                        {team.agents.map((agent) => (
                            <button
                                key={agent.id}
                                onClick={() => navigate(`/agents/${agent.id}`)}
                                className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 group/agent transition-all text-left"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center group-hover/agent:text-primary-600 dark:group-hover/agent:text-primary-500 transition-colors">
                                        <Bot size={16} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-700 dark:text-slate-200 group-hover/agent:text-slate-900 dark:group-hover/agent:text-white transition-colors">{agent.name}</p>
                                        <p className="text-[10px] text-slate-500">{agent.role}</p>
                                    </div>
                                </div>
                                <ChevronRight size={14} className="text-slate-400 dark:text-slate-600 group-hover/agent:text-slate-600 dark:group-hover/agent:text-slate-400 transition-colors" />
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-800 text-center">
                        <p className="text-xs text-slate-500 italic">No agents yet</p>
                    </div>
                )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-auto">
                <button
                    onClick={() => navigate('/agents/new')}
                    className="flex-1 py-3 px-4 bg-primary-600 hover:bg-primary-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-primary-900/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                    <Plus size={16} strokeWidth={3} />
                    Create Agent
                </button>
                <button
                    className="flex-1 py-3 px-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-sm font-bold rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all active:scale-95"
                >
                    Configure Team
                </button>
            </div>
        </div>
    );

    return (
        <div className="flex-1 overflow-y-auto bg-[#f5f6f8] dark:bg-[#0a0d18] custom-scrollbar">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8 pb-20">

                {/* ── Header ─────────────────────────────── */}
                <div className="flex md:items-center items-start md:justify-between flex-col md:flex-row gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">AI Team</h1>
                        <p className="text-slate-500 mt-1">Manage your teams of AI agents.</p>
                    </div>
                    <button className="flex items-center justify-center gap-2 w-full md:w-auto px-5 py-2.5 bg-primary-500 hover:bg-primary-400 text-white font-bold rounded-full shadow-lg shadow-primary-500/20 transition-all active:scale-95">
                        <Plus size={18} strokeWidth={3} />
                        Create Team
                    </button>
                </div>

                {/* ── Team Gallery Framer Carousel (Mobile) ── */}
                <div className="md:hidden">
                    <motion.div ref={carouselRef} className="cursor-grab overflow-hidden active:cursor-grabbing">
                        <motion.div
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }}
                            className="flex"
                        >
                            {teams.map((team) => (
                                <TeamCard key={team.id} team={team} isMobile={true} />
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* ── Team Gallery Grid (Desktop) ──────────── */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teams.map((team) => (
                        <TeamCard key={team.id} team={team} />
                    ))}
                </div>

            </div>
        </div>
    );
};
