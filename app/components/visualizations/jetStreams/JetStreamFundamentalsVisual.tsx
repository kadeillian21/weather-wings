import React, { useState, useEffect } from 'react';

const JetStreamFundamentalsVisual = () => {
  const [showLabels, setShowLabels] = useState(true);
  const [northRotation, setNorthRotation] = useState(0);
  const [southRotation, setSouthRotation] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setNorthRotation(prev => (prev + 3) % 360);
      setSouthRotation(prev => (prev - 3) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  // Styles for the component
  const styles = {
    container: {
      width: '100%',
      backgroundColor: '#f0f7ff',
      borderRadius: '8px',
      overflow: 'hidden',
      padding: '16px',
      fontFamily: 'Arial, sans-serif'
    },
    buttonContainer: {
      marginBottom: '16px'
    },
    button: {
      backgroundColor: '#0066cc',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: '500',
      border: 'none',
      cursor: 'pointer'
    },
    contentBox: {
      backgroundColor: '#d6ebff',
      borderRadius: '8px',
      padding: '16px',
      position: 'relative'
    },
    title: {
      color: '#0066cc',
      fontSize: '24px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '24px'
    },
    visualContainer: {
      position: 'relative',
      height: '400px',
      marginBottom: '16px'
    },
    hemisphereContainer: {
      position: 'absolute',
      left: '30px',
      top: '50px',
      width: '180px',
      height: '300px',
      overflow: 'hidden',
      borderRadius: '180px 180px 0 0',
      backgroundColor: '#a7d8ff',
      border: '2px solid #0066cc',
      borderBottom: 'none'
    },
    equator: {
      position: 'absolute',
      left: '30px',
      top: '350px',
      width: '180px',
      height: '2px',
      backgroundColor: '#0066cc'
    },
    equatorLabel: {
      position: 'absolute',
      left: '220px',
      top: '350px',
      color: '#0066cc',
      fontSize: '14px',
      transform: 'translateY(-50%)'
    },
    latitude: {
      position: 'absolute',
      left: '30px',
      width: '180px',
      height: '1px',
      borderTop: '1px dashed #0066cc'
    },
    latitudeLabel: {
      position: 'absolute',
      left: '220px',
      color: '#0066cc',
      fontSize: '12px',
      transform: 'translateY(-50%)'
    },
    legend: {
      marginTop: '16px',
      backgroundColor: 'white',
      padding: '12px',
      borderRadius: '8px',
      border: '1px solid #0066cc',
      fontSize: '14px'
    },
    legendTitle: {
      fontWeight: 'bold',
      color: '#0066cc',
      marginBottom: '8px'
    },
    legendList: {
      color: '#0066cc',
      paddingLeft: '20px',
      margin: 0
    },
    explanation: {
      marginTop: '16px',
      color: '#333',
      lineHeight: '1.5'
    },
    note: {
      marginTop: '8px',
      padding: '8px',
      backgroundColor: '#fffde7',
      borderLeft: '4px solid #ffd54f',
      fontSize: '14px',
      color: '#5d4037'
    }
  };

  return (
    <div className="duck-figure">
      <div style={styles.container}>
        <div style={styles.buttonContainer}>
          <button 
            onClick={() => setShowLabels(!showLabels)}
            style={styles.button}
          >
            {showLabels ? 'Hide Labels' : 'Show Labels'}
          </button>
        </div>
        
        <div style={styles.contentBox}>
          <h2 style={styles.title}>Northern Hemisphere Rossby Waves</h2>
          
          <div style={styles.visualContainer}>
            {/* Northern Hemisphere representation */}
            <div style={styles.hemisphereContainer}></div>
            
            {/* Equator line */}
            <div style={styles.equator}></div>
            {showLabels && <div style={styles.equatorLabel}>Equator (f=0)</div>}
            
            {/* Latitude lines */}
            {showLabels && (
              <>
                {/* Mid-latitude */}
                <div style={{...styles.latitude, top: '250px'}}></div>
                <div style={{...styles.latitudeLabel, top: '250px'}}>Mid-latitude (Medium f)</div>
                
                {/* Polar region */}
                <div style={{...styles.latitude, top: '150px'}}></div>
                <div style={{...styles.latitudeLabel, top: '150px'}}>Polar region (High f)</div>
                
                {/* Northern subtropical */}
                <div style={{...styles.latitude, top: '300px'}}></div>
                <div style={{...styles.latitudeLabel, top: '300px'}}>Subtropical (Low f)</div>
              </>
            )}
            
            {/* SVG container for jet stream and air parcels */}
            <svg 
              style={{
                position: 'absolute',
                right: '20px',
                top: '80px',
                width: '400px',
                height: '250px',
                overflow: 'visible'
              }}
              viewBox="0 0 400 250"
            >
              {/* Northern Hemisphere Jet Stream with Rossby Waves */}
              <path 
                d="M 0 100 Q 50 20 100 100 Q 150 180 200 100 Q 250 20 300 100 Q 350 180 400 100" 
                fill="none" 
                stroke="#ff6600" 
                strokeWidth="8"
                strokeLinecap="round"
              />
              
              {/* Label for Polar Jet Stream */}
              {showLabels && (
                <text x="390" y="75" textAnchor="end" fill="#ff6600" fontSize="14" fontWeight="bold">
                  Polar Jet Stream
                </text>
              )}
              
              {/* Northward-moving air parcel */}
              <g transform="translate(50, 20)">
                <circle r="20" fill="#ffcc00" stroke="#ff6600" strokeWidth="2" />
                
                {/* Animated rotation */}
                <g transform={`rotate(${northRotation})`}>
                  <path 
                    d="M -15 0 A 15 15 0 0 1 15 0" 
                    fill="none" 
                    stroke="#0066cc" 
                    strokeWidth="2" 
                    strokeDasharray="2,2" 
                  />
                  <polygon points="15,0 10,-5 10,5" fill="#0066cc" />
                </g>
                
                {showLabels && (
                  <>
                    <text x="0" y="-25" textAnchor="middle" fill="#0066cc" fontSize="12">Turning</text>
                    <text x="0" y="-10" textAnchor="middle" fill="#0066cc" fontSize="12">Eastward</text>
                  </>
                )}
                
                {/* Direction arrows */}
                <path d="M 0 30 L 0 45 M -3 42 L 0 45 L 3 42" fill="none" stroke="#0066cc" strokeWidth="2" />
                <path d="M 30 0 L 45 0 M 42 -3 L 45 0 L 42 3" fill="none" stroke="#0066cc" strokeWidth="2" />
                
                {showLabels && (
                  <text x="0" y="60" textAnchor="middle" fill="#0066cc" fontSize="10">Clockwise Rotation</text>
                )}
              </g>
              
              {/* Southward-moving air parcel (but still in Northern Hemisphere) */}
              <g transform="translate(150, 180)">
                <circle r="20" fill="#ffcc00" stroke="#ff6600" strokeWidth="2" />
                
                {/* Animated rotation */}
                <g transform={`rotate(${southRotation})`}>
                  <path 
                    d="M -15 0 A 15 15 0 0 0 15 0" 
                    fill="none" 
                    stroke="#0066cc" 
                    strokeWidth="2" 
                    strokeDasharray="2,2" 
                  />
                  <polygon points="-15,0 -10,-5 -10,5" fill="#0066cc" />
                </g>
                
                {showLabels && (
                  <>
                    <text x="0" y="-25" textAnchor="middle" fill="#0066cc" fontSize="12">Turning</text>
                    <text x="0" y="-10" textAnchor="middle" fill="#0066cc" fontSize="12">Westward</text>
                  </>
                )}
                
                {/* Direction arrows */}
                <path d="M 0 -30 L 0 -45 M -3 -42 L 0 -45 L 3 -42" fill="none" stroke="#0066cc" strokeWidth="2" />
                <path d="M -30 0 L -45 0 M -42 -3 L -45 0 L -42 3" fill="none" stroke="#0066cc" strokeWidth="2" />
                
                {showLabels && (
                  <text x="0" y="35" textAnchor="middle" fill="#0066cc" fontSize="10">Counterclockwise Rotation</text>
                )}
              </g>
              
              {/* Duck mascot */}
              <g transform="translate(350, 40)">
                <circle cx="0" cy="0" r="20" fill="#ffcc00" />
                <circle cx="8" cy="-5" r="5" fill="#ffffff" />
                <circle cx="9" cy="-6" r="2" fill="#000000" />
                <path d="M 5 10 L 15 20" stroke="#ff6600" strokeWidth="3" />
                <path d="M -5 5 q -5 5 0 10 q 5 5 10 0" fill="#ff6600" />
              </g>
            </svg>
          </div>
          
          {/* Legend */}
          <div style={styles.legend}>
            <p style={styles.legendTitle}>Northern Hemisphere Rossby Wave Formation:</p>
            <ol style={styles.legendList}>
              <li>Air moving NORTH → stronger Coriolis (f↑) → Must turn EASTWARD to conserve potential vorticity</li>
              <li>Air moving SOUTH → weaker Coriolis (f↓) → Must turn WESTWARD to conserve potential vorticity</li>
            </ol>
          </div>
          
          <div style={styles.note}>
            <strong>Note:</strong> Rossby waves are hemisphere-specific phenomena. In the Southern Hemisphere, 
            the Coriolis effect operates in the opposite direction, but the principle of potential vorticity 
            conservation still creates similar wave patterns (with reversed rotation directions).
          </div>
        </div>
        
        <div style={styles.explanation}>
          <p style={{marginBottom: '8px'}}>
            This visualization shows how Rossby waves form in the Northern Hemisphere's jet stream due to the 
            conservation of potential vorticity. As air moves northward or southward, it 
            must adjust its spin to balance the changing planetary rotation (Coriolis effect).
          </p>
          <p>
            The animated rotations demonstrate how air moving northward develops clockwise spin 
            (turning it eastward), while air moving southward develops counterclockwise spin 
            (turning it westward). These deflections create the characteristic wavy pattern 
            in the jet stream that influences weather patterns across the Northern Hemisphere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JetStreamFundamentalsVisual;