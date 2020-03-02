import React from 'react';
import './App.css';
import store from "./store";
import { Provider } from 'react-redux'
import { article } from "./actions";
import List from './components/List'



function App() {
  window.store = store;
  window.addArticle = article.addArticle;
  window.deleteArticle = article.deleteArticle;
  return (
    <Provider store = {store}>
      <div className="App">
        <header className="App-header">
          <h1>Black Friday Sale!</h1>
        </header>
        <List />
        <footer className="App-footer">
          <p>© Copyright © 1995-2019 BlaBla Inc. All Rights Reserved.</p>
        </footer>
      </div>
    </Provider>
  );
}

export default App;
