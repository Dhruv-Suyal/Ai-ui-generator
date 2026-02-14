🚀 Design Engine: AI-Powered UI Studio
A sophisticated, React-based AI design workspace that allows users to generate, preview, and refine high-end UI components using natural language. Built with a minimalist SaaS aesthetic and a robust component library.

✨ Key Features
AI Code Generation: Instantly transform text prompts into production-ready React code.

Live Preview: Real-time rendering of generated components using a custom sandbox.

Version Control (Rollback): Easily revert to previous designs with a built-in history stack.

State Persistence: All chat messages and code are automatically saved to Local Storage.

Premium Component Library: Includes strictly typed Navbar, Hero, Section, Card, Table, Input, and Button components.

Modern UI: Dark-mode architecture with Glassmorphism effects and smooth transitions.

🛠️ Tech Stack
Framework: React 18

Language: TypeScript (Strictly Typed)

Styling: Tailwind CSS

Bundler: Vite

Deployment: Netlify

🚀 Getting Started
Prerequisites
Node.js (v18.0.0 or higher)

npm or yarn

AI API Key (Google Gemini or OpenAI)

Installation
Clone the repository

Bash
git clone https://github.com/your-username/design-engine.git
cd design-engine/client
Install dependencies

Bash
npm install
Environment Variables
Create a .env file in the client directory:

Code snippet
VITE_AI_API_KEY=your_api_key_here
Run Development Server

Bash
npm run dev
The app will be available at http://localhost:5173.

🌐 Deployment on Netlify
This project is configured for one-click deployment on Netlify.

Build Command: npm run build

Publish Directory: client/dist (or dist if in root)

Environment Variables: Ensure VITE_AI_API_KEY is added in the Netlify Dashboard under Site Settings.

Note on Case Sensitivity: This project uses strict naming conventions. Ensure file imports match filenames (e.g., Table.tsx) exactly to avoid Linux build errors.
