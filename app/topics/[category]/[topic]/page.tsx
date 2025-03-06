'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';

// Import visualization components for different topics
// These will be created by the duck brethren
import JetStreamFundamentalsVisual from '../../../components/visualizations/jetStreams/JetStreamFundamentalsVisual';
import JetStreamPolarVisual from '../../../components/visualizations/jetStreams/JetStreamPolarVisual';
import ComingSoonVisual from '../../../components/visualizations/ComingSoonVisual';

// Import notes components for different topics
// These will be created by the duck brethren
import JetStreamFundamentalsNotes from '../../../components/notes/jetStreams/JetStreamFundamentalsNotes';
import JetStreamPolarNotes from '../../../components/notes/jetStreams/JetStreamPolarNotes';
import DefaultNotes from '../../../components/notes/DefaultNotes';

// Function to get the correct components based on the URL path
const getTopicComponents = (category?: string, topic?: string) => {
  // Handling Jet Streams category
  if (category === 'jet-streams') {
    if (topic === 'fundamentals') {
      return {
        title: 'Jet Stream Fundamentals',
        NotesComponent: JetStreamFundamentalsNotes,
        VisualComponent: JetStreamFundamentalsVisual
      };
    }
    if (topic === 'polar-jet') {
      return {
        title: 'The Polar Jet Stream',
        NotesComponent: JetStreamPolarNotes,
        VisualComponent: JetStreamPolarVisual
      };
    }
    // Add more specific jet stream topics as they are created

    // Default for jet streams main page or unimplemented subtopics
    return {
      title: topic ?
        topic.charAt(0).toUpperCase() + topic.slice(1).replace(/-/g, ' ') :
        'Jet Streams Overview',
      NotesComponent: DefaultNotes,
      VisualComponent: ComingSoonVisual
    };
  }

  // Handle other main categories
  if (category) {
    return {
      title: `${category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')}${topic ? ': ' + topic.charAt(0).toUpperCase() + topic.slice(1).replace(/-/g, ' ') : ''}`,
      NotesComponent: DefaultNotes,
      VisualComponent: ComingSoonVisual
    };
  }

  // Fallback for unknown paths
  return {
    title: 'Topic Not Found',
    NotesComponent: DefaultNotes,
    VisualComponent: ComingSoonVisual
  };
};

// View Mode Type
type ViewMode = 'split' | 'notes' | 'visual';

// Main Topic Page Component
const TopicPage = () => {
  const params = useParams();

  // Extract category and topic directly from params
  const category = typeof params.category === 'string' ? params.category : '';
  const topic = typeof params.topic === 'string' ? params.topic : '';

  const [viewMode, setViewMode] = useState<ViewMode>('split');

  const { title, NotesComponent, VisualComponent } = getTopicComponents(category, topic);

  return (
    <div className="topic-container">
      <div className="topic-header">
        <h1>{title}</h1>
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
            <NotesComponent />
          </div>
        )}

        {viewMode === 'visual' && (
          <div className="visual-view">
            <VisualComponent />
          </div>
        )}

        {viewMode === 'split' && (
          <div className="split-view">
            <div className="notes-view">
              <NotesComponent />
            </div>
            <div className="visual-view">
              <VisualComponent />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicPage;
