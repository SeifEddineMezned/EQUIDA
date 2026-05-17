def compile_dd_memo(data: dict) -> str:
    """
    Agent 4: The Reporter
    Mechanics: Few-Shot Structuring. Compiles comprehensive markdown due diligence summaries and calculates Tunisian regulatory fund requirements.
    """
    emploi_global = data.get("emploi_global", 0)
    emploi_catalogue = data.get("emploi_catalogue", 0)
    
    compliance_status = "PASS"
    if emploi_global < 0.80 or emploi_catalogue < 0.65:
        compliance_status = "FAIL"
        
    memo = f"""# EQUIDA Due Diligence Memo
[AI-GENERATED SECTION: REQUIRES MANUAL COMPLIANCE AUDIT]

## Tunisian Regulatory Fund Requirements
- Emploi Global (>= 80%): {emploi_global * 100}%
- Emploi Catalogue (>= 65%): {emploi_catalogue * 100}%
- Compliance Status: {compliance_status}

## Summary
The model assessment indicates a score of {data.get('score', 'N/A')}/10.
"""
    return memo
