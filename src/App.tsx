import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // return 内は、JSX(JS/TS内にHTMLを記述できる) と呼ばれる構文で、viewになる部分
  // Reactはそのまま表示できないので、JSに変換される
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
