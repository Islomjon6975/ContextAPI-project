import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Mode from './context'

ReactDOM.render(
  <React.StrictMode>
    <Mode>
       <App />
    </Mode>
  </React.StrictMode>,
  document.getElementById('root')
);

