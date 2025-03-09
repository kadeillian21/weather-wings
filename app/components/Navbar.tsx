"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define topic structure with nested subtopics
const weatherTopics = [
  {
    name: 'Atmospheric Fundamentals',
    path: '/topics/atmospheric-fundamentals',
    dropdown: [] // Empty array for no dropdown items
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
    name: 'Instability',
    path: '/topics/instability',
    dropdown: [
      { name: 'Instability Fundamentals', path: '/topics/instability/instability-fundamentals' },
    ]
  },
  {
    name: 'Moisture',
    path: '/topics/moisture',
    dropdown: [] // Empty array for no dropdown items
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
            {topic.dropdown && topic.dropdown.length > 0 ? (
              // Topic with dropdown
              <>
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
              </>
            ) : (
              // Simple topic without dropdown
              <Link 
                href={topic.path}
                className={`navbar-topic ${pathname === topic.path ? 'active' : ''}`}
              >
                {topic.name}
              </Link>
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
