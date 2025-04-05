import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark';
    }
    return false;
  });

  useEffect(() => {
    // Update class on document element when theme changes
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div 
      className="relative inline-flex h-7 w-14 cursor-pointer rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 transition-all duration-300 ease-in-out"
      onClick={() => setDarkMode(!darkMode)}
      role="switch"
      aria-checked={darkMode}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setDarkMode(!darkMode);
        }
      }}
    >
      {/* Track */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 flex transition-opacity duration-300">
          <div className={`flex-1 flex items-center justify-center ${darkMode ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
            <Sun size={12} className="text-yellow-500" />
          </div>
          <div className={`flex-1 flex items-center justify-center ${darkMode ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
            <Moon size={12} className="text-blue-300" />
          </div>
        </div>
      </div>
      
      {/* Thumb / Slider */}
      <div 
        className={`absolute top-0.5 h-6 w-6 transform rounded-full shadow-md transition-all duration-300 ease-in-out flex items-center justify-center ${
          darkMode 
            ? 'translate-x-7 bg-gray-700 border border-gray-600' 
            : 'translate-x-0.5 bg-white border border-gray-200'
        }`}
      >
        {darkMode ? (
          <Moon size={10} className="text-blue-300" />
        ) : (
          <Sun size={10} className="text-yellow-500" />
        )}
      </div>
    </div>
  );
} 