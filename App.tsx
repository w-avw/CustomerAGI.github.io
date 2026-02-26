import React, { useState } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { BottomNavigation } from './components/BottomNavigation';
import { Bot } from 'lucide-react';
import { AgentEditor } from './pages/AgentEditor';
import { AITeamGallery } from './pages/AITeamGallery';
import { Dashboard } from './pages/Dashboard';
import { DashboardStyle } from './pages/DashboardStyle';
import { KnowledgeBase } from './pages/KnowledgeBase';
import { APIConfigurator } from './pages/APIConfigurator';
import { JSConfigurator } from './pages/JSConfigurator';
import { ConversationHistory } from './pages/ConversationHistory';
import { Settings } from './pages/Settings';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden bg-[#f5f6f8] dark:bg-[#101422]">
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto mb-16 md:mb-0 relative custom-scrollbar">
        {/* Mobile Top Header (only visible on mobile) */}
        <div className="md:hidden flex-shrink-0 h-14 bg-white dark:bg-[#161b2e] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-primary-500 flex items-center justify-center text-white shadow-sm">
              <Bot size={18} />
            </div>
            <h1 className="text-slate-900 dark:text-white text-sm font-bold tracking-tight">CustomerAGI</h1>
          </div>
          <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-white dark:ring-slate-800">
            <img src="https://picsum.photos/100/100" alt="User" className="w-full h-full object-cover" />
          </div>
        </div>

        {children}
      </main>
      <BottomNavigation />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard_style" element={<DashboardStyle />} />
          <Route path="/agents" element={<AITeamGallery />} />
          <Route path="/agents/new" element={<AgentEditor />} />
          <Route path="/agents/:id" element={<AgentEditor />} />
          <Route path="/knowledge" element={<KnowledgeBase />} />
          <Route path="/tools/new/api" element={<APIConfigurator />} />
          <Route path="/tools/new/script" element={<JSConfigurator />} />
          <Route path="/tools/:id" element={<APIConfigurator />} /> {/* Keeping for mock backward compatibility */}
          <Route path="/conversations" element={<ConversationHistory />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;