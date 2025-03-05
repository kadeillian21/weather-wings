/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export const JetStreamPolarNotes = () => {
  return (
    <div className="notes-content">
      <h2>The Polar Jet Stream</h2>
      <p>
        The Polar Jet Stream is the stronger and more significant of Earth's two major jet streams. 
        It forms at the boundary between cold polar air and warmer temperate air in both hemispheres.
      </p>
      
      <div className="notes-section">
        <h3>Defining Characteristics</h3>
        <ul>
          <li><strong>Location</strong>: Typically found between 50° and 60° latitude (both north and south)</li>
          <li><strong>Altitude</strong>: Generally flows at 9-12 km (30,000-39,000 feet) above sea level</li>
          <li><strong>Season Variability</strong>: Migrates north in summer and south in winter in the Northern Hemisphere (opposite in Southern Hemisphere)</li>
          <li><strong>Speed</strong>: Average speeds of 110-185 km/h, but can exceed 400 km/h in winter</li>
        </ul>
      </div>
      
      <div className="notes-section">
        <h3>Weather Influence</h3>
        <p>The Polar Jet Stream significantly impacts weather by:</p>
        <ul>
          <li>Steering cyclonic storm systems across continents</li>
          <li>Creating boundaries between cold and warm air masses</li>
          <li>Generating areas of precipitation where it forces air to rise</li>
          <li>Influencing the development and movement of weather fronts</li>
        </ul>
      </div>
      
      <div className="duck-quote">
        <p>"The Polar Jet is like the bouncer of the atmosphere - keeping the rowdy cold air up north where it belongs. When it gets wobbly, that's when the weather party gets wild!" - Harold the Duck</p>
      </div>
      
      <div className="notes-section">
        <h3>Climate Change Impact</h3>
        <p>
          Recent research suggests climate change is affecting the Polar Jet Stream in several ways:
        </p>
        <ul>
          <li><strong>Weakening</strong>: The temperature difference between the poles and tropics is decreasing, potentially weakening the jet</li>
          <li><strong>Waviness</strong>: The jet stream is becoming more "wavy" with larger north-south meanders</li>
          <li><strong>Persistence</strong>: These waves tend to move more slowly, causing weather patterns to persist longer</li>
          <li><strong>Blocking Patterns</strong>: More frequent "blocks" where the jet stalls, leading to extended heat waves, cold spells, and precipitation events</li>
        </ul>
      </div>
    </div>
  );
};