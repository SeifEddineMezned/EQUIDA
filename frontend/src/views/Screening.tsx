import React, { useState } from 'react';
import { UploadCloud, X, Send, User, Loader2 } from 'lucide-react';

const Screening = () => {
  const [view, setView] = useState<'inbox' | 'analysis'>('inbox');
  const [uploadStep, setUploadStep] = useState<'idle' | 'uploading' | 'extracting' | 'analyzing'>('idle');
  
  const [showChat, setShowChat] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'equida', text: 'Hello. I analyzed the Al Baraka Foods file. How can I assist you?' }
  ]);

  const handleUpload = () => {
    if (uploadStep !== 'idle') return;
    setUploadStep('uploading');
    setTimeout(() => setUploadStep('extracting'), 1500);
    setTimeout(() => setUploadStep('analyzing'), 3000);
    setTimeout(() => {
      setUploadStep('idle');
      setView('analysis');
    }, 4500);
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text }]);
    setChatInput('');
    setIsTyping(true);
    
    setTimeout(() => {
      let reply = "I've logged this query in the audit trail. The data suggests reviewing historical EBITDA margins for more context.";
      if (text.includes('ratio flagged') || text.includes('flagged')) {
        reply = "The net margin of 28% was flagged by the Auditor Agent because it mathematically conflicts with the declared COGS and operating expenses. This indicates a potential accounting error or aggressive manipulation.";
      } else if (text.includes('documents')) {
        reply = "I recommend requesting the raw Trial Balance (Balance Générale) and the detailed CapTable to verify these discrepancies.";
      }
      setMessages(prev => [...prev, { role: 'equida', text: reply }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="max-w-6xl pb-24">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-primary">Pre-Investment Screening</h2>
      </header>

      {view === 'inbox' && (
        <div className="space-y-8 animate-fade-in">
          <div 
            onClick={handleUpload}
            className={`border-2 border-dashed ${uploadStep !== 'idle' ? 'border-primary bg-blue-50/20' : 'border-border-grey bg-surface'} rounded p-12 flex flex-col items-center justify-center shadow-sm transition-all duration-500 ${uploadStep === 'idle' ? 'hover:border-primary cursor-pointer' : ''}`}
          >
            {uploadStep === 'idle' ? (
              <>
                <UploadCloud size={40} className="text-text-dark/40 mb-4" />
                <p className="text-text-dark font-bold mb-4">Upload SME files — business plans, financial statements, Excel models, company profiles</p>
                <button className="border-2 border-primary text-primary font-bold px-6 py-2 rounded hover:bg-primary hover:text-white transition-colors">
                  Browse files
                </button>
              </>
            ) : (
              <div className="flex flex-col items-center py-6 animate-fade-in">
                <Loader2 size={40} className="text-primary animate-spin mb-4" />
                <p className="text-primary font-bold text-lg">
                  {uploadStep === 'uploading' && 'Uploading business_plan_v3.pdf...'}
                  {uploadStep === 'extracting' && 'Agent 1: Extracting Financial Metrics...'}
                  {uploadStep === 'analyzing' && 'Agent 3: Running Underwriter Kill-Switches...'}
                </p>
              </div>
            )}
            
            {uploadStep === 'idle' && (
              <div className="flex space-x-4 mt-4 text-xs text-text-dark/60 font-bold">
                <span>PDF</span>
                <span>XLSX</span>
                <span>DOCX</span>
              </div>
            )}
          </div>

          <div>
            <div className="border border-border-grey rounded overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface border-b border-border-grey">
                  <tr>
                    <th className="px-4 py-3 font-bold">File Name</th>
                    <th className="px-4 py-3 font-bold">Company</th>
                    <th className="px-4 py-3 font-bold">Sector</th>
                    <th className="px-4 py-3 font-bold">Upload Date</th>
                    <th className="px-4 py-3 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-grey bg-white">
                  <tr className="hover:bg-surface cursor-pointer transition-colors" onClick={() => setView('analysis')}>
                    <td className="px-4 py-3 font-medium text-primary underline">al_baraka_finances_2026.pdf</td>
                    <td className="px-4 py-3">Al Baraka Foods</td>
                    <td className="px-4 py-3">Food Processing</td>
                    <td className="px-4 py-3">Today</td>
                    <td className="px-4 py-3"><span className="bg-success text-white px-2 py-1 rounded text-xs font-medium">Analyzed</span></td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-3 font-medium text-text-dark">financial_model.xlsx</td>
                    <td className="px-4 py-3">MedTech Solutions</td>
                    <td className="px-4 py-3">Healthcare</td>
                    <td className="px-4 py-3">May 15, 2026</td>
                    <td className="px-4 py-3"><span className="bg-warning text-white px-2 py-1 rounded text-xs font-medium">Extracting...</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {view === 'analysis' && (
        <div className="space-y-6 animate-fade-in relative">
          <button onClick={() => setView('inbox')} className="text-sm text-primary underline font-medium mb-2 inline-block">&larr; Back to Inbox</button>
          
          <div className="bg-white border border-danger p-8 rounded text-center relative shadow-sm animate-fade-in">
            <span className="absolute top-3 right-3 bg-warning text-white text-[10px] font-bold px-2 py-1 rounded">AI-drafted — review before acting</span>
            <h3 className="text-3xl font-black text-danger mb-3 tracking-wide animate-pulse">DO NOT PROCEED</h3>
            <p className="text-2xl font-bold text-text-dark mb-4">64 / 100</p>
            <p className="text-text-dark font-medium max-w-2xl mx-auto">Solid revenue growth but net margin significantly exceeds sector average — projection requires clarification.</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="border border-border-grey p-6 rounded bg-white shadow-sm">
              <h4 className="font-bold mb-6 text-primary">Benchmark vs Sector</h4>
              <div className="space-y-6 text-sm">
                <div>
                  <div className="flex justify-between mb-2"><span className="font-bold">Net Margin</span><span className="text-danger font-bold">28% vs 10%</span></div>
                  <div className="h-5 bg-surface rounded flex overflow-hidden border border-border-grey">
                    <div className="bg-danger transition-all duration-1000" style={{ width: '60%' }}></div>
                    <div className="bg-border-grey border-l-2 border-white transition-all duration-1000" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2"><span className="font-bold">Revenue Growth</span><span className="font-bold text-text-dark">15% vs 12%</span></div>
                  <div className="h-5 bg-surface rounded flex overflow-hidden border border-border-grey">
                    <div className="bg-primary transition-all duration-1000" style={{ width: '40%' }}></div>
                    <div className="bg-border-grey border-l-2 border-white transition-all duration-1000" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border-grey p-6 rounded bg-white shadow-sm relative">
              <span className="absolute top-3 right-3 bg-warning text-white text-[10px] font-bold px-2 py-1 rounded">AI-drafted</span>
              <h4 className="font-bold mb-6 text-primary">Detected Red Flags</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-start space-x-3 bg-surface p-3 rounded border border-border-grey">
                  <span className="bg-danger text-white px-2 py-0.5 rounded text-[10px] font-bold mt-0.5 min-w-[55px] text-center">High</span>
                  <span>Net margin of 28% exceeds sector average of 8–12%. Projection may be unrealistic.</span>
                </li>
                <li className="flex items-start space-x-3 bg-surface p-3 rounded border border-border-grey">
                  <span className="bg-warning text-white px-2 py-0.5 rounded text-[10px] font-bold mt-0.5 min-w-[55px] text-center">Medium</span>
                  <span>Client concentration risk: 45% revenue tied to a single public entity.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="fixed bottom-0 left-64 right-0 bg-surface border-t border-border-grey p-4 flex space-x-4 justify-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20">
            <button className="bg-primary text-white font-bold px-6 py-2 rounded hover:bg-blue-800 transition-colors shadow-sm">Generate Investment Memo</button>
            <button onClick={() => setShowChat(true)} className="bg-white border border-primary text-primary font-bold px-6 py-2 rounded hover:bg-blue-50 transition-colors shadow-sm flex items-center space-x-2">
              <span>Ask Equida a Question</span>
            </button>
            <button className="bg-success text-white font-bold px-6 py-2 rounded hover:bg-green-700 transition-colors shadow-sm">Mark as Reviewed</button>
          </div>

          {/* Chatbot Modal */}
          {showChat && (
            <div className="fixed inset-0 bg-text-dark/40 flex items-center justify-center z-50 backdrop-blur-sm animate-fade-in">
              <div className="bg-white w-[600px] rounded shadow-2xl overflow-hidden flex flex-col border border-border-grey">
                <div className="bg-primary p-4 flex justify-between items-center text-white">
                  <h3 className="font-bold">Ask Equida</h3>
                  <button onClick={() => setShowChat(false)} className="hover:bg-white/20 p-1 rounded transition-colors"><X size={20} /></button>
                </div>
                
                <div className="p-4 h-80 overflow-y-auto bg-surface space-y-4 flex flex-col">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                      {msg.role === 'equida' && <span className="bg-warning text-white text-[9px] px-1 rounded mb-1 font-bold">AI-drafted</span>}
                      <div className={`p-3 rounded-lg text-sm shadow-sm max-w-[80%] font-medium ${
                        msg.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-white border border-border-grey rounded-tl-none'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex flex-col items-start animate-fade-in">
                      <span className="bg-warning text-white text-[9px] px-1 rounded mb-1 font-bold">AI-drafted</span>
                      <div className="bg-white border border-border-grey p-3 rounded-lg rounded-tl-none text-sm shadow-sm flex space-x-1 items-center h-10">
                        <div className="w-2 h-2 bg-text-dark/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-text-dark/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-text-dark/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4 bg-white border-t border-border-grey">
                  <div className="flex space-x-2 mb-3">
                    <button onClick={() => handleSendMessage('Why was this ratio flagged?')} className="bg-surface border border-border-grey text-xs px-2 py-1.5 rounded font-medium hover:bg-border-grey/30 transition-colors">Why was this ratio flagged?</button>
                    <button onClick={() => handleSendMessage('What documents should I request?')} className="bg-surface border border-border-grey text-xs px-2 py-1.5 rounded font-medium hover:bg-border-grey/30 transition-colors">What documents should I request?</button>
                  </div>
                  <div className="flex space-x-2">
                    <input 
                      type="text" 
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(chatInput)}
                      className="flex-1 border border-border-grey rounded px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                      placeholder="Type your question..." 
                    />
                    <button onClick={() => handleSendMessage(chatInput)} className="bg-primary text-white font-bold px-4 py-2 rounded hover:bg-blue-800 transition-colors shadow-sm flex items-center justify-center">
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Screening;
