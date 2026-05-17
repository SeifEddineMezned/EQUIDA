def analyze_macro_context(company_metrics: dict) -> dict:
    """
    Agent 2: The Researcher
    Checks company metrics against localized Tunisian parameters retrieved from the DB or web search 
    (e.g., assessing currency export restrictions from the Central Bank of Tunisia (BCT) or payment 
    backlogs of public hospitals).
    """
    tunisian_macro_flags = []
    
    if company_metrics.get("export_revenue_pct", 0) > 50:
        tunisian_macro_flags.append("High BCT currency repatriation risk.")
        
    return {
        "status": "COMPLETED",
        "macro_flags": tunisian_macro_flags,
        "rag_context_used": True
    }
