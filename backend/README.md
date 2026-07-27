# Portfolio Backend

This is the FastAPI backend for the Personal Brand Platform.
It serves as the AI backend using the Gemini API to answer recruiter questions.

## Setup
1. `python -m venv venv`
2. `venv\Scripts\activate`
3. `pip install -r requirements.txt`
4. Copy `.env.example` to `.env` and fill in the keys.
5. Run server: `uvicorn main:app --reload`
