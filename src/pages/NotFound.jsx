import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="workspace-container py-32 flex flex-col items-center justify-center text-center animate-fade-in">
      <SEO title="404 - Page Not Found" description="The requested workspace path does not exist." />
      
      <div className="w-16 h-16 bg-workspace-surface border border-workspace-border rounded-2xl flex items-center justify-center text-workspace-accent mb-6 shadow-glow">
        <AlertCircle size={32} />
      </div>
      
      <h1 className="text-4xl font-bold text-workspace-text-primary mb-4 tracking-tight">System Path Not Found</h1>
      <p className="text-lg text-workspace-text-muted max-w-md mb-8">
        The requested module or directory does not exist in this workspace. It may have been moved, renamed, or deleted.
      </p>
      
      <Link to="/" className="btn-primary">
        Return to Root Directory
      </Link>
    </div>
  );
}