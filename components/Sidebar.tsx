import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Bot,
    Database,
    Settings,
    Plus,
    MessageSquare,
    Hammer
} from 'lucide-react';

export const Sidebar: React.FC = () => {
    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
        { icon: Bot, label: 'AI Team', path: '/agents' },
        { icon: Database, label: 'Knowledge Base', path: '/knowledge' },
        { icon: MessageSquare, label: 'Conversations', path: '/conversations' },
    ];

    const adminItems = [
        { icon: Settings, label: 'Settings', path: '/settings' },
    ];

    return (
        <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#161b2e] hidden md:flex flex-col shrink-0 z-20">
            <div className="p-6 flex items-center gap-3">
                <div className="size-10 rounded-xl bg-primary-500 flex items-center justify-center text-white shadow-lg shadow-primary-500/20">
                    <Bot size={24} />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-slate-900 dark:text-white text-base font-bold leading-tight tracking-tight">CustomerAGI</h1>
                    <p className="text-primary-600 dark:text-primary-400 text-xs font-medium">Workspace v2.4</p>
                </div>
            </div>

            <nav className="flex-1 px-4 space-y-1 mt-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.label}
                        to={item.path}
                        onClick={(e) => item.disabled && e.preventDefault()}
                        className={({ isActive }) => `
                            flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all
                            ${item.disabled ? 'opacity-50 cursor-not-allowed text-slate-400' : ''}
                            ${isActive && !item.disabled
                                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                            }
                        `}
                    >
                        <item.icon size={20} strokeWidth={2} />
                        {item.label}
                    </NavLink>
                ))}

                <div className="pt-6 pb-2 px-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Administration</p>
                </div>

                {adminItems.map((item) => (
                    <NavLink
                        key={item.label}
                        to={item.path}
                        className={({ isActive }) => `
                            flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all
                            ${isActive
                                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                            }
                        `}
                    >
                        <item.icon size={20} strokeWidth={2} />
                        {item.label}
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                <button className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary-600/20 hover:bg-primary-700 transition-all active:scale-[0.98]">
                    <Plus size={18} />
                    New Agent
                </button>

                <div className="mt-4 flex items-center gap-3 px-1">
                    <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-white dark:ring-slate-800">
                        <img
                            src="https://picsum.photos/100/100"
                            alt="User"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate text-slate-900 dark:text-white">Alex Rivera</p>
                        <p className="text-xs text-slate-500 truncate">Pro Plan</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};