from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Veeresh Mulge Portfolio API", version="1.0.0")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Update this to specific origins in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.get("/")
def read_root():
    return {"message": "Welcome to Veeresh Mulge Portfolio API"}

@app.get("/health")
def health_check():
    return {"status": "ok"}

from ai_assistant import generate_chat_response

@app.post("/api/chat")
def chat_endpoint(request: ChatRequest):
    response_text = generate_chat_response(request.message)
    return {"response": response_text}
