import React from 'react';

const Dashboard = () => {
  return (
    <div className="space-y-8 max-w-6xl">
      <header>
        <h2 className="text-2xl font-bold text-primary">Overview</h2>
      </header>

      {/* Row 1: KPI Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-surface p-6 rounded border border-border-grey shadow-sm">
          <p className="text-3xl font-bold text-primary">12</p>
          <p className="text-sm text-text-dark mt-1 font-medium">Files Under Review</p>
        </div>
        <div className="bg-surface p-6 rounded border border-border-grey shadow-sm">
          <p className="text-3xl font-bold text-primary">4</p>
          <p className="text-sm text-text-dark mt-1 font-medium">Reports Ready to Export</p>
        </div>
        <div className="bg-surface p-6 rounded border border-border-grey shadow-sm">
          <p className="text-3xl font-bold text-warning">3</p>
          <p className="text-sm text-text-dark mt-1 font-medium">Mandates Expiring &lt;90 Days</p>
        </div>
        <div className="bg-surface p-6 rounded border border-danger bg-red-50/30 shadow-sm">
          <p className="text-3xl font-bold text-danger">2</p>
          <p className="text-sm text-danger mt-1 font-bold">High-Risk SME Files</p>
        </div>
      </div>
      
      {/* Row 2: Alert Strip */}
      <div className="flex items-center space-x-3 bg-surface p-3 rounded border border-border-grey shadow-sm">
        <span className="bg-danger text-white text-xs font-bold px-3 py-1.5 rounded cursor-pointer hover:bg-red-800 transition-colors">2 files with High red flags</span>
        <span className="bg-warning text-white text-xs font-bold px-3 py-1.5 rounded cursor-pointer hover:bg-orange-700 transition-colors">3 board mandates expiring &lt;90 days</span>
      </div>

      {/* Row 3: Portfolio Summary Table */}
      <div>
        <h3 className="text-lg font-bold text-text-dark mb-4">Portfolio Summary</h3>
        <div className="border border-border-grey rounded overflow-hidden shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface border-b border-border-grey">
              <tr>
                <th className="px-4 py-3 font-bold">Fund</th>
                <th className="px-4 py-3 font-bold">Company</th>
                <th className="px-4 py-3 font-bold">Status</th>
                <th className="px-4 py-3 font-bold">Next Action</th>
                <th className="px-4 py-3 font-bold">Last Updated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-grey bg-white">
              <tr className="hover:bg-surface cursor-pointer">
                <td className="px-4 py-3">Fund I</td>
                <td className="px-4 py-3 font-bold">Company A</td>
                <td className="px-4 py-3"><span className="bg-success text-white px-2 py-1 rounded text-xs font-medium">Active</span></td>
                <td className="px-4 py-3 text-warning font-medium">Reporting Due</td>
                <td className="px-4 py-3">Today</td>
              </tr>
              <tr className="hover:bg-surface cursor-pointer">
                <td className="px-4 py-3">Fund I</td>
                <td className="px-4 py-3 font-bold">Company B</td>
                <td className="px-4 py-3"><span className="bg-danger text-white px-2 py-1 rounded text-xs font-medium">At Risk</span></td>
                <td className="px-4 py-3 text-text-dark font-medium">Mandate Renewal</td>
                <td className="px-4 py-3">3 days ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
