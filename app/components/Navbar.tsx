"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define topic structure with nested subtopics
const weatherTopics = [
  { 
    name: 'Atmospheric Basics', 
    path: '/topics/atmospheric-basics',
    dropdown: [
      { name: 'Air Pressure', path: '/topics/atmospheric-basics/air-pressure' },
      { name: 'Temperature Gradients', path: '/topics/atmospheric-basics/temperature-gradients' },
      { name: 'Atmospheric Layers', path: '/topics/atmospheric-basics/atmospheric-layers' }
    ]
  },
  { 
    name: 'Jet Streams', 
    path: '/topics/jet-streams',
    dropdown: [
      { name: 'Fundamentals', path: '/topics/jet-streams/fundamentals' },
      { name: 'Patterns and Movements', path: '/topics/jet-streams/patterns-movements' },
      { name: 'The Polar Jet', path: '/topics/jet-streams/polar-jet' },
      { name: 'The Subtropical Jet', path: '/topics/jet-streams/subtropical-jet' },
      { name: 'Jet Stream Interactions', path: '/topics/jet-streams/interactions' },
      { name: 'Advanced Patterns', path: '/topics/jet-streams/advanced-patterns' },
      { name: 'Real-World Applications', path: '/topics/jet-streams/applications' }
    ]
  },
  { 
    name: 'Moisture', 
    path: '/topics/moisture',
    dropdown: []
  }
];

const Navbar = () => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const toggleDropdown = (topicName: string) => {
    if (activeDropdown === topicName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(topicName);
    }
  };
  
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
          <div key={topic.path} className="navbar-topic-container">
            <div 
              className={`navbar-topic ${pathname.startsWith(topic.path) ? 'active' : ''}`}
              onClick={() => toggleDropdown(topic.name)}
            >
              {topic.name}
              <span className="dropdown-indicator">{activeDropdown === topic.name ? '▲' : '▼'}</span>
            </div>
            
            {activeDropdown === topic.name && (
              <div className="dropdown-menu">
                {topic.dropdown.map(subtopic => (
                  <Link 
                    key={subtopic.path} 
                    href={subtopic.path}
                    className={`dropdown-item ${pathname === subtopic.path ? 'active' : ''}`}
                  >
                    {subtopic.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
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
