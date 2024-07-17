import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [currentLight, setCurrentLight] = useState<string>('green');//React Hook to manage the state of the current light

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (currentLight === 'green') {
      timer = setTimeout(() => setCurrentLight('yellow'), 4000);
    } else if (currentLight === 'yellow') {
      timer = setTimeout(() => setCurrentLight('red'), 1000);
    } else if (currentLight === 'red') {
      timer = setTimeout(() => setCurrentLight('green'), 3000);
    }

    return () => clearTimeout(timer);
  }, [currentLight]);

  return (
    <div className="traffic-light">
      <div className="light red" role='red-light' style={{ backgroundColor: currentLight === 'red' ? 'red' : 'black' }}></div>
      <div className="light yellow" role='yellow-light' style={{ backgroundColor: currentLight === 'yellow' ? 'yellow' : 'black' }}></div>
      <div className="light green" role='green-light' style={{ backgroundColor: currentLight === 'green' ? 'green' : 'black' }}></div>
    </div>
  );
}

export default App;
