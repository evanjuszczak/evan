import React from 'react';
import { NavLink } from 'react-router-dom';
import { DarkModeToggle } from './DarkModeToggle';

export function Navigation() {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/education', label: 'Education' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-6 py-4 flex justify-between items-center">
        <ul className="flex gap-8">
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `text-sm hover:text-black dark:hover:text-white transition-colors duration-300 ${
                    isActive 
                      ? 'text-black dark:text-white font-medium' 
                      : 'text-gray-500 dark:text-gray-400'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <DarkModeToggle />
      </div>
    </nav>
  );
}