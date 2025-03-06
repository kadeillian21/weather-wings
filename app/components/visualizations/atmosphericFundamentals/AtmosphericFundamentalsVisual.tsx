import React, { useState } from 'react';

const AtmosphericFundamentalsVisual = () => {
  const [activeView, setActiveView] = useState('pressure');
  const [showJetStream, setShowJetStream] = useState(true);
  const [tempGradient, setTempGradient] = useState('strong');

  // Constants for SVG drawing
  const width = 600;
  const height = 400;
  
  // Generate pressure system paths based on active state
  const generatePressureSystems = () => {
    if (activeView !== 'pressure') return null;
    
    return (
      <>
        {/* High pressure system - clockwise */}
        <g transform="translate(150, 180)">
          <path 
            d="M0,0 C30,-40 60,-30 70,0 C80,30 60,60 30,70 C0,80 -30,60 -40,30 C-50,0 -30,-30 0,0" 
            fill="none" 
            stroke="#ff7700" 
            strokeWidth="3"
          />
          <path 
            d="M10,0 L25,0 M17.5,-7.5 L17.5,7.5" 
            stroke="#ff7700" 
            strokeWidth="3"
          />
          <text x="0" y="90" textAnchor="middle" fill="#ff7700" fontWeight="bold">High Pressure</text>
          <text x="0" y="110" textAnchor="middle" fill="#ff7700" fontSize="12">(Clockwise rotation)</text>
        </g>
        
        {/* Low pressure system - counterclockwise */}
        <g transform="translate(450, 180)">
          <path 
            d="M0,0 C-30,-40 -60,-30 -70,0 C-80,30 -60,60 -30,70 C0,80 30,60 40,30 C50,0 30,-30 0,0" 
            fill="none" 
            stroke="#0066ff" 
            strokeWidth="3"
          />
          <path 
            d="M-25,0 L25,0" 
            stroke="#0066ff" 
            strokeWidth="3"
          />
          <text x="0" y="90" textAnchor="middle" fill="#0066ff" fontWeight="bold">Low Pressure</text>
          <text x="0" y="110" textAnchor="middle" fill="#0066ff" fontSize="12">(Counter-clockwise rotation)</text>
        </g>
      </>
    );
  };
  
  // Generate weather map visualization
  const generateWeatherMap = () => {
    if (activeView !== 'map') return null;
    
    // Generate contour lines for a 500mb map
    const contourPaths = [
      "M50,200 C100,180 150,190 200,170 C250,150 300,140 350,150 C400,160 450,190 550,200",
      "M50,170 C100,150 150,160 200,140 C250,120 300,110 350,120 C400,130 450,160 550,170",
      "M50,140 C100,120 150,130 200,110 C250,90 300,80 350,90 C400,100 450,130 550,140",
      "M50,110 C100,90 150,100 200,80 C250,60 300,50 350,60 C400,70 450,100 550,110",
      "M50,250 C100,230 150,240 200,220 C250,200 300,190 350,200 C400,210 450,240 550,250",
      "M50,280 C100,260 150,270 200,250 C250,230 300,220 350,230 C400,240 450,270 550,280"
    ];
    
    return (
      <>
        <rect x="50" y="50" width="500" height="280" fill="#f0f8ff" />
        
        {/* Draw contour lines */}
        {contourPaths.map((path, index) => (
          <path 
            key={`contour-${index}`}
            d={path} 
            fill="none" 
            stroke={index < 4 ? "#ff9966" : "#6699ff"} 
            strokeWidth="2"
            strokeDasharray={index % 2 === 0 ? "0" : "5,5"}
          />
        ))}
        
        {/* Label the ridge and trough */}
        <text x="120" y="70" fill="#d04000" fontWeight="bold">RIDGE</text>
        <path d="M120,75 L120,140" stroke="#d04000" strokeWidth="1" strokeDasharray="2,2" />
        
        <text x="380" y="70" fill="#0044aa" fontWeight="bold">TROUGH</text>
        <path d="M380,75 L380,140" stroke="#0044aa" strokeWidth="1" strokeDasharray="2,2" />
        
        {/* Legend */}
        <rect x="440" y="60" width="100" height="80" fill="white" stroke="#999" />
        <text x="490" y="80" textAnchor="middle" fontWeight="bold" fontSize="12">500mb Heights</text>
        <line x1="450" y1="95" x2="480" y2="95" stroke="#ff9966" strokeWidth="2" />
        <text x="490" y="100" textAnchor="start" fontSize="12">Warm air</text>
        <line x1="450" y1="115" x2="480" y2="115" stroke="#6699ff" strokeWidth="2" />
        <text x="490" y="120" textAnchor="start" fontSize="12">Cold air</text>
      </>
    );
  };
  
  // Generate jet stream visualization
  const generateJetStream = () => {
    if (activeView !== 'jetstream') return null;
    
    // Create different jet stream patterns based on gradient strength
    const jetPath = tempGradient === 'strong' 
      ? "M20,200 C80,120 150,80 250,150 C350,220 450,120 580,150"
      : "M20,180 C100,160 200,170 300,180 C400,190 500,170 580,180";
    
    // Colors for temperature gradient
    const coldColors = ['#0044aa', '#0066cc', '#0088ee', '#00aaff'];
    const warmColors = ['#ffcc00', '#ff9900', '#ff7700', '#ff5500'];
    
    return (
      <>
        {/* Temperature gradient background */}
        <defs>
          <linearGradient id="tempGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={coldColors[0]} />
            <stop offset="33%" stopColor={coldColors[tempGradient === 'strong' ? 1 : 2]} />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="66%" stopColor={warmColors[tempGradient === 'strong' ? 1 : 2]} />
            <stop offset="100%" stopColor={warmColors[0]} />
          </linearGradient>
        </defs>
        
        <rect x="50" y="50" width="500" height="280" fill="url(#tempGradient)" />
        
        {/* Jet stream */}
        {showJetStream && (
          <>
            <path 
              d={jetPath}
              fill="none" 
              stroke="#333" 
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path 
              d={jetPath}
              fill="none" 
              stroke="#fff" 
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={tempGradient === 'strong' ? "0" : "10,10"}
            />
            
            {/* Jet stream arrow indicators */}
            {[0.3, 0.6, 0.9].map((pos, i) => {
              const x = 50 + pos * 500;
              const y = tempGradient === 'strong' 
                ? (pos === 0.6 ? 220 : pos === 0.3 ? 150 : 150) 
                : 180;
              return (
                <g key={`arrow-${i}`} transform={`translate(${x},${y}) rotate(${tempGradient === 'strong' ? (pos === 0.6 ? 45 : pos === 0.3 ? -45 : 15) : 0})`}>
                  <path d="M-15,0 L15,0 L5,-10 M15,0 L5,10" stroke="#333" strokeWidth="2" fill="none" />
                </g>
              );
            })}
          </>
        )}
        
        {/* Labels */}
        <text x="300" y="80" textAnchor="middle" fontWeight="bold" fill="#003366">COLD POLAR AIR</text>
        <text x="300" y="320" textAnchor="middle" fontWeight="bold" fill="#993300">WARM TROPICAL AIR</text>
        
        {tempGradient === 'strong' && showJetStream && (
          <text x="300" y="200" textAnchor="middle" fontWeight="bold" fontSize="18" fill="#fff" stroke="#000" strokeWidth="0.5">
            STRONG JET STREAM
          </text>
        )}
        
        {tempGradient === 'weak' && showJetStream && (
          <text x="300" y="160" textAnchor="middle" fontWeight="bold" fontSize="18" fill="#fff" stroke="#000" strokeWidth="0.5">
            WEAK JET STREAM
          </text>
        )}
      </>
    );
  };
  
  return (
    <div className="duck-figure">
      <div className="duck-avatar">
        <div className="duck-head"></div>
        <div className="duck-body"></div>
        <div className="duck-wing"></div>
        <div className="duck-beak"></div>
      </div>
      
      <div className="controls">
        <div className="button-group">
          <button 
            className={activeView === 'pressure' ? 'active' : ''} 
            onClick={() => setActiveView('pressure')}
          >
            Pressure Systems
          </button>
          <button 
            className={activeView === 'map' ? 'active' : ''} 
            onClick={() => setActiveView('map')}
          >
            Weather Map
          </button>
          <button 
            className={activeView === 'jetstream' ? 'active' : ''} 
            onClick={() => setActiveView('jetstream')}
          >
            Jet Stream
          </button>
        </div>
        
        {activeView === 'jetstream' && (
          <div className="option-controls">
            <label>
              <input 
                type="checkbox" 
                checked={showJetStream} 
                onChange={() => setShowJetStream(!showJetStream)} 
              />
              Show Jet Stream
            </label>
            
            <div className="radio-group">
              <label>
                <input 
                  type="radio" 
                  name="gradient" 
                  value="strong" 
                  checked={tempGradient === 'strong'} 
                  onChange={() => setTempGradient('strong')} 
                />
                Strong Temperature Gradient
              </label>
              <label>
                <input 
                  type="radio" 
                  name="gradient" 
                  value="weak" 
                  checked={tempGradient === 'weak'} 
                  onChange={() => setTempGradient('weak')} 
                />
                Weak Temperature Gradient
              </label>
            </div>
          </div>
        )}
      </div>
      
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        {/* Earth background */}
        <rect x="0" y="0" width={width} height={height} fill="#e6f7ff" />
        
        {/* Generate different visualizations based on active view */}
        {generatePressureSystems()}
        {generateWeatherMap()}
        {generateJetStream()}
      </svg>
      
      <div className="visualization-caption">
        <p>
          {activeView === 'pressure' && 
            "High and low pressure systems create the fundamental building blocks of our weather. " +
            "High pressure systems (anticyclones) rotate clockwise in the Northern Hemisphere, while " +
            "low pressure systems (cyclones) rotate counterclockwise."}
          
          {activeView === 'map' && 
            "Weather maps at the 500mb level show height contours where pressure equals 500 millibars. " +
            "Ridges (northward bulges) indicate warm air and generally fair weather, while troughs " +
            "(southward dips) indicate cooler air and unsettled weather."}
          
          {activeView === 'jetstream' && 
            "Jet streams form at the boundary between cold polar air and warm tropical air. " +
            "The strength of the temperature gradient determines jet stream strength. " +
            "Stronger temperature contrasts create faster, more defined jet streams."}
        </p>
      </div>
    </div>
  );
};

export default AtmosphericFundamentalsVisual;
