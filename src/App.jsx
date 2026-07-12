import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Journal from './pages/Journal';
import JournalEntry from './pages/JournalEntry';
import Scripts from './pages/Scripts';
import ScriptEntry from './pages/ScriptEntry';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/journal/:slug" element={<JournalEntry />} />
        <Route path="/scripts" element={<Scripts />} />
        <Route path="/scripts/:slug" element={<ScriptEntry />} />
      </Routes>
    </Router>
  );
}

export default App;