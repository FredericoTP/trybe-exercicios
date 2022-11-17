import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
        <input id="id-email" type="email" />
      </label>
      <input id="btn-send" type="button" value="Enviar" />
    </div>
  );
}

export default App;
