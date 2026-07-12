import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Global Navigation */}
      <nav className="w-full bg-[#0f1624] border-b border-gray-800 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Identity Branding */}
          <Link to="/" className="flex flex-col group text-center md:text-left">
            <span className="text-xl font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">
              Digital Engineering Workspace
            </span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider mt-1">
              Muhammed Aslah K
            </span>
          </Link>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-medium text-gray-300">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/journal" className="hover:text-blue-400 transition-colors">Learning Journal</Link>
            <Link to="/scripts" className="hover:text-blue-400 transition-colors">Scripts</Link>
          </div>
        </div>
      </nav>

      {/* Dynamic Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Global Footer */}
      <footer className="bg-[#0f1624] border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Muhammed Aslah K. Digital Engineering Workspace.</p>
      </footer>
    </div>
  );
}