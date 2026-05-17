import React, { useState } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';

const Reporting = () => {
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const handleGenerate = (docType: string) => {
    setIsGenerating(docType);
    setTimeout(() => {
      setIsGenerating(null);
      setToast(`${docType} successfully generated and exported to .docx!`);
      setTimeout(() => setToast(null), 3500);
    }, 2000);
  };

  return (
    <div className="max-w-6xl space-y-8 animate-fade-in pb-24 relative">
      
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-8 right-8 bg-success text-white px-6 py-4 rounded shadow-2xl flex items-center space-x-3 z-50 animate-fade-in">
          <CheckCircle2 size={24} />
          <span className="font-bold">{toast}</span>
        </div>
      )}

      <header>
        <h2 className="text-2xl font-bold text-primary">Reporting & Documents</h2>
      </header>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-surface p-6 rounded border border-border-grey shadow-sm">
          <p className="text-3xl font-bold text-primary">2</p>
          <p className="text-sm text-text-dark mt-1 font-medium">FCPR Reports Ready This Period</p>
        </div>
        <div className="bg-surface p-6 rounded border border-border-grey shadow-sm">
          <p className="text-3xl font-bold text-primary">5</p>
          <p className="text-sm text-text-dark mt-1 font-medium">PV AGO / PV CA Drafts Ready</p>
        </div>
        <div className="bg-surface p-6 rounded border border-danger bg-red-50/30 shadow-sm">
          <p className="text-3xl font-bold text-danger">1</p>
          <p className="text-sm text-danger mt-1 font-bold">Reports Blocked — Missing Data</p>
        </div>
      </div>

      <div>
        <div className="border border-border-grey rounded overflow-hidden shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface border-b border-border-grey">
              <tr>
                <th className="px-4 py-3 font-bold">Fund</th>
                <th className="px-4 py-3 font-bold">Period</th>
                <th className="px-4 py-3 font-bold">FCPR Status</th>
                <th className="px-4 py-3 font-bold">PV AGO Status</th>
                <th className="px-4 py-3 font-bold">PV CA Status</th>
                <th className="px-4 py-3 font-bold">Data Completeness</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-grey bg-white">
              <tr className={`hover:bg-surface cursor-pointer transition-colors ${selectedRow === 'Fund I' ? 'bg-surface' : ''}`} onClick={() => setSelectedRow('Fund I')}>
                <td className="px-4 py-3 font-bold">Fund I</td>
                <td className="px-4 py-3 font-medium">Q1 2026</td>
                <td className="px-4 py-3"><span className="bg-success text-white px-2 py-1 rounded text-xs font-medium">Ready</span></td>
                <td className="px-4 py-3"><span className="bg-warning text-white px-2 py-1 rounded text-xs font-medium">In Progress</span></td>
                <td className="px-4 py-3"><span className="bg-border-grey text-text-dark px-2 py-1 rounded text-xs font-medium">Not Started</span></td>
                <td className="px-4 py-3 text-success font-bold">OK</td>
              </tr>
              <tr className={`hover:bg-surface cursor-pointer transition-colors ${selectedRow === 'Fund II' ? 'bg-surface' : ''}`} onClick={() => setSelectedRow('Fund II')}>
                <td className="px-4 py-3 font-bold">Fund II</td>
                <td className="px-4 py-3 font-medium">Q1 2026</td>
                <td className="px-4 py-3"><span className="bg-danger text-white px-2 py-1 rounded text-xs font-medium">Blocked</span></td>
                <td className="px-4 py-3"><span className="bg-border-grey text-text-dark px-2 py-1 rounded text-xs font-medium">Not Started</span></td>
                <td className="px-4 py-3"><span className="bg-border-grey text-text-dark px-2 py-1 rounded text-xs font-medium">Not Started</span></td>
                <td className="px-4 py-3 text-danger font-bold">Missing: subscriber breakdown</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {selectedRow && (
        <div className="border border-border-grey rounded bg-surface p-6 shadow-sm animate-fade-in relative mt-8">
          <h3 className="text-lg font-bold border-b border-border-grey pb-3 mb-6 text-primary">Detail: {selectedRow} - Q1 2026</h3>
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div className="bg-white p-5 rounded border border-border-grey shadow-sm">
              <h4 className="font-bold mb-4 text-primary">Data Checklist</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li className="flex justify-between border-b border-border-grey pb-2"><span>Fund general data table</span> <span className="text-success font-bold text-lg leading-none">✔</span></li>
                <li className="flex justify-between border-b border-border-grey pb-2"><span>Subscriber breakdown</span> <span className={selectedRow === 'Fund II' ? "text-danger font-bold text-lg leading-none" : "text-success font-bold text-lg leading-none"}>{selectedRow === 'Fund II' ? "✘" : "✔"}</span></li>
                <li className="flex justify-between border-b border-border-grey pb-2"><span>Emploi ratio calculations</span> <span className="text-success font-bold text-lg leading-none">✔</span></li>
                <li className="flex justify-between border-b border-border-grey pb-2"><span>14-column portfolio table</span> <span className="text-success font-bold text-lg leading-none">✔</span></li>
                <li className="flex justify-between border-b border-border-grey pb-2"><span>Income statement summary</span> <span className="text-success font-bold text-lg leading-none">✔</span></li>
                <li className="flex justify-between border-b border-border-grey pb-2 relative">
                  <div className="flex items-center space-x-2">
                    <span>AI synthesis paragraph drafted</span>
                    <span className="bg-warning text-white text-[9px] px-1.5 py-0.5 rounded font-bold">AI-drafted</span>
                  </div>
                  <span className="text-success font-bold text-lg leading-none">✔</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded border border-border-grey shadow-sm">
              <h4 className="font-bold mb-4 text-primary">Data Input Form</h4>
              <div className="space-y-4 text-sm font-medium">
                <div>
                  <label className="block mb-1 text-text-dark">Fund Name</label>
                  <input type="text" value={selectedRow} readOnly className="w-full border border-border-grey rounded px-3 py-2 bg-surface text-text-dark/70 font-bold" />
                </div>
                <div>
                  <label className="block mb-1 text-text-dark">Total Subscriptions</label>
                  <input type="text" defaultValue="50,000,000 TND" className="w-full border border-border-grey rounded px-3 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>
                {selectedRow === 'Fund II' && (
                  <div className="animate-fade-in">
                    <label className="block mb-1 text-danger font-bold">Subscriber Breakdown</label>
                    <textarea className="w-full border-2 border-danger rounded px-3 py-2 outline-none bg-red-50/20 h-24" placeholder="Missing data..."></textarea>
                    <p className="text-xs text-danger mt-1 font-bold">Please enter subscriber breakdown to unblock FCPR.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex space-x-4 pt-6 border-t border-border-grey">
            <button 
              onClick={() => handleGenerate('FCPR 1-Page Report')}
              className={`font-bold px-6 py-2.5 rounded shadow-sm transition-colors flex items-center space-x-2 ${selectedRow === 'Fund II' ? 'bg-border-grey text-white cursor-not-allowed' : 'bg-primary text-white hover:bg-blue-800'}`} 
              disabled={selectedRow === 'Fund II' || isGenerating !== null}
            >
              {isGenerating === 'FCPR 1-Page Report' && <Loader2 size={16} className="animate-spin" />}
              <span>Generate FCPR 1-Page Report</span>
            </button>
            <button 
              onClick={() => handleGenerate('PV AGO')}
              className="bg-primary text-white font-bold px-6 py-2.5 rounded shadow-sm hover:bg-blue-800 transition-colors flex items-center space-x-2"
              disabled={isGenerating !== null}
            >
              {isGenerating === 'PV AGO' && <Loader2 size={16} className="animate-spin" />}
              <span>Generate PV AGO</span>
            </button>
            <button className="bg-white border border-primary text-primary font-bold px-6 py-2.5 rounded shadow-sm hover:bg-blue-50 transition-colors ml-auto">View Audit Trail</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reporting;
