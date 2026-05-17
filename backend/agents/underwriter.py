def evaluate_risk(auditor_status: str, current_ratio: float, working_capital: float, cash_reserves_cover: float, client_concentration: float, client_is_public: bool) -> dict:
    """
    Agent 3: The Underwriter
    Immutable logic overrides that cannot be bypassed by text token prediction.
    """
    score = 10
    status = "PROCEED"
    lethal_flags = []
    
    if auditor_status == "FAIL":
        score = 2
        status = "DO NOT PROCEED"
        lethal_flags.append("[CRITICAL LETHAL FLAG] ACCOUNTING INTEGRITY CRISIS")
        
    elif current_ratio < 1.0 or (working_capital < 0 and cash_reserves_cover < 0.15):
        score = min(score, 3)
        status = "DO NOT PROCEED"
        lethal_flags.append("[CRITICAL LETHAL FLAG] TECHNICAL INSOLVENCY")
        
    elif client_concentration > 0.40 and client_is_public:
        score = min(score, 5)
        status = "DO NOT PROCEED"
        lethal_flags.append("[CRITICAL LETHAL FLAG] PUBLIC ENTITY CONCENTRATION RISK")
        
    return {
        "score": score,
        "status": status,
        "lethal_flags": lethal_flags,
        "proceed": status == "PROCEED"
    }
