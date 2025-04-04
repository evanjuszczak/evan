import React from 'react';
import { NavLink } from 'react-router-dom';

export function Navigation() {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/education', label: 'Education' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-2xl mx-auto px-6 py-4">
        <ul className="flex gap-8">
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `text-sm hover:text-black transition-colors duration-300 ${
                    isActive ? 'text-black font-medium' : 'text-gray-500'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}