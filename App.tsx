import React, { useState } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { AgentEditor } from './pages/AgentEditor';
import { AITeamGallery } from './pages/AITeamGallery';
import { Dashboard } from './pages/Dashboard';
import { KnowledgeBase } from './pages/KnowledgeBase';
import { APIConfigurator } from './pages/APIConfigurator';
import { JSConfigurator } from './pages/JSConfigurator';
import { ConversationHistory } from './pages/ConversationHistory';
import { Settings } from './pages/Settings';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f6f8] dark:bg-[#101422]">
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {children}
      </main>
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