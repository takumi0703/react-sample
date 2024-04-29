import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './components/Hello';
import Message from './components/Message';
import Parent from './components/ContainerSample';
import Page from './components/ContextSample';
// import Counter from './components/Counter';
import MemoParent from './components/MemoParent';
import CallbackSample from './components/useCallbackSample';
import UseEffectSample from './components/UseEffectSample';

// Reactコードをブラウザに表示するためのコード
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Hello /> */}
    {/* <Message /> */}
    {/* <Parent /> */}
    {/* <Page /> */}
    {/* <Counter /> */}
    {/* <MemoParent /> */}
    {/* <CallbackSample /> */}
    <UseEffectSample />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
