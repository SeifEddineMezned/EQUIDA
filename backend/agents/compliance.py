from datetime import datetime

def monitor_csc_deadlines(mandate_date: datetime):
    """
    Agent 5: The Compliance Officer
    Mechanics: Automated Corporate Governance Monitor. 
    Constantly tracks time differentials for mandate objects against the Tunisian Code des Sociétés Commerciales (CSC).
    """
    now = datetime.now()
    time_diff = mandate_date - now
    
    flags = []
    days_left = time_diff.days
    
    if days_left <= 30:
        flags.append("Critical Escalation Alert: T-30 Days")
    elif days_left <= 90:
        flags.append("T-90 Days: Automated background drafting of formal OGM PV AGO or PV CA resolutions in legal French")
    elif days_left <= 180:
        flags.append("T-6 Months: UI Warning Flag")
        
    return {
        "days_remaining": days_left,
        "csc_flags": flags
    }
