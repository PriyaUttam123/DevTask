from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.health import health_router
from config.settings import settings

app = FastAPI(
    title="Intelligent News Summarization and Sentiment Analysis System",
    description="AI-powered news analysis API",
    version="1.0.0"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(health_router, prefix="/api", tags=["health"])

@app.get("/")
async def root():
    return {
        "message": "Intelligent News Summarization and Sentiment Analysis System API",
        "version": "1.0.0"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
