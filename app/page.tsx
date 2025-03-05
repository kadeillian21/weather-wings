'use client';

import React from 'react';
import Link from 'next/link';

const weatherTopics = [
  { 
    name: 'Atmospheric Basics', 
    path: '/topics/atmospheric-basics',
    description: 'The fundamental principles that govern our atmosphere, from pressure systems to temperature patterns',
    icon: '🌍'
  },
  { 
    name: 'Jet Streams', 
    path: '/topics/jet-streams',
    description: 'Fast flowing, narrow air currents in the atmosphere that influence global weather patterns',
    icon: '💨'
  },
  { 
    name: 'Moisture Topics', 
    path: '/topics/moisture',
    description: 'Everything about water in the atmosphere - from humidity and clouds to precipitation',
    icon: '💧'
  },
];

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to WeatherWings</h1>
          <p className="hero-subtitle">Learn about meteorology with the help of friendly, knowledgeable ducks</p>
          
          <div className="duck-intro">
            <div className="duck-avatar-large">🦆</div>
            <div className="duck-speech">
              <p>Hi there! I&apos;m Harold, your guide to understanding weather patterns. My flock and I have been studying atmospheric science for years, and we&apos;re excited to share our knowledge with you!</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="topics-grid">
        <h2 className="section-title">Weather Topics</h2>
        <div className="topics-container">
          {weatherTopics.map((topic) => (
            <Link key={topic.path} href={topic.path} className="topic-card">
              <div className="topic-icon">{topic.icon}</div>
              <h3 className="topic-title">{topic.name}</h3>
              <p className="topic-description">{topic.description}</p>
            </Link>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .home-container {
          animation: fadeIn 0.5s ease-in;
        }
        
        .hero-section {
          background-color: white;
          border-radius: var(--border-radius);
          padding: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .hero-title {
          color: var(--water-blue);
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }
        
        .hero-subtitle {
          color: var(--storm-gray);
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }
        
        .duck-intro {
          display: flex;
          align-items: center;
          background-color: #f8f9fa;
          border-radius: var(--border-radius);
          padding: 1.5rem;
          margin-top: 1.5rem;
        }
        
        .duck-avatar-large {
          font-size: 4rem;
          margin-right: 1.5rem;
        }
        
        .duck-speech {
          position: relative;
          background-color: white;
          border-radius: var(--border-radius);
          padding: 1rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }
        
        .duck-speech:before {
          content: '';
          position: absolute;
          left: -10px;
          top: 20px;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-right: 10px solid white;
        }
        
        .section-title {
          color: var(--water-blue);
          margin-bottom: 1.5rem;
        }
        
        .topics-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        
        .topic-card {
          display: block;
          background-color: white;
          border-radius: var(--border-radius);
          padding: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
        }
        
        .topic-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
        }
        
        .topic-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        
        .topic-title {
          color: var(--water-blue);
          margin-bottom: 0.5rem;
        }
        
        .topic-description {
          color: var(--storm-gray);
          font-size: 0.9rem;
          line-height: 1.5;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .duck-intro {
            flex-direction: column;
            text-align: center;
          }
          
          .duck-avatar-large {
            margin-right: 0;
            margin-bottom: 1rem;
          }
          
          .duck-speech:before {
            left: 50%;
            top: -10px;
            margin-left: -10px;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid white;
            border-top: none;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
