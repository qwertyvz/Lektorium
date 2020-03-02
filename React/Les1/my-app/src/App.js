import React from 'react';
import './App.css';
import MyContentComponent from './components/MyContentComponent/MyContentComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Black Friday Sale!</h1>
      </header>
      <MyContentComponent/>
      <footer className="App-footer">
        <p>© Copyright © 1995-2019 BlaBla Inc. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
