import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Education } from './pages/Education';
import { ProjectDetail } from './pages/ProjectDetail';
import { FadeIn } from './components/FadeIn';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navigation />
        
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>
        </main>

        {}
        <footer className="max-w-2xl mx-auto px-6 py-8 border-t border-gray-100">
          <FadeIn>
            <p className="text-center text-sm text-gray-500">
              {new Date().getFullYear()} &#9670; Evan Juszczak
            </p>
          </FadeIn>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;