// App.jsx

import React, { useState } from 'react';

function App() {
  // State variable to hold the message
  const [message, setMessage] = useState('Hello, World!');

  // Function to update the message
  const updateMessage = () => {
    setMessage('Hello, React World!');
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={updateMessage}>Update Message</button>
    </div>
  );
}

export default App;
