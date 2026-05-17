import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './views/Dashboard';
import Screening from './views/Screening';
import Reporting from './views/Reporting';
import Tracker from './views/Tracker';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-background text-text-dark font-sans">
        <Sidebar />
        <main className="flex-1 ml-64 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/screening" element={<Screening />} />
            <Route path="/reporting" element={<Reporting />} />
            <Route path="/tracker" element={<Tracker />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
