# NETFYO: The Intelligent Event OS

## 📌 The Vertical: Physical Event Experience
NETFYO is an intelligent, mobile-first Event Operating System designed to manage the chaos of physical events. Moving beyond basic ticketing, this prototype focuses on the **Attendee Concierge**—a smart, dynamic assistant that provides real-time, context-aware navigation, schedule management, and dynamic updates during large-scale physical summits.

## 🧠 Approach and Logic
Large-scale physical events often suffer from information overload. Attendees struggle to find relevant stalls, track sudden schedule changes, or navigate massive venues. 

Our logic centers on an **Agentic Assistant Model**:
1. **Context Ingestion:** The app maintains a lightweight local state of the user's ticket type, interests, and the real-time event schedule.
2. **Dynamic Reasoning:** Instead of a static map or list, the assistant processes natural language to help the attendee optimize their time (e.g., "What is happening near the main stage right now that fits my interest in AI?").
3. **Minimalist Execution:** We utilized a highly optimized, single-branch Vite/React architecture with a Notion-style dark mode aesthetic. This ensures the UI remains completely frictionless, accessible, and ultra-fast on mobile devices under poor venue network conditions.

## 🛠️ Google Services Integration
To build a truly dynamic assistant, NETFYO relies on the Google ecosystem:
* **Google Gemini API:** Powers the core conversational intelligence, parsing attendee intents and matching them against complex event schedules.
* **Google Maps / Places API:** Embedded routing to guide users from their current location to specific stalls or networking zones within the venue.
* **Google Calendar API:** Enables one-click synchronization for attendees to seamlessly add targeted keynotes directly to their personal schedules.

## ⚙️ How the Solution Works (MVP Scope)
* **Frontend:** A responsive, mobile-first UI built with React, Vite, and Tailwind CSS. Typography is driven by `Geist Sans` and `JetBrains Mono` for maximum readability.
* **State Management:** Localized state handling for theme switching (dynamic accent colors) and mocked authentication flows.
* **Current State:** This repository represents the structural frontend shell and UX logic. Due to the strict 1MB repo limit and single-branch constraints of the warmup round, the backend data (schedules/venues) is heavily mocked via local JSON to demonstrate the UI/UX flow before live API wiring in the challenge round.

## 📝 Assumptions Made
* Attendees will primarily access this platform via mobile devices while walking; therefore, the UI strictly enforces a mobile-first, high-contrast dark mode for battery saving and outdoor visibility.
* Venue Wi-Fi can be unreliable, necessitating a lightweight bundle size and minimal client-side rendering overhead.
* The Google Gemini API can process context payloads fast enough to provide near-instantaneous concierge responses.

## 🚀 Running the Project
```bash
npm install
npm run dev
