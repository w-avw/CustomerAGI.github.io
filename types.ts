export interface AgentConfig {
    id: string;
    name: string;
    description: string;
    role: string;
    type: 'goal-driven' | 'script-based' | 'hybrid';
    tone: 'professional' | 'friendly' | 'concise' | 'empathetic' | 'custom';
    customTone?: string;
}

export interface Message {
    id: string;
    role: 'user' | 'model';
    text: string;
    timestamp: Date;
}

export interface KnowledgeSource {
    id: string;
    name: string;
    type: 'pdf' | 'web' | 'video';
    status: 'indexed' | 'processing' | 'error';
    meta: string;
    date: string;
}

export interface Tool {
    id: string;
    name: string;
    type: 'REST API' | 'JS Snippet' | 'Integration';
    description: string;
    lastSync: string;
    status: 'active' | 'inactive';
}

export interface Conversation {
    id: string;
    userId: string;
    preview: string;
    timestamp: string;
    status: 'resolved' | 'escalated' | 'ongoing';
    agent: string;
}