import React from 'react';

const JetStreamNotes = () => {
  return (
    <div className="notes-content">
      <div className="notes-section">
        <h2>Jet Stream Fundamentals</h2>
        <p>
          Jet streams are narrow bands of strong winds that circle the planet in the upper troposphere 
          and lower stratosphere (roughly 5-9 miles up). These atmospheric "highways" can exceed speeds 
          of 250 mph and play a crucial role in global weather patterns.
        </p>
      </div>

      <div className="notes-section">
        <h3>Physics of Jet Stream Formation</h3>
        <p>
          Jet streams form primarily due to two key factors:
        </p>
        <ul>
          <li>
            <strong>Temperature Gradients:</strong> The uneven heating of Earth's surface creates 
            temperature differences between the equator (warm) and the poles (cold). These horizontal 
            temperature gradients create pressure gradients in the atmosphere.
          </li>
          <li>
            <strong>Earth's Rotation:</strong> Our planet's spin introduces the Coriolis effect, which 
            deflects moving air to the right in the Northern Hemisphere and to the left in the Southern 
            Hemisphere.
          </li>
        </ul>
        <p>
          When these factors combine, they create concentrated bands of strong winds that flow 
          primarily from west to east. The strongest jet stream winds form where the temperature 
          gradient is steepest.
        </p>
      </div>

      <div className="duck-quote">
        <p>
          "Think of jet streams as nature's own high-speed air highways, cruising at speeds that put even 
          my fastest migration flights to shame! What's fascinating is that they form precisely where 
          cold and warm air masses engage in their eternal atmospheric dance."
        </p>
        <p>— Professor Mallard Gale, Lead Atmospheric Scientist at Quackford University</p>
      </div>

      <div className="notes-section">
        <h3>Types of Jet Streams</h3>
        <p>
          Earth's atmosphere has several distinct temperature transition zones, creating multiple jet streams:
        </p>
        <ul>
          <li>
            <strong>Polar Jet Stream:</strong> Found at about 60° latitude (north and south), this forms 
            between polar cold air and the milder mid-latitude air. It's stronger and lower in altitude 
            (around 30,000-35,000 feet).
          </li>
          <li>
            <strong>Subtropical Jet Stream:</strong> Located near 30° latitude, this forms between 
            mid-latitude air and tropical warm air. It typically flows at higher altitudes (around 
            40,000-45,000 feet) and is generally weaker than the polar jet.
          </li>
        </ul>
      </div>

      <div className="notes-section">
        <h3>Seasonal Shifts</h3>
        <p>
          Jet streams migrate north and south with the seasons, following the sun's strongest heating:
        </p>
        <ul>
          <li>
            <strong>Winter:</strong> The temperature contrast between poles and equator is greatest, 
            so jet streams strengthen and move closer to the equator.
          </li>
          <li>
            <strong>Summer:</strong> The temperature gradient weakens, so jet streams weaken and shift poleward.
          </li>
        </ul>
        <p>
          This seasonal migration explains many of the dramatic weather pattern changes throughout the year.
        </p>
      </div>

      <div className="notes-section">
        <h3>Rossby Waves</h3>
        <p>
          Rather than flowing in a straight line, jet streams develop large meanders called Rossby waves.
          These waves form due to the conservation of potential vorticity - a complex property that combines
          the air's spin with Earth's rotation.
        </p>
        <p>
          The formation of Rossby waves follows these principles:
        </p>
        <ul>
          <li>The Coriolis effect varies with latitude (stronger near poles, weaker near equator)</li>
          <li>Air moving northward encounters stronger Coriolis effect, turns eastward</li>
          <li>Air moving southward encounters weaker Coriolis effect, turns westward</li>
        </ul>
        <p>
          These natural turning tendencies create the wave-like pattern in jet streams.
        </p>
      </div>

      <div className="notes-section">
        <h3>Impact on Weather</h3>
        <p>
          Jet streams influence weather patterns by:
        </p>
        <ul>
          <li>Guiding storm systems along predictable tracks</li>
          <li>Creating boundaries between cold and warm air masses</li>
          <li>Developing persistent ridges (northward bulges) and troughs (southward dips)</li>
          <li>Influencing the development and movement of high and low pressure systems</li>
        </ul>
        <p>
          When a jet stream develops significant Rossby waves or gets "stuck" in a particular pattern,
          it can create persistent weather conditions like heat waves, cold snaps, or extended periods of rain.
        </p>
      </div>

      <div className="duck-quote">
        <p>
          "When we ducks prepare for migration, we always check the jet stream forecasts! Flying with a 
          favorable jet stream can save us tremendous energy, while fighting against one is like swimming 
          upstream during spring floods. The same principles affect your weather - when jet stream patterns 
          get stuck, that's when extreme weather tends to persist."
        </p>
        <p>— Dr. Wingston Drake, Migratory Pattern Specialist</p>
      </div>
    </div>
  );
};

export default JetStreamNotes;
