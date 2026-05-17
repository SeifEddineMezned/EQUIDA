from sqlalchemy import Column, Integer, String, Float, DateTime, Text
from .database import Base
from pgvector.sqlalchemy import Vector
from datetime import datetime

class Fund(Base):
    __tablename__ = "funds"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    target_aum = Column(Float)
    emploi_global = Column(Float)
    emploi_catalogue = Column(Float)

class Deadline(Base):
    __tablename__ = "deadlines"
    id = Column(Integer, primary_key=True, index=True)
    company_name = Column(String)
    mandate_type = Column(String)
    due_date = Column(DateTime)
    
class HistoricalOverride(Base):
    __tablename__ = "historical_human_overrides"
    id = Column(Integer, primary_key=True, index=True)
    override_reason = Column(Text)
    target_metric_change = Column(String)
    embedding = Column(Vector(768)) 
    created_at = Column(DateTime, default=datetime.utcnow)
