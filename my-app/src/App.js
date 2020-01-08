import React from 'react';
import logo from './logo.svg';
import Form from './components/Form';
import Folder from './components/Folder'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Form />
          <Folder />
        </p>
      </header>
    </div>
  );
}

export default App;
