import React, {useState} from 'react';
import './App.css';

const App: React.FC = () => {
  const [inputValue] = useState<string>('Hello');

  return (
    <div className="App">
      <h1>{inputValue}</h1>
    </div>
  );
};

export default App;
