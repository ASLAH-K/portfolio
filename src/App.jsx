import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';

// Dynamically import pages (Code Splitting)
const Portfolio = lazy(() => import('./Portfolio'));

// List Pages
const Projects = lazy(() => import('./pages/Projects'));
const Journal = lazy(() => import('./pages/Journal'));
const Scripts = lazy(() => import('./pages/Scripts'));

// Dynamic Entry Pages
const ProjectEntry = lazy(() => import('./pages/ProjectEntry'));
const JournalEntry = lazy(() => import('./pages/JournalEntry'));
const ScriptEntry = lazy(() => import('./pages/ScriptEntry'));

// Error Handling
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          {/* Suspense provides a fallback UI while the lazy chunks are downloading */}
          <Suspense fallback={
            <div className="min-h-[50vh] flex items-center justify-center text-workspace-text-muted font-mono animate-pulse">
              Loading workspace environment...
            </div>
          }>
            <Routes>
              {/* Homepage */}
              <Route path="/" element={<Portfolio />} />

              {/* Base List Routes (The ones that were missing!) */}
              <Route path="/projects" element={<Projects />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/scripts" element={<Scripts />} />
              
              {/* Dynamic Entry Routes */}
              <Route path="/projects/:slug" element={<ProjectEntry />} />
              <Route path="/journal/:slug" element={<JournalEntry />} />
              <Route path="/scripts/:slug" element={<ScriptEntry />} />
              
              {/* Catch-all route for broken links */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}