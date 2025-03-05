'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { DefaultNotes } from '../../components/notes/DefaultNotes';
import { ComingSoonVisual } from '../../components/visualizations/ComingSoonVisual';

// Helper function to get category data
const getCategoryData = (category: string) => {
  // For Jet Streams
  if (category === 'jet-streams') {
    return {
      title: 'Jet Streams',
      description: 'Fast flowing, narrow air currents in the atmosphere that influence global weather patterns',
      subtopics: [
        { name: 'Fundamentals', path: '/topics/jet-streams/fundamentals' },
        { name: 'Patterns and Movements', path: '/topics/jet-streams/patterns-movements' },
        { name: 'The Polar Jet', path: '/topics/jet-streams/polar-jet' },
        { name: 'The Subtropical Jet', path: '/topics/jet-streams/subtropical-jet' },
        { name: 'Jet Stream Interactions', path: '/topics/jet-streams/interactions' },
        { name: 'Advanced Patterns', path: '/topics/jet-streams/advanced-patterns' },
        { name: 'Real-World Applications', path: '/topics/jet-streams/applications' },
      ]
    };
  }
  
  // For Atmospheric Basics
  if (category === 'atmospheric-basics') {
    return {
      title: 'Atmospheric Basics',
      description: 'The fundamental principles that govern our atmosphere',
      subtopics: [
        { name: 'Air Pressure', path: '/topics/atmospheric-basics/air-pressure' },
        { name: 'Temperature Gradients', path: '/topics/atmospheric-basics/temperature-gradients' },
        { name: 'Atmospheric Layers', path: '/topics/atmospheric-basics/atmospheric-layers' },
      ]
    };
  }
  
  // For Moisture Topics
  if (category === 'moisture') {
    return {
      title: 'Moisture Topics',
      description: 'Everything about water in the atmosphere',
      subtopics: [
        { name: 'Humidity Concepts', path: '/topics/moisture/humidity' },
        { name: 'Cloud Formation', path: '/topics/moisture/cloud-formation' },
        { name: 'Precipitation', path: '/topics/moisture/precipitation' },
        { name: 'Water Cycle', path: '/topics/moisture/water-cycle' },
      ]
    };
  }
  
  // Default fallback
  return {
    title: 'Category Not Found',
    description: 'This category does not exist',
    subtopics: []
  };
};

// Category Page Component
const CategoryPage = () => {
  const params = useParams();
  const category = typeof params.category === 'string' ? params.category : '';
  
  const categoryData = getCategoryData(category);
  
  return (
    <div className="topic-container">
      <div className="topic-header">
        <h1>{categoryData.title}</h1>
        <p>{categoryData.description}</p>
      </div>
      
      <div style={{ padding: '1.5rem' }}>
        <h2 className="subtopics-heading">Topics in this category:</h2>
        
        <div className="subtopics-grid">
          {categoryData.subtopics.map((subtopic) => (
            <Link key={subtopic.path} href={subtopic.path} className="subtopic-card">
              <h3>{subtopic.name}</h3>
              <div className="card-arrow">→</div>
            </Link>
          ))}
        </div>
        
        <div className="category-overview" style={{ marginTop: '2rem' }}>
          <h2>Overview</h2>
          <div className="split-view">
            <div className="notes-view">
              <DefaultNotes />
            </div>
            <div className="visual-view">
              <ComingSoonVisual />
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .subtopics-heading {
          color: var(--water-blue);
          margin-bottom: 1.5rem;
        }
        
        .subtopics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .subtopic-card {
          background-color: white;
          padding: 1.25rem;
          border-radius: var(--border-radius);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          text-decoration: none;
          color: inherit;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.2s ease;
        }
        
        .subtopic-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
          background-color: #f0f9ff;
        }
        
        .card-arrow {
          color: var(--duck-yellow);
          font-size: 1.5rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default CategoryPage;
