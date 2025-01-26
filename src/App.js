import React from 'react';
import AccessibilitySimulator from './components/AccessibilitySimulator';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Accessibility Simulator</h1>
      </header>
      <main>
        <AccessibilitySimulator />
      </main>
    </div>
  );
}

export default App; 