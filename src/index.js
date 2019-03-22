import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const createRootElement = () => {
  const el = document.createElement('div');
  el.setAttribute('id', 'root');

  document.body.appendChild(el);

  return el;
};

ReactDOM.render(<App />, createRootElement());
