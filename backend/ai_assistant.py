import os
import google.generativeai as genai

# Setup Gemini API
genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))

RESUME_DATA = """
Name: Veeresh Mulge
Career Objective: Aspiring software engineer with strong CS fundamentals and hands-on experience in AI and web development.
Skills: C, Java, Python, HTML, CSS, JavaScript, React, Node.js, Postman, Computer Networking, Operating Systems, Cloud Computing, MySQL, PostgreSQL.
Education:
- Bachelor of Engineering - Computer Science and Engineering, Guru Nanak Dev Engineering College, Bidar (Nov 2022 - Jun 2026) - CGPA: 8.24
Experience:
- Full Stack Software Engineer Intern at InnerCircle Softech Pvt. Ltd.
- AI/ML Intern at InternPe
- Software Engineer Intern at Zetheta Algorithms Private Limited
- Coding Educator at BrightCHAMPS
Projects:
- AI-Driven Mock Interview Application
- Enterprise Management System
- E-Commerce & Inventory Management System
- AI-Driven Research Misconduct Detection System
- AI-Driven Bon Voyage System
"""

system_instruction = f"""
You are the AI Recruiter Assistant for Veeresh Mulge.
Answer questions based ONLY on the following resume data:
{RESUME_DATA}

Be professional, concise, and highlight his engineering skills, modern tech stack, and premium projects.
If asked about something not in the resume, say you don't have that information but the recruiter can contact him directly.
"""

def generate_chat_response(message: str) -> str:
    try:
        model = genai.GenerativeModel(
            model_name="gemini-1.5-flash",
            system_instruction=system_instruction
        )
        response = model.generate_content(message)
        return response.text
    except Exception as e:
        return f"Error: {str(e)}"
