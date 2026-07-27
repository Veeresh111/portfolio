import Fuse from "fuse.js";

// Prepare a flattened array for Fuse.js fallback
const knowledgeBase = [
  { category: "skills", text: "Next.js, React, Node.js, Python, FastAPI, TypeScript, PostgreSQL (Supabase), MongoDB, Hugging Face, Gemini, LangChain" },
  { category: "experience", text: "Full Stack Web Developer at InnerCircle (LMS platform, Next.js, Firebase). Frontend Web Developer at InternPe. Contributed to GSSoC'24. Built Java apps at Prodigy InfoTech." },
  { category: "projects", text: "FinGurus (full-stack SaaS), Gen-Ai-Chatbot (Gemini API, React), Code-Editor (online code editor), Docu-med (healthcare web app)." },
  { category: "education", text: "Bachelor of Engineering in Computer Science and Engineering at Guru Nanak Dev Engineering College, Bidar (2022 - 2026), CGPA: 9.5." },
  { category: "contact", text: "Email: prakashmulge912@gmail.com, Phone: +91 8310920373." },
  { category: "location", text: "Based in Bidar, Karnataka, India. Open to remote opportunities globally." }
];

const fuse = new Fuse(knowledgeBase, {
  keys: ["text"],
  threshold: 0.5,
  includeScore: true,
});

// Helper for dynamic varied responses
const randomResponse = (responses: string[]) => responses[Math.floor(Math.random() * responses.length)];

export const generateEdgeAIResponse = async (input: string): Promise<string> => {
  const query = input.toLowerCase().trim();

  // 1. Conversational / Small Talk Intent
  if (/^(hi|hello|hey|greetings|sup|howdy)[\s\!\.\?]*$/.test(query)) {
    return randomResponse([
      "Hello! I'm Veeresh's AI Assistant. I know all about his skills, experience, and projects. Feel free to ask me anything about his professional background!",
      "Hi there! I'm the AI representation of Veeresh. How can I help you learn more about his work today?",
      "Greetings! I'm here to answer any questions you have about Veeresh's engineering background. What would you like to know?"
    ]);
  }

  if (query.includes("how are you") || query.includes("how do you do")) {
    return randomResponse([
      "I'm functioning perfectly, thank you! Ready to answer your questions about Veeresh's software engineering journey. What can I help you with?",
      "I'm doing great! Always excited to talk about Veeresh's projects and skills. What would you like to explore?"
    ]);
  }
  
  if (query.includes("who are you") || query.includes("what are you")) {
    return "I am a custom Edge-computed AI built by Veeresh to act as his digital recruiter assistant. I'm designed to answer your questions instantly, right here in your browser!";
  }

  // 2. Exact Match / Regex Intents (Super Smart Routing)
  if (query.includes("skill") || query.includes("tech") || query.includes("stack") || query.includes("language")) {
    return `Veeresh has a highly versatile tech stack! His core expertise includes:\n\n**Languages:** C, Java, Python\n**Web:** HTML, CSS, JavaScript, React, Node.js, Next.js, Tailwind CSS\n**Databases:** MySQL, PostgreSQL\n\nHe is incredibly adaptable and always eager to learn new technologies. Is there a specific tool you're looking for?`;
  }

  if (query.includes("experience") || query.includes("work") || query.includes("job") || query.includes("intern")) {
    return `Veeresh has excellent hands-on experience! Recently, he worked as a **Full Stack Software Engineer Intern at InnerCircle Softech**, where he built CRUD applications using React and FastAPI.\n\nHe also gained ML experience as an **AI/ML Intern at InternPe**, and worked as a remote **Software Engineer Intern at Zetheta Algorithms**.\n\nWould you like to hear about his projects instead?`;
  }

  if (query.includes("project") || query.includes("portfolio") || query.includes("build") || query.includes("made")) {
    return `Veeresh has built several impressive projects! Some highlights include:\n\n1. **AI-Driven Mock Interview App:** A real-time feedback tool built with React, FastAPI, and Gemini AI.\n2. **Enterprise Management System:** A secure role-based collaboration platform using React and Supabase.\n3. **AI Bon Voyage:** An AI travel assistant integrated with Google Maps.\n\nYou can see them all in the Projects section above!`;
  }

  if (query.includes("education") || query.includes("study") || query.includes("college") || query.includes("degree")) {
    return `Veeresh is currently pursuing his **Bachelor of Engineering in Computer Science** at Guru Nanak Dev Engineering College, Bidar. He expects to graduate in 2026 and currently maintains an excellent CGPA of 8.24!`;
  }

  if (query.includes("contact") || query.includes("email") || query.includes("phone") || query.includes("reach") || query.includes("hire")) {
    return `You can reach out to Veeresh directly via email at **prakashmulge912@gmail.com** or call him at **+91 8310920373**. You can also use the contact form at the bottom of this page!`;
  }

  // 3. Fallback to Fuse.js Fuzzy Search for specific keywords
  const results = fuse.search(query);
  
  if (results.length > 0 && results[0].score && results[0].score < 0.6) {
    const bestMatch = results[0].item;
    return `Based on his resume, here is what I found regarding "${query}":\n\n${bestMatch.text}\n\nLet me know if you want to know more about his background!`;
  }

  // 4. Ultimate Fallback (Gemini-style graceful degradation)
  return randomResponse([
    "I'm an AI, and I'm still learning! While I don't have the exact answer to that, I can tell you all about Veeresh's skills, experience, and projects. What would you like to know?",
    "That's a great question! I don't have that specific detail in my memory banks right now. However, I know Veeresh is a fast learner and a highly capable engineer. You can email him at prakashmulge912@gmail.com for more specifics!",
    "I'm not completely sure about that specific detail, but I'd be happy to tell you about Veeresh's robust tech stack or his recent internship experiences. Which sounds better?"
  ]);
};
