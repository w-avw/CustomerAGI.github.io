import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Bot, Database, MessageSquare, Settings } from 'lucide-react';

export const BottomNavigation: React.FC = () => {
    const navItems = [
        { icon: LayoutDashboard, label: 'Dash', path: '/dashboard' },
        { icon: Bot, label: 'Agents', path: '/agents' },
        { icon: Database, label: 'Data', path: '/knowledge' },
        { icon: MessageSquare, label: 'Chat', path: '/conversations' },
        { icon: Settings, label: 'Settings', path: '/settings' },
    ];

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white dark:bg-[#161b2e] border-t border-slate-200 dark:border-slate-800 flex items-center justify-around px-2 z-50">
            {navItems.map((item) => (
                <NavLink
                    key={item.label}
                    to={item.path}
                    className={({ isActive }) => `
                        flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors
                        ${isActive
                            ? 'text-primary-600 dark:text-primary-400'
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}
                    `}
                >
                    <item.icon size={20} strokeWidth={2.5} />
                    <span className="text-[10px] font-medium">{item.label}</span>
                </NavLink>
            ))}
        </nav>
    );
};
