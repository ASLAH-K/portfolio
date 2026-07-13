import React from 'react';
import { Link } from 'react-router-dom';
import EngineeringDock from './EngineeringDock';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Global Navigation */}
      <nav className="w-full bg-workspace-surface border-b border-workspace-border py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Identity Branding */}
          <Link to="/" className="flex flex-col group text-center md:text-left focus:outline-none focus:ring-2 focus:ring-workspace-accent rounded">
            <span className="text-xl font-bold text-workspace-text-primary tracking-wide group-hover:text-workspace-accent transition-colors">
              Digital Engineering Workspace
            </span>
            <span className="text-xs font-mono text-workspace-text-muted uppercase tracking-wider mt-1">
              Muhammed Aslah K
            </span>
          </Link>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-medium text-workspace-text-muted">
            <Link to="/" className="workspace-link focus:outline-none focus:ring-2 focus:ring-workspace-accent rounded px-1">Home</Link>
            <Link to="/projects" className="workspace-link focus:outline-none focus:ring-2 focus:ring-workspace-accent rounded px-1">Projects</Link>
            <Link to="/journal" className="workspace-link focus:outline-none focus:ring-2 focus:ring-workspace-accent rounded px-1">Learning Journal</Link>
            <Link to="/scripts" className="workspace-link focus:outline-none focus:ring-2 focus:ring-workspace-accent rounded px-1">Scripts</Link>
          </div>
        </div>
      </nav>

      {/* Dynamic Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Global Footer */}
      <footer className="bg-workspace-surface border-t border-workspace-border py-8 text-center text-workspace-text-muted text-sm">
        <p>© {new Date().getFullYear()} Muhammed Aslah K. Digital Engineering Workspace.</p>
      </footer>

      {/* Persistent Contact Dock */}
      <EngineeringDock />
    </div>
  );
}