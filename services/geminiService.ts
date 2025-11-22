import { GoogleGenAI } from "@google/genai";
import { RESUME_TEXT } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    if (!process.env.API_KEY) {
        console.error("API_KEY is missing from environment variables.");
        return null;
    }
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const sendMessageToGemini = async (
  message: string, 
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  const client = getClient();
  if (!client) return "I'm sorry, my AI brain is currently offline (API Key missing). Please contact Apon directly via email!";

  try {
    const systemInstruction = `
      You are an AI assistant representing Md. Apon Chowdhury on his portfolio website.
      Your persona is professional, enthusiastic, and knowledgeable about Product Management.
      
      Here is the context about Apon (Resume Data):
      ${RESUME_TEXT}
      
      Rules:
      1. Answer questions strictly based on the provided context.
      2. If asked about something not in the resume, politely mention that you don't have that info but suggest contacting him directly.
      3. Keep answers concise, suitable for a chat interface (under 100 words mostly).
      4. Be friendly and use emojis occasionally.
      5. If asked about contact info, provide the email or LinkedIn link.
    `;

    const model = "gemini-2.5-flash";
    
    // We can't pass history directly to generateContent in a stateless way easily without using ChatSession,
    // but for this simple implementation, we will append history to the prompt or use the chat API.
    // Let's use the Chat API for better context management.
    
    const chat = client.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I didn't catch that, could you rephrase?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Something went wrong connecting to Apon's AI assistant. Please try again later.";
  }
};