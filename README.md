# Veeresh Mulge - Premium Personal Brand Platform

A world-class personal brand platform and portfolio for Veeresh Mulge. Built with Next.js 15, FastAPI, Supabase, Tailwind CSS v4, Framer Motion, and Three.js. 

It includes a floating AI Recruiter Assistant that uses RAG via the Gemini API to answer recruiter queries based on the resume data.

## Architecture

- **Frontend:** Next.js 15 (App Router), React, TypeScript, TailwindCSS v4, Framer Motion, GSAP, Three.js, Custom Premium Components.
- **Backend:** FastAPI, Python, Google Gemini API for AI Chatbot.
- **Database:** Supabase (PostgreSQL) for Analytics, Messages, and Content Management.
- **Email:** Resend API (To be integrated with Supabase edge functions).

## Folder Structure

- `/frontend` - The Next.js web application and Admin Panel.
- `/backend` - The FastAPI server and AI agent.
- `/database` - SQL schema and seed scripts for Supabase.
- `/.github` - CI/CD workflows for automated deployment.

## Testing Guide

### Running Locally

**1. Setup Frontend:**
```bash
cd frontend
npm install
npm run dev
```
Open `http://localhost:3000` to view the beautiful portfolio.
The Admin Panel is available at `http://localhost:3000/admin/login` (Credentials: prakashmulge912@gmail.com / admin).

**2. Setup Backend:**
```bash
cd backend
python -m venv venv
# Windows: venv\Scripts\activate | Mac/Linux: source venv/bin/activate
pip install -r requirements.txt
# Set your GEMINI_API_KEY in backend/.env
uvicorn main:app --reload
```
The AI Chatbot API is available at `http://localhost:8000/api/chat`.

## Deployment Guide

This project is configured for one-click CI/CD deployments using GitHub Actions.

### Frontend Deployment (Vercel)
The frontend is designed to be deployed to Vercel.
1. Push this repository to GitHub.
2. Go to Vercel Dashboard, import the repository.
3. Set the Root Directory to `frontend`.
4. Vercel will automatically detect Next.js and deploy.

### Backend Deployment (Render)
The backend is designed for a free instance on Render.com.
1. Go to Render Dashboard -> New Web Service.
2. Connect the GitHub repository.
3. Set Root Directory to `backend`.
4. Build Command: `pip install -r requirements.txt`
5. Start Command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
6. Set the `GEMINI_API_KEY` environment variable.

### Database (Supabase)
1. Create a free project on Supabase.
2. Go to the SQL Editor and paste the contents of `database/schema.sql` and `database/seed.sql`.
3. The platform will now have persistent data for projects and experience.

## Quality Standards

- **Design:** Apple, Vercel, and Linear level aesthetics using Glassmorphism, aurora gradients, and dark mode.
- **Performance:** React Server Components, optimized images, lazy loading, lightweight 3D scenes.
- **SEO:** Fully optimized metadata, semantic HTML, and fast loading speeds.
