from fastapi import APIRouter
from datetime import datetime

health_router = APIRouter()

@health_router.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "timestamp": datetime.utcnow().isoformat(),
        "service": "Intelligent News Summarization and Sentiment Analysis System"
    }
