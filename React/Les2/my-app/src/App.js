import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyFormSimple from './components/MyFormSimple/MyFormSimple';
//import MyFormFormik  from './components/MyFormFormik/MyFormFormik'

function App() {
  return (
    <div className="App">
      <MyFormSimple/>
      {/*<MyFormFormik/>*/}
    </div>
  );
}

export default App;
