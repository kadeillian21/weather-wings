'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Markdown from 'react-markdown';

// This would be a JSON or API call in a real app
const getTopicContent = (slug: string) => {
  // Example content for jet-streams
  if (slug === 'jet-streams') {
    return {
      title: 'Jet Streams',
      notes: `# Jet Streams: Rivers in the Sky
      
Jet streams are fast flowing, narrow, meandering air currents found in the atmospheres of Earth and other planets. On Earth, the main jet streams are located near the altitude of the tropopause and are westerly winds (flowing west to east).

## Key Characteristics

* **Speed**: Typically 120-250 kilometers per hour but can reach over 400 km/h
* **Altitude**: Usually found at 9-12 km above sea level
* **Width**: A few hundred kilometers wide
* **Depth**: Only a few kilometers thick

## Types of Jet Streams

1. **Polar Jet**: Found at 60° latitude at 9-12 km altitude
2. **Subtropical Jet**: Found at 30° latitude at 10-16 km altitude

## Why Jet Streams Matter

Jet streams play a crucial role in weather patterns as they:

* Separate cold polar air from warm tropical air
* Guide storm systems
* Influence seasonal weather patterns
* Can cause clear-air turbulence for aircraft

> "The jet stream is like nature's weather conveyor belt, moving weather systems around the globe." - Harold the Duck
      `,
      visualization: 'JetStreamVisual'
    };
  }
  
  // Default content for other topics
  return {
    title: `${slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')}`,
    notes: `# ${slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')}
    
Content for this topic is being prepared by our expert weather ducks. Please check back soon!

> "Weather wisdom comes to those who wait." - Harold the Duck
    `,
    visualization: 'ComingSoonVisual'
  };
};

// Visualization components
const JetStreamVisual = () => (
  <div className="duck-figure">
    <svg width="100%" height="300" viewBox="0 0 600 300">
      {/* Earth */}
      <circle cx="300" cy="150" r="120" fill="#87CEEB" stroke="#1e3a8a" strokeWidth="2" />
      
      {/* Land masses (simplified) */}
      <path d="M220,100 Q250,80 280,95 Q310,110 340,90 Q370,80 390,100 Q410,120 400,150 Q390,180 370,190 Q340,200 310,180 Q280,160 250,180 Q220,200 200,180 Q180,160 190,130 Q200,100 220,100" 
        fill="#2E8B57" stroke="#006400" strokeWidth="1" />
      
      {/* Polar jet stream */}
      <path d="M180,90 Q220,110 260,80 Q300,60 340,90 Q380,120 420,80" 
        fill="none" stroke="#FF6B6B" strokeWidth="4" strokeDasharray="5,2" />
      
      {/* Subtropical jet stream */}
      <path d="M180,170 Q220,190 260,160 Q300,140 340,170 Q380,200 420,160" 
        fill="none" stroke="#FFD700" strokeWidth="4" strokeDasharray="5,2" />
      
      {/* Labels */}
      <text x="440" y="80" fill="#FF6B6B" fontWeight="bold">Polar Jet</text>
      <text x="440" y="160" fill="#FFD700" fontWeight="bold">Subtropical Jet</text>
    </svg>
    <div className="duck-avatar">🦆</div>
  </div>
);

const ComingSoonVisual = () => (
  <div className="duck-figure">
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h3>Visualization in progress...</h3>
      <p>Our duck meteorologists are crafting the perfect visual explanation.</p>
      <div style={{ fontSize: '4rem', margin: '1rem 0' }}>🦆✏️💭</div>
    </div>
    <div className="duck-avatar">🦆</div>
  </div>
);

// View Mode Type
type ViewMode = 'split' | 'notes' | 'visual';

// Main Topic Page Component
const TopicPage = () => {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const [viewMode, setViewMode] = useState<ViewMode>('split');
  
  const topicContent = getTopicContent(slug);
  
  const renderVisualization = () => {
    if (topicContent.visualization === 'JetStreamVisual') {
      return <JetStreamVisual />;
    }
    return <ComingSoonVisual />;
  };
  
  return (
    <div className="topic-container">
      <div className="topic-header">
        <h1>{topicContent.title}</h1>
      </div>
      
      <div style={{ padding: '1rem' }}>
        <div className="view-toggle">
          <button 
            className={`toggle-button ${viewMode === 'notes' ? 'active' : ''}`}
            onClick={() => setViewMode('notes')}
          >
            Duck Notes
          </button>
          <button 
            className={`toggle-button ${viewMode === 'split' ? 'active' : ''}`}
            onClick={() => setViewMode('split')}
          >
            Split View
          </button>
          <button 
            className={`toggle-button ${viewMode === 'visual' ? 'active' : ''}`}
            onClick={() => setViewMode('visual')}
          >
            Visual Only
          </button>
        </div>
        
        {viewMode === 'notes' && (
          <div className="notes-view">
            <div className="markdown-content">
              <Markdown>{topicContent.notes}</Markdown>
            </div>
          </div>
        )}
        
        {viewMode === 'visual' && (
          <div className="visual-view">
            {renderVisualization()}
          </div>
        )}
        
        {viewMode === 'split' && (
          <div className="split-view">
            <div className="notes-view">
              <div className="markdown-content">
                <Markdown>{topicContent.notes}</Markdown>
              </div>
            </div>
            <div className="visual-view">
              {renderVisualization()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicPage;
