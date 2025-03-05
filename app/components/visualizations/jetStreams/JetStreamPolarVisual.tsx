import React, { useState } from 'react';

export const JetStreamPolarVisual = () => {
  const [season, setSeason] = useState('winter');
  
  return (
    <div className="duck-figure">
      <div className="control-panel" style={{ marginBottom: '1rem', textAlign: 'center' }}>
        <button 
          onClick={() => setSeason('winter')}
          className={`control-button ${season === 'winter' ? 'active' : ''}`}
          style={{ 
            padding: '0.5rem 1rem', 
            marginRight: '0.5rem',
            background: season === 'winter' ? '#1e3a8a' : '#f8f9fa',
            color: season === 'winter' ? 'white' : '#333',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Winter Position
        </button>
        <button 
          onClick={() => setSeason('summer')}
          className={`control-button ${season === 'summer' ? 'active' : ''}`}
          style={{ 
            padding: '0.5rem 1rem',
            background: season === 'summer' ? '#1e3a8a' : '#f8f9fa',
            color: season === 'summer' ? 'white' : '#333',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Summer Position
        </button>
      </div>
      
      <svg width="100%" height="320" viewBox="0 0 600 320">
        {/* Northern Hemisphere */}
        <circle cx="300" cy="160" r="150" fill="#87CEEB" stroke="#1e3a8a" strokeWidth="2" />
        
        {/* Land masses */}
        <path d="M200,100 Q250,80 300,90 Q350,100 400,80 Q430,100 420,150 Q400,200 350,210 Q300,220 250,200 Q200,180 180,150 Q170,120 200,100" 
          fill="#2E8B57" stroke="#006400" strokeWidth="1" />
        
        {/* North Pole Ice Cap */}
        <circle cx="300" cy="160" r="40" fill="white" stroke="#ccc" strokeWidth="1" />
        
        {/* Polar Jet Stream - Winter Position */}
        {season === 'winter' && (
          <path d="M175,120 Q225,140 275,110 Q325,90 375,120 Q425,150 450,120" 
            fill="none" stroke="#FF6B6B" strokeWidth="4" strokeDasharray="5,2" />
        )}
        
        {/* Polar Jet Stream - Summer Position */}
        {season === 'summer' && (
          <path d="M190,90 Q240,110 290,80 Q340,60 390,90 Q440,120 470,90" 
            fill="none" stroke="#FF6B6B" strokeWidth="4" strokeDasharray="5,2" />
        )}
        
        {/* Labels */}
        <text x="500" y={season === 'winter' ? "120" : "90"} fill="#FF6B6B" fontWeight="bold">Polar Jet</text>
        
        {/* Latitude lines */}
        <circle cx="300" cy="160" r="75" fill="none" stroke="#fff" strokeWidth="0.5" strokeDasharray="2,2" />
        <text x="380" y="160" fill="#fff" fontSize="12">60°N</text>
        
        <circle cx="300" cy="160" r="110" fill="none" stroke="#fff" strokeWidth="0.5" strokeDasharray="2,2" />
        <text x="415" y="160" fill="#fff" fontSize="12">45°N</text>
        
        <circle cx="300" cy="160" r="150" fill="none" stroke="#fff" strokeWidth="0.5" strokeDasharray="2,2" />
        <text x="455" y="160" fill="#fff" fontSize="12">30°N</text>
        
        {/* Season indicator */}
        <text x="50" y="50" fill="#1e3a8a" fontSize="14" fontWeight="bold">
          {season === 'winter' ? 'Winter Pattern: Jet stream shifts southward' : 'Summer Pattern: Jet stream shifts northward'}
        </text>
        
        {/* Explanation */}
        <text x="50" y="280" fill="#333" fontSize="12">
          {season === 'winter' 
            ? 'In winter, the temperature contrast between polar and temperate regions strengthens,' 
            : 'In summer, the temperature contrast between regions weakens,'}
        </text>
        <text x="50" y="300" fill="#333" fontSize="12">
          {season === 'winter' 
            ? 'pushing the jet stream toward the equator with higher speeds.' 
            : 'allowing the jet stream to move poleward with generally lower speeds.'}
        </text>
      </svg>
      <div className="duck-avatar">🦆</div>
    </div>
  );
};
