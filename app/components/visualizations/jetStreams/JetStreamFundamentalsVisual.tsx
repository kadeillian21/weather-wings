import React from 'react';

export const JetStreamFundamentalsVisual = () => {
  return (
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
        
        {/* Add latitude markers */}
        <line x1="210" y1="60" x2="220" y2="60" stroke="#fff" strokeWidth="2" />
        <text x="190" y="65" fill="#fff" fontSize="12">60°N</text>
        
        <line x1="210" y1="150" x2="220" y2="150" stroke="#fff" strokeWidth="2" />
        <text x="190" y="155" fill="#fff" fontSize="12">Equator</text>
        
        <line x1="210" y1="240" x2="220" y2="240" stroke="#fff" strokeWidth="2" />
        <text x="190" y="245" fill="#fff" fontSize="12">60°S</text>
      </svg>
      <div className="duck-avatar">🦆</div>
    </div>
  );
};