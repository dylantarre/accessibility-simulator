import React, { useState } from 'react';
import '../styles/AccessibilitySimulator.css';

const AccessibilitySimulator = () => {
  const [simulationMode, setSimulationMode] = useState('none');

  const simulationModes = {
    none: { name: 'No Simulation', class: '' },
    colorblind: { name: 'Color Blindness', class: 'colorblind-simulation' },
    lowVision: { name: 'Low Vision', class: 'low-vision-simulation' },
    motionSensitive: { name: 'Motion Sensitivity', class: 'motion-sensitive-simulation' }
  };

  return (
    <div className="simulator-container">
      <div className="controls">
        <h2>Select Simulation Mode</h2>
        <select 
          value={simulationMode} 
          onChange={(e) => setSimulationMode(e.target.value)}
        >
          {Object.entries(simulationModes).map(([key, value]) => (
            <option key={key} value={key}>{value.name}</option>
          ))}
        </select>
      </div>
      
      <div className={`simulation-area ${simulationModes[simulationMode].class}`}>
        <div className="sample-content">
          <h3>Sample Content</h3>
          <p>This is example content to demonstrate accessibility challenges.</p>
          <button>Interactive Element</button>
          <img src="sample-image.jpg" alt="Sample content for simulation" />
        </div>
      </div>
    </div>
  );
};

export default AccessibilitySimulator; 