from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
from sqlalchemy.orm import Session
from database.database import get_db
from database.models import HistoricalOverride

app = FastAPI(title="EQUIDA API", description="Equity Intelligence Diligence Analytics Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class QueryRequest(BaseModel):
    system_prompt: str
    user_prompt: str
    
class FeedbackRequest(BaseModel):
    override_reason: str
    target_metric_change: str

@app.get("/health")
def health_check():
    return {"status": "ok", "system": "EQUIDA PLATFORM ONLINE"}

@app.post("/api/v1/query")
def query_model(request: QueryRequest):
    return {"status": "success"}

@app.post("/api/v1/compliance/feedback")
def submit_feedback(feedback: FeedbackRequest, db: Session = Depends(get_db)):
    # dummy embedding for structural purposes
    dummy_embedding = [0.0] * 768 
    
    override_record = HistoricalOverride(
        override_reason=feedback.override_reason,
        target_metric_change=feedback.target_metric_change,
        embedding=dummy_embedding
    )
    db.add(override_record)
    try:
        db.commit()
    except Exception as e:
        db.rollback()
        return {"error": "Database error (Likely missing pgvector extension in sqlite fallback)"}
        
    return {"status": "success", "message": "Feedback ingested into continuous learning loop."}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
