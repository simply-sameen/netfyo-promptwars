import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the SDK
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// We use the flash model for ultra-fast chat responses
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// This is the "Local State" we will pass to the AI on every request.
// In the future, this comes from your actual backend.
const MOCK_EVENT_CONTEXT = `
CURRENT EVENT: Kerala Tech Summit 2026
VENUE: Main Convention Center, Trivandrum
CURRENT TIME: Day 1, 10:30 AM

LIVE SCHEDULE:
- 10:00 AM - 11:30 AM: Keynote on AI Agents (Main Stage)
- 11:00 AM - 12:00 PM: Startup Pitch Wars (Hall B)
- 12:00 PM - 01:00 PM: Networking Lunch (Food Court, Ground Floor)
- 01:00 PM - 03:00 PM: Web3 & Blockchain Panel (Stage 2)

USER CONTEXT:
- Ticket Type: VIP Attendee
- Interests: AI, Startups, Networking
- Current Location: Entrance Lobby
`;

const SYSTEM_INSTRUCTION = `
You are the Netfyo Attendee Concierge, a highly intelligent, frictionless event assistant.
Your goal is to help attendees navigate physical events, manage their schedules, and find relevance in the chaos.

Rules:
1. Be concise, highly professional, and helpful. Use short paragraphs.
2. ALWAYS base your answers on the provided "EVENT CONTEXT".
3. If an attendee asks for directions or schedules, cross-reference their current location and time.
4. If they ask about something not in the schedule, politely inform them you don't have that information.
5. Format your responses cleanly.
`;

export const askNetfyoConcierge = async (userMessage: string) => {
    try {
        const prompt = `
      ${SYSTEM_INSTRUCTION}
      
      ---EVENT CONTEXT---
      ${MOCK_EVENT_CONTEXT}
      -------------------
      
      User Message: "${userMessage}"
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "I am currently experiencing a network interruption. Please check the physical schedule boards.";
    }
};