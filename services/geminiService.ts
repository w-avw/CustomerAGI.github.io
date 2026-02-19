import { GoogleGenAI, Chat } from "@google/genai";
import { AgentConfig, Message } from "../types";

// Initialize Gemini Client
const apiKey = process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const createAgentChat = (config: AgentConfig): Chat => {
  const systemInstruction = `
    You are an AI assistant named "${config.name}".
    Role & Instructions: ${config.role}
    Tone: ${config.tone}.
    Goal: Act exactly as this configured agent would in a real customer support scenario.
    Keep responses relatively short for a chat interface.
  `;

  if (!ai) {
    throw new Error("Gemini AI is not initialized. Please set GEMINI_API_KEY.");
  }

  return ai.chats.create({
    model: 'gemini-2.5-flash-latest', // Fast model for interactive preview
    config: {
      systemInstruction: systemInstruction,
      temperature: 0.7,
    },
  });
};

export const sendMessageToAgent = async (chat: Chat, message: string): Promise<string> => {
  try {
    const result = await chat.sendMessage({ message });
    return result.text || "I didn't get a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error: Unable to connect to AI service. Please check your API key.";
  }
};

export const analyzeConversation = async (history: Message[]): Promise<string> => {
  try {
    const transcript = history.map(m => `${m.role.toUpperCase()}: ${m.text}`).join('\n');
    if (!ai) {
      return "AI analysis unavailable (Missing API Key).";
    }
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analyze the following chat transcript. provide a very brief 1-sentence summary of the user's issue and sentiment.
            
            Transcript:
            ${transcript}`
    });
    return response.text || "Analysis failed.";
  } catch (error) {
    return "Could not analyze conversation.";
  }
}