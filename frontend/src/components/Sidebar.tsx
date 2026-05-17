import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Search, FileText, Calendar } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { to: '/', label: 'Overview', icon: <LayoutDashboard size={20} /> },
    { to: '/screening', label: 'Pre-Investment Screening', icon: <Search size={20} /> },
    { to: '/reporting', label: 'Reporting & Documents', icon: <FileText size={20} /> },
    { to: '/tracker', label: 'Mandates & Deadlines', icon: <Calendar size={20} /> },
  ];

  return (
    <div className="w-64 bg-surface h-screen fixed top-0 left-0 border-r border-border-grey flex flex-col z-10">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary tracking-tight">EQUIDA</h1>
      </div>
      <nav className="flex-1 px-4 mt-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded text-sm transition-colors duration-200 ${
                isActive ? 'bg-white text-primary font-bold shadow-sm border border-border-grey' : 'text-text-dark hover:bg-white hover:text-primary'
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
        
        {/* Global Alerts Badge */}
        <div className="mt-8 px-4">
          <div className="bg-danger text-white text-xs font-bold px-3 py-2 rounded flex items-center justify-between shadow-sm">
            <span>Urgent Items</span>
            <span className="bg-white text-danger px-2 py-0.5 rounded-full">5</span>
          </div>
        </div>
      </nav>
      <div className="p-4 border-t border-border-grey bg-surface">
        <p className="text-sm font-bold text-text-dark">A. Ben Ali</p>
        <p className="text-xs text-text-dark/70">Carthage Capital Partners</p>
      </div>
    </div>
  );
};

export default Sidebar;
