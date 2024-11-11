// App.js
import { useState } from 'react';
import './App.css';
import ReverseString from './reverse';
import CharacterCount from './character';

function App() {
  const [comp, setComp] = useState('reverse');

  return (
    <div className="App">
      <h1>Ada County IT REACT Project</h1>
      <h4>This project consists of two components:
         Reverse String and Character Count. Please use the dropdown list to toggle between
        the two components.
      </h4>

      <select id="mySelect" onChange={(e) => setComp(e.target.value)}>
        <option value="reverse">Reverse String</option>
        <option value="character">Character Count</option> 
      </select>
      <div className="component-display">
        {comp === 'reverse' ? <ReverseString /> : <CharacterCount />}
      </div>
    </div>
  );
}

export default App;
