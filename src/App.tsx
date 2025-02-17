import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Chapter from './pages/Chapter';
import StoryPage from './pages/StoryPage';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chapter/:id" element={<Chapter />} />
          <Route path="/chapter/:id/page/:pageId" element={<StoryPage />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;