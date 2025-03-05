"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const weatherTopics = [
  { name: 'Jet Streams', path: '/topics/jet-streams' },
  { name: 'Rossby Waves', path: '/topics/rossby-waves' },
  { name: 'Atmospheric Pressure', path: '/topics/atmospheric-pressure' },
  { name: 'Cloud Formation', path: '/topics/cloud-formation' },
  { name: 'Storm Systems', path: '/topics/storm-systems' },
];

const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link href="/" className="logo">
          <span className="logo-text">WeatherWings</span>
          <span className="logo-duck">🦆</span>
        </Link>
      </div>
      
      <div className="navbar-topics">
        {weatherTopics.map((topic) => (
          <Link 
            key={topic.path} 
            href={topic.path}
            className={`navbar-topic ${pathname === topic.path ? 'active' : ''}`}
          >
            {topic.name}
          </Link>
        ))}
      </div>
      
      <div className="navbar-actions">
        <button className="duck-mode-toggle">
          Ask a Duck
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
