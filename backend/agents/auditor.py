import json
from backend.llm_engine import ask_equida_model

def run_audit(total_debt: float, net_income: float, ebitda: float) -> dict:
    """The Program-of-Thought Python Sandbox."""
    try:
        estimated_interest = total_debt * 0.10
        if net_income >= (ebitda - estimated_interest):
             return {"assertions_status": "FAIL", "reason": "Net Income mathematically cannot exceed EBITDA minus debt-servicing costs."}
        return {"assertions_status": "PASS", "reason": "Math logic holds."}
    except Exception as e:
        return {"assertions_status": "ERROR", "reason": str(e)}

def execute_auditor_pipeline(sme_document_text: str) -> dict:
    """
    Step 1: Extract via Unsloth LLM.
    Step 2: Validate via Python Sandbox.
    """
    system_prompt = "You are a data extraction bot. Extract the following financial metrics from the text. Respond ONLY with a valid JSON object with keys: total_debt, net_income, ebitda. Do not include markdown formatting or extra text."
    
    # Step 1: LLM Extraction
    raw_response = ask_equida_model(system_prompt, f"Extract from here: {sme_document_text}")
    
    try:
        # Clean potential markdown code blocks
        clean_json = raw_response.replace("```json", "").replace("```", "").strip()
        extracted_data = json.loads(clean_json)
        
        # Step 2: Pass to PoT Sandbox
        debt = float(extracted_data.get("total_debt", 0))
        net_inc = float(extracted_data.get("net_income", 0))
        ebitda = float(extracted_data.get("ebitda", 0))
        
        sandbox_result = run_audit(debt, net_inc, ebitda)
        
        return {
            "extracted_data": extracted_data,
            "sandbox_result": sandbox_result
        }
        
    except json.JSONDecodeError:
        return {"error": "LLM failed to return valid JSON", "raw_output": raw_response}
