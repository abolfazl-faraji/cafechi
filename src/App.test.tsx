import React, { useState, useEffect } from 'react';

const IncreaseDecreaseCounterOnKeyPress: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [mode, setMode] = useState('increase');

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'e') {
        setMode((mode) => 'increase');
      } else if (event.key === 'd') {
        setMode((mode) => 'decrease');
      }
      console.log(mode);
    };

    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  return (
    <div>
      <h2>Counter: {count}</h2>
    </div>
  );
};

export default IncreaseDecreaseCounterOnKeyPress;