import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Journal from './pages/Journal';
import JournalEntry from './pages/JournalEntry';
import Scripts from './pages/Scripts';
import ScriptEntry from './pages/ScriptEntry';
import Projects from './pages/Projects';
import ProjectEntry from './pages/ProjectEntry';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<JournalEntry />} />
          <Route path="/scripts" element={<Scripts />} />
          <Route path="/scripts/:slug" element={<ScriptEntry />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectEntry />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;