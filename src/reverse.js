// ReverseString.js
import { useState } from 'react';

function ReverseString() {
  const [text, setText] = useState('');

  function input(e) {
    setText(e.target.value);
  };

  const stringSplitted = text.split('')
  const arrayReversed = stringSplitted.reverse()
  const reversedText = arrayReversed.join('');
  

  return (
    <div>
      <h3>Input text into the box to reverse your string.</h3>
      <input type="text" placeholder="Enter text here"
        value={text}
        onChange={input}
      />
      <p>Reversed String: {reversedText}</p>
      <button onClick={() => setText('')}>
        Reset
        </button>   
    </div>
  );
}

export default ReverseString;
