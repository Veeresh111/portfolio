// Prepare the knowledge base for the LLM
const resumeContext = `
Veeresh Mulge's Professional Profile:
Skills: Next.js, React, Node.js, Python, FastAPI, TypeScript, PostgreSQL (Supabase), MongoDB, Hugging Face, Gemini, LangChain
Experience: 
- Full Stack Web Developer at InnerCircle (LMS platform, Next.js, Firebase) - 2026 to Present
- Frontend Web Developer at InternPe - 2025
- Software Engineer Intern at Zetheta Algorithms - 2026
- Coding Educator at BrightCHAMPS - 2026
Projects: FinGurus (full-stack SaaS), Gen-Ai-Chatbot (Gemini API, React), Code-Editor (online code editor), Docu-med (healthcare web app).
Education: Already graduated with a Bachelor of Engineering in Computer Science and Engineering at Guru Nanak Dev Engineering College, Bidar, CGPA: 8.24.
Contact: Email: prakashmulge912@gmail.com, Phone: +91 8310920373.
Location: Based in Bidar, Karnataka, India. Open to remote opportunities globally.
`;

export const generateEdgeAIResponse = async (input: string): Promise<string> => {
  const query = input.trim();

  // Prompt engineering to guide the LLM
  const prompt = `You are Veeresh's intelligent AI assistant, embedded on his personal portfolio website. 
Your goal is to answer questions about Veeresh politely, concisely, and professionally. 
If the user asks something conversational (like "how are you", "are you a fool", "what's your name"), respond naturally and steer the conversation back to Veeresh's skills.
Keep answers under 3 sentences if possible.

Here is all the knowledge you have about Veeresh:
${resumeContext}

User asked: "${query}"
Your response:`;

  try {
    const response = await fetch('https://free-api.cveoy.top/v3/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error("Free LLM API failed");
    }

    let text = await response.text();
    
    // Strip out the Chinese advertisement injected by the free API
    text = text.replace(/欢迎使用 公益站! 站长合作邮箱：wxgpt@qq\.com<br\/>\\n\\n/g, '');
    text = text.replace(/欢迎使用 公益站! 站长合作邮箱：wxgpt@qq\.com<br\/>\n\n/g, '');
    text = text.replace(/欢迎使用 公益站! 站长合作邮箱：wxgpt@qq\.com<br\/>/g, '');
    
    return text.trim() || "I'm having a little trouble thinking right now, but I can definitely tell you that Veeresh is a fantastic Full Stack Developer!";
  } catch (error) {
    console.error("AI Generation Error:", error);
    // Graceful fallback if the free API is down
    return "I am Veeresh's AI Assistant! I'm currently operating in offline mode, but I can tell you that Veeresh is an incredible Full Stack Engineer. You can email him directly at prakashmulge912@gmail.com!";
  }
};
