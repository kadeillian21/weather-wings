import React from 'react';

const AtmosphericFundamentalsNotes = () => {
  return (
    <div className="notes-content">
      <div className="notes-section">
        <h2>The Driving Forces of Weather</h2>
        <p>
          At its core, our weather is primarily driven by one simple thing: the uneven heating of Earth by the sun.
          The equator receives direct sunlight and heats up significantly, while the poles receive much less direct
          energy. This temperature difference creates a pressure gradient, which starts the global circulation of air.
        </p>
        <p>
          The Earth's rotation adds another crucial element: the Coriolis effect. This force deflects air movement
          to the right in the Northern Hemisphere and to the left in the Southern Hemisphere, creating our beautiful
          swirly weather patterns instead of straight-line flows.
        </p>
      </div>

      <div className="notes-section">
        <h2>Pressure Systems: The Building Blocks</h2>

        <h3>High Pressure Systems (Anticyclones)</h3>
        <ul>
          <li>Air descends and spreads outward at the surface</li>
          <li>Generally associated with clear, calm weather</li>
          <li>Rotate clockwise in Northern Hemisphere</li>
          <li>Act like giant, slow-moving "air mountains"</li>
        </ul>

        <h3>Low Pressure Systems (Cyclones)</h3>
        <ul>
          <li>Air converges at the surface and rises</li>
          <li>Associated with clouds, precipitation, and sometimes severe weather</li>
          <li>Rotate counterclockwise in Northern Hemisphere</li>
          <li>Function as "air valleys" where weather activity concentrates</li>
        </ul>

        <div className="duck-quote">
          <p>
            "Weather is simply the atmosphere's endless quest for equilibrium. It's a bit like me trying to
            decide which pond to visit - there's always movement toward balance, but we never quite get there!"
            <br />— Professor Waddles, Chief Atmospheric Scientist
          </p>
        </div>
      </div>

      <div className="notes-section">
        <h2>Understanding Weather Maps</h2>
        <p>
          Those mysterious swirly lines on weather maps are contour lines showing equal values of pressure (isobars)
          or height (in the case of upper-air charts).
        </p>
        <p>
          On 500mb maps (approximately 18,000 feet altitude), you're seeing the height at which the atmospheric
          pressure equals 500 millibars. This height varies because warm air expands (raising the height) and
          cold air contracts (lowering it).
        </p>
        <ul>
          <li>Closely packed lines indicate stronger winds (steep gradient)</li>
          <li>Ridges (northward bulges) generally indicate warm air and fair weather</li>
          <li>Troughs (southward dips) generally indicate cooler air and unsettled weather</li>
        </ul>
      </div>

      <div className="notes-section">
        <h2>The 500mb Magic Level</h2>
        <p>
          The 500mb level sits roughly at the middle of the atmosphere by mass and is crucial for meteorologists because:
        </p>
        <ol>
          <li>It's high enough to be free from surface friction and local effects</li>
          <li>It shows the mid-tropospheric flow that steers surface weather systems</li>
          <li>It's where we find and track jet streams</li>
        </ol>
        <p>
          The 500mb flow pattern effectively acts as a "steering current" for weather systems below.
          Understanding the 500mb pattern is key to predicting where surface systems will move.
        </p>
      </div>

      <div className="notes-section">
        <h2>Jet Streams: Rivers in the Sky</h2>
        <p>
          Jet streams form at the boundaries between cold polar air and warmer mid-latitude air. This
          temperature boundary creates a strong pressure gradient, which (combined with the Coriolis effect)
          results in fast-flowing rivers of air at upper levels, typically around 30,000-35,000 feet.
        </p>
        <p>
          The strength of jet streams directly correlates with the temperature gradient:
        </p>
        <ul>
          <li><strong>Stronger temperature gradient</strong> = stronger jet stream</li>
          <li><strong>Weaker temperature gradient</strong> = weaker jet stream</li>
        </ul>
        <p>
          This is why jets are strongest in winter when temperature contrasts are greatest. The jet stream's
          position and strength are closely tied to the 500mb flow pattern, with those dips (troughs) and
          bulges (ridges) creating the meandering pattern.
        </p>

        <div className="duck-quote">
          <p>
            "The relationship between surface temperatures and jet streams is like a dance between partners.
            Sometimes the surface leads, sometimes the jet leads, but they're always responding to each other.
            It's much more graceful than my own dabbling in ballroom dance!"
            <br />— Dr. Quackers, Synoptic Meteorology Expert
          </p>
        </div>
      </div>

      <div className="notes-section">
        <h2>Temperature Gradients: From Sky to Ground</h2>
        <p>
          There's a fascinating two-way relationship between surface temperature patterns and jet streams:
        </p>
        <ul>
          <li>
            <strong>From Surface to Jet:</strong> Strong temperature contrasts at the surface contribute to
            the temperature gradient throughout the atmosphere, strengthening the jet stream aloft.
          </li>
          <li>
            <strong>From Jet to Surface:</strong> The jet stream helps create and maintain sharp temperature
            boundaries by steering warm and cold air masses and supporting cyclone development.
          </li>
        </ul>
        <p>
          When you see dramatic temperature differences across regions (like 70°F in one state and 30°F in a
          neighboring state), there's very likely a jet stream overhead or nearby influencing these patterns.
        </p>
      </div>
    </div>
  );
};

export default AtmosphericFundamentalsNotes;
