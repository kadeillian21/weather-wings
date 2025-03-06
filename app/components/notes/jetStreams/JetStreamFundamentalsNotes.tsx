import React from 'react';

const JetStreamFundamentalsNotes = () => {
  return (
    <div className="notes-content">
      <h2>Jet Streams: Rivers in the Sky</h2>
      <p>
        Jet streams are fast flowing, narrow, meandering air currents found in the atmospheres
        of Earth and other planets. On Earth, the main jet streams are located near the altitude
        of the tropopause and are westerly winds (flowing west to east).
      </p>

      <div className="notes-section">
        <h3>Key Characteristics</h3>
        <ul>
          <li><strong>Speed</strong>: Typically 120-250 kilometers per hour but can reach over 400 km/h</li>
          <li><strong>Altitude</strong>: Usually found at 9-12 km above sea level</li>
          <li><strong>Width</strong>: A few hundred kilometers wide</li>
          <li><strong>Depth</strong>: Only a few kilometers thick</li>
        </ul>
      </div>

      <div className="notes-section">
        <h3>Formation Factors</h3>
        <p>Jet streams form due to:</p>
        <ol>
          <li><strong>Temperature Gradients</strong>: The sharp temperature difference between polar and tropical air masses</li>
          <li><strong>Coriolis Effect</strong>: Earth's rotation deflects moving air to the right in the Northern Hemisphere and to the left in the Southern Hemisphere</li>
          <li><strong>Atmospheric Pressure</strong>: Differences in pressure between air masses push air from high to low pressure areas</li>
        </ol>
      </div>

      <div className="duck-quote">
        <p>"Jet streams are like nature's highway system in the sky. They're the express lanes that weather systems use to travel around the globe!" - Harold the Duck</p>
      </div>

      <div className="notes-section">
        <h3>Scientific Discovery</h3>
        <p>
          The discovery of jet streams dates back to the 1920s when Japanese meteorologist Wasaburo Oishi
          used weather balloons to track high-altitude winds. However, it wasn't until World War II, when
          high-altitude bomber pilots encountered these strong winds, that their significance became widely recognized.
        </p>
      </div>
    </div>
  );
};

export default JetStreamFundamentalsNotes;