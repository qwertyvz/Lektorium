import React from 'react';
import './App.css';
import MySuperComponent from './components/MySuperComponent/MySuperComponent'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Black Friday Sale!</h1>
      </header>
      <MySuperComponent />
      <footer className="App-footer">
        <p>© Copyright © 1995-2019 BlaBla Inc. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
