import React from 'react';
import Form from './components/Form';
import Folder from './components/Folder'


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
