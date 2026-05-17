import React, { useState } from 'react';
import { Loader2, X, FileSignature } from 'lucide-react';

const Tooltip = ({ children, text }: { children: React.ReactNode, text: string }) => (
  <span className="group relative cursor-help border-b border-dotted border-primary text-primary font-bold">
    {children}
    <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-text-dark text-white text-xs p-3 rounded z-50 shadow-xl pointer-events-none font-medium leading-relaxed">
      {text}
      <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-text-dark"></span>
    </span>
  </span>
);

const Tracker = () => {
  const [draftingRow, setDraftingRow] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleDraft = (company: string) => {
    setDraftingRow(company);
    setTimeout(() => {
      setDraftingRow(null);
      setShowModal(true);
    }, 2500);
  };

  return (
    <div className="max-w-6xl space-y-8 animate-fade-in pb-12 relative">
      <header>
        <h2 className="text-2xl font-bold text-primary">Mandates & Deadlines</h2>
      </header>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-surface p-6 rounded border border-border-grey shadow-sm">
          <p className="text-3xl font-bold text-primary">42</p>
          <p className="text-sm text-text-dark mt-1 font-medium">Mandates Safe (&gt;6 months)</p>
        </div>
        <div className="bg-surface p-6 rounded border border-border-grey shadow-sm">
          <p className="text-3xl font-bold text-warning">2</p>
          <p className="text-sm text-text-dark mt-1 font-medium">Expiring in &lt;90 Days</p>
        </div>
        <div className="bg-surface p-6 rounded border border-danger shadow-sm">
          <p className="text-3xl font-bold text-danger">1</p>
          <p className="text-sm text-danger mt-1 font-bold">30-Day Escalations</p>
        </div>
        <div className="bg-surface p-6 rounded border border-danger bg-red-50/30 shadow-sm">
          <p className="text-3xl font-bold text-danger">0</p>
          <p className="text-sm text-danger mt-1 font-bold">Lapsed Mandates</p>
        </div>
      </div>

      <div>
        <div className="border border-border-grey rounded overflow-hidden shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface border-b border-border-grey">
              <tr>
                <th className="px-4 py-3 font-bold">Company</th>
                <th className="px-4 py-3 font-bold">Fund</th>
                <th className="px-4 py-3 font-bold">Type</th>
                <th className="px-4 py-3 font-bold">Expiry Date</th>
                <th className="px-4 py-3 font-bold">Days Left / Status</th>
                <th className="px-4 py-3 font-bold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-grey bg-white">
              <tr className="hover:bg-surface transition-colors">
                <td className="px-4 py-3 font-bold">Company B</td>
                <td className="px-4 py-3 font-medium">Fund I</td>
                <td className="px-4 py-3 font-medium">Board Mandate</td>
                <td className="px-4 py-3 text-danger font-bold">Jun 3, 2026</td>
                <td className="px-4 py-3">
                  <span className="bg-danger text-white px-2 py-1 rounded text-xs font-bold inline-block min-w-[80px] text-center">17 Critical</span>
                </td>
                <td className="px-4 py-3">
                  <button 
                    onClick={() => handleDraft('Company B')}
                    className="bg-white border border-primary text-primary px-3 py-1.5 rounded text-xs font-bold hover:bg-primary hover:text-white transition-colors shadow-sm flex items-center justify-center min-w-[120px]"
                    disabled={draftingRow === 'Company B'}
                  >
                    {draftingRow === 'Company B' ? <Loader2 size={14} className="animate-spin" /> : 'Pre-draft Renewal'}
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-surface transition-colors">
                <td className="px-4 py-3 font-bold">Company A</td>
                <td className="px-4 py-3 font-medium">Fund I</td>
                <td className="px-4 py-3 font-medium">Auditor Mandate</td>
                <td className="px-4 py-3 font-medium">Aug 12, 2026</td>
                <td className="px-4 py-3">
                  <span className="bg-warning text-white px-2 py-1 rounded text-xs font-bold inline-block min-w-[80px] text-center">87 Warning</span>
                </td>
                <td className="px-4 py-3">
                  <button 
                    onClick={() => handleDraft('Company A')}
                    className="bg-white border border-primary text-primary px-3 py-1.5 rounded text-xs font-bold hover:bg-primary hover:text-white transition-colors shadow-sm flex items-center justify-center min-w-[120px]"
                    disabled={draftingRow === 'Company A'}
                  >
                    {draftingRow === 'Company A' ? <Loader2 size={14} className="animate-spin" /> : 'Pre-draft Renewal'}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Draft Ready Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-text-dark/40 flex items-center justify-center z-50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white w-[500px] rounded shadow-2xl overflow-hidden border border-border-grey">
            <div className="bg-primary p-4 flex justify-between items-center text-white">
              <div className="flex items-center space-x-2">
                <FileSignature size={20} />
                <h3 className="font-bold">Draft Resolution Ready</h3>
              </div>
              <button onClick={() => setShowModal(false)} className="hover:bg-white/20 p-1 rounded transition-colors"><X size={20} /></button>
            </div>
            <div className="p-6 bg-white space-y-4">
              <span className="bg-warning text-white text-[10px] font-bold px-2 py-1 rounded">AI-drafted — review before signing</span>
              <p className="text-sm font-medium text-text-dark leading-relaxed border border-border-grey p-4 rounded bg-surface">
                <strong>Resolution 4:</strong> L'Assemblée Générale Ordinaire, sur proposition du Conseil d'Administration, décide de renouveler le mandat d'administrateur de Monsieur [NOM], pour une durée de trois (3) années...
              </p>
            </div>
            <div className="p-4 bg-surface border-t border-border-grey flex justify-end space-x-3">
              <button onClick={() => setShowModal(false)} className="border border-border-grey bg-white text-text-dark font-bold px-4 py-2 rounded shadow-sm hover:bg-border-grey/30">Cancel</button>
              <button onClick={() => setShowModal(false)} className="bg-success text-white font-bold px-6 py-2 rounded shadow-sm hover:bg-green-700">Approve & Export</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tracker;
