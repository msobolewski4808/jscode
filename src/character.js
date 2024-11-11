// CharacterCount.js
import { useState } from 'react';

function CharacterCount() {
  const [text, setText] = useState('');

  const input = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h3>Input your text to find the number of characters in a string.</h3>
      <input
        type="text"
        placeholder="Enter text here"
        value={text}
        onChange={input}
      />
      <p>Character Count: {text.length}</p>
      <button onClick={() => setText('')}>
        Reset
        </button>
    </div>
  );
}

export default CharacterCount;
